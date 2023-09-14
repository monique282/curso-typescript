import joi from "joi";
import { Game } from "protocols/game-protocol";


export const gameschemas = joi.object<Game>({
    title: joi.string().min(1).required(),
    platform: joi.string().min(1).required()

})