const express = require('express');
const mysql = require('mysql');
const path = require('path');
const cors = require('cors');
const app = express();
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));
app.use(cors());


// 設定 MySQL 連線
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '950831',
    database: 'plant_management'
});

db.connect(err => {
    if (err) throw err;
    console.log('已成功連接到 MySQL 資料庫');
});

// 提供靜態檔案
app.use(express.static(path.join(__dirname, 'public')));


// 新增植物資料
app.post('/api/add-plant', (req, res) => {
    const { name, species, water_requirement, notes } = req.body;
    const query = 'INSERT INTO plants (name, species, water_requirement, notes) VALUES (?, ?, ?, ?)';
    db.query(query, [name, species, water_requirement, notes || null], (err, result) => {
        if (err) return res.status(500).json({ message: '資料庫錯誤' });
        res.status(200).json({ message: '植物資料已成功新增' });
    });
});

// 土壤監測資料
app.post('/api/add-soil', (req, res) => {
    const { plant_id, moisture_level, ph_level, soil_type  } = req.body;
    const query = 'INSERT INTO soil_monitoring (plant_id, moisture_level, ph_level, soil_type) VALUES (?, ?, ?, ?)';
    db.query(query, [plant_id, moisture_level, ph_level, soil_type || null], (err, result) => {
        if (err) return res.status(500).json({ message: '資料庫錯誤' });
        res.status(200).json({ message: '土壤監測資料已成功新增' });
    });
});

// 環境監測資料
app.post('/api/add-environment', (req, res) => {
    const { plant_id, temperature, humidity } = req.body;
    const query = 'INSERT INTO environment_monitoring (plant_id, temperature, humidity) VALUES (?, ?, ?)';
    db.query(query, [plant_id, temperature, humidity], (err, result) => {
        if (err) return res.status(500).json({ message: '資料庫錯誤' });
        res.status(200).json({ message: '環境監測資料已成功新增' });
    });
});

// 施肥紀錄
app.post('/api/add-fertilization', (req, res) => {
    const { plant_id, fertilization_needed, fertilization_amount, scheduled_time } = req.body;
    const query = `
        INSERT INTO fertilization_schedule (plant_id, fertilization_needed, fertilization_amount, scheduled_time)
        VALUES (?, ?, ?, ?)
    `;
    db.query(query, [plant_id, fertilization_needed, fertilization_amount, scheduled_time], (err, result) => {
        if (err) {
            console.error(err);
            return res.status(500).json({ message: '資料庫錯誤' });
        }
        res.status(200).json({ message: '施肥記錄新增成功！' });
    });
});


// 啟動伺服器
app.listen(3000, () => {
    console.log('伺服器運行在 http://localhost:3000');
});
