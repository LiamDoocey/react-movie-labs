import React, { useState } from "react";

export const MoviesContext = React.createContext(null);

const MoviesContextProvider = (props) => {
    const [favourites, setFavourites] = useState([])
    const [myReviews, setMyReviews] = useState([{}])

    const addToFavourites = (movie) => {
        let newFavourites = [];
        if (!favourites.includes(movie.id)) {
            newFavourites = [...favourites, movie.id]
        }
        else{
            newFavourites = [...favourites];
        }
        setFavourites(newFavourites)
    };

    const addReview = (movie, review) => {
        setMyReviews( {...myReviews, [movie.id]: review})
    };
    console.log(myReviews)

    const removeFromFavourites = (movie) => {
        setFavourites(favourites.filter((mId) => mId !== movie.id));
    };

    return (
        <MoviesContext.Provider
            value={{
                favourites,
                addToFavourites,
                removeFromFavourites,
                addReview,
            }}
        >
            {props.children}
        </MoviesContext.Provider>
    );
};

export default MoviesContextProvider;