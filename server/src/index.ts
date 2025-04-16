import express from "express";
import { Request, Response } from "express";
import { AppDataSource } from "./data-source";
import { bookrouter } from "./routes/bookRoutes";
import { userRouter } from "./routes/userRoutes";
import cors = require("cors");
import { AuhtorRouter } from "./routes/authorRoutes";

const app: express.Application = express();
app.use(express.json());
app.use(cors());


app.use("/books", bookrouter);
app.use("/user", userRouter);
app.use("/author", AuhtorRouter);

app.get("/", (req: Request, res: Response) => {
  console.log("checking");
  res.status(200).json({ message: " Express Works" });
});
const port: number = 3900;

AppDataSource.initialize()
  .then(() => {
    console.log("connected to mysql");
    app.listen(port, () => {
      console.log(
        `TypeScript with Express running on --> http://localhost:${port}/`
      );
    });
  })
  .catch((error) => {
    console.log("database error", error.message);
  });