// 타로 카드별 격언, 책, 노래 추천 데이터

export interface Recommendation {
  quote: { text: string; author: string };
  book: { title: string; author: string };
  song: { title: string; artist: string };
}

// 카드 이름을 키로 사용하는 추천 데이터 (책은 베스트셀러 위주)
export const recommendations: Record<string, { upright: Recommendation; reversed: Recommendation }> = {
  "The Fool": {
    upright: {
      quote: { text: "천 리 길도 한 걸음부터", author: "노자" },
      book: { title: "연금술사", author: "파울로 코엘료" },
      song: { title: "Born This Way", artist: "Lady Gaga" }
    },
    reversed: {
      quote: { text: "돌다리도 두들겨 보고 건너라", author: "속담" },
      book: { title: "생각에 관한 생각", author: "다니엘 카너먼" },
      song: { title: "Slow Down", artist: "Selena Gomez" }
    }
  },
  "The Magician": {
    upright: {
      quote: { text: "할 수 있다고 믿으면 이미 반은 이룬 것이다", author: "루스벨트" },
      book: { title: "시크릿", author: "론다 번" },
      song: { title: "Believer", artist: "Imagine Dragons" }
    },
    reversed: {
      quote: { text: "진실은 언젠가 드러난다", author: "세르반테스" },
      book: { title: "이기적 유전자", author: "리처드 도킨스" },
      song: { title: "Lies", artist: "Marina" }
    }
  },
  "The High Priestess": {
    upright: {
      quote: { text: "직관은 영혼의 목소리다", author: "칼 융" },
      book: { title: "데미안", author: "헤르만 헤세" },
      song: { title: "Intuition", artist: "Jewel" }
    },
    reversed: {
      quote: { text: "침묵이 금이다", author: "속담" },
      book: { title: "82년생 김지영", author: "조남주" },
      song: { title: "Secrets", artist: "OneRepublic" }
    }
  },
  "The Empress": {
    upright: {
      quote: { text: "자연은 최고의 스승이다", author: "다빈치" },
      book: { title: "어린 왕자", author: "생텍쥐페리" },
      song: { title: "Mother Nature's Son", artist: "The Beatles" }
    },
    reversed: {
      quote: { text: "창조하지 않으면 파괴당한다", author: "웰스" },
      book: { title: "빅 매직", author: "엘리자베스 길버트" },
      song: { title: "Empty", artist: "Olivia O'Brien" }
    }
  },
  "The Emperor": {
    upright: {
      quote: { text: "자신을 다스리는 자가 세상을 다스린다", author: "아우렐리우스" },
      book: { title: "리더십의 법칙", author: "존 맥스웰" },
      song: { title: "We Are The Champions", artist: "Queen" }
    },
    reversed: {
      quote: { text: "절대 권력은 절대 부패한다", author: "액턴 경" },
      book: { title: "1984", author: "조지 오웰" },
      song: { title: "Another Brick In The Wall", artist: "Pink Floyd" }
    }
  },
  "The Hierophant": {
    upright: {
      quote: { text: "배움에는 끝이 없다", author: "공자" },
      book: { title: "아주 작은 습관의 힘", author: "제임스 클리어" },
      song: { title: "Lean On Me", artist: "Bill Withers" }
    },
    reversed: {
      quote: { text: "규칙은 깨라고 있는 것이다", author: "맥아더" },
      book: { title: "스틱!", author: "칩 히스" },
      song: { title: "Breaking The Habit", artist: "Linkin Park" }
    }
  },
  "The Lovers": {
    upright: {
      quote: { text: "사랑은 모든 것을 믿고 모든 것을 바란다", author: "성경" },
      book: { title: "사랑의 기술", author: "에리히 프롬" },
      song: { title: "Can't Help Falling In Love", artist: "Elvis Presley" }
    },
    reversed: {
      quote: { text: "선택하지 않는 것도 선택이다", author: "사르트르" },
      book: { title: "미움받을 용기", author: "기시미 이치로" },
      song: { title: "Somebody That I Used To Know", artist: "Gotye" }
    }
  },
  "The Chariot": {
    upright: {
      quote: { text: "승리는 가장 끈기 있는 자에게 돌아간다", author: "나폴레옹" },
      book: { title: "그릿", author: "앤절라 더크워스" },
      song: { title: "Eye Of The Tiger", artist: "Survivor" }
    },
    reversed: {
      quote: { text: "참을 인 세 번이면 살인도 면한다", author: "속담" },
      book: { title: "분노의 포도", author: "스타인벡" },
      song: { title: "Break Stuff", artist: "Limp Bizkit" }
    }
  },
  "Strength": {
    upright: {
      quote: { text: "부드러움이 강함을 이긴다", author: "노자" },
      book: { title: "마음챙김의 기적", author: "틱낫한" },
      song: { title: "Fight Song", artist: "Rachel Platten" }
    },
    reversed: {
      quote: { text: "자신을 아는 것이 모든 지혜의 시작이다", author: "아리스토텔레스" },
      book: { title: "나는 나로 살기로 했다", author: "김수현" },
      song: { title: "Unsteady", artist: "X Ambassadors" }
    }
  },
  "The Hermit": {
    upright: {
      quote: { text: "고독은 위대한 정신의 학교다", author: "워즈워스" },
      book: { title: "월든", author: "헨리 데이빗 소로" },
      song: { title: "Sound Of Silence", artist: "Simon & Garfunkel" }
    },
    reversed: {
      quote: { text: "함께 가면 멀리 간다", author: "아프리카 속담" },
      book: { title: "관계의 힘", author: "헨리 클라우드" },
      song: { title: "Lonely", artist: "Justin Bieber" }
    }
  },
  "Wheel of Fortune": {
    upright: {
      quote: { text: "행운은 준비된 자에게 온다", author: "파스퇴르" },
      book: { title: "아웃라이어", author: "말콤 글래드웰" },
      song: { title: "Lucky", artist: "Jason Mraz" }
    },
    reversed: {
      quote: { text: "이것 또한 지나가리라", author: "솔로몬" },
      book: { title: "역행자", author: "자청" },
      song: { title: "Bad Day", artist: "Daniel Powter" }
    }
  },
  "Justice": {
    upright: {
      quote: { text: "정의는 늦어도 반드시 온다", author: "속담" },
      book: { title: "정의란 무엇인가", author: "마이클 샌델" },
      song: { title: "Man In The Mirror", artist: "Michael Jackson" }
    },
    reversed: {
      quote: { text: "세상에 완벽한 정의는 없다", author: "플라톤" },
      book: { title: "82년생 김지영", author: "조남주" },
      song: { title: "Unfair", artist: "EXO" }
    }
  },
  "The Hanged Man": {
    upright: {
      quote: { text: "기다림은 지혜의 어머니다", author: "터키 속담" },
      book: { title: "모모", author: "미하엘 엔데" },
      song: { title: "Let It Be", artist: "The Beatles" }
    },
    reversed: {
      quote: { text: "멈추지 말고 계속 가기만 해라", author: "공자" },
      book: { title: "원씽", author: "게리 켈러" },
      song: { title: "Stuck", artist: "Imagine Dragons" }
    }
  },
  "Death": {
    upright: {
      quote: { text: "끝이 곧 시작이다", author: "T.S. 엘리엇" },
      book: { title: "죽음의 수용소에서", author: "빅터 프랭클" },
      song: { title: "The End", artist: "The Doors" }
    },
    reversed: {
      quote: { text: "변하지 않으면 변화당한다", author: "잭 웰치" },
      book: { title: "누가 내 치즈를 옮겼을까", author: "스펜서 존슨" },
      song: { title: "Changes", artist: "David Bowie" }
    }
  },
  "Temperance": {
    upright: {
      quote: { text: "중용이 최고의 덕이다", author: "아리스토텔레스" },
      book: { title: "타이탄의 도구들", author: "팀 페리스" },
      song: { title: "Balance", artist: "Demi Lovato" }
    },
    reversed: {
      quote: { text: "과유불급", author: "공자" },
      book: { title: "디지털 미니멀리즘", author: "칼 뉴포트" },
      song: { title: "Too Much", artist: "Carly Rae Jepsen" }
    }
  },
  "The Devil": {
    upright: {
      quote: { text: "자유로워지려면 먼저 자신의 사슬을 알아야 한다", author: "부처" },
      book: { title: "도파민네이션", author: "애나 렘키" },
      song: { title: "Demons", artist: "Imagine Dragons" }
    },
    reversed: {
      quote: { text: "진정한 자유는 내면에서 온다", author: "만델라" },
      book: { title: "자유로부터의 도피", author: "에리히 프롬" },
      song: { title: "Free", artist: "Zac Brown Band" }
    }
  },
  "The Tower": {
    upright: {
      quote: { text: "위기는 기회다", author: "케네디" },
      book: { title: "안티프래질", author: "나심 탈레브" },
      song: { title: "Shake It Off", artist: "Taylor Swift" }
    },
    reversed: {
      quote: { text: "작은 변화가 큰 차이를 만든다", author: "로버트슨" },
      book: { title: "아주 작은 습관의 힘", author: "제임스 클리어" },
      song: { title: "Little By Little", artist: "Oasis" }
    }
  },
  "The Star": {
    upright: {
      quote: { text: "별을 보려면 어둠이 필요하다", author: "마틴 루터 킹" },
      book: { title: "희망의 이유", author: "제인 구달" },
      song: { title: "A Sky Full Of Stars", artist: "Coldplay" }
    },
    reversed: {
      quote: { text: "어둠이 깊을수록 새벽은 가깝다", author: "속담" },
      book: { title: "멈추면 비로소 보이는 것들", author: "혜민" },
      song: { title: "Fix You", artist: "Coldplay" }
    }
  },
  "The Moon": {
    upright: {
      quote: { text: "무의식은 의식보다 더 넓은 바다다", author: "칼 융" },
      book: { title: "꿈의 해석", author: "프로이트" },
      song: { title: "Moonlight Sonata", artist: "Beethoven" }
    },
    reversed: {
      quote: { text: "아는 것이 힘이다", author: "베이컨" },
      book: { title: "팩트풀니스", author: "한스 로슬링" },
      song: { title: "Clarity", artist: "Zedd" }
    }
  },
  "The Sun": {
    upright: {
      quote: { text: "태양을 향해 걸어가면 그림자는 뒤에 남는다", author: "휘트먼" },
      book: { title: "해리 포터", author: "J.K. 롤링" },
      song: { title: "Here Comes The Sun", artist: "The Beatles" }
    },
    reversed: {
      quote: { text: "구름 뒤에도 태양은 있다", author: "속담" },
      book: { title: "오늘 밤, 세계에서 이 사랑이 사라진다 해도", author: "이치조 미사키" },
      song: { title: "Waiting For The Sun", artist: "The Doors" }
    }
  },
  "Judgement": {
    upright: {
      quote: { text: "어제의 나를 오늘 이겨야 한다", author: "무사시" },
      book: { title: "나미야 잡화점의 기적", author: "히가시노 게이고" },
      song: { title: "Rise Up", artist: "Andra Day" }
    },
    reversed: {
      quote: { text: "과거는 과거일 뿐이다", author: "에머슨" },
      book: { title: "언어의 온도", author: "이기주" },
      song: { title: "Let It Go", artist: "Idina Menzel" }
    }
  },
  "The World": {
    upright: {
      quote: { text: "모든 끝은 새로운 시작이다", author: "세네카" },
      book: { title: "코스모스", author: "칼 세이건" },
      song: { title: "What A Wonderful World", artist: "Louis Armstrong" }
    },
    reversed: {
      quote: { text: "완벽보다 완료가 낫다", author: "셰릴 샌드버그" },
      book: { title: "완벽하지 않은 것들에 대한 사랑", author: "혜민" },
      song: { title: "Almost There", artist: "Anika Noni Rose" }
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
  result += `📚 『${rec.book.title}』 ${rec.book.author}\n`;
  result += `🎵 "${rec.song.title}" ${rec.song.artist}`;

  return result;
}
