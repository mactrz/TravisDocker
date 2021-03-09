const express = require('express');
const app = express();

const PORT = 8080;

app.get('/', (req, res) => {
    return res.send('Hello from node app!')
})

app.delete('/', (req, res) => {
    return res.send('Hello from delete!')
})

app.post('/', (req, res) => {
    return res.send('Hello from post!')
})

app.put('/', (req, res) => {
    return res.send('Hello from put!')
})

const server = app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
})

module.exports = server;