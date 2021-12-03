// const express = require("express"); //type module should be "commonjs"
import express from "express"; //type module should be "module"
import { MongoClient } from "mongodb";
import dotenv from "dotenv";
//either require works or import works together it's not work.
dotenv.config();

const app = express();

// One stop solution - to parse all the request as JSON
// One stop solution - middleware

app.use(express.json()); // parse body to JSON

const PORT = process.env.PORT || 9000; //Heroku will auto asign the PORT
//process.env
const MONGO_URL = process.env.MONGO_URL;

// mongodb + srv://kalidas_2021:<password>@cluster0.8as6j.mongodb.net/myFirstDatabase?retryWrites=true&w=majority

async function createConnection() {
    const client = new MongoClient(MONGO_URL);
    await client.connect();
    console.log("MongoDB Connected..! ");
    return client;
}

app.get("/", (request, response) => {
    response.send("Hello World!!!");
});



// app.get("/movies", (request, response) => {
//     console.log(request.query);
//     const { language, rating } = request.query;
//     let filterMovies = movies;
//     if (language) {
//         filterMovies = filterMovies.filter((mv => mv.language === language));
//     }
//     if (rating) {
//         filterMovies = filterMovies.filter((mv => mv.rating === + rating));
//     }

//     response.send(filterMovies);
// });

app.get("/movies", async (request, response) => {
    let filter = request.query;

    if (filter.rating) {
        filter.rating = + filter.rating;
    }

    const client = await createConnection()
    const filterMovies = await client
        .db("firstdb")
        .collection("movies")
        .find(filter)
        .toArray();//cursor to Array
    response.send(filterMovies);
    console.log(filterMovies);
});

//Cursor - pagination
//find -20
//it
//top 10 1 2 3 4 - pagination


app.get("/movies/:id", async (request, response) => {
    const { id } = request.params;
    const client = await createConnection()

    // const movie = movies.filter((mv) => mv.id === id)[0];
    // const movie = movies.find((mv) => mv.id === id);
    // console.log(movie);

    const movie = await client
        .db("firstdb")
        .collection("movies")
        .findOne({ id: id });

    const notFound = { message: "No matchig movie" };
    console.log(movie);
    // movie ? response.send(movie) : response.send(notFound);
    movie ? response.send(movie) : response.status(404).send(notFound);

});

app.post("/movies", async (request, response) => {
    // console.log(request.params);
    const data = request.body;
    console.log(data);
    const client = await createConnection()

    const createMovies = await client
        .db("firstdb")
        .collection("movies")
        .insertMany(data);
    response.send(createMovies);
});

app.delete("/movies/:id", async (request, response) => {
    const { id } = request.params;
    const client = await createConnection()

    const deleteMovies = await client
        .db("firstdb")
        .collection("movies")
        .deleteOne({ id: id });
    response.send(deleteMovies);
});

app.put("/movies/:id", async (request, response) => {
    // console.log(request.params);
    const { id } = request.params;
    const data = request.body;
    const client = await createConnection()

    const updateMovies = await client
        .db("firstdb")
        .collection("movies")
        .updateOne({ id: id }, { $set: data });
    console.log(data, "has been changed");
    response.send(updateMovies);
});

app.listen(PORT, () => console.log("App is started on", PORT));