const express = require('express');
const bodyParser = require('body-parser');

//init express
const app = express();

//bodyParser middleware
app.use(bodyParser.json());

//connect to MongoDB
const connectDB = require('./config/db.js');
connectDB();

//import and use routes
//for the react build folder
const path = require('path');
app.use(express.static(path.join(__dirname, 'build')));

const projects = require('./routes/api/projects.js');
app.use('/api/projects', projects);

const about = require('./routes/api/about.js');
app.use('/api/about', about);

//listen on PORT
const PORT = process.env.PORT || 5000;
const server = app.listen(PORT, () => {
    const host = server.address().address
    const port = server.address().port

    console.log(`App listening on port ${port}`)
});