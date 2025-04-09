module.exports = {
    welcome: {
      greeting: "...",                // 언어 선택 안내
      gradeSelect: "...",             // 실력 선택 안내
      profileCreated: (grade, mmr) => `...`, // 프로필 생성 안내
      guideIntro: "...",              // 안내 시작 문구
      guide: "...",                   // 전체 안내 내용 (join('\n') 형태)
    },
    gradeOptions: {
      newface: "...", rookie: "...", c: "...", b: "...", a: "...", s: "...", ss: "...", sss: "...", lw: "..."
    },
    match: {
      alreadyRequested: "...",
      searching: "...",
      found: "...",
      repeatedOpponent: "...",
      rejected: "...",
      retrySearch: "...",
      searchContinued: "...",
      timeout: "...",
    },
    error: {
      noGrade: "...",
      noPermission: "...",
      notFound: "...",
      alreadyReported: "...",
      cooldown: "...",
      noScoreFound: "...",
    },
    thread: {
      registerScore: "...",
      matchStart: "...",
      mentionMatchStart: "...",
    },
    buttons: {
      confirm: "...",
      deny: "...",
      continue: "...",
      stop: "...",
    },
    notify: {
      decayWarning: "...",
      decayStart: "...",
      unrankedHidden: "...",
    },
    stats: {
      title: "...",
      mostPlayed: "...",
      mostPosted: "...",
    }
  };
  