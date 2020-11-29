import { HttpResponse, HttpRequest } from './../protocols/http'
import { MissingParamError, ExceedsParameterNumberError } from './../errors'
import { badRequest } from './../helpers/http-helper'
import { Controller } from '../protocols/controller'

export class RecipeController implements Controller {
  handle (httpRequest: HttpRequest): HttpResponse {
    if (!httpRequest.query.i || httpRequest.query.i === '') {
      return badRequest(new MissingParamError('i = ingredientes'))
    }
    const ingredients = httpRequest.query.i.split(',')
    if (ingredients.length > 2) {
      return badRequest(new ExceedsParameterNumberError(ingredients.length.toString()))
    }
  }
}
