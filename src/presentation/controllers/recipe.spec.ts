import { RecipeController } from './recipe'
import { MissingParamError } from './../errors/missing-param-error'

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
    expect(httpResponse.body).toEqual(new MissingParamError('i = ingredientes'))
  })
})
