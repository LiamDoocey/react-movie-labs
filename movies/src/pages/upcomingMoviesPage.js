import React, { useState, useEffect } from "react";
import PageTemplate from '../components/templateMovieListPage';
import { getUpcomingMovies } from "../api/tmdb-api";

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
                return <></>
            }}
        />
    );
}

export default UpcomingPage;