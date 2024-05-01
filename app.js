const express = require('express');
const app = express();
const port = 8080;
const axios = require('axios');


app.use((req, res, next) => {
    console.log(`Request to ${req.originalUrl}`);
    next();
});

// Serve your static files from the 'public' directory
app.use(express.static('public'));

app.get('/image', async (req, res) => {
    const imageUrl = req.query.url;
    if (imageUrl) {
      try {
        const response = await axios.get(imageUrl, { responseType: 'arraybuffer' });
        const contentType = response.headers['content-type'];
        res.set('Content-Type', contentType);
        res.send(response.data);
      } catch (error) {
        res.status(500).send(error.toString());
      }
    } else {
      res.status(400).send('No image URL provided.');
    }
});
  

// Handle 404 errors
app.use((req, res, next) => { 
    res.status(404).sendFile('./public/404.html', { root: __dirname });
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
