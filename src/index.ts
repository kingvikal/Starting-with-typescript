import express, {Express} from "express";
import testroute from "./Routes/taskRoute"
import dotenv from "dotenv";
import { AppDataSource } from "../models/datasource";

dotenv.config();

const app: Express = express();

const PORT = 3000;

app.use(express.json())

app.use("/test",testroute)

AppDataSource.initialize().then(()=>{console.log(`Database running at : ${process.env.PORT}`)}).catch((err)=>{console.log("Error during database connection", err)})


app.listen(PORT , () => {
  console.log(`Server running at ${PORT}`);
});
