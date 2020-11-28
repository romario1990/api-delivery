export class RecipeController {
  handle (httpRequest: any): any {
    if (!httpRequest.params.i || httpRequest.params.i === '') {
      return {
        statusCode: 400,
        params: new Error('Ausência de ingredientes como parâmtetros: i')
      }
    }
  }
}
