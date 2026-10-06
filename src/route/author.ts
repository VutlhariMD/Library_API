import { Router,Request,Response } from "express";
import {body,param, validationResult} from "express-validator"


export const  authorRouter = Router();

let authors= [
    {id: 1, name : "Kgothatso Ramodike", email: "kgothi@gmail"},
    {id: 2, name : "Nyiko Ram", email: "nyiko@gmail"},
    {id: 3, name : "Nhlayiseko", email: "nhlayiseko@gmail"}
]
//CRUD Operations

authorRouter.get("/", (req:Request, res: Response)=>{
    res.status(200).json(authors);
})
 authorRouter.get("/:id",
    [param("id").isInt().withMessage("Please enter a valid Id")],
    (req: Request<{id: string}>, res: Response)=>{
        const errors = validationResult(req);
 //Check for errors
    if(!errors.isEmpty){
        return  res.status(400).json({errors: errors.array()});
    }
    const {id} = req.params;
    const author=authors.find((author)=>author.id === parseInt(id))
     console.log(author)
    if(!author){
        return res.status(404).send("Author not found");
    }
    res.status(200).json(author);
    }
 )
 //Add a new author
authorRouter.post("/",
    [body("name").notEmpty().withMessage("Please enter  the author name"),
     body("Email").isEmail().withMessage("Please enter a valid email")
    ],
    (req: Request,res: Response)=>{

     const errors= validationResult(req)
     if(!errors.isEmpty){
        return res.status(400).json({errors: errors.array()})
    }
    const {name,email}= req.body;
    const newUser = {id: authors.length+1, name, email}   
    authors.push (newUser)
    res.status(200).json(newUser);
    }
)