const path = require('path');
const express = require('express');
const axios = require('axios');
const cors = require('cors'); 

const app = express();
const port = 8080;

app.use(cors());

app.use((req, res, next) => {
    console.log(`User with IP: ${req.ip} made a request to ${req.originalUrl}`);
    next();
});

// Serve your static files from the 'public' directory
app.use(express.static('public'));

// Handle requests to /genius/:path using the server-side proxy
app.get('/genius/:path', async (req, res) => {
    const path = req.params.path;
    try {
        const response = await axios.get(`https://genius.com/${path}`, {
            headers: {
                'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.3',
                'Authorization': 'Bearer fiE1SC2YyfP5bN4Ku6BqChOfU46ltaZMhFxOVjlknfeIZG9Glkp5yCU_Kve1qlvo',
            },
        });
        
        // Handle potential rate limiting or other checks here
        // For example, you might want to check response.status and response.data
        
        res.send(response.data);
    } catch (error) {
        console.error('Error fetching Genius data:', error.message);

        // Handle specific HTTP status codes if needed
        if (error.response && error.response.status === 403) {
            res.status(403).send('Access Denied');
        } else {
            res.status(500).send('Internal Server Error');
        }
    }
});

// Handle 404 errors
app.use((req, res, next) => { 
    res.status(404).sendFile('./public/404.html', { root: __dirname });
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
