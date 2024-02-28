const express = require('express');
const app = express();
const port = 8080;



app.use((req, res, next) => {
    console.log(`Request to ${req.originalUrl}`);
    next();
});

// Serve your static files from the 'public' directory
app.use(express.static('public'));


  

// Handle 404 errors
app.use((req, res, next) => { 
    res.status(404).sendFile('./public/404.html', { root: __dirname });
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
