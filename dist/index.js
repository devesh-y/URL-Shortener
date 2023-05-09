"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
const body_parser_1 = __importDefault(require("body-parser"));
const dotenv_1 = require("dotenv");
const dbSchema_1 = require("./db/dbSchema");
const helper_1 = require("./helper/helper");
const cors_1 = __importDefault(require("cors"));
const app = (0, express_1.default)();
app.use(body_parser_1.default.json());
(0, dotenv_1.config)();
app.use((0, cors_1.default)({
    credentials: true
}));
app.get("/:shorturl", async (req, res) => {
    try {
        const { shorturl } = req.params;
        const existing = await (0, dbSchema_1.getByshortUrl)(shorturl).catch((error) => {
            console.log("unable to fetch from server");
        });
        if (existing) {
            existing.clicks++;
            existing.save();
            res.status(200).redirect(existing.fullurl);
            return;
        }
        res.status(404).send("wrong");
    }
    catch (error) {
        return res.status(400).send("error occured at register process");
    }
});
app.post("/shrinkit", async (req, res) => {
    try {
        const { fullurl } = req.body;
        if (!fullurl) {
            return res.send(400).send("invalid");
        }
        const existing = await (0, dbSchema_1.getbyFullUrl)(fullurl).catch((err) => {
            console.log("unable to fetch from server");
        });
        if (existing) {
            await existing.save();
            return res.status(200).send(existing.shorturl);
        }
        const salt = (0, helper_1.random)();
        const newcreated = await (0, dbSchema_1.createshort)({
            fullurl,
            shorturl: ((0, helper_1.authentication)(salt, fullurl).slice(0, 10))
        });
        return res.status(200).send(newcreated.shorturl);
    }
    catch (error) {
        return res.status(400).send("error occured at register process");
    }
});
app.listen(process.env.PORT, () => {
    console.log(`server is listening at http://localhost:${process.env.PORT}`);
});
const mongourl = `mongodb+srv://${process.env.USER_ID}:${process.env.USER_PASS}@urldb.wceiyu6.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`;
mongoose_1.default.Promise = Promise;
mongoose_1.default.connect(mongourl);
mongoose_1.default.connection.on("error", (error) => {
    console.log("error occured at initial connection with database");
});
//# sourceMappingURL=index.js.map