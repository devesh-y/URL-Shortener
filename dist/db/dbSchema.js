"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getByshortUrl = exports.getbyFullUrl = exports.createshort = exports.UrlModel = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const urlschema = new mongoose_1.default.Schema({
    fullurl: { type: String, required: true },
    shorturl: { type: String, required: true },
    clicks: { type: Number, default: 0 }
});
exports.UrlModel = mongoose_1.default.model("url", urlschema);
const createshort = (values) => new exports.UrlModel(values).save().then((data) => data.toObject());
exports.createshort = createshort;
const getbyFullUrl = (fullurl) => exports.UrlModel.findOne({ fullurl });
exports.getbyFullUrl = getbyFullUrl;
const getByshortUrl = (shorturl) => exports.UrlModel.findOne({ shorturl });
exports.getByshortUrl = getByshortUrl;
//# sourceMappingURL=dbSchema.js.map