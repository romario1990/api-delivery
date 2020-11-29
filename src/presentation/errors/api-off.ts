export class ApiOffError extends Error {
  constructor (urlName: string) {
    super(`API fora do ar: ${urlName}`)
    this.name = `ApiOffError API fora do ar: ${urlName}`
  }
}
