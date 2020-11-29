import axios from 'axios'
import dotenv from 'dotenv'

dotenv.config()

const BASE_URL = process.env.API_EXTERNAL_GIFS

export const getGif = async (name: string): Promise<any> => {
  const data = await axios({
    method: 'GET',
    url: BASE_URL,
    params: {
      q: name,
      api_key: process.env.API_EXTERNAL_GIFS_KEY,
      limit: 1
    }
  })
  return data.data
}
