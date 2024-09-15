const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors"); // Menambahkan CORS
const path = require("path"); // Untuk melayani file statis
const User = require("./models/User"); // Pastikan model User sudah benar
const app = express();
const port = 3000;

// Middleware untuk parsing request body
app.use(express.json()); // Untuk parsing aplikasi/json

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Middleware untuk mengatasi masalah CORS
app.use(cors());

// Middleware untuk melayani file statis (misalnya CSS, gambar, frontend HTML)
app.use(express.static(path.join(__dirname, 'public')));

// Middleware untuk Content Security Policy (CSP) agar mengizinkan data:image base64
app.use((req, res, next) => {
    res.setHeader(
        "Content-Security-Policy",
        "default-src 'self'; img-src 'self' data:;"
    );
    next();
});

// Route untuk halaman utama (jika menggunakan HTML di frontend)
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "public", "index.html")); // Sesuaikan jika file HTML ada
});

// Route untuk menampilkan semua user
app.get("/users", async (req, res) => {
    try {
        const users = await User.findAll();
        res.json(users);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});


// Route untuk menambah user baru
app.post("/users", async (req, res) => {
    try {
        const user = await User.create({
            name: req.body.name,
            email: req.body.email,
        });
        res.json(user);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});



// Route untuk mengupdate user
app.put("/users/:id", async (req, res) => {
    try {
        const user = await User.findByPk(req.params.id);
        if (user) {
            await user.update({
                name: req.body.name,
                email: req.body.email,
            });
            res.json(user);
        } else {
            res.status(404).json({ error: "User not found" });
        }
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

// Route untuk menghapus user
app.delete("/users/:id", async (req, res) => {
    try {
        const user = await User.findByPk(req.params.id);
        if (user) {
            await user.destroy();
            res.json({ message: "User deleted successfully" });
        } else {
            res.status(404).json({ error: "User not found" });
        }
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

// Middleware untuk menangani 404 Not Found
app.use((req, res, next) => {
    res.status(404).send("Sorry, we cannot find that!");
});

// Middleware untuk menangani error global
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send("Something broke!");
});

// Jalankan server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
