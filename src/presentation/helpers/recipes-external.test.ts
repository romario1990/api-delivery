import axios from 'axios'
import { getRecipes } from './apis/recipes-api'

describe('Recipes External', () => {
  test('Valida acesso API externa de receitas', async () => {
    const data = await getRecipes('onions,garlic')
    expect(data.status === 200)
  })
})
