import express, {Request, Response} from "express";

const app = express();

app.get("/api/main",async (_:Request,res:Response) =>{
    res.send({msg:"Hello World!"});
})

const port = 8080;
console.log(`Server started at port ${port}`)

app.listen(port)
