import express from "express";

import GameController from "../controllers/gameController.js";

const gameRouter = express.Router();

gameRouter.get("/", GameController.findAll);
gameRouter.post("/", GameController.create);

export default gameRouter;