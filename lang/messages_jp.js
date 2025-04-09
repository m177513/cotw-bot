module.exports = {
  welcome: {
    greeting: "ようこそ！下から言語を選択してください。",
    gradeSelect: "ゲームランクを選択してください。",
    profileCreated: (grade, mmr) => `✅ プロフィールが作成されました！\n最終ランク：**${grade}**、初期MMR：**${mmr}ポイント**です。`,
    guideIntro: "💡 COTW MMR システムガイド",
    guide: [
      "私たちは **実力ベースのMMRシステム** を使用しています。",
      "実力の近い相手と対戦でき、より公平なゲームが可能です。",
      "- Discordにいなくても、ランク別 **@メンション通知** が届きます。",
      "- MMRによって **ランキングイベント** にも参加できます。",
      "- カジュアルマッチも自由に楽しめます！",
      "",
      "📌 必須コマンド",
      "/mmr - MMRマッチ申請",
      "/registerscore - 試合結果を登録",
      "/cancel - マッチング待機をキャンセル",
      "",
      "📌 すべてのコマンドを見るには /help または完全ガイドをご確認ください。",
      "",
      "❗ 通知が多すぎる場合は `/setnotify` コマンドでオフにできます。"
    ].join('\n')
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
    alreadyRequested: "すでにマッチングを申請しています。",
    searching: "🔍 マッチング待機中です。適切な対戦相手を探しています…",
    found: "✅ マッチ完了！対戦相手: {player}",
    repeatedOpponent: "同じ相手と3回連続でマッチングしています。続行しますか？",
    declinedAndSearch: "相手がマッチを拒否しました。別の相手を探しますか？",
    matchEnded: "🔚 マッチ待機時間が終了しました。再度申請してください。",
    nicknameOption: "ニックネームを公開しますか？（Y/N）",
    rejected: "❌ 相手がマッチングを拒否しました。",
    retrySearch: "🔄 別の対戦相手を探しています…",
    timeout: "⌛ 時間切れのためマッチングを終了します。"
  },

  thread: {
    registerScore: "スコアを登録する"
  },

  score: {
    confirm: "以下の情報が正しければスコアを登録してください。",
    updated: "スコアが更新されました。",
    approved: "修正リクエストが承認されました。",
    denied: "修正リクエストが拒否されました。",
    notFound: "直前の試合情報が見つかりません。",
    changeRequested: "修正リクエストを送信しました。相手の承認を待っています。",
    noActiveMatch: "❌ 現在進行中のマッチはありません。",
    saved: "✅ スコアが保存され、MMRが反映されました。",
    notMatched: "❌ 相手が提出したスコアと一致しません。",
    waitOpponent: "📨 相手がスコアを提出するのを待っています。3分後に自動保存されます。",
    autoSaved: "⏱️ 3分経過により自動でスコアが保存されました。"
  },

  fix: {
    noHistory: "⚠️ 最近の試合履歴がありません。",
    alreadyStarted: "⛔ 次の試合がすでに開始されています。修正できません。",
    requestSent: "✅ スコア修正リクエストを送信しました。<@{{opponentId}}>の承認が必要です。",
    dmRequest: "📩 <@{{userId}}>さんがスコア修正を要求しています。/approvefix で承認してください。",
    noRequest: "❌ 現在承認する修正リクエストはありません。",
    noPending: "保留中の修正リクエストはありません。",
    approved: "✅ スコア修正を承認しました。",
    dmApproved: "📩 相手がスコア修正を承認しました。/registerscore で再提出してください。",
    rejected: "スコア修正リクエストを拒否しました。",
    dmRejected: "<@{userId}>さんが修正リクエストを拒否しました。",
    matchMismatch: "両者の試合記録が一致しません。"
  },

  notify: {
    on: "🔔 マッチ通知をオンにしました。",
    off: "🔕 マッチ通知をオフにしました。",
    decayWarning: "⚠️ 活動がないため、間もなくMMRが減少する可能性があります！",
    decayStart: "📉 長期間活動がなかったため、MMRが減少しました。"
  },

  help: {
    title: "🆘 コマンド案内",
    mmr: "/mmr - MMRマッチ申請",
    score: "/registerscore - 試合結果登録",
    cancel: "/cancel - マッチ申請キャンセル",
    info: "/gameinfo - 現在の対戦状況を見る",
    alert: "/setnotify - 通知オン/オフ",
    rank: "/ranking - ランキングを見る",
    reset: "/initmmr - ウェルカムDM再送信",
    correction: "/requestfix - スコア修正リクエスト",
    sentToDM: "📩 ヘルプメッセージをDMで送信しました。"
  },

  ranking: {
    title: "🏆 ランキング",
    monthly: "📅 今月のランキング",
    quarterly: "📊 四半期ランキング",
    allTime: "🌟 通算ランキング"
  },

  error: {
    profileNotFound: "❗ プロフィールが見つかりません。まず /createprofile で作成してください。",
    cannotPlaySelf: "⚠️ 自分との試合は登録できません。",
    drawNotAllowed: "⚠️ 引き分けはスコアとして登録できません。",
    default: "⚠️ エラーが発生しました。しばらくしてから再試行してください。"
  },

  initmmr: {
    success: "📩 ウェルカムDMを再送信しました！",
    fail: "⚠️ DM送信に失敗しました。DMの設定を確認してください。"
  },

  stats: {
    title: "📊 活動統計",
    mostActive: "🕹️ MMR試合数 TOP 5",
    mostRequested: "📢 マッチ申請数 TOP 5"
  },

  button: {
    requestMatch: "マッチ申請",
    confirm: "確認",
    deny: "拒否",
    continue: "続行",
    stop: "停止"
  },

  gameinfo: {
    none: "登録されたゲーム情報がありません。",
    yourGame: "ゲーム",
    tier: "ランク",
    mmr: "MMRスコア",
    title: "現在マッチ中のユーザー",
    casual: "カジュアルマッチ"
  },

  success: {
    waiting: "✅ **{username}**さんがマッチ待機中です！"
  }
};
