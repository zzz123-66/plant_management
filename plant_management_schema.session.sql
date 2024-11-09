-- 建立資料庫 plant_management 並使用該資料庫
DROP DATABASE IF EXISTS plant_management;

CREATE DATABASE IF NOT EXISTS plant_management;
USE plant_management;

-- 建立 plants 表格，用於儲存植物的基本資料
CREATE TABLE IF NOT EXISTS plants (
    plant_id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(50) NOT NULL,
    species VARCHAR(50),
    water_requirement DECIMAL(5, 2),
    fertilizer_requirement DECIMAL(5, 2),
    sunlight_requirement VARCHAR(20),
    growth_stage VARCHAR(20),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- 建立 soil_monitoring 表格，用於儲存土壤的監測資料
CREATE TABLE IF NOT EXISTS soil_monitoring (
    soil_id INT AUTO_INCREMENT PRIMARY KEY,
    plant_id INT,
    moisture_level DECIMAL(5, 2),
    ph_level DECIMAL(4, 2),
    nutrient_level DECIMAL(5, 2),
    recorded_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (plant_id) REFERENCES plants(plant_id)
);

-- 建立 environment_monitoring 表格，用於記錄環境監測數據
CREATE TABLE IF NOT EXISTS environment_monitoring (
    environment_id INT AUTO_INCREMENT PRIMARY KEY,
    plant_id INT,
    temperature DECIMAL(4, 2),
    humidity DECIMAL(4, 2),
    light_intensity DECIMAL(6, 2),
    recorded_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (plant_id) REFERENCES plants(plant_id)
);

-- 建立 water_schedule 表格，用於儲存供水記錄
CREATE TABLE IF NOT EXISTS water_schedule (
    water_id INT AUTO_INCREMENT PRIMARY KEY,
    plant_id INT,
    water_amount DECIMAL(5, 2),
    scheduled_time TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (plant_id) REFERENCES plants(plant_id)
);

-- 建立 fertilization_schedule 表格，用於儲存施肥記錄
CREATE TABLE IF NOT EXISTS fertilization_schedule (
    fertilization_id INT AUTO_INCREMENT PRIMARY KEY,
    plant_id INT,
    fertilization_needed BOOLEAN,
    fertilization_amount DECIMAL(5, 2),
    scheduled_time TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (plant_id) REFERENCES plants(plant_id)
);

-- 建立 pest_management 表格，用於記錄病蟲害資訊
CREATE TABLE IF NOT EXISTS pest_management (
    pest_id INT AUTO_INCREMENT PRIMARY KEY,
    plant_id INT,
    pest_name VARCHAR(100),
    treatment VARCHAR(255),
    detection_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (plant_id) REFERENCES plants(plant_id)
);

-- 建立 maintenance_records 表格，用於儲存養護記錄
CREATE TABLE IF NOT EXISTS maintenance_records (
    maintenance_id INT AUTO_INCREMENT PRIMARY KEY,
    plant_id INT,
    action VARCHAR(50),
    amount DECIMAL(5, 2),
    action_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (plant_id) REFERENCES plants(plant_id)
);

-- 建立 growth_assessment 表格，用於植物生長評估數據
CREATE TABLE IF NOT EXISTS growth_assessment (
    assessment_id INT AUTO_INCREMENT PRIMARY KEY,
    plant_id INT,
    height FLOAT,
    leaf_count INT,
    health_status VARCHAR(50),
    assessment_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (plant_id) REFERENCES plants(plant_id)
);
