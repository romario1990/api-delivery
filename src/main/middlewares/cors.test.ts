import request from 'supertest'
import app from '../config/app'

describe('CORS Middleware', () => {
  test('Valida se CORS sendo aplicado', async () => {
    app.get('/teste_cors', (req, res) => {
      res.send(req.body)
    })
    await request(app)
      .get('/teste_cors')
      .send({ name: 'Romario' })
      .expect('access-control-allow-origin', '*')
      .expect('access-control-allow-metgids', '*')
      .expect('access-control-allow-headers', '*')
  })
})
