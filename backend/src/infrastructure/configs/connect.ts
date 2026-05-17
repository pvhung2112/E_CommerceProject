import mongoose from "mongoose"

export const connect = async() =>{
try {
    const url  = process.env.MONGODB_URL;
    if(!url){
        throw new Error("MONGODB_URL is not defined in .env")
    }
    await mongoose.connect(url);
    console.log("connect Database!")
} catch (error) {
    console.log(`erorr database : ${error}`)
}
}