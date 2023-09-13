import { Router } from "express";
import musicController from "../controllers/music-controller";
import { validateJoiForAll } from "../middlewares/validateSchema";
import { musicShemas } from "../schemas/musicSchemas";

const musicRouter = Router();

musicRouter.get("/musics", musicController.getMusics);
musicRouter.post("/musics", validateJoiForAll(musicShemas), musicController.createMusic); // TODO: validação via Joi

export default musicRouter;