import express from "express";
import {
    getMovies,
    getMoviesById,
    createMovies,
    deleteMoviesById,
    editMovies
} from "../helper.js";

const router = express.Router();

router.get("/", async (request, response) => {
    let filter = request.query;

    if (filter.rating) {
        filter.rating = + filter.rating;
    }
    // const client = await createConnection()
    const filterMovies = await getMovies(filter);//cursor to Array
    response.send(filterMovies);
});

router.get("/:id", async (request, response) => {
    const { id } = request.params;
    // const client = await createConnection()

    const movie = await getMoviesById(id);

    const notFound = { message: "No matchig movie" };
    movie ? response.send(movie) : response.status(404).send(notFound);
});

router.post("/", async (request, response) => {
    const data = request.body;
    // const client = await createConnection()
    const result = await createMovies(data);
    response.send(result);
});

router.delete("/:id", async (request, response) => {
    const { id } = request.params;
    // const client = await createConnection()
    const deleteMovies = await deleteMoviesById(id);
    const notFound = { message: "No matching movie" };
    deleteMovies ? response.send(deleteMovies) : response.status(404).send(notFound)
});

router.put("/:id", async (request, response) => {
    const { id } = request.params;
    const data = request.body;
    // const client = await createConnection()

    const updateMovies = await editMovies(id, data);
    response.send(updateMovies);
});

export const moviesRouter = router;