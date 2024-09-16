const express = require('express');
const cors = require('cors');
const multer = require('multer');
const path = require('path');
const fs = require('fs');
const app = express();
const port = 3001;

app.use(cors());

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads');
    },
    filename: (req, file, cb) => {
        cb(null, file.originalname);
    }
});

const upload = multer({ storage });

app.post('/upload', upload.array('images'), (req, res) => {
    res.status(201).send('Images uploaded');
});

app.get('/images/:count', (req, res) => {
    const { count } = req.params;
    fs.readdir('uploads', (err, files) => {
        if (err) return res.status(500).send('Internal server error');
        const selectedFiles = files.slice(0, parseInt(count, 10));
        res.json(selectedFiles.map(file => ({ filename: file })));
    });
});

app.get('/image/:filename', (req, res) => {
    const { filename } = req.params;
    const filePath = path.join(__dirname, 'uploads', filename);
    if (fs.existsSync(filePath)) {
        res.sendFile(filePath);
    } else {
        res.status(404).send('Image not found');
    }
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
