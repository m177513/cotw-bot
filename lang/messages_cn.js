module.exports = {
  welcome: {
    greeting: "欢迎！请选择下方的语言。",
    gradeSelect: "请选择您的游戏段位。",
    profileCreated: (grade, mmr) => `✅ 个人资料已创建！\n最终段位：**${grade}**，初始MMR：**${mmr}分**。`,
    guideIntro: "💡 COTW MMR 系统指南",
    guide: [
      "我们采用 **基于实力的MMR匹配系统**。",
      "您可以与相近水平的对手进行更公平的对战。",
      "- 即使不在Discord，也能通过段位别的@通知了解匹配情况。",
      "- MMR还可用于参加**排行榜活动**。",
      "- 欢迎进行休闲对战！",
      "",
      "📌 常用指令",
      "/mmr - 发起MMR对战请求",
      "/registerscore - 提交比赛结果",
      "/cancel - 取消匹配等待",
      "",
      "📌 查看全部指令：/help 或阅读完整指南",
      "",
      "❗ 通知过多？使用 `/setnotify` 关闭匹配提醒。"
    ].join('\n')
  },

  gradeOptions: {
    newface: "只是来看看，还没开始～",
    legendary: "传说狼",
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
    alreadyRequested: "您已发起匹配请求。",
    searching: "🔍 正在寻找合适的对手…",
    found: "✅ 匹配成功！对手：{player}",
    repeatedOpponent: "您已连续3次匹配到相同的对手。是否继续？",
    declinedAndSearch: "对手已拒绝。是否重新寻找？",
    matchEnded: "🔚 匹配已超时。请重新申请。",
    nicknameOption: "是否显示您的昵称？（Y/N）",
    rejected: "❌ 对手已拒绝匹配。",
    retrySearch: "🔄 正在寻找新对手…",
    timeout: "⌛ 匹配超时，结束本次匹配。"
  },

  thread: {
    registerScore: "提交分数"
  },

  score: {
    confirm: "如果以下信息正确，请提交分数。",
    updated: "分数已更新。",
    approved: "更正请求已批准。",
    denied: "更正请求被拒绝。",
    notFound: "未找到上一场比赛数据。",
    changeRequested: "更正请求已提交，等待对手确认。",
    noActiveMatch: "❌ 当前没有进行中的比赛。",
    saved: "✅ 分数已保存，MMR已更新。",
    notMatched: "❌ 与对手提交的分数不一致。",
    waitOpponent: "📨 等待对手提交分数。3分钟后将自动保存。",
    autoSaved: "⏱️ 已自动保存（3分钟）。"
  },

  fix: {
    noHistory: "⚠️ 没有最近的比赛记录。",
    alreadyStarted: "⛔ 已开始下一场比赛，无法更正。",
    requestSent: "✅ 更正请求已发送，需要 <@{{opponentId}}> 的确认。",
    dmRequest: "📩 <@{{userId}}> 请求更正上一场比赛的分数。请使用 /approvefix 确认。",
    noRequest: "❌ 当前没有待确认的更正请求。",
    noPending: "没有待处理的更正请求。",
    approved: "✅ 更正请求已批准，已通知对方。",
    dmApproved: "📩 对手已批准您的更正请求。请使用 /registerscore 重新提交分数。",
    rejected: "已拒绝更正请求。",
    dmRejected: "<@{userId}> 已拒绝你的更正请求。",
    matchMismatch: "双方比赛记录不一致。"
  },

  notify: {
    on: "🔔 匹配通知已开启。",
    off: "🔕 匹配通知已关闭。",
    decayWarning: "⚠️ 长时间未活动，MMR可能即将下降！",
    decayStart: "📉 由于长时间未活动，MMR已下降。"
  },

  help: {
    title: "🆘 指令说明与帮助",
    mmr: "/mmr - 发起匹配请求",
    score: "/registerscore - 提交比赛分数",
    cancel: "/cancel - 取消等待匹配",
    info: "/gameinfo - 查看当前比赛",
    alert: "/setnotify - 匹配提醒开关",
    rank: "/ranking - 查看排行榜",
    reset: "/initmmr - 重新发送欢迎私信",
    correction: "/requestfix - 请求更正分数",
    sentToDM: "📩 已通过私信发送帮助信息。"
  },

  ranking: {
    title: "🏆 排行榜",
    monthly: "📅 本月排行榜",
    quarterly: "📊 本季度排行榜",
    allTime: "🌟 总排行榜"
  },

  error: {
    profileNotFound: "❗ 未找到个人资料。请先使用 /createprofile 创建。",
    cannotPlaySelf: "⚠️ 无法与自己对战。",
    drawNotAllowed: "⚠️ 平局无法作为分数提交。",
    default: "⚠️ 发生错误，请稍后再试。"
  },

  initmmr: {
    success: "📩 欢迎私信已重新发送！",
    fail: "⚠️ 无法发送私信，请检查设置。"
  },

  stats: {
    title: "📊 活动统计",
    mostActive: "🕹️ 最活跃的前五名MMR玩家",
    mostRequested: "📢 最多匹配请求的前五名玩家"
  },

  button: {
    requestMatch: "发起匹配",
    confirm: "确认",
    deny: "拒绝",
    continue: "继续",
    stop: "停止"
  },

  gameinfo: {
    none: "没有注册的游戏信息。",
    yourGame: "游戏",
    tier: "段位",
    mmr: "MMR分数",
    title: "当前匹配中的用户",
    casual: "休闲对战"
  },

  success: {
    waiting: "✅ **{username}** 正在等待匹配！"
  }
};
