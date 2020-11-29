import axios from 'axios'
import dotenv from 'dotenv'

dotenv.config()

const BASE_URL = process.env.API_EXTERNAL_RECIPES

export const getRecipes = async (ingredients: string): Promise<any> => {
  const data = await axios({
    method: 'GET',
    url: `${BASE_URL}/?i=${ingredients}`
  })
  return data
}
