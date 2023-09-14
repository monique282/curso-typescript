import { NextFunction, Request, Response } from "express";

export function validateJoiForAll(joi) {
    return (req: Request, res: Response, next : NextFunction) => {
        // verificar se passou nas validações do joi
        const validateIfItRight = joi.validate(req.body, { abortEarly: false });
        
        // o abortEarly serve pra procurar todos os requisitos que nao passou no joi
        if (validateIfItRight.error) {
            const specificError = validateIfItRight.error.details.map(which => which.message);
            return res.status(422).send(specificError);
        };
        next();
    };
};





