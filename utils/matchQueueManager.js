// Version: 4_02_01_matchQueueManager

const matchQueue = {
    MMR: [],
    CASUAL: [],
  };
  
  function addToQueue(userId, matchType = 'MMR') {
    if (!matchQueue[matchType]) matchQueue[matchType] = [];
    if (!matchQueue[matchType].includes(userId)) {
      matchQueue[matchType].push(userId);
    }
  }
  
  function removeFromQueue(userId, matchType = 'MMR') {
    if (!matchQueue[matchType]) return;
    matchQueue[matchType] = matchQueue[matchType].filter(id => id !== userId);
  }
  
  function getQueue(matchType = 'MMR') {
    return matchQueue[matchType] || [];
  }
  
  function isInQueue(userId, matchType = 'MMR') {
    return matchQueue[matchType]?.includes(userId);
  }
  
  function clearQueue(matchType = 'MMR') {
    matchQueue[matchType] = [];
  }
  
  module.exports = {
    addToQueue,
    removeFromQueue,
    getQueue,
    isInQueue,
    clearQueue,
  };
  