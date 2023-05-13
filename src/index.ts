import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser"
import { config } from "dotenv";
import { createshort ,getbyFullUrl,getByshortUrl} from "./db/dbSchema";
import { authentication, random } from "./helper/helper";
const app=express();

app.use(bodyParser.json());
config();
app.use((req, res,next) => {
    res.header('Access-Control-Allow-Origin', 'https://urlshortener-dev.netlify.app');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    res.header('Access-Control-Allow-Methods', 'POST');
    res.header('Access-Control-Allow-Methods', 'GET');
    next();
  });


const mongourl:string=`mongodb+srv://${process.env.USER_ID}:${process.env.USER_PASS}@urldb.wceiyu6.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`
mongoose.Promise=Promise;
mongoose.connect(mongourl);
mongoose.connection.on("error",(error:Error)=>{
    console.log("error occured at initial connection with database");
})   
mongoose.connection.once('connected', () => {
    console.log('Connected to MongoDB');

});

app.get("/:shorturl",async(req:express.Request,res:express.Response)=>{
    try{
        const {shorturl}=req.params;
        const existing= await getByshortUrl(shorturl).catch((error)=>{
            console.log("unable to fetch from server");
        })
        if(existing){
            existing.clicks++;
            existing.save();
            res.status(200).redirect(existing.fullurl)
            return;
        }
        res.status(404).send("wrong")

    }
    catch(error){
        
        return res.status(400).send("error occured at register process")
    }
})
app.post("/shrinkit",async (req:express.Request,res:express.Response)=>{
    try{
        const {fullurl}=req.body;
        if(!fullurl){
            return res.send(400).send("invalid")
        }
        const existing= await getbyFullUrl(fullurl).catch((err)=>{
            
            console.log("unable to fetch from server");
        });
        if(existing){    
            
            return res.status(200).send(existing.shorturl)
        }
        const salt=random();  
        const newcreated=await createshort({
            fullurl,
            shorturl:(authentication(salt,fullurl).slice(0,10))
        })

        return res.status(200).send(newcreated.shorturl);

    }
    catch(error){
        return res.status(400).send("error occured at register process")
    }
})  

app.listen(process.env.PORT,()=>{
    console.log(`server is listening at ${process.env.PORT}`);
})