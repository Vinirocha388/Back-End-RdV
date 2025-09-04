


import express from "express";
import { getAllRecipes, getRecipeById, createRecipe, updateRecipe, deleteRecipe } from "../controllers/recipesController.js";

const recipesRouter = express.Router();

recipesRouter.get("/", getAllRecipes);
recipesRouter.get("/:id", getRecipeById);
recipesRouter.post("/", createRecipe);
recipesRouter.put("/:id", updateRecipe);
recipesRouter.delete("/:id", deleteRecipe);

export default recipesRouter;