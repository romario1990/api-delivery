import { Router } from 'express'

export default (router: Router): void => {
  router.get('/recipes', (req, res) => {
    const {
      query
    } = req
    res.json({ ok: 'OK' })
  })
}
