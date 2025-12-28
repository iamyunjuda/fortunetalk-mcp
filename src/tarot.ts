// 타로 카드 데이터 및 유틸리티

export interface TarotCard {
  name: string;
  nameKo: string;
  meaning: {
    upright: string;
    reversed: string;
  };
  keywords: {
    upright: string[];
    reversed: string[];
  };
}

// 메이저 아르카나 22장
export const majorArcana: TarotCard[] = [
  {
    name: "The Fool",
    nameKo: "바보",
    meaning: {
      upright: "새로운 시작, 순수함, 모험심, 자유로운 영혼",
      reversed: "무모함, 부주의, 위험 무시"
    },
    keywords: {
      upright: ["시작", "순수", "모험", "자유"],
      reversed: ["무모", "부주의", "위험"]
    }
  },
  {
    name: "The Magician",
    nameKo: "마법사",
    meaning: {
      upright: "의지력, 창조력, 기술, 자신감, 집중",
      reversed: "조작, 속임수, 재능 낭비"
    },
    keywords: {
      upright: ["의지", "창조", "기술", "집중"],
      reversed: ["조작", "속임", "낭비"]
    }
  },
  {
    name: "The High Priestess",
    nameKo: "여사제",
    meaning: {
      upright: "직관, 신비, 내면의 지혜, 잠재의식",
      reversed: "비밀 폭로, 직관 무시, 표면적 판단"
    },
    keywords: {
      upright: ["직관", "신비", "지혜", "내면"],
      reversed: ["비밀", "무시", "표면"]
    }
  },
  {
    name: "The Empress",
    nameKo: "여황제",
    meaning: {
      upright: "풍요, 모성, 자연, 창조성, 아름다움",
      reversed: "창조적 막힘, 의존성, 공허함"
    },
    keywords: {
      upright: ["풍요", "모성", "자연", "아름다움"],
      reversed: ["막힘", "의존", "공허"]
    }
  },
  {
    name: "The Emperor",
    nameKo: "황제",
    meaning: {
      upright: "권위, 구조, 안정, 리더십, 아버지상",
      reversed: "독재, 경직됨, 통제 상실"
    },
    keywords: {
      upright: ["권위", "안정", "리더십", "구조"],
      reversed: ["독재", "경직", "통제"]
    }
  },
  {
    name: "The Hierophant",
    nameKo: "교황",
    meaning: {
      upright: "전통, 신념, 가르침, 영적 지도자",
      reversed: "반항, 새로운 접근, 전통 거부"
    },
    keywords: {
      upright: ["전통", "신념", "가르침", "지혜"],
      reversed: ["반항", "혁신", "거부"]
    }
  },
  {
    name: "The Lovers",
    nameKo: "연인",
    meaning: {
      upright: "사랑, 조화, 관계, 가치관의 선택",
      reversed: "불균형, 가치관 충돌, 잘못된 선택"
    },
    keywords: {
      upright: ["사랑", "조화", "관계", "선택"],
      reversed: ["불균형", "충돌", "실수"]
    }
  },
  {
    name: "The Chariot",
    nameKo: "전차",
    meaning: {
      upright: "승리, 의지력, 결단력, 자기 통제",
      reversed: "공격성, 방향 상실, 자제력 부족"
    },
    keywords: {
      upright: ["승리", "의지", "결단", "통제"],
      reversed: ["공격", "혼란", "실패"]
    }
  },
  {
    name: "Strength",
    nameKo: "힘",
    meaning: {
      upright: "용기, 인내, 부드러운 힘, 자기 극복",
      reversed: "자기 의심, 약함, 불안정"
    },
    keywords: {
      upright: ["용기", "인내", "극복", "힘"],
      reversed: ["의심", "약함", "불안"]
    }
  },
  {
    name: "The Hermit",
    nameKo: "은둔자",
    meaning: {
      upright: "내면 탐구, 고독, 성찰, 지혜 추구",
      reversed: "고립, 외로움, 현실 도피"
    },
    keywords: {
      upright: ["성찰", "고독", "지혜", "탐구"],
      reversed: ["고립", "외로움", "도피"]
    }
  },
  {
    name: "Wheel of Fortune",
    nameKo: "운명의 수레바퀴",
    meaning: {
      upright: "행운, 변화, 순환, 운명의 전환점",
      reversed: "불운, 저항, 변화에 대한 두려움"
    },
    keywords: {
      upright: ["행운", "변화", "순환", "전환"],
      reversed: ["불운", "저항", "두려움"]
    }
  },
  {
    name: "Justice",
    nameKo: "정의",
    meaning: {
      upright: "정의, 진실, 공정함, 법, 인과응보",
      reversed: "불공정, 책임 회피, 부정직"
    },
    keywords: {
      upright: ["정의", "진실", "공정", "균형"],
      reversed: ["불공정", "회피", "부정"]
    }
  },
  {
    name: "The Hanged Man",
    nameKo: "매달린 사람",
    meaning: {
      upright: "희생, 새로운 시각, 기다림, 내려놓음",
      reversed: "지연, 저항, 무의미한 희생"
    },
    keywords: {
      upright: ["희생", "시각", "기다림", "수용"],
      reversed: ["지연", "저항", "집착"]
    }
  },
  {
    name: "Death",
    nameKo: "죽음",
    meaning: {
      upright: "변화, 끝남, 변환, 새로운 시작",
      reversed: "변화 저항, 집착, 정체"
    },
    keywords: {
      upright: ["변화", "끝", "시작", "변환"],
      reversed: ["저항", "집착", "정체"]
    }
  },
  {
    name: "Temperance",
    nameKo: "절제",
    meaning: {
      upright: "균형, 인내, 조화, 중용, 치유",
      reversed: "불균형, 과도함, 조급함"
    },
    keywords: {
      upright: ["균형", "인내", "조화", "치유"],
      reversed: ["불균형", "과도", "조급"]
    }
  },
  {
    name: "The Devil",
    nameKo: "악마",
    meaning: {
      upright: "속박, 유혹, 물질주의, 그림자 자아",
      reversed: "해방, 집착에서 벗어남, 자각"
    },
    keywords: {
      upright: ["속박", "유혹", "물질", "그림자"],
      reversed: ["해방", "자유", "자각"]
    }
  },
  {
    name: "The Tower",
    nameKo: "탑",
    meaning: {
      upright: "급격한 변화, 파괴, 깨달음, 해방",
      reversed: "변화 회피, 두려움, 점진적 변화"
    },
    keywords: {
      upright: ["변화", "파괴", "깨달음", "해방"],
      reversed: ["회피", "두려움", "지연"]
    }
  },
  {
    name: "The Star",
    nameKo: "별",
    meaning: {
      upright: "희망, 영감, 평화, 치유, 갱신",
      reversed: "절망, 믿음 상실, 단절"
    },
    keywords: {
      upright: ["희망", "영감", "평화", "치유"],
      reversed: ["절망", "상실", "단절"]
    }
  },
  {
    name: "The Moon",
    nameKo: "달",
    meaning: {
      upright: "직관, 무의식, 환상, 불안, 숨겨진 것",
      reversed: "혼란 해소, 두려움 극복, 진실 발견"
    },
    keywords: {
      upright: ["직관", "무의식", "환상", "불안"],
      reversed: ["해소", "극복", "진실"]
    }
  },
  {
    name: "The Sun",
    nameKo: "태양",
    meaning: {
      upright: "기쁨, 성공, 활력, 낙관, 축복",
      reversed: "일시적 우울, 과도한 낙관, 지연된 성공"
    },
    keywords: {
      upright: ["기쁨", "성공", "활력", "축복"],
      reversed: ["우울", "지연", "과신"]
    }
  },
  {
    name: "Judgement",
    nameKo: "심판",
    meaning: {
      upright: "부활, 소명, 자기 평가, 갱신",
      reversed: "자기 의심, 판단 거부, 과거에 집착"
    },
    keywords: {
      upright: ["부활", "소명", "평가", "갱신"],
      reversed: ["의심", "거부", "집착"]
    }
  },
  {
    name: "The World",
    nameKo: "세계",
    meaning: {
      upright: "완성, 성취, 통합, 여행, 새로운 장",
      reversed: "미완성, 지연, 완결 부족"
    },
    keywords: {
      upright: ["완성", "성취", "통합", "여행"],
      reversed: ["미완성", "지연", "부족"]
    }
  }
];

export interface DrawnCard {
  card: TarotCard;
  isReversed: boolean;
  position?: string;
}

// 카드 뽑기 함수
export function drawCards(count: number): DrawnCard[] {
  const shuffled = [...majorArcana].sort(() => Math.random() - 0.5);
  const selected = shuffled.slice(0, count);

  return selected.map(card => ({
    card,
    isReversed: Math.random() < 0.3 // 30% 확률로 역방향
  }));
}

// 3카드 스프레드 (과거-현재-미래)
export function drawThreeCardSpread(): DrawnCard[] {
  const positions = ["과거", "현재", "미래"];
  const cards = drawCards(3);

  return cards.map((drawnCard, index) => ({
    ...drawnCard,
    position: positions[index]
  }));
}

// 오늘의 운세용 1카드
export function drawDailyCard(): DrawnCard {
  return drawCards(1)[0];
}

// 카드 결과를 텍스트로 포맷팅
export function formatCardResult(drawnCard: DrawnCard): string {
  const { card, isReversed, position } = drawnCard;
  const direction = isReversed ? "역방향" : "정방향";
  const meaning = isReversed ? card.meaning.reversed : card.meaning.upright;

  let result = "";
  if (position) {
    result += `[${position}] `;
  }
  result += `${card.nameKo} (${direction})\n`;
  result += `→ ${meaning}`;

  return result;
}

// 전체 리딩 결과 포맷팅
export function formatReading(cards: DrawnCard[], type: string): string {
  let result = `🔮 ${type}\n\n`;

  cards.forEach((drawnCard, index) => {
    result += formatCardResult(drawnCard);
    if (index < cards.length - 1) {
      result += "\n\n";
    }
  });

  return result;
}
