import SearchMovie from './SearchMovie.js';
import SearchForm from './SearchForm.js';
import MovieList from './MovieList.js';


class App {
  constructor() {
    this.onSearch = this.onSearch.bind(this);
    this.seachForm = new SearchForm(this.onSearch);
    this.movieList = new MovieList;
    this.render();
  }

  onSearch(searchQuery){
    SearchMovie.findByText(searchQuery).then(movies => {
      this.movieList.refresh(movies);
    }).catch(() => alert('Error occured when fetching movies from MovieDB'));
  }

  render(){
    const { seachForm, movieList } = this;

    seachForm.render();
    movieList.render();
  }
}


new App;
