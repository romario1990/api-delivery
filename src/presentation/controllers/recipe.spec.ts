import { RecipeController } from './recipe'

describe('Recipe Controller', () => {
  test('Deve retornar 400 se nenhum ingrediente for fornecido', () => {
    const recipeController = new RecipeController()
    const httpRequest = {
      params: {
        i: ''
      }
    }
    const httpResponse = recipeController.handle(httpRequest)
    expect(httpResponse.statusCode).toBe(400)
    expect(httpResponse.body).toEqual(new Error('Ausência de ingredientes como parâmtetros: i'))
  })
})
