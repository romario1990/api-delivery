import { HttpResponse, HttpRequest } from './../protocols/http'
import { MissingParamError, ExceedsParameterNumberError } from './../errors'
import { badRequest } from './../helpers/http-helper'
import { Controller } from '../protocols/controller'

export class RecipeController implements Controller {
  handle (httpRequest: HttpRequest): HttpResponse {
    if (!httpRequest.query.i || httpRequest.query.i === '') {
      return badRequest(new MissingParamError('i = ingredientes'))
    }
    const Ingredients = httpRequest.query.i.split(',')
    if (Ingredients.length > 2) {
      return badRequest(new ExceedsParameterNumberError(Ingredients.length.toString()))
    }
  }
}
