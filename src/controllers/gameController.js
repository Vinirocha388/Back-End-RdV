import GameModel from "../models/gameModel.js";

class GameController {
  async findAll(req, res) {
    const {name, platform} = req.query;
    
   // console.log("Nome: ", name);
   // console.log("Plataforma: ", platform);

    try {
      const games = await GameModel.findAll(name, platform);

      return res.status(200).json(games);
    } catch (error) {
      console.error("Error finding all games", error);
      return res
        .status(500)
        .json({ message: "Error finding all games", error });
    }
  }

  async create(req, res) {
    try {
      const { name, platform } = req.body;

      // Validação básica
      if (!name || !platform) {
        return res.status(400).json({
          error: "Name and platform fields are required!",
        });
      }

      const data = {
        name,
        platform,
      };

      const newGame = await GameModel.create(data);

      return res.status(201).json({
        message: "New game successufully created! DuoLingo singing!",
        newGame,
      });
    } catch (error) {
      console.error("Error creating a new game", error);
      res.status(500).json({ error: "Error creating a new game" });
    }
  }
}

export default new GameController();