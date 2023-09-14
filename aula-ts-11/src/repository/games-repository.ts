import { Game } from "../protocols/game-protocol";
import { connection } from "../dataBase/dataBase";

async function getGames() {
  const result = await connection.query(`
SELECT * FROM games;`)
return result.rows;
}

async function createGame(game: Game) {

  const result = await connection.query(`
  INSERT INTO games (title, platform) VALUES ($1, $2);`, [game.title, game.platform])
  return result.rows;
}

async function getGameByTitleAndPlatform(game: Game) {
  const result = await connection.query(`
SELECT * FROM games WHERE "title" = $1 ;`, [game.title])
  return result.rows;
}

const gamesRepository = {
  getGames,
  getGameByTitleAndPlatform,
  createGame
}

export default gamesRepository;