import request from 'supertest'
import app from '../config/app'

describe('Recipes Routes', () => {
  test('Valida rota routes', async () => {
    await request(app)
      .get('/api/v1/recipes')
      .expect(200)
  })
})
