// const express = require("express"); //type module should be "commonjs"
import express from "express"; //type module should be "module"
import { MongoClient } from "mongodb";
import dotenv from "dotenv";
import { moviesRouter } from "./routes/movies.js";

//either require works or import works together it's not work.
dotenv.config();

export const app = express();

// One stop solution - to parse all the request as JSON
// One stop solution - express.json is inbuil middleware

app.use(express.json()); // parse body to JSON

const PORT = process.env.PORT || 9000; //Heroku will auto asign the PORT
//process.env
const MONGO_URL = process.env.MONGO_URL;
// mongodb + srv://kalidas_2021:<password>@cluster0.8as6j.mongodb.net/myFirstDatabase?retryWrites=true&w=majority

export async function createConnection() {
    const client = new MongoClient(MONGO_URL);
    await client.connect();
    console.log("MongoDB Connected..! ");
    return client;
}

export const createConnection = await client();

app.get("/", (request, response) => {
    response.send("Hello World!!!");
});

app.use("/movies", moviesRouter);
app.listen(PORT, () => console.log("App is started on", PORT));


