import React, { useContext } from "react";
import { MoviesContext } from "../contexts/moviesContext";
import { useQueries } from "react-query";
import { getMovie } from "../api/tmdb-api";
import Spinner from "../components/spinner";
import PageTemplate from "../components/templateMovieListPage";

const FavouriteMoviesPage = () => {
  
  const { favourites } = useContext(MoviesContext);

  const favouriteMovieQueries = useQueries(
    favourites.map((movieId) => {
      return {
        queryKey: ["movie", { id: movieId }],
        queryFn: getMovie,
      };
    })
  );

  const isLoading = favouriteMovieQueries.find((m) => m.isLoading === true);

  if (isLoading) {
    return <Spinner />;
  }

  const movies = favouriteMovieQueries.map((q) => {
    q.data.genre_ids = q.data.genres.map((g) => g.id)
    return q.data
  });

  const toDo = () => true;

  if (favourites.length === 0) {
    return <h1>No Favourite Movies</h1>;
  }

  return (
    <PageTemplate
      title="Favourite Movies"
      movies={movies}
      selectFavourite={toDo}
    />
  );
};

export default FavouriteMoviesPage;
