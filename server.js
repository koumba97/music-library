const dotenv = require('dotenv');
dotenv.config();
const cors = require('cors');
const axios = require('axios');
const express = require('express');
const app = express();
app.use(cors());
app.use(express.json());

app.get('/getAlbum', async (req, res) => {
    try {
        const albumId = req.query.id;
        const options = {
            method: 'GET',
            url: `https://deezerdevs-deezer.p.rapidapi.com/album/${albumId}`,
            headers: {
                'x-rapidapi-key': process.env.RAPID_API_KEY,
                'x-rapidapi-host': process.env.RAPID_API_HOST,
            },
        };

        const response = await axios.request(options);
        res.send(response.data);
    } catch (error) {
        console.error(error);
        res.status(500).send('Erreur lors de la requête à Deezer');
    }
});
app.listen(3001, () => console.log('Server running on port 3001'));
