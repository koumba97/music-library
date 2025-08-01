const axios = require("axios");

export default async function handler(req, res) {
    const albumId = req.query.id;

    try {
        const response = await axios.get(
            `https://deezerdevs-deezer.p.rapidapi.com/album/${albumId}`,
            {
                headers: {
                    "x-rapidapi-key": process.env.RAPID_API_KEY,
                    "x-rapidapi-host": process.env.RAPID_API_HOST,
                },
            }
        );
        res.status(200).json(response.data);
    } catch (error) {
        //console.error(error);
        res.status(500).json({ error: error.message });
        //res.status(500).json({ error: "Failed to fetch album" });
    }
}
