export class RecipeController {
  handle (httpRequest: any): any {
    return {
      statusCode: 400,
      params: new Error('Ausência de ingredientes como parâmtetros: i')
    }
  }
}
