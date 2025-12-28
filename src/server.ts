#!/usr/bin/env node

import express, { Request, Response } from "express";
import cors from "cors";
import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { StreamableHTTPServerTransport } from "@modelcontextprotocol/sdk/server/streamableHttp.js";
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

// MCP 서버 생성 함수
function createMcpServer(): McpServer {
  const server = new McpServer({
    name: "fortunetalk",
    version: "1.0.0"
  });

  // 도구 1: 오늘의 타로 운세 (격언, 책, 노래 추천 포함)
  server.tool(
    "daily_fortune",
    "오늘의 운세를 봅니다. 타로 카드 한 장과 함께 오늘의 격언, 책 추천, 노래 추천을 받습니다. 오늘 럭키비키할지 궁금할 때 사용하세요!",
    {},
    async () => {
      const card = drawDailyCard();
      const reading = formatReading([card], "오늘의 타로 운세");
      const rec = getRecommendation(card.card.name, card.isReversed);
      const recText = rec ? formatRecommendation(rec) : "";

      return {
        content: [{ type: "text" as const, text: reading + recText }]
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
      const currentCard = cards[1];
      const rec = getRecommendation(currentCard.card.name, currentCard.isReversed);
      const recText = rec ? formatRecommendation(rec) : "";

      return {
        content: [{ type: "text" as const, text: reading + recText }]
      };
    }
  );

  // 도구 3: 질문에 대한 타로 리딩
  server.tool(
    "ask_tarot",
    "고민이나 질문에 대해 타로 카드로 답을 얻습니다. 예: 이직해도 될까?, 연애운은?, 시험 붙을까? 등 인생의 모든 질문에 타로가 답해드립니다.",
    {
      question: z.string().describe("사용자의 고민이나 질문 (예: 이직해도 될까?, 연애운 어때?, 올해 재물운은?)"),
      card_count: z.number().min(1).max(5).default(1).optional().describe("뽑을 카드 수 (기본 1장)")
    },
    async ({ question, card_count }) => {
      const cards = drawCards(card_count ?? 1);
      const cardResults = cards.map(c => formatCardResult(c)).join("\n\n");
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
        content: [{ type: "text" as const, text: reading }]
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
        return { content: [{ type: "text" as const, text: "추천을 가져올 수 없습니다." }] };
      }

      const direction = card.isReversed ? "역방향" : "정방향";
      const text = `🃏 오늘의 카드: ${card.card.nameKo} (${direction})\n\n` +
        `📜 오늘의 격언\n"${rec.quote.text}"\n- ${rec.quote.author}`;

      return { content: [{ type: "text" as const, text }] };
    }
  );

  // 도구 5: 오늘의 책 추천
  server.tool(
    "daily_book",
    "랜덤 타로 카드 기반 오늘의 책을 추천받습니다",
    {},
    async () => {
      const card = drawDailyCard();
      const rec = getRecommendation(card.card.name, card.isReversed);

      if (!rec) {
        return { content: [{ type: "text" as const, text: "추천을 가져올 수 없습니다." }] };
      }

      const direction = card.isReversed ? "역방향" : "정방향";
      const text = `🃏 오늘의 카드: ${card.card.nameKo} (${direction})\n\n` +
        `📚 오늘의 추천 책\n『${rec.book.title}』\n저자: ${rec.book.author}\n💡 추천 이유: ${rec.book.reason}`;

      return { content: [{ type: "text" as const, text }] };
    }
  );

  // 도구 6: 오늘의 노래 추천
  server.tool(
    "daily_song",
    "랜덤 타로 카드 기반 오늘의 노래를 추천받습니다",
    {},
    async () => {
      const card = drawDailyCard();
      const rec = getRecommendation(card.card.name, card.isReversed);

      if (!rec) {
        return { content: [{ type: "text" as const, text: "추천을 가져올 수 없습니다." }] };
      }

      const direction = card.isReversed ? "역방향" : "정방향";
      const text = `🃏 오늘의 카드: ${card.card.nameKo} (${direction})\n\n` +
        `🎵 오늘의 추천 노래\n"${rec.song.title}"\n아티스트: ${rec.song.artist}\n💡 추천 이유: ${rec.song.reason}`;

      return { content: [{ type: "text" as const, text }] };
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
        content: [{ type: "text" as const, text: `🃏 메이저 아르카나 22장\n${"═".repeat(25)}\n\n${cardList}` }]
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
      const card = majorArcana.find(c =>
        c.name.toLowerCase() === card_name.toLowerCase() ||
        c.nameKo === card_name
      );

      if (!card) {
        return {
          content: [{
            type: "text" as const,
            text: `❌ "${card_name}" 카드를 찾을 수 없습니다.\n\n카드 이름을 확인해 주세요. 예: "The Fool", "바보"`
          }]
        };
      }

      const uprightRec = getRecommendation(card.name, false);
      const reversedRec = getRecommendation(card.name, true);

      let text = `🃏 ${card.nameKo} (${card.name})\n${"═".repeat(30)}\n\n`;
      text += "【정방향】\n";
      text += `💫 의미: ${card.meaning.upright}\n🔮 키워드: ${card.keywords.upright.join(", ")}\n`;
      if (uprightRec) {
        text += `📜 격언: "${uprightRec.quote.text}" - ${uprightRec.quote.author}\n`;
        text += `📚 책: 『${uprightRec.book.title}』 - ${uprightRec.book.author}\n`;
        text += `🎵 노래: "${uprightRec.song.title}" - ${uprightRec.song.artist}\n`;
      }
      text += "\n【역방향】\n";
      text += `💫 의미: ${card.meaning.reversed}\n🔮 키워드: ${card.keywords.reversed.join(", ")}\n`;
      if (reversedRec) {
        text += `📜 격언: "${reversedRec.quote.text}" - ${reversedRec.quote.author}\n`;
        text += `📚 책: 『${reversedRec.book.title}』 - ${reversedRec.book.author}\n`;
        text += `🎵 노래: "${reversedRec.song.title}" - ${reversedRec.song.artist}\n`;
      }

      return { content: [{ type: "text" as const, text }] };
    }
  );

  return server;
}

// Express 앱 생성
const app = express();
app.use(cors());
app.use(express.json());

// 세션별 transport 저장
const transports = new Map<string, StreamableHTTPServerTransport>();

// Health check
app.get("/health", (_req: Request, res: Response) => {
  res.json({ status: "ok", server: "fortunetalk", version: "1.0.0" });
});

// MCP endpoint
app.post("/mcp", async (req: Request, res: Response) => {
  try {
    const sessionId = req.headers["x-session-id"] as string || "default";

    let transport = transports.get(sessionId);

    if (!transport) {
      transport = new StreamableHTTPServerTransport({
        sessionIdGenerator: () => sessionId,
      });

      const mcpServer = createMcpServer();
      await mcpServer.connect(transport);

      transports.set(sessionId, transport);
    }

    await transport.handleRequest(req, res, req.body);
  } catch (error) {
    console.error("MCP error:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

// SSE endpoint (선택사항)
app.get("/mcp/sse", async (req: Request, res: Response) => {
  const sessionId = req.headers["x-session-id"] as string || "default";

  res.setHeader("Content-Type", "text/event-stream");
  res.setHeader("Cache-Control", "no-cache");
  res.setHeader("Connection", "keep-alive");

  const transport = transports.get(sessionId);
  if (transport) {
    // SSE 연결 처리
    res.write(`data: ${JSON.stringify({ type: "connected", sessionId })}\n\n`);
  }

  req.on("close", () => {
    transports.delete(sessionId);
  });
});

// 서버 시작
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`FortuneTalk MCP Server running on http://localhost:${PORT}`);
  console.log(`MCP endpoint: http://localhost:${PORT}/mcp`);
  console.log(`Health check: http://localhost:${PORT}/health`);
});
