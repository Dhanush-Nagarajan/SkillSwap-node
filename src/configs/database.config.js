import mongoose from "mongoose";
import config from "./configuration.js";

export async function connectToDB(){
    if(config.mongoURI==undefined){throw new Error("MongoDB URI is undefined");}
    const db=mongoose.connection;
    db.on("error",(error)=>{
        console.log("Error connecting to MongoDB:",error);
    });
    db.once("open",()=>{
        console.log("Connected to MongoDB");
    });
    await mongoose.connect(config.mongoURI);
}