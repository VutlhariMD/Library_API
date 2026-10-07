import {Router,Request,Response} from 'express'
import {param,body, validationResult } from 'express-validator';





const booksRouter = Router();

let books = [
    {bookId: 1, title: "The Rising star", category: "Fiction", year: 1997, authorId: 1},
    {bookId: 2, title: "Stolen", category: "Horror",  year: 1997,authorId:1}   
]
