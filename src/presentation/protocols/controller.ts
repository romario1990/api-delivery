import { HttpResponse, HttpRequest } from './http'

export interface Controller {
  handle(httpReques: HttpRequest): HttpResponse
}
