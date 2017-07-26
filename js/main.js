import SearchMovie from './SearchMovie.js';
import SearchForm from './SearchForm.js';
import MovieList from './MovieList.js';
import Movie from './Movie.js';


class App {
  constructor() {
    this.onSearch = this.onSearch.bind(this);
    this.seachForm = new SearchForm(this.onSearch);
    this.movieList = new MovieList;
    this.render();
  }

  onSearch(searchQuery){
    SearchMovie.findByText(searchQuery).then(json => {
      const movies = [];
      json.results.map(movie => {
        movies.push(new Movie(movie.title, movie.release_date, movie.overview, null));
      })
      this.movieList.refresh(movies);
    })
  }

  render(){
    const {seachForm, movieList} = this;

    seachForm.render();
    movieList.render();
  }
}


new App;
