import { HttpResponse, HttpRequest } from './../protocols/http'
import { MissingParamError } from './../errors/missing-param-error'

export class RecipeController {
  handle (httpRequest: HttpRequest): HttpResponse {
    if (!httpRequest.params.i || httpRequest.params.i === '') {
      return {
        statusCode: 400,
        body: new MissingParamError('i = ingredientes')
      }
    }
  }
}
