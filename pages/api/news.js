import axios from 'axios'

export default async function handler(req, res) {
    const { data } = await axios.get('https://newsapi.org/v2/top-headlines', {
        params: {
            country: 'br',
            apiKey: '2e2a6c34a6c643c2931f01de92ecf374'
        }
    })

    res.status(200).json(data);
}