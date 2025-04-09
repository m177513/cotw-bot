# COTW MMR 디스코드 봇 (Fatal Fury: City of the Wolves)

## 🥊 소개

이 봇은 **Fatal Fury: City of the Wolves** 게임을 위한 실력 기반 MMR 시스템 디스코드 봇입니다.  
비슷한 실력의 유저들끼리 공정하게 매칭할 수 있도록 도와줍니다.

- MMR 매칭 및 점수 등록  
- 캐주얼 매치 지원  
- 등급 시스템 및 디케이(활동 감소) 시스템  
- 멀티랭귀지 지원 (🇰🇷 🇯🇵 🇨🇳 🇹🇼 🇺🇸)  
- 등급별 @멘션 알림  
- 반복 매칭 제한, 연승 보너스, 디케이 방지 기능 등  

---

## 🚀 설치 방법

1. 이 저장소를 클론합니다.
```bash
git clone https://github.com/your-org/cotw-mmr-bot.git
```

2. 의존성 설치
```bash
npm install
```

3. `.env` 설정
```env
DISCORD_TOKEN=your_discord_bot_token
CLIENT_ID=your_discord_client_id
MONGODB_URI=your_mongo_uri (선택)
```

4. 명령어 등록
```bash
node deploy-commands.js
```

5. 서버 실행
```bash
node index.js
```

---

## 🔧 주요 명령어

| 명령어 | 설명 |
|--------|------|
| `/mmr` | MMR 매치 시작 |
| `/점수등록` | MMR 경기 점수 등록 |
| `/매칭취소` | 대기 중인 매칭 취소 |
| `/랭킹` | 등급 및 MMR 순위 확인 |
| `/게임정보` | 현재 게임 중인 유저 정보 표시 |
| `/알림설정` | 매칭 알림 설정/해제 |
| `/직전점수정정` | 직전 경기 점수 변경 요청 |
| `/MMR초기설정` | (기존 유저용) 환영 DM 재발송 |

---

## 📊 진행 현황

- ✅ 기본 MMR 기능 구현
- ✅ 등급 및 디케이 시스템
- ✅ 반복 매칭 제한
- ✅ 연승 보너스
- ✅ FT5 보너스 시스템
- ✅ 언어 선택 + 자동 감지
- 🔄 통계 시스템 확장 중
- 🔄 전체 코드 최적화 중
- 📦 SaaS 구조화 및 패키징 예정

---

## 📬 문의

문의 또는 버그 제보는 디스코드 서버 또는 GitHub Issues로 부탁드립니다.
