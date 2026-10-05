import {Request,Response} from 'express'

let users =[
    {id: 1 , name : "Vutlhari Maswanganyi", email: "v@gamil.com"},
    {id: 2 , name :  "Amukelani Machete", email: "amu@gmail.com"}
]

export const getAllUsers = (req: Request,res: Response) =>{
    res.status(200).json(users);
}
export const getUserById = (req: Request<{id : string}>, res: Response) =>{
     const {id}=req.params  // this retrieves the id value from the url
     const user = users.find((user) => user.id === parseInt(id));
    

     if(!user){
        return res.status(404).send("User not found")
     }
     res.status(200).json(user);
     
}

export const addUser=(req: Request, res: Response)=>{
      const {name, email}=req.body;
        const newUser= {id: users.length +1 , name, email};
        users.push(newUser);

        res.status(201).json(newUser);
      
}