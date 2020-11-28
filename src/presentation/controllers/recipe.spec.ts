import { RecipeController } from './recipe'

describe('Recipe Controller', () => {
  test('Should return 400 if no ingredients is provided', () => {
    const recipeController = new RecipeController()
    const httpRequest = {
      params: {
        i: ''
      }
    }
    const httpResponse = recipeController.handle(httpRequest)
    expect(httpResponse.statusCode).toBe(400)
  })
})
