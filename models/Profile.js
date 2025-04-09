// Version: 4.5_04_02_001

const mongoose = require('mongoose');

const profileSchema = new mongoose.Schema({
  userId: { type: String, required: true, unique: true },
  username: { type: String, required: true },
  lang: { type: String, default: 'Korean' },
  grade: { type: String, default: 'New Face' },
  mmr: { type: Number, default: 8000 },
  win: { type: Number, default: 0 },
  lose: { type: Number, default: 0 },
  lastMMRDate: { type: Date, default: null },
  createdAt: { type: Date, default: Date.now },
  recentOpponents: [{ type: String }],
  notifications: {
    mention: { type: Boolean, default: true }
  },
  decay: {
    bankedDays: { type: Number, default: 0 },
    lastDecayDate: { type: Date, default: null }
  }
});

module.exports = mongoose.model('Profile', profileSchema);
