import joi from "joi";
import { Music } from "protocols";

export const musicShemas = joi.object<Music>({
    title: joi.string().min(1).required(),
    artist: joi.string().min(1).required()

})