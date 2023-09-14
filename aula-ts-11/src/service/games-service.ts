import { throws } from "assert";
import gamesRepository from "../repository/games-repository";
import { Game } from "./../protocols/game-protocol";


async function createGame(game: Game) {

  // verificar se o game ja existe
  const result = await gameAlreadyExists(game);
  if (result.length > 0) {
    throw { message: "Game already exists" }
  }

  // se não existir 
  // criar um game
  const result1 = await gamesRepository.createGame(game);
  return result1;
}

async function getGames() {
  return await gamesRepository.getGames();
}

// função que verifica se o game existe na tabela
async function gameAlreadyExists(game: Game) {
  const result = await gamesRepository.getGameByTitleAndPlatform(game);
  return result
}

const gamesService = {
  getGames,
  createGame
}

export default gamesService;