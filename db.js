// Version: 4.5_04_03_dbjs_cotw
const mysql = require('mysql2/promise');

// DB 연결 정보 설정
const pool = mysql.createPool({
  host: 'localhost',
  user: 'root',          // 사용자 계정 (보통 root)
  password: '003205',      // 사용자 비밀번호
  database: 'cotw_mmr',  // 사용할 DB명
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});

module.exports = pool;
