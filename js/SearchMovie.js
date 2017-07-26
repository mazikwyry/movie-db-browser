import MovieDb from './MovieDb.js';

class SearchMovie {
  findByText(searchQuery = '', page = 1) {
    const movies = MovieDb.searchMovie({
      "query": searchQuery,
      "page": page
    })

    return movies;
  }
}

export default SearchMovie;