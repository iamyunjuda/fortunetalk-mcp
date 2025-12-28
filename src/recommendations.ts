// 타로 카드별 격언, 책, 노래 추천 데이터

export interface Recommendation {
  quote: { text: string; author: string };
  book: { title: string; author: string; reason: string };
  song: { title: string; artist: string; reason: string };
}

// 카드 이름을 키로 사용하는 추천 데이터
export const recommendations: Record<string, { upright: Recommendation; reversed: Recommendation }> = {
  "The Fool": {
    upright: {
      quote: { text: "천 리 길도 한 걸음부터", author: "노자" },
      book: { title: "연금술사", author: "파울로 코엘료", reason: "새로운 여정을 시작하는 용기" },
      song: { title: "Born This Way", artist: "Lady Gaga", reason: "자신을 믿고 나아가는 자유로움" }
    },
    reversed: {
      quote: { text: "돌다리도 두들겨 보고 건너라", author: "한국 속담" },
      book: { title: "생각에 관한 생각", author: "다니엘 카너먼", reason: "신중한 판단의 중요성" },
      song: { title: "Slow Down", artist: "Selena Gomez", reason: "속도를 늦추고 생각해보기" }
    }
  },
  "The Magician": {
    upright: {
      quote: { text: "할 수 있다고 믿으면, 이미 반은 이룬 것이다", author: "시어도어 루스벨트" },
      book: { title: "시크릿", author: "론다 번", reason: "의지와 창조의 힘" },
      song: { title: "Believer", artist: "Imagine Dragons", reason: "내 안의 힘을 믿는 것" }
    },
    reversed: {
      quote: { text: "진실은 언젠가 드러난다", author: "세르반테스" },
      book: { title: "거짓말의 심리학", author: "폴 에크만", reason: "진실과 거짓을 분별하는 지혜" },
      song: { title: "Lies", artist: "Marina", reason: "속임수를 경계하기" }
    }
  },
  "The High Priestess": {
    upright: {
      quote: { text: "직관은 영혼의 목소리다", author: "칼 융" },
      book: { title: "무의식의 분석", author: "칼 융", reason: "내면의 지혜 탐구" },
      song: { title: "Intuition", artist: "Jewel", reason: "직관을 따르는 것" }
    },
    reversed: {
      quote: { text: "침묵이 금이다", author: "서양 속담" },
      book: { title: "달빛 조각사", author: "남희성", reason: "감춰진 진실을 찾아서" },
      song: { title: "Secrets", artist: "OneRepublic", reason: "드러나는 비밀들" }
    }
  },
  "The Empress": {
    upright: {
      quote: { text: "자연은 최고의 스승이다", author: "레오나르도 다빈치" },
      book: { title: "월든", author: "헨리 데이비드 소로", reason: "자연과 풍요로움" },
      song: { title: "Mother Nature's Son", artist: "The Beatles", reason: "자연과의 연결" }
    },
    reversed: {
      quote: { text: "창조하지 않으면 파괴당한다", author: "허버트 조지 웰스" },
      book: { title: "창조적 자신감", author: "톰 켈리", reason: "창조적 막힘 극복" },
      song: { title: "Empty", artist: "Olivia O'Brien", reason: "공허함을 인정하기" }
    }
  },
  "The Emperor": {
    upright: {
      quote: { text: "자신을 다스리는 자가 세상을 다스린다", author: "마르쿠스 아우렐리우스" },
      book: { title: "군주론", author: "마키아벨리", reason: "리더십과 통제력" },
      song: { title: "We Are The Champions", artist: "Queen", reason: "승리와 리더십" }
    },
    reversed: {
      quote: { text: "권력은 부패하고, 절대 권력은 절대 부패한다", author: "액턴 경" },
      book: { title: "1984", author: "조지 오웰", reason: "독재와 통제의 위험" },
      song: { title: "Another Brick In The Wall", artist: "Pink Floyd", reason: "억압에 대한 저항" }
    }
  },
  "The Hierophant": {
    upright: {
      quote: { text: "배움에는 끝이 없다", author: "공자" },
      book: { title: "논어", author: "공자", reason: "전통적 가르침의 지혜" },
      song: { title: "Lean On Me", artist: "Bill Withers", reason: "서로 의지하는 것" }
    },
    reversed: {
      quote: { text: "규칙은 깨라고 있는 것이다", author: "더글러스 맥아더" },
      book: { title: "아웃사이더", author: "콜린 윌슨", reason: "관습을 벗어난 사고" },
      song: { title: "Breaking The Habit", artist: "Linkin Park", reason: "관습을 깨는 것" }
    }
  },
  "The Lovers": {
    upright: {
      quote: { text: "사랑은 모든 것을 믿고, 모든 것을 바란다", author: "성경 고린도전서" },
      book: { title: "노르웨이의 숲", author: "무라카미 하루키", reason: "사랑과 선택" },
      song: { title: "Can't Help Falling In Love", artist: "Elvis Presley", reason: "진정한 사랑" }
    },
    reversed: {
      quote: { text: "선택하지 않는 것도 선택이다", author: "장 폴 사르트르" },
      book: { title: "안나 카레니나", author: "톨스토이", reason: "잘못된 선택의 결과" },
      song: { title: "Somebody That I Used To Know", artist: "Gotye", reason: "관계의 불균형" }
    }
  },
  "The Chariot": {
    upright: {
      quote: { text: "승리는 가장 끈기 있는 자에게 돌아간다", author: "나폴레옹 보나파르트" },
      book: { title: "그릿", author: "앤절라 더크워스", reason: "의지력과 결단력" },
      song: { title: "Eye Of The Tiger", artist: "Survivor", reason: "승리를 향한 의지" }
    },
    reversed: {
      quote: { text: "참을 인 세 번이면 살인도 면한다", author: "한국 속담" },
      book: { title: "분노의 포도", author: "존 스타인벡", reason: "분노 조절" },
      song: { title: "Break Stuff", artist: "Limp Bizkit", reason: "분노의 해소" }
    }
  },
  "Strength": {
    upright: {
      quote: { text: "부드러움이 강함을 이긴다", author: "노자" },
      book: { title: "비폭력 대화", author: "마셜 로젠버그", reason: "부드러운 힘" },
      song: { title: "Fight Song", artist: "Rachel Platten", reason: "내면의 용기" }
    },
    reversed: {
      quote: { text: "자신을 아는 것이 모든 지혜의 시작이다", author: "아리스토텔레스" },
      book: { title: "마음의 상처를 치유하는 법", author: "베셀 반 데어 콜크", reason: "자기 의심 극복" },
      song: { title: "Unsteady", artist: "X Ambassadors", reason: "불안정함 인정하기" }
    }
  },
  "The Hermit": {
    upright: {
      quote: { text: "고독은 위대한 정신의 학교다", author: "윌리엄 워즈워스" },
      book: { title: "수레바퀴 아래서", author: "헤르만 헤세", reason: "고독 속의 성찰" },
      song: { title: "Sound Of Silence", artist: "Simon & Garfunkel", reason: "고요한 성찰" }
    },
    reversed: {
      quote: { text: "함께 가면 멀리 간다", author: "아프리카 속담" },
      book: { title: "혼자가 아닌 나", author: "브레네 브라운", reason: "고립에서 벗어나기" },
      song: { title: "Lonely", artist: "Justin Bieber", reason: "외로움 극복" }
    }
  },
  "Wheel of Fortune": {
    upright: {
      quote: { text: "행운은 준비된 자에게 온다", author: "루이 파스퇴르" },
      book: { title: "행운에 속지 마라", author: "나심 탈레브", reason: "운명의 변화" },
      song: { title: "Lucky", artist: "Jason Mraz", reason: "행운의 순간" }
    },
    reversed: {
      quote: { text: "이것 또한 지나가리라", author: "솔로몬" },
      book: { title: "회복탄력성", author: "김주환", reason: "불운 속 회복력" },
      song: { title: "Bad Day", artist: "Daniel Powter", reason: "힘든 날을 버티기" }
    }
  },
  "Justice": {
    upright: {
      quote: { text: "정의는 늦어도 반드시 온다", author: "서양 속담" },
      book: { title: "정의란 무엇인가", author: "마이클 샌델", reason: "정의와 공정" },
      song: { title: "Man In The Mirror", artist: "Michael Jackson", reason: "자기 성찰과 책임" }
    },
    reversed: {
      quote: { text: "세상에 완벽한 정의는 없다", author: "플라톤" },
      book: { title: "카프카의 법칙", author: "프란츠 카프카", reason: "불공정한 세상" },
      song: { title: "Unfair", artist: "EXO", reason: "불공정함 받아들이기" }
    }
  },
  "The Hanged Man": {
    upright: {
      quote: { text: "기다림은 지혜의 어머니다", author: "터키 속담" },
      book: { title: "모모", author: "미하엘 엔데", reason: "시간과 기다림" },
      song: { title: "Let It Be", artist: "The Beatles", reason: "순응과 수용" }
    },
    reversed: {
      quote: { text: "멈추지 말고 계속 가기만 해라", author: "공자" },
      book: { title: "멈추지 않는다", author: "데이비드 고긴스", reason: "정체 극복" },
      song: { title: "Stuck", artist: "Imagine Dragons", reason: "막힌 상황 타개" }
    }
  },
  "Death": {
    upright: {
      quote: { text: "끝이 곧 시작이다", author: "T.S. 엘리엇" },
      book: { title: "죽음의 수용소에서", author: "빅터 프랭클", reason: "변화와 새 시작" },
      song: { title: "The End", artist: "The Doors", reason: "끝과 새로운 시작" }
    },
    reversed: {
      quote: { text: "변하지 않으면 변화당한다", author: "잭 웰치" },
      book: { title: "누가 내 치즈를 옮겼을까", author: "스펜서 존슨", reason: "변화 저항 극복" },
      song: { title: "Changes", artist: "David Bowie", reason: "변화를 받아들이기" }
    }
  },
  "Temperance": {
    upright: {
      quote: { text: "중용이 최고의 덕이다", author: "아리스토텔레스" },
      book: { title: "중용", author: "자사", reason: "균형과 조화" },
      song: { title: "Balance", artist: "Demi Lovato", reason: "균형 잡힌 삶" }
    },
    reversed: {
      quote: { text: "과유불급", author: "공자" },
      book: { title: "적당한 거리", author: "이승우", reason: "과함을 조절하기" },
      song: { title: "Too Much", artist: "Carly Rae Jepsen", reason: "과도함 경계하기" }
    }
  },
  "The Devil": {
    upright: {
      quote: { text: "자유로워지려면 먼저 자신의 사슬을 알아야 한다", author: "부처" },
      book: { title: "당신은 뇌를 고칠 수 있다", author: "노먼 도이지", reason: "집착과 중독 이해" },
      song: { title: "Demons", artist: "Imagine Dragons", reason: "내면의 악마 직면" }
    },
    reversed: {
      quote: { text: "진정한 자유는 내면에서 온다", author: "넬슨 만델라" },
      book: { title: "자유로부터의 도피", author: "에리히 프롬", reason: "해방과 자유" },
      song: { title: "Free", artist: "Zac Brown Band", reason: "속박에서 해방" }
    }
  },
  "The Tower": {
    upright: {
      quote: { text: "위기는 기회다", author: "존 F. 케네디" },
      book: { title: "안티프래질", author: "나심 탈레브", reason: "파괴 속 성장" },
      song: { title: "Shake It Off", artist: "Taylor Swift", reason: "충격 후 회복" }
    },
    reversed: {
      quote: { text: "작은 변화가 큰 차이를 만든다", author: "데이비드 로버트슨" },
      book: { title: "작은 것이 아름답다", author: "E.F. 슈마허", reason: "점진적 변화" },
      song: { title: "Little By Little", artist: "Oasis", reason: "조금씩 변화하기" }
    }
  },
  "The Star": {
    upright: {
      quote: { text: "별을 보려면 어둠이 필요하다", author: "마틴 루터 킹" },
      book: { title: "희망의 이유", author: "제인 구달", reason: "희망과 영감" },
      song: { title: "A Sky Full Of Stars", artist: "Coldplay", reason: "희망찬 미래" }
    },
    reversed: {
      quote: { text: "어둠이 깊을수록 새벽은 가깝다", author: "한국 속담" },
      book: { title: "절망에서 희망으로", author: "달라이 라마", reason: "절망 극복" },
      song: { title: "Fix You", artist: "Coldplay", reason: "상처 치유하기" }
    }
  },
  "The Moon": {
    upright: {
      quote: { text: "무의식은 의식보다 더 넓은 바다다", author: "칼 융" },
      book: { title: "꿈의 해석", author: "지그문트 프로이트", reason: "무의식 탐구" },
      song: { title: "Moonlight Sonata", artist: "Beethoven", reason: "신비로운 직관" }
    },
    reversed: {
      quote: { text: "아는 것이 힘이다", author: "프랜시스 베이컨" },
      book: { title: "오래된 새 세계", author: "마르쿠스 가브리엘", reason: "혼란에서 명확함으로" },
      song: { title: "Clarity", artist: "Zedd", reason: "진실 발견" }
    }
  },
  "The Sun": {
    upright: {
      quote: { text: "태양을 향해 걸어가면 그림자는 뒤에 남는다", author: "월터 휘트먼" },
      book: { title: "행복의 기원", author: "서은국", reason: "기쁨과 활력" },
      song: { title: "Here Comes The Sun", artist: "The Beatles", reason: "밝은 미래" }
    },
    reversed: {
      quote: { text: "구름 뒤에도 태양은 있다", author: "한국 속담" },
      book: { title: "마음이 지치면 쉬어가도 괜찮아", author: "김정윤", reason: "잠시 멈춤" },
      song: { title: "Waiting For The Sun", artist: "The Doors", reason: "기다림의 지혜" }
    }
  },
  "Judgement": {
    upright: {
      quote: { text: "어제의 나를 오늘 이겨야 한다", author: "미야모토 무사시" },
      book: { title: "인간 실격", author: "다자이 오사무", reason: "자기 평가와 갱신" },
      song: { title: "Rise Up", artist: "Andra Day", reason: "부활과 소명" }
    },
    reversed: {
      quote: { text: "과거는 과거일 뿐이다", author: "랄프 왈도 에머슨" },
      book: { title: "트라우마는 어떻게 유전되는가", author: "마크 울린", reason: "과거 극복" },
      song: { title: "Let It Go", artist: "Idina Menzel", reason: "과거를 놓아주기" }
    }
  },
  "The World": {
    upright: {
      quote: { text: "모든 끝은 새로운 시작이다", author: "세네카" },
      book: { title: "오디세이아", author: "호메로스", reason: "완성과 새 여정" },
      song: { title: "What A Wonderful World", artist: "Louis Armstrong", reason: "세상의 아름다움" }
    },
    reversed: {
      quote: { text: "완벽보다 완료가 낫다", author: "셰릴 샌드버그" },
      book: { title: "완벽주의자의 심리학", author: "토머스 그린스펀", reason: "미완성 수용" },
      song: { title: "Almost There", artist: "Anika Noni Rose", reason: "거의 다 왔어요" }
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
  let result = "\n\n💎 오늘의 추천 💎\n";
  result += "─".repeat(25) + "\n\n";

  result += `📜 오늘의 격언\n`;
  result += `"${rec.quote.text}"\n`;
  result += `- ${rec.quote.author}\n\n`;

  result += `📚 추천 책\n`;
  result += `『${rec.book.title}』 - ${rec.book.author}\n`;
  result += `💡 ${rec.book.reason}\n\n`;

  result += `🎵 추천 노래\n`;
  result += `"${rec.song.title}" - ${rec.song.artist}\n`;
  result += `💡 ${rec.song.reason}`;

  return result;
}
