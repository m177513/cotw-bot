module.exports = {
  welcome: {
    greeting: "Welcome! Please select your language below.",
    gradeSelect: "Please select your game rank.",
    profileCreated: (grade, mmr) => `✅ Profile created!\nFinal grade: **${grade}**, initial MMR: **${mmr} points**.`,
    guideIntro: "💡 COTW MMR System Guide",
    guide: [
      "We use a **skill-based MMR system**.",
      "You can play against opponents of similar skill for fairer competition.",
      "- Even if you're not on Discord, you can receive **tier-specific @mentions**.",
      "- You can participate in **ranking events** using your MMR.",
      "- Casual matches are also welcome!",
      "",
      "📌 Essential Commands",
      "/mmr - Request an MMR match",
      "/registerscore - Submit match result",
      "/cancel - Cancel match queue",
      "",
      "📌 View all commands: /help or see the full guide.",
      "",
      "❗ Too many MMR alerts? Use `/setnotify` to turn them off."
    ].join('\n')
  },

  gradeOptions: {
    newface: "Just looking around! Haven't started yet.",
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
    alreadyRequested: "You've already requested a match.",
    searching: "🔍 Waiting for a match. Looking for a suitable opponent...",
    found: "✅ Match found! Opponent: {player}",
    repeatedOpponent: "You've matched with the same opponent 3 times. Continue?",
    declinedAndSearch: "Opponent declined. Continue searching?",
    matchEnded: "🔚 Match queue timed out. Please try again.",
    nicknameOption: "Would you like to display your nickname? (Y/N)",
    rejected: "❌ Your opponent declined the match.",
    retrySearch: "🔄 Searching for a new opponent...",
    timeout: "⌛ Time's up. Ending match queue."
  },

  thread: {
    registerScore: "Submit Score"
  },

  score: {
    confirm: "If the following information is correct, submit your score.",
    updated: "The score has been updated.",
    approved: "Correction request approved.",
    denied: "Correction request denied.",
    notFound: "No previous match found.",
    changeRequested: "Correction request submitted. Waiting for opponent's approval.",
    noActiveMatch: "❌ No active match found.",
    saved: "✅ Score saved. MMR has been updated.",
    notMatched: "❌ Score does not match the opponent's submission.",
    waitOpponent: "📨 Waiting for opponent's score. Will be auto-saved in 3 minutes.",
    autoSaved: "⏱️ Auto-saved after 3 minutes."
  },

  fix: {
    noHistory: "⚠️ No recent match history.",
    alreadyStarted: "⛔ A new match has already started. Cannot correct the previous one.",
    requestSent: "✅ Correction request sent. <@{{opponentId}}>'s approval is required.",
    dmRequest: "📩 <@{{userId}}> has requested a score correction. Approve it with /approvefix.",
    noRequest: "❌ No correction request to approve.",
    noPending: "No pending correction request.",
    approved: "✅ Correction approved. The requester has been notified.",
    dmApproved: "📩 Your correction was approved. Please re-submit your score using /registerscore.",
    rejected: "Correction request denied.",
    dmRejected: "<@{userId}> has denied your correction request.",
    matchMismatch: "Match records do not match."
  },

  notify: {
    on: "🔔 Match notifications enabled.",
    off: "🔕 Match notifications disabled.",
    decayWarning: "⚠️ You may lose MMR due to inactivity soon!",
    decayStart: "📉 Your MMR has decreased due to inactivity."
  },

  help: {
    title: "🆘 Full Command Guide",
    mmr: "/mmr - Request MMR match",
    score: "/registerscore - Submit match result",
    cancel: "/cancel - Cancel match queue",
    info: "/gameinfo - View current game status",
    alert: "/setnotify - Enable/disable MMR notifications",
    rank: "/ranking - View ranking",
    reset: "/initmmr - Resend welcome DM to user",
    correction: "/requestfix - Request match result correction",
    sentToDM: "📩 Help message has been sent via DM."
  },

  ranking: {
    title: "🏆 Ranking",
    monthly: "📅 Monthly Ranking",
    quarterly: "📊 Quarterly Ranking",
    allTime: "🌟 All-time Ranking"
  },

  error: {
    profileNotFound: "❗ No profile found. Please create one with /createprofile.",
    cannotPlaySelf: "⚠️ You cannot play against yourself.",
    drawNotAllowed: "⚠️ Draws cannot be registered.",
    default: "⚠️ An error occurred. Please try again later."
  },

  initmmr: {
    success: "📩 Welcome DM has been resent!",
    fail: "⚠️ Failed to send DM. Please check your DM settings."
  },

  stats: {
    title: "📊 Activity Stats",
    mostActive: "🕹️ Top 5 most MMR matches played",
    mostRequested: "📢 Top 5 most match requests made"
  },

  button: {
    requestMatch: "Request Match",
    confirm: "Confirm",
    deny: "Decline",
    continue: "Continue",
    stop: "Stop"
  },

  gameinfo: {
    none: "No registered game info.",
    yourGame: "Game",
    tier: "Tier",
    mmr: "MMR",
    title: "Users currently in match",
    casual: "Casual Match"
  },

  success: {
    waiting: "✅ **{username}** is now waiting for a match!"
  }
};
