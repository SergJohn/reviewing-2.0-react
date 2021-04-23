const express = require('express');
const cors = require('cors');
const app = express();
const http = require('http').Server(app);
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const PORT = process.env.PORT || "5000";

dotenv.config();
app.use(express.static(__dirname));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(require('./routes'));

const dbURI = process.env.DB_URL;

mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
        .then((result) => console.log('connected to db'))
        .catch((err) => console.log(err));

mongoose.connection.on('error', (err) => { 
    console.log('Mongodb Error: ', err); 
    process.exit();
});
mongoose.connection.on('connected', () => { 
    console.log('MongoDB is successfully connected');
});

var server = http.listen(PORT, () => {
    console.log('listening on ', server.address().port)
});