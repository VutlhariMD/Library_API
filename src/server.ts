import express ,{type Express} from 'express';
import bodyParser from 'body-parser'
//create an express application
const app :Express = express();
const PORT = process.env.PORT || 3000;

//Attach the express app to the application\
app.use(express.json);
app.use(bodyParser.json)


















//Listen to the incoming requests from the server.
app.listen(PORT, ()=> {
    console.log(`Server is running on http://localhost: ${PORT}`);
})