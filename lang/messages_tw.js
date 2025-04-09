module.exports = {
  welcome: {
    greeting: "歡迎！請從下方選擇語言。",
    gradeSelect: "請選擇您的遊戲段位。",
    profileCreated: (grade, mmr) => `✅ 個人資料已建立！\n最終段位：**${grade}**，初始MMR：**${mmr}分**。`,
    guideIntro: "💡 COTW MMR 系統指南",
    guide: [
      "我們使用 **實力導向的MMR配對系統**。",
      "您可以與實力相近的對手進行更公平的對戰。",
      "- 即使不使用 Discord，也能透過段位身分接收配對通知。",
      "- 使用 MMR 可參與**排行榜活動**。",
      "- 當然也可以自由進行休閒對戰！",
      "",
      "📌 常用指令",
      "/mmr - 發起 MMR 對戰請求",
      "/registerscore - 提交比賽結果",
      "/cancel - 取消等待配對",
      "",
      "📌 查看全部指令：使用 /help 或開啟完整指南",
      "",
      "❗ 通知太多？可使用 `/setnotify` 關閉提醒。"
    ].join('\n')
  },

  gradeOptions: {
    newface: "只是來看看，尚未開始～",
    legendary: "傳說之狼",
    sss: "SSS段",
    ss: "SS段",
    s: "S段",
    a: "A段",
    b: "B段",
    c: "C段",
    rookie: "新手",
    new_face: "新面孔"
  },

  match: {
    alreadyRequested: "您已發送配對請求。",
    searching: "🔍 正在尋找合適的對手…",
    found: "✅ 配對成功！對手：{player}",
    repeatedOpponent: "您已連續三次與同一位對手配對。是否繼續？",
    declinedAndSearch: "對手已拒絕。要重新搜尋嗎？",
    matchEnded: "🔚 配對逾時，請重新申請。",
    nicknameOption: "是否顯示您的暱稱？（Y/N）",
    rejected: "❌ 對手拒絕了本次配對。",
    retrySearch: "🔄 正在重新尋找對手…",
    timeout: "⌛ 配對逾時，結束此次配對。"
  },

  thread: {
    registerScore: "提交分數"
  },

  score: {
    confirm: "如果以下資訊正確，請提交您的分數。",
    updated: "分數已更新。",
    approved: "更正請求已核准。",
    denied: "更正請求被拒絕。",
    notFound: "未找到上一場比賽記錄。",
    changeRequested: "已發送更正請求，等待對手確認。",
    noActiveMatch: "❌ 目前無進行中的比賽。",
    saved: "✅ 分數已儲存，MMR 已更新。",
    notMatched: "❌ 您的分數與對手不一致。",
    waitOpponent: "📨 等待對手提交分數。將於 3 分鐘後自動儲存。",
    autoSaved: "⏱️ 已自動儲存（3 分鐘）分數。"
  },

  fix: {
    noHistory: "⚠️ 無近期比賽記錄。",
    alreadyStarted: "⛔ 下一場比賽已開始，無法更正。",
    requestSent: "✅ 已發送更正請求，需要 <@{{opponentId}}> 的確認。",
    dmRequest: "📩 <@{{userId}}> 請求更正上一場比賽的分數。請使用 /approvefix 進行確認。",
    noRequest: "❌ 目前無待處理的更正請求。",
    noPending: "沒有待處理的更正請求。",
    approved: "✅ 更正請求已通過，已通知對方。",
    dmApproved: "📩 對手已同意您的更正請求。請使用 /registerscore 重新提交分數。",
    rejected: "更正請求已被拒絕。",
    dmRejected: "<@{userId}> 已拒絕您的更正請求。",
    matchMismatch: "雙方比賽紀錄不一致。"
  },

  notify: {
    on: "🔔 配對通知已開啟。",
    off: "🔕 配對通知已關閉。",
    decayWarning: "⚠️ 長時間未活動，MMR 可能即將下降！",
    decayStart: "📉 因長時間未活動，MMR 已下降。"
  },

  help: {
    title: "🆘 指令列表與說明",
    mmr: "/mmr - 發送配對請求",
    score: "/registerscore - 提交比賽結果",
    cancel: "/cancel - 取消等待配對",
    info: "/gameinfo - 查看目前比賽狀況",
    alert: "/setnotify - 配對提醒開關",
    rank: "/ranking - 查看排行榜",
    reset: "/initmmr - 重新發送歡迎訊息",
    correction: "/requestfix - 請求更正分數",
    sentToDM: "📩 幫助訊息已透過私訊發送。"
  },

  ranking: {
    title: "🏆 排行榜",
    monthly: "📅 本月排行榜",
    quarterly: "📊 本季度排行榜",
    allTime: "🌟 全時段排行榜"
  },

  error: {
    profileNotFound: "❗ 未找到個人資料。請使用 /createprofile 建立。",
    cannotPlaySelf: "⚠️ 無法與自己進行比賽。",
    drawNotAllowed: "⚠️ 平手不能作為分數提交。",
    default: "⚠️ 發生錯誤，請稍後再試一次。"
  },

  initmmr: {
    success: "📩 歡迎訊息已重新傳送！",
    fail: "⚠️ 無法傳送私訊，請檢查您的設定。"
  },

  stats: {
    title: "📊 活動統計",
    mostActive: "🕹️ MMR 活動最多的前五位使用者",
    mostRequested: "📢 發送配對請求最多的前五位使用者"
  },

  button: {
    requestMatch: "申請配對",
    confirm: "確認",
    deny: "拒絕",
    continue: "繼續",
    stop: "停止"
  },

  gameinfo: {
    none: "尚未註冊遊戲資料。",
    yourGame: "遊戲",
    tier: "段位",
    mmr: "MMR 分數",
    title: "目前正在配對的使用者",
    casual: "休閒對戰"
  },

  success: {
    waiting: "✅ **{username}** 正在等待配對中！"
  }
};
