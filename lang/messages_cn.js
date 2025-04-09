// Version: 4.5_04_09_final
module.exports = {
  welcome: {
    greeting: "欢迎！请选择下方的语言。",
    gradeSelect: "请选择您的游戏段位。",
    profileCreated: (grade, mmr) => `✅ 个人资料已创建！\n最终段位：**${grade}**，初始MMR：**${mmr}分**。`,
    guideIntro: "💡 COTW MMR 系统指南",
    guide: [
      "我们采用**基于实力的MMR匹配系统**。",
      "您可以与相似实力的对手进行更公平的对战。",
      "- 即使不使用 Discord，也能通过段位角色接收匹配通知。",
      "- 使用MMR可参加**排行榜活动**。",
      "- 当然也欢迎进行休闲对战！",
      "",
      "📌 常用指令",
      "/mmr - 发起 MMR 对战请求",
      "/registerscore - 提交比赛结果",
      "/cancel - 取消等待匹配",
      "",
      "📌 查看所有指令：使用 /help 或查看完整指南",
      "",
      "❗ 通知太多？请使用 `/setnotify` 关闭匹配提醒。",
    ].join('\n'),
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
    registerScore: "提交分数",
  },

  score: {
    confirm: "如果以下信息正确，请提交分数。",
    updated: "分数已更新。",
    approved: "更正请求已通过。",
    denied: "更正请求被拒绝。",
    notFound: "未找到上一场比赛数据。",
    changeRequested: "已提交更正请求，等待对手确认。",
    noActiveMatch: "❌ 当前没有进行中的比赛。",
    saved: "✅ 分数已保存，MMR已更新。",
    notMatched: "❌ 与对手的提交分数不一致。",
    waitOpponent: "📨 等待对手提交分数。3分钟后将自动保存。",
    autoSaved: "⏱️ 已自动保存分数（3分钟）。"
  },

  fix: {
    noHistory: "⚠️ 没有最近比赛记录。",
    alreadyStarted: "⛔ 已开始下一场比赛，无法更正。",
    requestSent: "✅ 已发送更正请求，需 <@{{opponentId}}> 确认。",
    dmRequest: "📩 <@{{userId}}> 请求更正上一场比赛的分数。请使用 /approvefix 确认。",
    noRequest: "❌ 当前没有待确认的更正请求。",
    approved: "✅ 更正请求已批准，已通知对方。",
    dmApproved: "📩 对手已批准您的更正请求。请使用 /registerscore 重新提交分数。"
  },

  notify: {
    on: "🔔 匹配通知已开启。",
    off: "🔕 匹配通知已关闭。",
    decayWarning: "⚠️ 长时间未活动，MMR可能即将下降！",
    decayStart: "📉 由于长时间未活动，您的MMR已下降。"
  },

  help: {
    title: "🆘 指令说明与帮助",
    mmr: "/mmr - 发起匹配请求",
    score: "/registerscore - 提交比赛分数",
    cancel: "/cancel - 取消等待匹配",
    info: "/info - 查看当前比赛",
    alert: "/setnotify - 匹配提醒开关",
    rank: "/ranking - 查看排行榜",
    reset: "/initmmr - 重新发送欢迎私信",
    correction: "/requestfix - 请求更正分数"
  },

  ranking: {
    title: "🏆 排行榜",
    monthly: "📅 本月排行榜",
    quarterly: "📊 本季度排行榜",
    allTime: "🌟 总排行榜"
  },

  error: {
    profileNotFound: "❗ 未找到个人资料。请先使用 /createprofile 创建。",
    cannotPlaySelf: "⚠️ 无法和自己对战。",
    drawNotAllowed: "⚠️ 平局不能提交为分数。",
    default: "⚠️ 发生错误，请稍后再试。"
  },

  initmmr: {
    success: "📩 欢迎私信已重新发送！",
    fail: "⚠️ 无法发送私信，请检查您的设置。"
  },

  stats: {
    title: "📊 活动统计",
    mostActive: "🕹️ 最活跃的前五名 MMR 玩家",
    mostRequested: "📢 最常请求匹配的前五名玩家"
  },

  button: {
    requestMatch: "申请匹配",
    confirm: "确认",
    deny: "拒绝",
    continue: "继续",
    stop: "停止"
  },

  success: {
    waiting: "✅ **{username}** 正在等待匹配中！",
  }
};
