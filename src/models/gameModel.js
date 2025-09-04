import prisma from '../../prisma/client.js';

class GameModel {
  // Obter todos os jogos
  async findAll(name, platform) {

    const where = {};

    if (name) {
      where.name = {
        contains: name
      };
    }

    if (platform) {
      where.platform = {
        contains: platform
      };
    }

    const games = await prisma.game.findMany({where});

    return {
      total: games.length,
      games,
    };
  }

  // Criar um novo jogo
  async create(data) {
    const game = await prisma.game.create({
      data,
    });

    return game;
  }
}

export default new GameModel();