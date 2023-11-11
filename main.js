const path = require('path')
const express = require('express')
const app = express()
const port = 80;

app.use((req, res, next) => {
    console.log(`User with IP: ${req.ip} made a request to ${req.originalUrl}`);
    next();
});

app.use(express.static('public'))

app.use((req, res, next) => { 
    res.status(404).sendFile('./public/404.html', { root: __dirname });
});

app.listen(port, () => {
    console.log(`alive in port ${port}`)
});