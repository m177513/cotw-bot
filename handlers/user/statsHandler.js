// Version: 4.5_04_02_005

const { getLocalizedText } = require('../lang/langUtil');

// 기준일 구하기
function getDateRange(type) {
  const now = new Date();
  let startDate;

  switch (type) {
    case 'monthly':
      startDate = new Date(now.getFullYear(), now.getMonth(), 1);
      break;
    case 'quarterly':
      const quarter = Math.floor(now.getMonth() / 3);
      startDate = new Date(now.getFullYear(), quarter * 3, 1);
      break;
    case 'all':
    default:
      startDate = new Date(2000, 0, 1); // 전체 기준
      break;
  }

  return startDate;
}

// 통계 생성 함수
async function generateStats({ db, type = 'monthly', category = 'match', topN = 5, locale = 'Korean' }) {
  const startDate = getDateRange(type);
  const t = (key) => getLocalizedText(key, locale);

  const collection = db.collection('matchLogs');
  const pipeline = [
    { $match: { type: category, timestamp: { $gte: startDate } } },
    { $group: { _id: '$userId', count: { $sum: 1 } } },
    { $sort: { count: -1 } },
    { $limit: topN },
  ];

  const result = await collection.aggregate(pipeline).toArray();

  if (result.length === 0) return t('stats.none');

  let message = `📊 ${t('stats.topUsers')} (${t(`stats.${type}`)} / ${t(`stats.${category}`)})\n`;
  result.forEach((user, index) => {
    message += `\n${index + 1}위: <@${user._id}> - ${user.count}회`;
  });

  return message;
}

module.exports = { generateStats };
