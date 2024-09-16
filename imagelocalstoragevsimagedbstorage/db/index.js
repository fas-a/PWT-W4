const express = require('express');
const cors = require('cors');
const multer = require('multer');
const { Pool } = require('pg');
const app = express();
const port = 3000;

const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'image_storage',
    password: '123456789',
    port: 5432,
});

app.use(cors());

const storage = multer.memoryStorage();
const upload = multer({ storage });

app.post('/upload', upload.array('images'), async (req, res) => {
    try {
        const client = await pool.connect();
        await client.query('BEGIN');
        for (const file of req.files) {
            await client.query('INSERT INTO images(name, data) VALUES($1, $2)', [file.originalname, file.buffer]);
        }
        await client.query('COMMIT');
        client.release();
        res.status(201).send('Images uploaded');
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal server error');
    }
});

app.get('/images/:count', async (req, res) => {
    try {
        const { count } = req.params;
        const limit = parseInt(count, 10);
        
        if (isNaN(limit) || limit <= 0) {
            return res.status(400).send('Invalid count parameter');
        }

        const result = await pool.query('SELECT id FROM images LIMIT $1', [limit]);
        res.json(result.rows);
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal server error');
    }
});

app.get('/image/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const result = await pool.query('SELECT * FROM images WHERE id = $1', [id]);

        if (result.rows.length === 0) {
            return res.status(404).send('Image not found');
        }

        const { data } = result.rows[0];
        res.set('Content-Type', 'image/jpeg');
        res.send(data);
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal server error');
    }
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
