import axios from "axios";
import { Buffer } from 'buffer';

export const getAccessToken = async () => {
    try {
        axios.post("https://accounts.spotify.com/api/token", null, {
            params: {
                grant_type: 'client_credentials',
            }, 
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
                Authorization: `Basic ${Buffer.from(`${process.env.REACT_APP_SPOTIFY_CLIENT_ID}:${process.env.REACT_APP_SPOTIFY_CLIENT_SECRET}`).toString('base64')}`
            }
        }).then(response => {
            const accessToken = response.data.access_token;
            const experationTime = Date.now() + response.data.expires_in * 1000;

            localStorage.setItem('music-library-access-token', accessToken);
            localStorage.setItem('music-library-experation-token-time', experationTime.toString());

            console.log('Access token updated');
        });
    }
    catch(error) {
        console.error(error);
    }
}

export const refreshAccessToken = async () => {
    const experationTime = localStorage.getItem('music-library-experation-token-time');
    
    if(experationTime) {
        if(Date.now() >= parseInt(experationTime)) {
            await getAccessToken();
        }
    }
}