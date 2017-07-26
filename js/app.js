import SearchMovie from './services/SearchMovie.js';
import SearchForm from './components/SearchForm.js';
import MoviesList from './components/MoviesList.js';
import Movie from './components/Movie.js';


class App {
  constructor() {
    this.onSearchChange = this.onSearchChange.bind(this);
    this.onPageChange = this.onPageChange.bind(this);

    this.seachForm = new SearchForm(this.onSearchChange);
    this.movieList = new MoviesList(this.onPageChange);
    this.currentSearchQuery = '';
    this.render();
  }

  onSearchChange(searchQuery){
    this.currentSearchQuery = searchQuery;
    SearchMovie.findByText(this.currentSearchQuery)
      .then(this.updateList.bind(this))
      .catch(() => alert('Error occured when fetching movies from MovieDB'));
  }

  onPageChange(newPage){
    SearchMovie.findByText(this.currentSearchQuery, newPage)
      .then(this.updateList.bind(this))
      .catch(() => alert('Error occured when fetching movies from MovieDB'));
  }

  updateList(json){
    const movies = [];
    json.results.map(movie => {
      movies.push(new Movie(movie.title, movie.release_date, movie.overview, null));
    })
    this.movieList.refresh(movies, json.page, json.total_pages);
  }

  render(){
    const {seachForm, movieList} = this;

    seachForm.render();
    movieList.render();
  }
}


new App;
