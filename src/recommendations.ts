// 타로 카드별 격언, 행운의 색깔 추천 데이터

export interface Recommendation {
  quote: { text: string; author: string };
  color: { name: string; hex: string; meaning: string };
}

// 카드 이름을 키로 사용하는 추천 데이터
export const recommendations: Record<string, { upright: Recommendation; reversed: Recommendation }> = {
  "The Fool": {
    upright: {
      quote: { text: "천 리 길도 한 걸음부터", author: "노자" },
      color: { name: "하늘색", hex: "#87CEEB", meaning: "새로운 시작과 자유" }
    },
    reversed: {
      quote: { text: "돌다리도 두들겨 보고 건너라", author: "속담" },
      color: { name: "회색", hex: "#808080", meaning: "신중함과 안정" }
    }
  },
  "The Magician": {
    upright: {
      quote: { text: "할 수 있다고 믿으면 이미 반은 이룬 것이다", author: "루스벨트" },
      color: { name: "노란색", hex: "#FFD700", meaning: "창조력과 자신감" }
    },
    reversed: {
      quote: { text: "진실은 언젠가 드러난다", author: "세르반테스" },
      color: { name: "검정", hex: "#000000", meaning: "진실을 가리는 그림자" }
    }
  },
  "The High Priestess": {
    upright: {
      quote: { text: "직관은 영혼의 목소리다", author: "칼 융" },
      color: { name: "보라색", hex: "#800080", meaning: "직관과 신비" }
    },
    reversed: {
      quote: { text: "침묵이 금이다", author: "속담" },
      color: { name: "남색", hex: "#000080", meaning: "깊은 내면 탐구" }
    }
  },
  "The Empress": {
    upright: {
      quote: { text: "자연은 최고의 스승이다", author: "다빈치" },
      color: { name: "초록색", hex: "#228B22", meaning: "풍요와 성장" }
    },
    reversed: {
      quote: { text: "창조하지 않으면 파괴당한다", author: "웰스" },
      color: { name: "갈색", hex: "#8B4513", meaning: "대지와 안정" }
    }
  },
  "The Emperor": {
    upright: {
      quote: { text: "자신을 다스리는 자가 세상을 다스린다", author: "아우렐리우스" },
      color: { name: "빨간색", hex: "#DC143C", meaning: "권위와 열정" }
    },
    reversed: {
      quote: { text: "절대 권력은 절대 부패한다", author: "액턴 경" },
      color: { name: "주황색", hex: "#FF8C00", meaning: "유연함과 변화" }
    }
  },
  "The Hierophant": {
    upright: {
      quote: { text: "배움에는 끝이 없다", author: "공자" },
      color: { name: "흰색", hex: "#FFFFFF", meaning: "순수와 진리" }
    },
    reversed: {
      quote: { text: "규칙은 깨라고 있는 것이다", author: "맥아더" },
      color: { name: "청록색", hex: "#008B8B", meaning: "새로운 관점" }
    }
  },
  "The Lovers": {
    upright: {
      quote: { text: "사랑은 모든 것을 믿고 모든 것을 바란다", author: "성경" },
      color: { name: "핑크", hex: "#FF69B4", meaning: "사랑과 조화" }
    },
    reversed: {
      quote: { text: "선택하지 않는 것도 선택이다", author: "사르트르" },
      color: { name: "베이지", hex: "#F5F5DC", meaning: "중립과 균형" }
    }
  },
  "The Chariot": {
    upright: {
      quote: { text: "승리는 가장 끈기 있는 자에게 돌아간다", author: "나폴레옹" },
      color: { name: "골드", hex: "#FFD700", meaning: "승리와 영광" }
    },
    reversed: {
      quote: { text: "참을 인 세 번이면 살인도 면한다", author: "속담" },
      color: { name: "민트", hex: "#98FF98", meaning: "평화와 진정" }
    }
  },
  "Strength": {
    upright: {
      quote: { text: "부드러움이 강함을 이긴다", author: "노자" },
      color: { name: "주황색", hex: "#FFA500", meaning: "용기와 에너지" }
    },
    reversed: {
      quote: { text: "자신을 아는 것이 모든 지혜의 시작이다", author: "아리스토텔레스" },
      color: { name: "라벤더", hex: "#E6E6FA", meaning: "내면의 평화" }
    }
  },
  "The Hermit": {
    upright: {
      quote: { text: "고독은 위대한 정신의 학교다", author: "워즈워스" },
      color: { name: "네이비", hex: "#000080", meaning: "지혜와 성찰" }
    },
    reversed: {
      quote: { text: "함께 가면 멀리 간다", author: "아프리카 속담" },
      color: { name: "노란색", hex: "#FFFF00", meaning: "소통과 연결" }
    }
  },
  "Wheel of Fortune": {
    upright: {
      quote: { text: "행운은 준비된 자에게 온다", author: "파스퇴르" },
      color: { name: "보라색", hex: "#9400D3", meaning: "행운과 기회" }
    },
    reversed: {
      quote: { text: "이것 또한 지나가리라", author: "솔로몬" },
      color: { name: "은색", hex: "#C0C0C0", meaning: "인내와 희망" }
    }
  },
  "Justice": {
    upright: {
      quote: { text: "정의는 늦어도 반드시 온다", author: "속담" },
      color: { name: "파란색", hex: "#0000FF", meaning: "진실과 공정" }
    },
    reversed: {
      quote: { text: "세상에 완벽한 정의는 없다", author: "플라톤" },
      color: { name: "회색", hex: "#A9A9A9", meaning: "균형 찾기" }
    }
  },
  "The Hanged Man": {
    upright: {
      quote: { text: "기다림은 지혜의 어머니다", author: "터키 속담" },
      color: { name: "청록색", hex: "#40E0D0", meaning: "새로운 시각" }
    },
    reversed: {
      quote: { text: "멈추지 말고 계속 가기만 해라", author: "공자" },
      color: { name: "빨간색", hex: "#FF0000", meaning: "행동과 전진" }
    }
  },
  "Death": {
    upright: {
      quote: { text: "끝이 곧 시작이다", author: "T.S. 엘리엇" },
      color: { name: "검정", hex: "#000000", meaning: "변화와 재탄생" }
    },
    reversed: {
      quote: { text: "변하지 않으면 변화당한다", author: "잭 웰치" },
      color: { name: "흰색", hex: "#FFFFFF", meaning: "새로운 시작" }
    }
  },
  "Temperance": {
    upright: {
      quote: { text: "중용이 최고의 덕이다", author: "아리스토텔레스" },
      color: { name: "하늘색", hex: "#ADD8E6", meaning: "조화와 균형" }
    },
    reversed: {
      quote: { text: "과유불급", author: "공자" },
      color: { name: "초록색", hex: "#32CD32", meaning: "절제와 치유" }
    }
  },
  "The Devil": {
    upright: {
      quote: { text: "자유로워지려면 먼저 자신의 사슬을 알아야 한다", author: "부처" },
      color: { name: "검정", hex: "#2F2F2F", meaning: "그림자 직면" }
    },
    reversed: {
      quote: { text: "진정한 자유는 내면에서 온다", author: "만델라" },
      color: { name: "흰색", hex: "#FFFAFA", meaning: "해방과 자유" }
    }
  },
  "The Tower": {
    upright: {
      quote: { text: "위기는 기회다", author: "케네디" },
      color: { name: "빨간색", hex: "#B22222", meaning: "변화의 에너지" }
    },
    reversed: {
      quote: { text: "작은 변화가 큰 차이를 만든다", author: "로버트슨" },
      color: { name: "베이지", hex: "#F5DEB3", meaning: "안정과 회복" }
    }
  },
  "The Star": {
    upright: {
      quote: { text: "별을 보려면 어둠이 필요하다", author: "마틴 루터 킹" },
      color: { name: "하늘색", hex: "#87CEFA", meaning: "희망과 치유" }
    },
    reversed: {
      quote: { text: "어둠이 깊을수록 새벽은 가깝다", author: "속담" },
      color: { name: "은색", hex: "#C0C0C0", meaning: "인내하는 희망" }
    }
  },
  "The Moon": {
    upright: {
      quote: { text: "무의식은 의식보다 더 넓은 바다다", author: "칼 융" },
      color: { name: "은색", hex: "#C0C0C0", meaning: "직관과 상상" }
    },
    reversed: {
      quote: { text: "아는 것이 힘이다", author: "베이컨" },
      color: { name: "노란색", hex: "#FFD700", meaning: "명료함과 진실" }
    }
  },
  "The Sun": {
    upright: {
      quote: { text: "태양을 향해 걸어가면 그림자는 뒤에 남는다", author: "휘트먼" },
      color: { name: "노란색", hex: "#FFD700", meaning: "기쁨과 성공" }
    },
    reversed: {
      quote: { text: "구름 뒤에도 태양은 있다", author: "속담" },
      color: { name: "주황색", hex: "#FFA07A", meaning: "희망 유지" }
    }
  },
  "Judgement": {
    upright: {
      quote: { text: "어제의 나를 오늘 이겨야 한다", author: "무사시" },
      color: { name: "흰색", hex: "#FFFAF0", meaning: "부활과 갱신" }
    },
    reversed: {
      quote: { text: "과거는 과거일 뿐이다", author: "에머슨" },
      color: { name: "라벤더", hex: "#E6E6FA", meaning: "과거 치유" }
    }
  },
  "The World": {
    upright: {
      quote: { text: "모든 끝은 새로운 시작이다", author: "세네카" },
      color: { name: "초록색", hex: "#228B22", meaning: "완성과 성취" }
    },
    reversed: {
      quote: { text: "완벽보다 완료가 낫다", author: "셰릴 샌드버그" },
      color: { name: "청록색", hex: "#20B2AA", meaning: "과정의 가치" }
    }
  }
};

// 카드에 맞는 추천 가져오기
export function getRecommendation(cardName: string, isReversed: boolean): Recommendation | null {
  const cardRecs = recommendations[cardName];
  if (!cardRecs) return null;

  return isReversed ? cardRecs.reversed : cardRecs.upright;
}

// 추천 내용을 포맷팅
export function formatRecommendation(rec: Recommendation): string {
  let result = "\n\n";
  result += `📜 "${rec.quote.text}" - ${rec.quote.author}\n\n`;
  result += `🎨 행운의 색: ${rec.color.name} (${rec.color.meaning})`;

  return result;
}
