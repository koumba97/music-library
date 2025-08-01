const axios = require("axios");

export default async function handler(req, res) {
    try {
        const searchQuery = req.query.query;
        const options = {
            method: "GET",
            url: "https://deezerdevs-deezer.p.rapidapi.com/search",
            params: { q: searchQuery },
            headers: {
                "x-rapidapi-key": process.env.RAPID_API_KEY,
                "x-rapidapi-host": process.env.RAPID_API_HOST,
            },
        };

        const response = await axios.request(options);
        res.send(response.data);
    } catch (error) {
        console.error(error);
        res.status(500).send("Erreur lors de la requête à Deezer");
    }
}
