const express = require('express');
const compression = require('compression'); // Import compression middleware
const app = express();
const port = 3000;

// Enable Gzip compression
app.use(compression());

// Serve static files (HTML, CSS, JS)
app.use(express.static(__dirname));

app.listen(port, () => {
    console.log(`Server with Gzip is running on http://localhost:${port}`);
});
