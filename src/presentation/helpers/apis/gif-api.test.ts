import { getGif } from './gif-api'

describe('Recipes External', () => {
  test('Valida acesso API externa de receitas', async () => {
    const data = await getGif('Steamed Mussels I')
    expect(data.status === 200)
  })
})
