const express = require('express');
const app = express();
const mongoose = require('mongoose');

// MongoDB bağlantısı
mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log('MongoDB bağlantısı başarılı');
}).catch(err => {
    console.error('MongoDB bağlantı hatası:', err);
});

// Middleware
app.use(express.json());

// API rotalarını içe aktar
const apiRoutes = require('../app_api/routes/index');
app.use('/api', apiRoutes);

// Hata yakalama
app.use((err, req, res, next) => {
    console.error(err);
    res.status(500).json({ error: 'Sunucu hatası', details: err.message });
});

module.exports = app;