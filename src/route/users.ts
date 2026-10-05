import {Router,Request,Response} from 'express'
import {body,param, validationResult} from 'express-validator';
import { error } from 'node:console';
import { addUser, getAllUsers, getUserById } from '../controllers/users';

export const userRouter= Router();

let users =[
    {id: 1 , name : "Vutlhari Maswanganyi", email: "v@gamil.com"},
    {id: 2 , name :  "Amukelani Machete", email: "amu@gmail.com"}
]
// Create a  route that handles the get requests to the base path
 userRouter.get("/", getAllUsers)

//http://localhost:3000/2
//[it validates the string and if the string is correct or not]
userRouter.get("/:id", [param("id").isInt().withMessage("ID must be an integer")], (req: Request<{id : string}>,res: Response)=> {
     const errors = validationResult(req);
    
   
     if(!errors.isEmpty()){
        //if the errors is not emppty there it means an error had occured there it must return 400 status.
        return res.status(400).json({errors: errors.array()});

     }
     getUserById(req,res);

 })
 userRouter.post("/",
    //
    [body("name").notEmpty().withMessage("Name is required"),
    body("Email").isEmail().withMessage("Please enter a valid email address"),
    (req: Request, res: Response) => {
      const errors= validationResult(req);
      if(!errors.isEmpty) {
        return res.status(400).json({errors: errors.array()})
        console.log(req);
      }
      addUser(req,res);

    }
 ])