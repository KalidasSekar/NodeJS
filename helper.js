import { client } from "./index.js";

async function getMovies(filter) {
    return await client
        .db("firstdb")
        .collection("movies")
        .find(filter)
        .toArray();
}
async function getMoviesById(id) {
    return await client
        .db("firstdb")
        .collection("movies")
        .findOne({ id: id });
}
async function createMovies(data) {
    return await client
        .db("firstdb")
        .collection("movies")
        .insertMany(data);
}
async function deleteMoviesById(id) {
    return await client
        .db("firstdb")
        .collection("movies")
        .deleteOne({ id: id });
}
async function editMovies(id, data) {
    return await client
        .db("firstdb")
        .collection("movies")
        .updateOne({ id: id }, { $set: data });
}

export {
    getMovies,
    getMoviesById,
    createMovies,
    deleteMoviesById,
    editMovies,
};