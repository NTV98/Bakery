const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();
const port = 3000;

let currentLanguage = 'eng'; // Default language

function loadTranslations(language) {
    const filePath = path.join(__dirname, 'translations', `${language}.json`);
    return JSON.parse(fs.readFileSync(filePath, 'utf-8'));
}

const translations = loadTranslations(currentLanguage);

function getTranslation(key) {
    return translations[key] || key;
}

// Example usage in rendering
console.log(getTranslation('welcomeMessage')); // Dynamically fetches the text

app.get('/', (req, res) => {
    res.send(getTranslation('welcomeMessage'));
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});