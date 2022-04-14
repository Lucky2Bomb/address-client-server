import bodyParser from "body-parser";
import express from "express";
import { mongoDbUri } from "./configs/db";
import routers from "./routes/index";
import { testConnectionToMongoDB } from "./services/db.service";
import cors from "cors";

import * as dotenv from "dotenv";
dotenv.config({ path: __dirname + './../.env' })

const app = express();
const { PORT = 8080 } = process.env;

testConnectionToMongoDB(mongoDbUri)
  .then((result) => console.log(result))
  .catch((error) => console.log(error));

app.listen(PORT, () => {
  console.log("server started at http://localhost:" + PORT);
});
app.use(bodyParser.json());
app.use(cors())
app.use(routers);
