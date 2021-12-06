// import { app } from "./index";

// app.get("/movies", (request, response) => {
//     console.log(request.query);
//     const { language, rating } = request.query;
//     let filterMovies = movies;
//     if (language) {
//         filterMovies = filterMovies.filter((mv => mv.language === language));
//     }
//     if (rating) {
//         filterMovies = filterMovies.filter((mv => mv.rating === +rating));
//     }

//     response.send(filterMovies);
// });
