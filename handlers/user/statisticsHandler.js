// Version: 4.5_04_03_001

function getTopPlayersByMMR(matches, limit = 5) {
    const scoreMap = {};
  
    for (const match of matches) {
      const { winner, loser } = match;
      if (!scoreMap[winner]) scoreMap[winner] = 0;
      scoreMap[winner] += 1;
    }
  
    return Object.entries(scoreMap)
      .sort((a, b) => b[1] - a[1])
      .slice(0, limit)
      .map(([id, count]) => ({ id, count }));
  }
  
  function getTopRequesters(matchLogs, limit = 5) {
    const requestMap = {};
  
    for (const log of matchLogs) {
      const { requester } = log;
      if (!requestMap[requester]) requestMap[requester] = 0;
      requestMap[requester]++;
    }
  
    return Object.entries(requestMap)
      .sort((a, b) => b[1] - a[1])
      .slice(0, limit)
      .map(([id, count]) => ({ id, count }));
  }
  
  module.exports = {
    getTopPlayersByMMR,
    getTopRequesters
  };
  