import crypto from "crypto"
import { config } from "dotenv";
config()
const secret=process.env.SECRET;
export const random=()=>{
   return crypto.randomBytes(128).toString('base64')
}
export const authentication=(salt:string,url:string):string=>
{
    return crypto.createHmac('sha256',[salt,url].join('/')).update(secret).digest('hex');
};