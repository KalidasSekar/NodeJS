import express from "express";
const router = express.Router();

//related to movies

app.get("/movies", async (request, response) => {
    let filter = request.query;

    if (filter.rating) {
        filter.rating = + filter.rating;
    }

    const filterMovies = await getAllMovies(filter);//cursor to Array
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

    const movie = await getMoviesById(client, id);

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

    const result = await createMovies(client, data);
    response.send(result);
});

app.delete("/movies/:id", async (request, response) => {
    const { id } = request.params;
    const client = await createConnection()

    const deleteMovies = await deleteMoviesById(client, id);
    response.send(deleteMovies);
});

app.put("/movies/:id", async (request, response) => {
    // console.log(request.params);
    const { id } = request.params;
    const data = request.body;
    const client = await createConnection()

    const updateMovies = await editMovies(client, id, data);

    response.send(updateMovies);
});