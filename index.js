const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.sendFile('homepage.html');
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(PORT);
});