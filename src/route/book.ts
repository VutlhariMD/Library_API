import {Router,Request,Response} from 'express'
import {param,body, validationResult } from 'express-validator';
import { authors } from './author';




export const booksRouter = Router();

let books = [
    {bookId: 1, title: "The Rising star", category: "Fiction", year: 1997, authorId: 1},
    {bookId: 2, title: "Stolen", category: "Horror",  year: 1997,authorId:1}   
];

 booksRouter.post("/",(req: Request, res: Response)=>{
    // Desctructuring information from the  request body sent by the user
     const {bookId,title,authorId,category,year} =req.body;
     const authorIdNumber = parseInt(authorId);

     const author = authors.find((author)=> 
        //If the authorId is equal to an id that already exists in the author in-memory
        author.id === authorIdNumber)

        if(!author){
            return res.status(404).json({message: "Author not found"});
        }

     const newBook= {
        bookId: books.length+1 ,
        title,
        category,
        year,
        authorId: authorIdNumber
    };

    books.push(newBook);

    return res.status(201).json({message: "Book created successfully", book: newBook})

});

booksRouter.get("/", (req:Request,res: Response)=>{

    res.status(200).json(books);
});
