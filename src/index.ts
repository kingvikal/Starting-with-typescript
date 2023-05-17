import express, { Express } from "express";
import taskroute from "./Routes/taskRoute";
import userRoute from "./Routes/userRoute";
import dotenv from "dotenv";
import { AppDataSource } from "../models/datasource";
import bodyParser from "body-parser";

dotenv.config();

const app: Express = express();

const PORT = 3000;

app.use(express.json());

app.use(bodyParser.urlencoded({ extended: false }));

app.use(bodyParser.json());

app.use("/task", taskroute);
app.use("/user", userRoute);

AppDataSource.initialize()
  .then(() => {
    console.log(`Database running at : ${process.env.PORT}`);
  })
  .catch((err) => {
    console.log("Error during database connection", err);
  });

app.listen(PORT, () => {
  console.log(`Server running at ${PORT}`);
});
