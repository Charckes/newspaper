import axios from 'axios'

export default async function handler(req, res) {
    const api_key = process.env.API_KEY
    const { data } = await axios.get('https://newsapi.org/v2/top-headlines', {
        params: {
            country: 'us',
            apiKey: api_key,
        }
    })

    res.status(200).json(data);
}