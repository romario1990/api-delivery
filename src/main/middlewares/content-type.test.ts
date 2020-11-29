import request from 'supertest'
import app from '../config/app'

describe('Content Type  Middleware', () => {
  test('Valida return default content type como json', async () => {
    app.get('/teste_content_type', (req, res) => {
      res.send('')
    })
    await request(app)
      .get('/teste_content_type')
      .send({ name: 'Romario' })
      .expect('content-type', /json/)
  })
})
