import express from "express";
import { MongoClient } from "mongodb";
import dotenv from "dotenv";
import { moviesRouter } from "./routes/movies.js";
dotenv.config();

const app = express();


const PORT = process.env.PORT || 7000;

const MONGO_URL = process.env.MONGO_URL;
app.use(express.json());

async function createConnection() {
    const client = new MongoClient(MONGO_URL);
    await client.connect();
    console.log("MongoDB Connected..! ");
    return client;
}

export const client = await createConnection();

app.get("/", (request, response) => {
    response.send("Hello World!!!");
});

app.use("/movies", moviesRouter);
app.listen(PORT, () => console.log("App is started on", PORT));


