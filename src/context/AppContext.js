import { createContext } from "react";


export const AppContext = createContext();

export function AppContextProvider({children}) {
    const movieData = [
        {
            id : "1",
            name:"Aquaman and the Lost Kingdom",
            genres : {
                Action : "Action",
                Adventure : "Adventure",
                Fantasy : "Fantasy"
            },
            Overview : "Black Manta, still driven by the need to avenge his father's death and wielding the power of the mythic Black Trident, will stop at nothing to take Aquaman down once and for all. To defeat him, Aquaman must turn to his imprisoned brother Orm, the former King of Atlantis, to forge an unlikely alliance in order to save the world from irreversible destruction.",
            imdb : "5.8",
            Timing : "2h : 4mins",
            Starring : "Jason Momoa",
            backgroundPath : "https://image.tmdb.org/t/p/original/cnqwv5Uz3UW5f086IWbQKr3ksJr.jpg",
            posterPath : "https://image.tmdb.org/t/p/original/7lTnXOy0iNtBAdRP3TZvaKJ77F6.jpg",
            movieId : 'Ix0gJwrpexI'

        },{
            id : "2",
            name:"Wonka",
            genres : {
                Action : "Comedy",
                Adventure : "Family",
                Fantasy : "Fantasy"
            },
            Overview : "Willy Wonka – chock-full of ideas and determined to change the world one delectable bite at a time – is proof that the best things in life begin with a dream, and if you’re lucky enough to meet Willy Wonka, anything is possible.",
            imdb : "7.2",
            Timing : "1h : 56mmins",
            Starring : "Jason Momoa",
            backgroundPath : "https://image.tmdb.org/t/p/original/yOm993lsJyPmBodlYjgpPwBjXP9.jpg",
            posterPath : "https://image.tmdb.org/t/p/original/qhb1qOilapbapxWQn9jtRCMwXJF.jpg",
            movieId : 'Ix0gJwrpexI'
        },
        {
            id : "3",
            name:"Wonka",
            genres : {
                Action : "Comedy",
                Adventure : "Family",
                Fantasy : "Fantasy"
            },
            Overview : "Willy Wonka – chock-full of ideas and determined to change the world one delectable bite at a time – is proof that the best things in life begin with a dream, and if you’re lucky enough to meet Willy Wonka, anything is possible.",
            imdb : "7.2",
            Timing : "1h : 56mmins",
            Starring : "Jason Momoa",
            backgroundPath : "https://image.tmdb.org/t/p/original/tLxjbT5ROZRwYcpNT3nfQbqkApk.jpg",
            posterPath : "https://image.tmdb.org/t/p/original/9GBhzXMFjgcZ3FdR9w3bUMMTps5.jpg",
            movieId : 'Ix0gJwrpexI'
        }
    ]
 
    const value = {
        movieData
    }

    return <AppContext.Provider value={value}>
        {children}
    </AppContext.Provider>
}