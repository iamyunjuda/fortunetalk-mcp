// 카카오톡 "나에게 보내기" API 연동

interface KakaoTokens {
  accessToken: string;
  refreshToken?: string;
}

interface KakaoMessageResponse {
  result_code: number;
}

// 환경 변수에서 토큰 읽기
export function getKakaoTokens(): KakaoTokens | null {
  const accessToken = process.env.KAKAO_ACCESS_TOKEN;
  if (!accessToken) {
    return null;
  }
  return {
    accessToken,
    refreshToken: process.env.KAKAO_REFRESH_TOKEN
  };
}

// 나에게 메시지 보내기 (텍스트 템플릿)
export async function sendToMe(message: string): Promise<{ success: boolean; error?: string }> {
  const tokens = getKakaoTokens();

  if (!tokens) {
    return {
      success: false,
      error: "KAKAO_ACCESS_TOKEN 환경 변수가 설정되지 않았습니다."
    };
  }

  try {
    const response = await fetch("https://kapi.kakao.com/v2/api/talk/memo/default/send", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${tokens.accessToken}`,
        "Content-Type": "application/x-www-form-urlencoded"
      },
      body: new URLSearchParams({
        template_object: JSON.stringify({
          object_type: "text",
          text: message,
          link: {
            web_url: "https://developers.kakao.com",
            mobile_web_url: "https://developers.kakao.com"
          }
        })
      })
    });

    if (!response.ok) {
      const errorData = await response.json();
      return {
        success: false,
        error: `카카오 API 오류: ${JSON.stringify(errorData)}`
      };
    }

    const result = await response.json() as KakaoMessageResponse;

    if (result.result_code === 0) {
      return { success: true };
    } else {
      return {
        success: false,
        error: `메시지 전송 실패: result_code=${result.result_code}`
      };
    }
  } catch (error) {
    return {
      success: false,
      error: `네트워크 오류: ${error instanceof Error ? error.message : String(error)}`
    };
  }
}

// OAuth 인증 URL 생성 (사용자가 토큰을 받기 위해 사용)
export function getAuthUrl(clientId: string, redirectUri: string): string {
  const params = new URLSearchParams({
    client_id: clientId,
    redirect_uri: redirectUri,
    response_type: "code",
    scope: "talk_message"
  });

  return `https://kauth.kakao.com/oauth/authorize?${params.toString()}`;
}

// 인가 코드로 액세스 토큰 발급
export async function getAccessToken(
  clientId: string,
  redirectUri: string,
  code: string
): Promise<{ accessToken?: string; refreshToken?: string; error?: string }> {
  try {
    const response = await fetch("https://kauth.kakao.com/oauth/token", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded"
      },
      body: new URLSearchParams({
        grant_type: "authorization_code",
        client_id: clientId,
        redirect_uri: redirectUri,
        code: code
      })
    });

    const data = await response.json();

    if (data.access_token) {
      return {
        accessToken: data.access_token,
        refreshToken: data.refresh_token
      };
    } else {
      return {
        error: `토큰 발급 실패: ${JSON.stringify(data)}`
      };
    }
  } catch (error) {
    return {
      error: `네트워크 오류: ${error instanceof Error ? error.message : String(error)}`
    };
  }
}
