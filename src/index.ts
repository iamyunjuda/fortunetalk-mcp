#!/usr/bin/env node

import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import { z } from "zod";
import {
  drawDailyCard,
  drawThreeCardSpread,
  drawCards,
  formatReading,
  formatCardResult,
  majorArcana
} from "./tarot.js";
import { getRecommendation, formatRecommendation } from "./recommendations.js";

// MCP 서버 생성
const server = new McpServer({
  name: "lucky-vicky",
  version: "1.0.0",
  description: "오늘 럭키비키할지 타로로 알려드림! 운세, 격언, 행운의 색깔까지"
});

// 도구 1: 오늘의 타로 운세 (격언, 책, 노래 추천 포함)
server.tool(
  "daily_fortune",
  "오늘의 타로 카드를 뽑고 운세, 격언, 책 추천, 노래 추천을 받습니다",
  {},
  async () => {
    const card = drawDailyCard();
    const reading = formatReading([card], "오늘의 타로 운세");

    // 추천 가져오기
    const rec = getRecommendation(card.card.name, card.isReversed);
    const recText = rec ? formatRecommendation(rec) : "";

    return {
      content: [
        {
          type: "text" as const,
          text: reading + recText
        }
      ]
    };
  }
);

// 도구 2: 3카드 스프레드 (과거-현재-미래)
server.tool(
  "three_card_spread",
  "과거-현재-미래 3장의 타로 카드를 뽑아 운세를 봅니다",
  {},
  async () => {
    const cards = drawThreeCardSpread();
    const reading = formatReading(cards, "과거-현재-미래 리딩");

    // 현재 카드(중간 카드)의 추천 사용
    const currentCard = cards[1];
    const rec = getRecommendation(currentCard.card.name, currentCard.isReversed);
    const recText = rec ? formatRecommendation(rec) : "";

    return {
      content: [
        {
          type: "text" as const,
          text: reading + recText
        }
      ]
    };
  }
);

// 도구 3: 질문에 대한 타로 리딩
server.tool(
  "question_tarot",
  "특정 질문에 대해 타로 카드를 뽑아 답을 얻습니다 (격언, 책, 노래 추천 포함)",
  {
    question: z.string().describe("질문 내용"),
    card_count: z.number().min(1).max(5).default(1).describe("뽑을 카드 수 (1-5)")
  },
  async ({ question, card_count }) => {
    const cards = drawCards(card_count);
    const cardResults = cards.map(c => formatCardResult(c)).join("\n\n");

    // 첫 번째 카드의 추천 사용
    const firstCard = cards[0];
    const rec = getRecommendation(firstCard.card.name, firstCard.isReversed);
    const recText = rec ? formatRecommendation(rec) : "";

    const reading = `🔮 질문: "${question}"\n\n` +
      "═".repeat(30) + "\n\n" +
      cardResults + "\n\n" +
      "═".repeat(30) +
      recText + "\n\n" +
      "💭 이 카드들의 의미를 질문에 맞게 해석해 주세요.";

    return {
      content: [
        {
          type: "text" as const,
          text: reading
        }
      ]
    };
  }
);

// 도구 4: 오늘의 격언만 가져오기
server.tool(
  "daily_quote",
  "랜덤 타로 카드 기반 오늘의 격언을 받습니다",
  {},
  async () => {
    const card = drawDailyCard();
    const rec = getRecommendation(card.card.name, card.isReversed);

    if (!rec) {
      return {
        content: [{ type: "text" as const, text: "추천을 가져올 수 없습니다." }]
      };
    }

    const direction = card.isReversed ? "역방향" : "정방향";
    const text = `🃏 오늘의 카드: ${card.card.nameKo} (${direction})\n\n` +
      `📜 오늘의 격언\n` +
      `"${rec.quote.text}"\n` +
      `- ${rec.quote.author}`;

    return {
      content: [{ type: "text" as const, text }]
    };
  }
);

// 도구 5: 오늘의 행운의 색깔
server.tool(
  "lucky_color",
  "오늘의 행운의 색깔을 알려드립니다",
  {},
  async () => {
    const card = drawDailyCard();
    const rec = getRecommendation(card.card.name, card.isReversed);

    if (!rec) {
      return {
        content: [{ type: "text" as const, text: "추천을 가져올 수 없습니다." }]
      };
    }

    const direction = card.isReversed ? "역방향" : "정방향";
    const text = `🃏 ${card.card.nameKo} (${direction})\n\n🎨 행운의 색: ${rec.color.name}\n💫 ${rec.color.meaning}`;

    return {
      content: [{ type: "text" as const, text }]
    };
  }
);

// 도구 7: 모든 타로 카드 목록 보기
server.tool(
  "list_tarot_cards",
  "모든 메이저 아르카나 타로 카드 목록을 보여줍니다",
  {},
  async () => {
    const cardList = majorArcana.map((card, index) =>
      `${index}. ${card.nameKo} (${card.name})`
    ).join("\n");

    return {
      content: [
        {
          type: "text" as const,
          text: `🃏 메이저 아르카나 22장\n${"═".repeat(25)}\n\n${cardList}`
        }
      ]
    };
  }
);

// 도구 8: 특정 카드 정보 보기
server.tool(
  "card_info",
  "특정 타로 카드의 상세 정보와 추천을 봅니다",
  {
    card_name: z.string().describe("카드 이름 (한글 또는 영어)")
  },
  async ({ card_name }) => {
    // 카드 찾기
    const card = majorArcana.find(c =>
      c.name.toLowerCase() === card_name.toLowerCase() ||
      c.nameKo === card_name
    );

    if (!card) {
      return {
        content: [{
          type: "text" as const,
          text: `❌ "${card_name}" 카드를 찾을 수 없습니다.\n\n` +
            `카드 이름을 확인해 주세요. 예: "The Fool", "바보", "The Magician", "마법사"`
        }]
      };
    }

    const uprightRec = getRecommendation(card.name, false);
    const reversedRec = getRecommendation(card.name, true);

    let text = `🃏 ${card.nameKo} (${card.name})\n\n`;

    text += "【정방향】\n";
    text += `→ ${card.meaning.upright}\n`;
    if (uprightRec) {
      text += `📜 "${uprightRec.quote.text}" - ${uprightRec.quote.author}\n`;
      text += `🎨 행운의 색: ${uprightRec.color.name}\n`;
    }

    text += "\n【역방향】\n";
    text += `→ ${card.meaning.reversed}\n`;
    if (reversedRec) {
      text += `📜 "${reversedRec.quote.text}" - ${reversedRec.quote.author}\n`;
      text += `🎨 행운의 색: ${reversedRec.color.name}`;
    }

    return {
      content: [{ type: "text" as const, text }]
    };
  }
);

// 서버 시작
async function main() {
  const transport = new StdioServerTransport();
  await server.connect(transport);
  console.error("FortuneTalk MCP Server running on stdio");
}

main().catch((error) => {
  console.error("Server error:", error);
  process.exit(1);
});
