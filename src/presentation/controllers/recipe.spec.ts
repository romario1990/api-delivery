import { RecipeController } from './recipe'
import { MissingParamError, ExceedsParameterNumberError } from './../errors'

const MakeRecipeController = (): RecipeController => {
  return new RecipeController()
}

describe('Recipe Controller', () => {
  test('Deve retornar 400 se nenhum ingrediente for fornecido', async () => {
    const recipeController = MakeRecipeController()
    const httpRequest = {
      query: {
        i: ''
      }
    }
    const httpResponse = await recipeController.handle(httpRequest)
    expect(httpResponse.statusCode).toBe(400)
    expect(httpResponse.body).toEqual(new MissingParamError('i = ingredientes'))
  })
})

describe('Recipe Controller', () => {
  test('Deve retornar 400 se tiver mais do que três ingrediente', async () => {
    const recipeController = MakeRecipeController()
    const httpRequest = {
      query: {
        i: 'onion,tomato,egg,cheese'
      }
    }
    const httpResponse = await recipeController.handle(httpRequest)
    expect(httpResponse.statusCode).toBe(400)
    expect(httpResponse.body).toEqual(new ExceedsParameterNumberError('4'))
  })
})
