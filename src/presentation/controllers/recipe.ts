import { HttpResponse, HttpRequest } from './../protocols/http'
import { MissingParamError, ExceedsParameterNumberError } from './../errors'
import { badRequest, succesRequest, serverError } from './../helpers/http-helper'
import { Controller } from '../protocols/controller'
import { getRecipes } from '../helpers/apis/recipes-api'
export class RecipeController implements Controller {
  async handle (httpRequest: HttpRequest): Promise<HttpResponse> {
    try {
      if (!httpRequest.query.i || httpRequest.query.i === '') {
        return badRequest(new MissingParamError('i = ingredientes'))
      }
      const ingredients = await httpRequest.query.i.split(',')
      if (ingredients.length > 3) {
        return badRequest(new ExceedsParameterNumberError(ingredients.length.toString()))
      }
      const dataRecipes = await getRecipes(httpRequest.query.i)
      const keywords = ingredients
      const recipes = dataRecipes.results.map((r: { title: any, ingredients: any, href: any }) => ({ title: r.title, ingredients: r.ingredients, link: r.href, gif: '' }))
      return succesRequest({ keywords: keywords, recipes: recipes })
    } catch (error) {
      return serverError(error)
    }
  }
}
