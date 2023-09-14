import express, { Request, Response, json } from "express";
import { Game } from "./protocols/game-protocol";
import gamesService from "./service/games-service";
import httpStatus from "http-status";
import { validateJoiForAll } from "./middlewares/validateSchema";
import { gameschemas } from "./schemas/gamesSchemas";

const app = express();
app.use(json());

app.post("/games",  validateJoiForAll(gameschemas), async (req: Request, res: Response) => {
  const body = req.body as Game;
  try {
    const result = await gamesService.createGame(body);
    res.status(httpStatus.CREATED).send(result);
  } catch (error) {
    console.log(error);
    res.sendStatus(httpStatus.CONFLICT);
  }
});

app.get("/games", async (req: Request, res: Response) => {
  const games = await gamesService.getGames();
  res.send(games);
});

app.listen(5000, () => console.log(`Server is up and running or port 5000`));