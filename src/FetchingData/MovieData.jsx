import React, { useEffect, useState } from "react";

export const MovieCardsss = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [query, setQuery] = useState("Knights");
  const [totalResults, setTotalResults] = useState(0);

  const fetchMovies = async (searchTerm) => {
    if (!searchTerm.trim()) return;

    setLoading(true);
    setError(null);

    try {
      const responses = await Promise.all([
        fetch(`https://www.omdbapi.com/?apikey=b1fb533b&s=${searchTerm}&page=1`),
        fetch(`https://www.omdbapi.com/?apikey=b1fb533b&s=${searchTerm}&page=2`),
      ]);

      const data = await Promise.all(responses.map((res) => res.json()));

      if (data[0].Response === "False") {
        setError(data[0].Error || "No movies found");
        setMovies([]);
        setTotalResults(0);
      } else {
        const allMovies = data.flatMap((item) => item.Search || []);
        setMovies(allMovies);
        setTotalResults(parseInt(data[0].totalResults) || allMovies.length);
      }
    } catch (err) {
      console.error(err);
      setError("Failed to fetch movies. Try again later.");
      setMovies([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchMovies(query);
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();
    fetchMovies(query);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white py-12 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-2">Discover Movies</h1>
          <p className="text-lg text-blue-100">Search from millions of movies and TV shows</p>
        </div>
      </div>

      {/* Search Bar */}
      <div className="max-w-7xl mx-auto px-4 -mt-8">
        <form onSubmit={handleSearch} className="flex justify-center">
          <div className="w-full max-w-3xl bg-white rounded-2xl shadow-2xl flex overflow-hidden">
            <input
              type="text"
              placeholder="Search for movies, series, episodes..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="flex-1 p-4 pl-12 text-lg focus:outline-none"
            />
            <button
              type="submit"
              disabled={loading}
              className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-8 font-semibold hover:from-indigo-700 hover:to-purple-700 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? <i className="fa-solid fa-spinner fa-spin"></i> : "Search"}
            </button>
          </div>
        </form>

        {/* Results Count */}
        {!loading && !error && movies.length > 0 && (
          <div className="text-center mt-6 text-gray-600">
            Found <span className="font-semibold text-indigo-600">{totalResults.toLocaleString()}</span> results
            {query && ` for "${query}"`}
          </div>
        )}
      </div>

      {/* Movies Grid */}
      <div className="px-[8rem] mx-auto py-12">
        {loading ? (
          <div className="flex flex-col items-center justify-center py-20">
            <div className="w-20 h-20 border-4 border-indigo-200 rounded-full relative">
              <div className="w-20 h-20 border-4 border-indigo-600 rounded-full animate-spin border-t-transparent absolute top-0"></div>
            </div>
            <p className="mt-6 text-xl text-gray-600 font-medium">Searching movies...</p>
          </div>
        ) : error ? (
          <div className="flex flex-col items-center justify-center py-20">
            <div className="bg-red-50 border-2 border-red-200 rounded-2xl p-8 max-w-md text-center">
              <i className="fa-solid fa-circle-exclamation text-5xl text-red-500 mb-4"></i>
              <h3 className="text-2xl font-bold text-gray-800 mb-2">Oops!</h3>
              <p className="text-gray-600">{error}</p>
              <button
                onClick={() => fetchMovies(query)}
                className="mt-6 bg-indigo-600 text-white px-6 py-2 rounded-lg hover:bg-indigo-700 transition"
              >
                Try Again
              </button>
            </div>
          </div>
        ) : movies.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-20">
            <div className="bg-gray-50 border-2 border-gray-200 rounded-2xl p-8 max-w-md text-center">
              <i className="fa-solid fa-film text-5xl text-gray-400 mb-4"></i>
              <h3 className="text-2xl font-bold text-gray-800 mb-2">No Results Found</h3>
              <p className="text-gray-600">Try searching for something else</p>
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-10">
            {movies.slice(0, 4).map((movie) => ( // Show only 3 movies
              <div
                key={movie.imdbID}
                className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 w-full"
              >
                {/* Poster */}
                <div className="relative h-[28rem] overflow-hidden">
                  <img
                    src={movie.Poster !== "N/A" ? movie.Poster : "https://via.placeholder.com/400x600/6366f1/ffffff?text=No+Poster"}
                    alt={movie.Title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <span className="absolute top-3 right-3 bg-indigo-600 text-white text-xs font-semibold px-3 py-1 rounded-full uppercase shadow-lg">
                    {movie.Type}
                  </span>
                </div>

                {/* Info */}
                <div className="p-6">
                  <h2 className="font-bold text-lg text-gray-800 mb-3 line-clamp-2 group-hover:text-indigo-600 transition-colors">
                    {movie.Title}
                  </h2>
                  <div className="flex items-center gap-2 text-gray-500 mb-4">
                    <i className="fa-solid fa-calendar text-sm"></i>
                    <span className="text-sm">{movie.Year}</span>
                  </div>

                  <button
                    onClick={() => window.open(`https://www.imdb.com/title/${movie.imdbID}`, "_blank")}
                    className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-3 rounded-xl font-semibold hover:from-indigo-700 hover:to-purple-700 transform hover:scale-105 transition-all duration-200 shadow-md hover:shadow-lg"
                  >
                    <i className="fa-solid fa-play mr-2"></i> View Details
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
