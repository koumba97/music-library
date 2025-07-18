const dotenv = require('dotenv');
dotenv.config();
const axios = require('axios');
const express = require('express');
const app = express();
app.use(express.json());

app.get('/test', async (req, res) => {
    try {
        const options = {
            method: 'GET',
            url: 'https://deezerdevs-deezer.p.rapidapi.com/track/3135556',
            headers: {
                'x-rapidapi-key': process.env.RAPID_API_KEY,
                'x-rapidapi-host': process.env.RAPID_API_HOST,
            },
        };

        const response = await axios.request(options);
        console.log(response.data);
        res.send(response.data);
    } catch (error) {
        console.error(error);
        res.status(500).send('Erreur lors de la requête à Deezer');
    }
});
app.listen(3001, () => console.log('Server running on port 3001'));
