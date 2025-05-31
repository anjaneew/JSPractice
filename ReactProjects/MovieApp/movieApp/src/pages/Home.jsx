import MovieCard from "../components/MovieCard.jsx";

function Home(){
    const movies = [
        { id: 1, title:"John Wick 1", release_date: "2000" },
        { id: 2, title:"Terminator", release_date: "2001"},
        { id: 3, title:"The Matrix", release_date: "2002"},
        { id: 4, title:"Titanic", release_date: "2003"},
        { id: 5, title:"Sleepless in Seattle", release_date: "2004"},
    ];

    const handleSearch = () => {

    };

    return (
        <div className="home">
            <form onSubmit={handleSearch} className="search-form">
                <input 
                type="text" 
                placeholder="Search for movies"
                className="search-input"
                />
                <button type="submit" className="search-btn">Search</button>
            </form>
            <div className="movies-grid">
                {movies.map(movie => <MovieCard movie={movie} key={movie.id} />)}
            </div>
        </div>
        );
};

export default Home