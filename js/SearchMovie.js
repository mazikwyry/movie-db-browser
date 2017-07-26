import MovieDb from './MovieDb.js';
import Movie from './Movie.js';

class SearchMovie {
  static findByText(searchQuery = ' ', page = 1) {
    return MovieDb.searchMovie({
      "query": searchQuery || ' ',
      "page": page
    }).then(json => {
      return json.results.map(movie =>
        new Movie(movie.title, movie.release_date, movie.overview, null)
      );
    });
  }
}

export default SearchMovie;
