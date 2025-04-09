// Version: 4.5_04_09_final
module.exports = {
  welcome: {
    greeting: "환영합니다! 아래에서 국가(언어)를 선택해주세요.",
    gradeSelect: "게임 등급을 선택해주세요.",
    profileCreated: (grade, mmr) => `✅ 프로필이 생성되었습니다!\n최종 등급은 **${grade}**, 초기 MMR은 **${mmr}점**입니다.`,
    guideIntro: "💡 COTW MMR 시스템 이용 안내",
    guide: [
      "우리는 **실력 기반 MMR 시스템**을 사용합니다.",
      "비슷한 실력의 상대와 대전을 할 수 있어 더욱 공정한 게임이 가능합니다.",
      "- 디스코드에 접속하지 않아도 등급별 **@멘션 알림**으로 매칭 소식을 받을 수 있어요.",
      "- MMR을 통해 **랭킹 이벤트**에도 참여할 수 있습니다.",
      "- 캐주얼 매치도 자유롭게 가능합니다!",
      "",
      "📌 필수 명령어",
      "/mmr - MMR 매치 신청",
      "/점수등록 - 경기 결과 등록",
      "/매칭취소 - 매칭 대기 취소",
      "",
      "📌 전체 명령어 보기: /도움말 또는 전체 안내서 확인",
      "",
      "❗ MMR 알림이 너무 자주 온다면 `/알림설정` 명령어를 통해 알림을 끌 수 있습니다.",
    ].join('\n'),
  },

  gradeOptions: {
    newface: "구경하러 왔어요! 아직 시작 전이에요",
    legendary: "Legendary Wolf",
    sss: "SSS-Rank",
    ss: "SS-Rank",
    s: "S-Rank",
    a: "A-Rank",
    b: "B-Rank",
    c: "C-Rank",
    rookie: "Rookie",
    new_face: "New Face"
  },

  match: {
    alreadyRequested: "이미 매칭을 신청하셨습니다.",
    searching: "🔍 매칭 대기 중입니다. 적절한 상대를 찾고 있어요.",
    found: "✅ 매칭 완료! 상대: {player}",
    repeatedOpponent: "같은 상대와 3회 연속 매칭되었습니다. 계속하시겠습니까?",
    declinedAndSearch: "상대 매칭을 거절하셨습니다. 계속 상대를 찾을까요?",
    matchEnded: "🔚 매칭 대기 시간이 종료되었습니다. 다시 신청해주세요.",
    nicknameOption: "닉네임을 공개하시겠습니까? (Y/N)",
    rejected: "❌ 상대방이 매칭을 거절했습니다.",
    retrySearch: "🔄 다시 상대를 찾습니다...",
    timeout: "⌛ 시간이 초과되었습니다. 매칭을 종료합니다."
  },

  thread: {
    registerScore: "점수 등록하기",
  },

  score: {
    confirm: "아래 정보가 맞으면 점수를 등록해주세요.",
    updated: "점수가 수정되었습니다.",
    approved: "정정 요청이 승인되었습니다.",
    denied: "정정 요청이 거절되었습니다.",
    notFound: "직전 경기 정보를 찾을 수 없습니다.",
    changeRequested: "정정 요청이 접수되었습니다. 상대의 승인을 기다립니다.",
    noActiveMatch: "❌ 현재 진행 중인 매치가 없습니다.",
    saved: "✅ 점수가 저장되었습니다. MMR이 반영되었습니다.",
    notMatched: "❌ 상대방이 제출한 점수와 일치하지 않습니다.",
    waitOpponent: "📨 상대방이 점수를 제출하면 자동으로 처리됩니다. 3분 후 자동 저장됩니다.",
    autoSaved: "⏱️ 3분 경과로 자동 점수 저장되었습니다."
  },

  fix: {
    noHistory: "⚠️ 최근 경기 이력이 없습니다.",
    alreadyStarted: "⛔ 이미 다음 경기가 시작되어 정정할 수 없습니다.",
    requestSent: "✅ 점수 정정 요청을 보냈습니다. <@{{opponentId}}>님의 승인이 필요합니다.",
    dmRequest: "📩 <@{{userId}}>님이 직전 경기 점수 정정을 요청했습니다. 승인하려면 /정정승인 명령어를 입력해주세요.",
    noRequest: "❌ 현재 승인할 정정 요청이 없습니다.",
    approved: "✅ 점수 정정을 승인하였습니다. 요청자에게 알림을 보냈습니다.",
    dmApproved: "📩 상대방이 점수 정정을 승인했습니다. /점수등록 명령어로 재입력해주세요."
  },

  notify: {
    on: "🔔 매칭 알림을 받도록 설정하였습니다.",
    off: "🔕 매칭 알림을 받지 않도록 설정하였습니다.",
    decayWarning: "⚠️ 활동이 없으면 곧 MMR이 감소할 수 있습니다!",
    decayStart: "📉 장기간 비활동으로 인해 MMR이 감소되었습니다."
  },

  help: {
    title: "🆘 전체 명령어 안내",
    mmr: "/mmr - MMR 매치 신청",
    score: "/점수등록 - 경기 결과 등록",
    cancel: "/매칭취소 - 매칭 대기 취소",
    info: "/게임정보 - 현재 진행 중인 게임 확인",
    alert: "/알림설정 - MMR 알림 ON/OFF",
    rank: "/랭킹 - 등급별 순위 확인",
    reset: "/MMR초기설정 - 기존 유저 대상 DM 재설정",
    correction: "/직전점수정정 - 이전 경기 점수 정정 요청",
  },

  ranking: {
    title: "🏆 랭킹",
    monthly: "📅 이번 달 랭킹",
    quarterly: "📊 분기별 랭킹",
    allTime: "🌟 전체 랭킹",
  },

  error: {
    profileNotFound: "❗ 프로필이 존재하지 않습니다. 먼저 /프로필생성을 해주세요!",
    cannotPlaySelf: "⚠️ 본인과의 경기는 등록할 수 없습니다.",
    drawNotAllowed: "⚠️ 무승부는 점수로 등록할 수 없습니다.",
    default: "⚠️ 오류가 발생했습니다. 잠시 후 다시 시도해주세요."
  },

  initmmr: {
    success: "📩 환영 DM을 다시 전송했습니다!",
    fail: "⚠️ DM 전송에 실패했습니다. DM 수신 설정을 확인해주세요."
  },

  stats: {
    title: "📊 활동 통계",
    mostActive: "🕹️ 가장 많이 MMR을 진행한 유저 TOP 5",
    mostRequested: "📢 가장 많이 매칭 요청을 한 유저 TOP 5"
  },

  button: {
    requestMatch: "매칭 신청하기",
    confirm: "확인",
    deny: "거절",
    continue: "계속하기",
    stop: "중단하기"
  },

  success: {
    waiting: "✅ **{username}**님이 매칭을 기다리고 있습니다!",
  }
};
