const path = require('path')
const express = require('express')
const app = express()
const port = 5502;

app.use(express.static('public'))

app.listen(port, () => {
    console.log(`alive in port ${port}`)
});

app.use((req, res, next) => { 
    res.status(404).sendFile('./public/404.html', { root: __dirname });
});

