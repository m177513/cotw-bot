// Version: 4.5_04_09_final
module.exports = {
  welcome: {
    greeting: "ようこそ！下のリストから言語を選択してください。",
    gradeSelect: "ゲームのランクを選んでください。",
    profileCreated: (grade, mmr) => `✅ プロフィールが作成されました！\n最終ランク：**${grade}**、初期MMR：**${mmr}ポイント**です。`,
    guideIntro: "💡 COTW MMRシステムガイド",
    guide: [
      "私たちは**スキルベースのMMRシステム**を採用しています。",
      "実力の近い相手と対戦でき、より公平なゲームが楽しめます。",
      "- Discordを利用しなくても、ランク別の@メンション通知でマッチングを受け取れます。",
      "- MMRを通じて**ランキングイベント**にも参加可能です。",
      "- カジュアルマッチも自由に行えます！",
      "",
      "📌 必須コマンド",
      "/mmr - MMRマッチ申請",
      "/registerscore - 試合結果を登録",
      "/cancel - マッチング待機をキャンセル",
      "",
      "📌 全コマンド一覧: /helpまたは完全ガイドをご覧ください。",
      "",
      "❗ 通知が多すぎる場合、`/setnotify` で通知をオフにできます。",
    ].join('\n'),
  },

  gradeOptions: {
    newface: "見学中です！まだ始めていません",
    legendary: "レジェンダリー・ウルフ",
    sss: "SSSランク",
    ss: "SSランク",
    s: "Sランク",
    a: "Aランク",
    b: "Bランク",
    c: "Cランク",
    rookie: "ルーキー",
    new_face: "ニューフェイス"
  },

  match: {
    alreadyRequested: "すでにマッチングを申請済みです。",
    searching: "🔍 対戦相手を探しています…",
    found: "✅ マッチング成立！対戦相手: {player}",
    repeatedOpponent: "同じ相手と3回連続でマッチングしました。続行しますか？",
    declinedAndSearch: "対戦が拒否されました。別の相手を探しますか？",
    matchEnded: "🔚 マッチングが終了しました。再度お試しください。",
    nicknameOption: "ニックネームを表示しますか？ (Y/N)",
    rejected: "❌ 対戦相手がマッチングを拒否しました。",
    retrySearch: "🔄 別の相手を探しています…",
    timeout: "⌛ マッチングが時間切れになりました。"
  },

  thread: {
    registerScore: "スコアを登録する",
  },

  score: {
    confirm: "以下の情報が正しければスコアを登録してください。",
    updated: "スコアが更新されました。",
    approved: "修正リクエストが承認されました。",
    denied: "修正リクエストが拒否されました。",
    notFound: "直前の試合情報が見つかりません。",
    changeRequested: "修正リクエストを送信しました。対戦相手の承認待ちです。",
    noActiveMatch: "❌ 現在進行中のマッチはありません。",
    saved: "✅ スコアが保存されました。MMRが更新されました。",
    notMatched: "❌ 相手の提出スコアと一致しません。",
    waitOpponent: "📨 相手がスコアを提出するまで待機します。3分後に自動保存されます。",
    autoSaved: "⏱️ 3分経過のため自動保存されました。"
  },

  fix: {
    noHistory: "⚠️ 直近の試合履歴がありません。",
    alreadyStarted: "⛔ すでに次の試合が開始したため修正できません。",
    requestSent: "✅ スコア修正リクエストを送信しました。<@{{opponentId}}>の承認が必要です。",
    dmRequest: "📩 <@{{userId}}> さんが直前の試合スコア修正を要求しています。承認するには /approvefix を使用してください。",
    noRequest: "❌ 現在承認待ちの修正リクエストはありません。",
    approved: "✅ スコア修正を承認しました。申請者に通知済みです。",
    dmApproved: "📩 相手がスコア修正を承認しました。/registerscore で再登録してください。"
  },

  notify: {
    on: "🔔 マッチング通知をオンにしました。",
    off: "🔕 マッチング通知をオフにしました。",
    decayWarning: "⚠️ 活動がないため、間もなくMMRが下がる可能性があります！",
    decayStart: "📉 長期間活動がなかったため、MMRが下がりました。"
  },

  help: {
    title: "🆘 コマンド一覧とヘルプ",
    mmr: "/mmr - マッチング申請",
    score: "/registerscore - 試合結果登録",
    cancel: "/cancel - マッチ待機をキャンセル",
    info: "/info - 現在のマッチ確認",
    alert: "/setnotify - 通知オン/オフ",
    rank: "/ranking - ランキング確認",
    reset: "/initmmr - ウェルカムDM再送信",
    correction: "/requestfix - スコア修正申請"
  },

  ranking: {
    title: "🏆 ランキング",
    monthly: "📅 今月のランキング",
    quarterly: "📊 四半期ランキング",
    allTime: "🌟 総合ランキング"
  },

  error: {
    profileNotFound: "❗ プロフィールが存在しません。まず /createprofile で作成してください。",
    cannotPlaySelf: "⚠️ 自分自身との試合は登録できません。",
    drawNotAllowed: "⚠️ 引き分けの結果は登録できません。",
    default: "⚠️ エラーが発生しました。後ほど再度お試しください。"
  },

  initmmr: {
    success: "📩 ウェルカムDMを再送信しました！",
    fail: "⚠️ DM送信に失敗しました。設定を確認してください。"
  },

  stats: {
    title: "📊 活動統計",
    mostActive: "🕹️ MMRプレイ回数TOP 5",
    mostRequested: "📢 マッチング申請回数TOP 5"
  },

  button: {
    requestMatch: "マッチング申請",
    confirm: "確認",
    deny: "拒否",
    continue: "続ける",
    stop: "停止"
  },

  success: {
    waiting: "✅ **{username}**さんがマッチングを待機中です！",
  }
};
