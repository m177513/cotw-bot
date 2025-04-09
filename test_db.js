// Version: 4.5_04_03_testdb_001
const db = require('./db');

async function testConnection() {
  try {
    const [rows] = await db.query('SELECT * FROM profiles');
    console.log('✅ DB 연결 성공! 프로필 목록:');
    console.table(rows); // 콘솔에 유저 데이터 표시
  } catch (error) {
    console.error('❌ DB 연결 실패:', error.message);
  }
}

testConnection();
