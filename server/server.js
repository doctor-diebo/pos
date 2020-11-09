const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

let server = app.listen(port, () => {
    console.log('Server running on port', port, '...');
});

app.use(express.static('server/public'), (res, req) => {
    // req.header('Access-Control-Allow-Origin: pos.herokuapp.com');
    // uncomment the line below and comment the line above to test server on localhost
    req.header('Access-Control-Allow-Origin: http://localhost:3000');
});
