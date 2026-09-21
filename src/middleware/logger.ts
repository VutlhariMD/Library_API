import type {Request, Response, NextFunction} from 'express';

export const loggerMiddleware = (req : Request, res: Response, next : NextFunction) => {
  //This logs the time the request was made ,the method it contains and the Url 
  console.log (`[${new Date().toISOString}] ${req.method} ${req.url}`);

  //Tells ythe express to move on to the next middleware  router handler
  //without next()  the request will be stuck in this middle ware and the application will not send a respond.
  next();


}