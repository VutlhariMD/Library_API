import express ,{type Express} from 'express';

//create an express application
const app :Express = express();
const PORT = process.env.PORT || 3000;

//Listen to the incoming requests from the server.
app.listen(PORT, ()=> {
    console.log(`Server is running on http://localhost: ${PORT}`);
})