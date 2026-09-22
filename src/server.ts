import express, {Express}  from 'express';

const app  : Express = express();

const PORT = process.env.PORT || 3000;

app.use((req, res)=>{

    res.status(200).json({message : "The server is running."})
});

app.listen(PORT , 
    ()=>{ console.log (`Server is running on http://localhost:${PORT}`)}
);

    