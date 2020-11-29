import request from 'supertest'
import app from '../config/app'

describe('Body Parse Middleware', () => {
  test('Valida se parse body json está sendo aplicado', async () => {
    app.post('/teste_body_parse', (req, res) => {
      res.send(req.body)
    })
    await request(app)
      .post('/teste_body_parse')
      .send({ name: 'Romario' })
      .expect({ name: 'Romario' })
  })
})
