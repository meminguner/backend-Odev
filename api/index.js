const express = require('express');
const app = express();

// Temel middleware
app.use(express.json());

// Test endpoint'i
app.get('/test', (req, res) => {
    res.json({ message: 'Test başarılı!' });
});

// Ana API rotalarını içe aktar
try {
    const apiRoutes = require('../app_api/routes/index');
    app.use('/api', apiRoutes);
} catch (error) {
    console.error('API rotaları yüklenirken hata:', error);
}

// Hata yakalama
app.use((err, req, res, next) => {
    console.error(err);
    res.status(500).json({ error: 'Sunucu hatası', details: err.message });
});

module.exports = app;