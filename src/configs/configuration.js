import dotenv from "dotenv";

dotenv.config();

if(!process.env.PORT||
    !process.env.MONGO||
    !process.env.SECRET||
    !process.env.TEMP_SECRET||
    !process.env.EXPIRE
){
    throw new Error("Missing environmental variables. Please check your .env file");
}

const config = {
  mongoURI: process.env.MONGO,
  PORT: process.env.PORT,
  secretKey: process.env.SECRET,
  tempSecretKey: process.env.TEMP_SECRET,
  expiry: process.env.EXPIRE,
};

export default config;