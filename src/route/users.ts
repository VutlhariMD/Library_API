import {Router,Request,Response} from 'express'
import {body,param, validationResult} from 'express-validator';

export const userRouter= Router();

let users =[
    {id: 1 , name : "Vutlhari Maswanganyi", email: "v@gamil.com"},
    {id: 2 , name :  "Amukelani Machete", email: "amu@gmail.com"}
]
// Create a  route that handles the get requests to the base path
 userRouter.get("/",(req: Request , res: Response) => {
    res.status(200).json(users)
 })
//http://localhost:3000/2
//[it validates the string and if the string is correct or not]
userRouter.get("/:id", [param("id").isInt().withMessage("ID must be an integer").toInt()], (req: Request<{id : string}>,res: Response)=> {
     const errors = validationResult(req);
    
     console.log(errors,"errors from ecpress-validator middleware")
     if(errors.isEmpty()){
        return res.status(400).json({errors: errors.array()});

     }
     const {id}=req.params  // this retrieves the id value from the url
     const user = users.find((user) => user.id === parseInt(id));
    

     if(!user){
        return res.status(404).send("User not found")
     }
     res.status(200).json(user);
 })