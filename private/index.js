const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();
const http = require('http').Server(app);


app.use(express.static(__dirname));
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));


app.get('/books', (req, res) =>{
    console.log('inside end-point /books');
    const bookSample = {
        "title":"The Outsider",
        "author": "Albert Camus"
    };
    res.send(bookSample);
})

app.get('/', (req, res) =>{
    res.send('<h1>test</h1>');
})

var server = http.listen(5000, () => {
    console.log('listening on ', server.address().port)
});