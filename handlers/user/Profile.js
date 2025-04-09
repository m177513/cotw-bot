// Version: 3_28_11

const mongoose = require('mongoose');

const profileSchema = new mongoose.Schema({
  userId: { type: String, required: true, unique: true },
  lang: { type: String, default: 'Korean' },
  region: { type: String, default: 'KR' },
  grade: { type: String, default: 'New Face' },
  mmr: { type: Number, default: 8500 },
  recentOpponents: { type: [String], default: [] },
  lastMatchTime: { type: Date, default: Date.now },
});

const Profile = mongoose.model('Profile', profileSchema);

module.exports = Profile;
