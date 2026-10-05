import bodyParser from 'body-parser';
import express, {Express}  from 'express';
import { loggerMiddleware } from './middleware/logger';
import {userRouter} from './route/users'

const app  : Express = express();

const PORT = process.env.PORT || 9000;

//Built in middle wares  and important for parsing incoming json data from the requestbody
//that is convert Json data from the requestbody to a javascript object.
// we use use to mount  middleware functions

app.use(express.json());
app.use(bodyParser.json());

app.use(loggerMiddleware)
//mount the router middleware
//any request that starts with "/v1/users" will be deligated to the 
// module router
// meaning any request that have the "/v1/users" will be passed down to router
//http://localhost:3000/v1/users/2
app.use("/v1/users",userRouter)





app.use((req, res)=>{

    res.status(200).json({message : "The server is running."})
});

app.listen(PORT , 
    //callback function that runs only afte the server starts
    ()=>{ console.log (`Server is running on http://localhost:${PORT}`)}
);

    