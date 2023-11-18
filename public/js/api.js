const express = require('express');
const app = express();
app.use(express.json());

let listeningData = {};

app.post('/api/dashboard', (req, res) => {
    const album = req.body.album;
    const track = req.body.track;

    // Increment the count for the album in the listeningData object
    if (listeningData[album]) {
        listeningData[album]++;
    } else {
        listeningData[album] = 1;
    }

    res.status(200).send('Data received');
});

app.get('/dashboard', (req, res) => {
    // Find the most listened album
    let mostListenedAlbum = Object.keys(listeningData).reduce((a, b) => listeningData[a] > listeningData[b] ? a : b);

    // Serve a simple HTML page that displays the most listened album
    let html = `<h1>Most Listened Album: ${mostListenedAlbum}</h1>`;
    res.send(html);
});

app.listen(3000, () => {
    console.log('Server is listening on port 3000');
});