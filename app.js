console.log(` 
     ___ ___ _                 _                _   _ ___     
 ___|  _|  _| |_ ___ ___ ___ _| |   ___ ___ ___| |_|_|  _|_ _ 
| . |  _|  _| . |  _| .'|   | . |  |_ -| . | . |  _| |  _| | |
|___|_| |_| |___|_| |__,|_|_|___|  |___|  _|___|_| |_|_| |_  |
                                       |_|               |___|
v2.0.6                                                        by angel
`)

const express = require('express');
const app = express();
const port = 8080;
const axios = require('axios');
const cors = require('cors')

app.use(cors())

app.use((req, res, next) => {
    console.log(`Gotten Request for ${req.originalUrl}`);
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
