export class ExceedsParameterNumberError extends Error {
  constructor (paramName: string) {
    super(`Erro excede numero parâmetros: ${paramName}`)
    this.name = 'ExceedsParameterNumberError'
  }
}
