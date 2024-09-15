const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const allowedOrigins = ['http://127.0.0.1:5500']; //const allowedOrigins = ['http://localhost:5500'];

const app = express();
app.use(bodyParser.json());

// permissive:
// const allowedOrigins = [];

app.use(cors({
    origin: function (origin, callback) {
        if (!origin || allowedOrigins.indexOf(origin) !== -1) {
            callback(null, true); // izinkan
        } else {
            callback(new Error('Not allowed by CORS')); // tolak
        }
    }
}));

// Endpoint sensitif yang akan diuji
app.get('/getUserData', (req, res) => {
    res.json({ user: 'John Doe', email: 'john@example.com', token: '123456789' });
});

app.post('/updateProfile', (req, res) => {
    console.log('POST request received:', req.body);
    res.json({ message: 'Profile updated successfully' });
});

app.delete('/deleteAccount', (req, res) => {
    res.json({ message: 'Account deleted successfully' });
});

app.listen(3000, () => {
    console.log('Server running on port 3000');
});


// Pengujian CSRF Berhasil
// Langkah-langkah:
// Jalankan server dengan Strict CORS (server.js).
// Buka csrf-attack.html di browser dan lihat apakah permintaan POST berhasil atau tidak.
// Catat hasilnya.
// Ulangi dengan Permissive CORS (server-permissive.js).

// Pengujian Data Exposure Berhasil
// Langkah-langkah:
// Jalankan server dengan Strict CORS (server.js).
// Akses endpoint /getUserData dari untrusted-client.html.
// Periksa apakah data sensitif dapat diakses atau tidak.
// Catat hasilnya.
// Ulangi dengan Permissive CORS (server-permissive.js).

// Pengujian Akses Tidak Sah yang Berhasil
// Langkah-langkah:
// Jalankan server dengan Strict CORS (server.js).
// Uji akses endpoint /deleteAccount menggunakan untrusted-client.html.
// Periksa apakah permintaan DELETE berhasil dieksekusi atau tidak.
// Catat hasilnya.
// Ulangi dengan Permissive CORS (server-permissive.js).


