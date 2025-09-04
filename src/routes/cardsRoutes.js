import express from "express";
import cardController from "../controllers/cardController.js";

const cardsRouter = express.Router();

cardsRouter.get("/", cardController.getAllCards);
cardsRouter.post("/", cardController.createCard);
cardsRouter.get("/:id", cardController.getCardById);
cardsRouter.delete("/:id", cardController.deleteCard);
cardsRouter.put("/:id", cardController.updateCard);

export default cardsRouter;