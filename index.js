const express = require('express');
const app = express();

const PORT = 8080;

app.get('/', (req, res) => {
    return res.send('Hello from node app!')
})

app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
})

export default app