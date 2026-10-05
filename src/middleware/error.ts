import { Request, Response,NextFunction } from "express";


export const notFoundHandler = (re:Request, res: Response, next: NextFunction)=>{
 res.status(404).json({
    error : "Not found",
    message: "The requested URL ${req.originalUrl} was not found on this error."
})


}