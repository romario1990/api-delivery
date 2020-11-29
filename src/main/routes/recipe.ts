import { Router } from 'express'
import { RecipeController } from './../../presentation/controllers/recipe'

const MakeRecipeController = (): RecipeController => {
  return new RecipeController()
}

export default (router: Router): void => {
  router.get('/recipes', async (req, res) => {
    const recipeController = MakeRecipeController()
    const reponse = await recipeController.handle(req)
    res.send(reponse.body)
  })
}
