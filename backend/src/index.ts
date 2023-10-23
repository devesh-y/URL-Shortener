import express from "express";
import mongoose from "mongoose";
import { config } from "dotenv";
import { createshort, getbyFullUrl, getByshortUrl } from "./db/dbSchema";
import { authentication, random } from "./helper/helper";
import cors from "cors";
const app = express();
app.use(cors(
    {
        origin:`${process.env.WEBSITE}`,
        methods:['GET','POST']
    }
));
app.use(express.json());
config();

const mongourl: string = `mongodb+srv://${process.env.USER_ID}:${process.env.USER_PASS}@urldb.wceiyu6.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`

const connect_to_mongo=()=>{
    mongoose.connect(mongourl).then( ()=>{
        console.log("Successfully connected to MongoDb");
    }).catch( ()=>{
        console.log("error occurred while connection to MongoDb")
        setTimeout(()=>{
            connect_to_mongo();
        },3000)
    })
}
connect_to_mongo();


// setInterval(() => {
//     console.log("service is on");
// }, 60000)
app.get("/:shorturl", async (req: express.Request, res: express.Response) => {
    try {
        const { shorturl } = req.params;
        const existing = await getByshortUrl(shorturl).catch(() => {
            console.log("unable to fetch from server");
        })
        if (existing) {
            existing.clicks++;
            await existing.save();
            res.status(200).redirect(existing.fullurl)
            return;
        }
        return res.status(404).send("invalid entry or url expired");

    }
    catch (error) {

        return res.status(400).send("error occured at backend")
    }
})
app.post("/shrinkit", async (req: express.Request, res: express.Response) => {
    try {
        const { fullurl } = req.body;
        if (!fullurl) {
            return res.status(404).send("invalid")
        }
        const existing = await getbyFullUrl(fullurl).catch(() => {

            console.log("unable to fetch from server");
            throw new Error();
        });
        if (existing) {
            return res.status(200).send(existing.shorturl)
        }
        const salt = random();
        const newcreated = await createshort({
            fullurl,
            shorturl: (authentication(salt, fullurl).slice(0, 5))
        }).catch(()=>{
            console.log("error occurred at new entry creation");
            throw new Error();
        })

        return res.status(200).send(newcreated.shorturl);

    }
    catch (error) {
        return res.status(400).send("error");
    }
})

app.listen(process.env.PORT, () => {
    console.log(`server is listening at ${process.env.PORT}`);
})
