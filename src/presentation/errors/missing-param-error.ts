export class MissingParamError extends Error {
  constructor (paramName: string) {
    super(`Ausência do parâmtetros: ${paramName}`)
    this.name = 'MissingParamError'
  }
}
