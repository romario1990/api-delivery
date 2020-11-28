import { HttpResponse, HttpRequest } from './../protocols/http'
import { MissingParamError } from './../errors/missing-param-error'
import { badRequest } from './../helpers/http-helper'
import { Controller } from '../protocols/controller'

export class RecipeController implements Controller {
  handle (httpRequest: HttpRequest): HttpResponse {
    if (!httpRequest.params.i || httpRequest.params.i === '') {
      return badRequest(new MissingParamError('i = ingredientes'))
    }
  }
}
