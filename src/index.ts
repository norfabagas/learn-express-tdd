import express, { Express, Request, Response } from "express";
import { configDotenv } from "dotenv";
import swagger from "./docs/swagger";
import swaggerUI from "swagger-ui-express";

configDotenv();

const app: Express = express();
const port: string = process.env.PORT ?? "3000";
const appUrl: string = process.env.APP_URL ?? "localhost";

app.use("/docs", swaggerUI.serve, swaggerUI.setup(swagger));
app.get("/", (req: Request, res: Response) => {
    res.send("Hello, World");
});

app.listen(port, () => {
    console.log(`[server] running at ${appUrl}:${port}`);
});
