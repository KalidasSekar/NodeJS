import { client } from "./index.js";

async function getAllMovies(filter) {
    return await client
        .db("firstdb")
        .collection("movies")
        .find(filter)
        .toArray(); //cursor to Array
}
async function getMoviesById(client, id) {
    return await client
        .db("firstdb")
        .collection("movies")
        .findOne({ id: id });
}
async function createMovies(client, data) {
    return await client
        .db("firstdb")
        .collection("movies")
        .insertMany(data);
}
async function deleteMoviesById(client, id) {
    return await client
        .db("firstdb")
        .collection("movies")
        .deleteOne({ id: id });
}
async function editMovies(client, id, data) {
    return await client
        .db("firstdb")
        .collection("movies")
        .updateOne({ id: id }, { $set: data });
}

export {
    getAllMovies,
    getMoviesById,
    createMovies,
    deleteMoviesById,
    editMovies,
};