import Joi from "joi";
import { RequestHandler, Request, Response, NextFunction } from "express";
import { validationOptions } from "../../configs/validation/validationConfig";

export class ValidationMiddleware {
  static validateAsync(schema: Joi.ObjectSchema): RequestHandler {
    return async (req: Request, res: Response, next: NextFunction) => {
      try {
        await schema.validateAsync(req.body, validationOptions);
        next();
      } catch (error: any) {
        return res.status(400).send(error.message);
      }
    };
  }
}
