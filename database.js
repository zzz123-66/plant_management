// 引入 MySQL 模組
const mysql = require('mysql');

// 建立 MySQL 連線
const db = mysql.createConnection({
    host: 'localhost',      // 資料庫主機
    user: 'root',           // 使用者名稱
    password: '950831',           // 使用者密碼（根據您的設定填寫）
    database: 'plant_management', // 要使用的資料庫名稱
    port: 3306              // MySQL 的預設埠號
});

// 連接至資料庫
db.connect((err) => {
    if (err) {
        console.error('無法連接至資料庫:', err);
        throw err;
    }
    console.log('已成功連接至 MySQL 資料庫');
});

// 匯出資料庫連線，讓其他模組可以使用
module.exports = db;



// 導入資料庫連線
const db = require('./database'); // 假設 database.js 與 server.js 在同一目錄

// 使用 db 進行資料庫操作
db.query('SELECT * FROM plants', (err, results) => {
    if (err) throw err;
    console.log(results);
});
