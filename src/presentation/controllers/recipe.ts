import { HttpResponse, HttpRequest } from './../protocols/http'
import { MissingParamError } from './../errors/missing-param-error'
import { badRequest } from './../helpers/http-helper'

export class RecipeController {
  handle (httpRequest: HttpRequest): HttpResponse {
    if (!httpRequest.params.i || httpRequest.params.i === '') {
      return badRequest(new MissingParamError('i = ingredientes'))
    }
  }
}
