// Version: 4.5_04_09_final
module.exports = {
  welcome: {
    greeting: "Welcome! Please choose your language below.",
    gradeSelect: "Please select your game rank.",
    profileCreated: (grade, mmr) => `✅ Profile created!\nFinal grade: **${grade}**, initial MMR: **${mmr} points**.`,
    guideIntro: "💡 COTW MMR System Guide",
    guide: [
      "We use a **skill-based MMR system**.",
      "You can play matches against opponents of similar skill for fairer games.",
      "- Even without Discord, you can receive match alerts through rank-specific @mentions.",
      "- You can participate in **ranking events** using your MMR.",
      "- Casual matches are also freely available!",
      "",
      "📌 Essential Commands",
      "/mmr - Request an MMR match",
      "/registerscore - Submit match results",
      "/cancel - Cancel match queue",
      "",
      "📌 See all commands: /help or view the full guide.",
      "",
      "❗ Receiving too many MMR alerts? Use `/setnotify` to disable notifications.",
    ].join('\n'),
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
    searching: "🔍 Searching for an opponent...",
    found: "✅ Match found! Opponent: {player}",
    repeatedOpponent: "Matched with the same opponent 3 times. Continue?",
    declinedAndSearch: "Your opponent declined. Search again?",
    matchEnded: "🔚 Match request timed out. Please try again.",
    nicknameOption: "Would you like to display your nickname? (Y/N)",
    rejected: "❌ Your opponent rejected the match.",
    retrySearch: "🔄 Searching for a new opponent...",
    timeout: "⌛ Matchmaking timed out. Ending match."
  },

  thread: {
    registerScore: "Submit Score",
  },

  score: {
    confirm: "If the following information is correct, submit your score.",
    updated: "Score has been updated.",
    approved: "Correction request approved.",
    denied: "Correction request denied.",
    notFound: "No previous match data found.",
    changeRequested: "Correction request submitted. Awaiting opponent's approval.",
    noActiveMatch: "❌ You don't have an active match.",
    saved: "✅ Score saved and MMR updated.",
    notMatched: "❌ Submitted scores do not match opponent's.",
    waitOpponent: "📨 Waiting for your opponent to submit scores. Will auto-save after 3 minutes.",
    autoSaved: "⏱️ Auto-saved after 3 minutes."
  },

  fix: {
    noHistory: "⚠️ No recent match history found.",
    alreadyStarted: "⛔ Next match already started; can't apply correction.",
    requestSent: "✅ Correction request sent. Approval needed from <@{{opponentId}}>.",
    dmRequest: "📩 <@{{userId}}> requested a score correction. Approve using /approvefix command.",
    noRequest: "❌ No pending correction requests.",
    approved: "✅ Correction request approved and requester notified.",
    dmApproved: "📩 Your opponent approved the correction. Please resubmit scores using /registerscore."
  },

  notify: {
    on: "🔔 Match notifications turned ON.",
    off: "🔕 Match notifications turned OFF.",
    decayWarning: "⚠️ Your MMR may decrease soon due to inactivity!",
    decayStart: "📉 Your MMR has decreased due to prolonged inactivity."
  },

  help: {
    title: "🆘 Command List & Help",
    mmr: "/mmr - Request a match",
    score: "/registerscore - Submit match result",
    cancel: "/cancel - Cancel match queue",
    info: "/info - View current matches",
    alert: "/setnotify - Turn MMR notifications ON/OFF",
    rank: "/ranking - Check rankings",
    reset: "/initmmr - Resend welcome DM",
    correction: "/requestfix - Request score correction"
  },

  ranking: {
    title: "🏆 Ranking",
    monthly: "📅 Monthly Ranking",
    quarterly: "📊 Quarterly Ranking",
    allTime: "🌟 All-time Ranking"
  },

  error: {
    profileNotFound: "❗ Profile not found. Please create one with /createprofile first.",
    cannotPlaySelf: "⚠️ You can't register a match against yourself.",
    drawNotAllowed: "⚠️ Draw matches can't be submitted.",
    default: "⚠️ An error occurred. Please try again shortly."
  },

  initmmr: {
    success: "📩 Welcome DM resent!",
    fail: "⚠️ Failed to send DM. Check your DM settings."
  },

  stats: {
    title: "📊 Activity Stats",
    mostActive: "🕹️ Top 5 most active MMR players",
    mostRequested: "📢 Top 5 players with the most match requests"
  },

  button: {
    requestMatch: "Request Match",
    confirm: "Confirm",
    deny: "Deny",
    continue: "Continue",
    stop: "Stop"
  },

  success: {
    waiting: "✅ **{username}** is now waiting for a match!",
  }
};
