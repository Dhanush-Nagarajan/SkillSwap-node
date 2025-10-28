import app from "../../lib.js";
import config from "../configs/configuration.js";
import { connectToDB } from "../configs/database.config.js";
import { APIError } from "../utils/apiError.utils.js";

async function startServer() {
  try {
    await connectToDB();
    app.listen(config.PORT, () => {
      console.log(`Server is running on port ${config.PORT}`);
    });
  } catch (error) {
    console.log(error);
    throw new APIError(error.message);
  }
}

startServer();
