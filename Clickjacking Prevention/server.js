const express = require('express');
const app = express();
const path = require('path');

// Middleware untuk mengirimkan header X-Frame-Options dan Content-Security-Policy
app.use((req, res, next) => {
    if (req.path === '/target.html') {
        // Hanya tambahkan header untuk target.html
        res.setHeader('X-Frame-Options', 'DENY'); // Mencegah iframe dimuat dari semua sumber
        res.setHeader('Content-Security-Policy', "frame-ancestors 'none'"); // Mencegah iframe dimuat dari semua sumber
        // res.setHeader('X-Frame-Options', 'SAMEORIGIN'); // Hanya izinkan iframe dari domain yang sama
        // res.setHeader('Content-Security-Policy', "frame-ancestors 'self'");  // Hanya izinkan iframe dari domain yang sama
    }
    next();
});

// Serve static files (e.g. index.html and target.html)
app.use(express.static(path.join(__dirname, 'public')));

app.listen(3000, () => {
    console.log('Server running on port 3000');
});
