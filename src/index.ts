import express, { Request, Response } from "express";
import { connectDatabase } from "./config/script";
import userRoute from "./routes/userRoute";

const app = express();
const port = 3000;

app.get("/", (req: Request, res: Response) => {
  res.send("Hello, World!");
});

app.use("api/v1", userRoute);

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
  connectDatabase();
});
