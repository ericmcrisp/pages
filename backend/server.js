// backend server 

const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

// serve static files from front end
app.use(express.static(path.join(__dirname,'../frontend')));

// api route
app.get('/api', (req,res) => { 
    res.json({ message: 'Hello from backend '})
});

// start server
app.listen(PORT, () => { 
    console.log('Server is running on http://localhost:${PORT}');
});
