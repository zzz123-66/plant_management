document.addEventListener('DOMContentLoaded', () => {

    // 1. 新增植物資料
    const plantForm = document.getElementById('add-plant-form');
    plantForm.addEventListener('submit', (event) => {
        event.preventDefault();

        const plantData = {
            name: document.getElementById('plant-name').value,
            species: document.getElementById('plant-species').value,
            water_requirement: parseFloat(document.getElementById('plant-water-requirement').value)
        };

        fetch('/api/add-plant', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(plantData)
        })
        .then(response => response.json())
        .then(data => {
            alert(data.message);
            plantForm.reset(); // 清空表單欄位
        })
        .catch(error => console.error('Error:', error));
    });

    // 2. 新增土壤監測資料
    const soilForm = document.getElementById('add-soil-form');
    soilForm.addEventListener('submit', (event) => {
        event.preventDefault();

        const soilData = {
            plant_id: parseInt(document.getElementById('soil-plant-id').value),
            moisture_level: parseFloat(document.getElementById('soil-moisture').value),
            ph_level: parseFloat(document.getElementById('soil-ph').value)
        };

        fetch('/api/add-soil', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(soilData)
        })
        .then(response => response.json())
        .then(data => {
            alert(data.message);
            soilForm.reset(); // 清空表單欄位
        })
        .catch(error => console.error('Error:', error));
    });

    // 3. 新增環境監測資料
    const environmentForm = document.getElementById('add-environment-form');
    environmentForm.addEventListener('submit', (event) => {
        event.preventDefault();

        const environmentData = {
            plant_id: parseInt(document.getElementById('environment-plant-id').value),
            temperature: parseFloat(document.getElementById('environment-temperature').value),
            humidity: parseFloat(document.getElementById('environment-humidity').value)
        };

        fetch('/api/add-environment', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(environmentData)
        })
        .then(response => response.json())
        .then(data => {
            alert(data.message);
            environmentForm.reset(); // 清空表單欄位
        })
        .catch(error => console.error('Error:', error));
    });

});
