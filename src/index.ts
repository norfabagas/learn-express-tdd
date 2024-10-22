import express, { Express, Request, Response } from "express";
import { configDotenv } from "dotenv";

configDotenv();

const app: Express = express();
const port: string = process.env.PORT ?? "3000";

app.get("/", (req: Request, res: Response) => {
    res.send("Hello, World");
});

app.listen(port, () => {
    console.log(`[server] running at port: ${port}`);
});
