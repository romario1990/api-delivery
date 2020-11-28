import { HttpResponse, HttpRequest } from './../protocols/http'

export class RecipeController {
  handle (httpRequest: HttpRequest): HttpResponse {
    if (!httpRequest.params.i || httpRequest.params.i === '') {
      return {
        statusCode: 400,
        body: new Error('Ausência de ingredientes como parâmtetros: i')
      }
    }
  }
}
