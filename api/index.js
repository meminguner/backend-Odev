const express = require('express');
const app = express();
const apiRoutes = require('../app_api/routes/index');
const webRoutes = require('../routes/index');

// Middleware'ler
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// View engine setup (eğer view'larınız varsa)
app.set('views', './views');
app.set('view engine', 'jade'); // veya kullandığınız template engine

// Routes
app.use('/', webRoutes);        // Web routes için
app.use('/api', apiRoutes);     // API routes için

// 404 handler
app.use(function(req, res, next) {
    res.status(404).json({error: "Not Found"});
});

module.exports = app;