import MovieDb from '../wrappers/MovieDb.js';

class SearchMovie {
  static findByText(searchQuery = ' ', page = 1) {
    return MovieDb.searchMovie({
      "query": searchQuery || ' ',
      "page": page
    });
  }
}

export default SearchMovie;
