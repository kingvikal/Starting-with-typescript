import express, {Express, Request, Response} from "express";
import testroute from "./Routes/route"

const app: Express = express();

const PORT = 3000;

app.use(express.json())

app.use("/test",testroute)


app.listen(PORT , () => {
  console.log(`Server running at ${PORT}`);
});
