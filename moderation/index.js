const express = require('express');
const axios = require('axios');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.post('/events', async (req, res) => {

});

const { type, data } = req.body;

app.listen(4003, () => console.log('Moderation listening on port 4003'));