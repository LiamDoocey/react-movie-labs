import React, { useState, useEffect } from "react";
import PageTemplate from '../components/templateMovieListPage';
import { getUpcomingMovies } from "../api/tmdb-api";
import AddToWatchlistIcon from "../components/cardIcons/addToWatchlist";

const UpcomingPage = (props) => {
    const [upcomingMovies, setMovies] = useState([]);

    useEffect(() => {

        getUpcomingMovies().then(upcomingMovies => {
            setMovies(upcomingMovies);
        });

    }, []);

    return (
        <PageTemplate
            title="Upcoming Movies"
            movies={upcomingMovies}
            action={(movie) => {
                return <AddToWatchlistIcon movie={movie} />;
            }}
        />
    );
}

export default UpcomingPage;