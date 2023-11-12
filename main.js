const path = require('path');
const express = require('express');
const axios = require('axios');
const app = express();
const port = 8080;

app.use((req, res, next) => {
    console.log(`User with IP: ${req.ip} made a request to ${req.originalUrl}`);
    next();
});

// Serve your static files from the 'public' directory
app.use(express.static('public'));

// Proxy route to fetch images
app.get('/proxy', async (req, res) => {
    try {
        const response = await axios.get(req.query.url, { responseType: 'arraybuffer' });
        const headers = response.headers;
        const imageBuffer = Buffer.from(response.data, 'binary');
        res.set(headers);
        res.send(imageBuffer);
    } catch (error) {
        res.status(500).send('Internal Server Error');
    }
});

// Handle 404 errors
app.use((req, res, next) => { 
    res.status(404).sendFile('./public/404.html', { root: __dirname });
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
