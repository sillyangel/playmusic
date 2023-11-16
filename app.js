const express = require('express');
const app = express();
const port = 8080;
const mongodb = require('mongodb');

app.get('/api/listening', async (req, res) => {
  try {
    const client = await mongodb.MongoClient.connect('YOUR_DATABASE_CONNECTION_URL');
    const collection = client.db().collection('listening');
    
    const result = await collection.find().toArray();
    
    res.json(result);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
});


app.use((req, res, next) => {
    console.log(`User with IP: ${req.ip} made a request to ${req.originalUrl}`);
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
