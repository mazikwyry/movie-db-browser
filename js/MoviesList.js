import Paginator from './Paginator.js';

class MoviesList {
  constructor(onPageChange) {
    this.movies = [];
    this.movieList = document.getElementById('movie_list');
    this.onPageChange = onPageChange;
  }

  refresh(movies, currentPage, lastPage) {
    this.movies = movies;
    this.currentPage = currentPage;
    this.lastPage = lastPage;
    this.render();
  }

  clear(){
    const { movieList } = this;
    while (movieList.firstChild) {
      movieList.removeChild(movieList.firstChild);
    }
  }

  render(){
    if (this.movies.length < 1) return false;

    this.clear();
    const { movies, movieList, currentPage, lastPage, onPageChange } = this;

    const paginator = new Paginator(currentPage, lastPage, onPageChange);
    movieList.appendChild(paginator.render());

    movies.map((movie) => {
      movieList.appendChild(movie.render());
    })
  }
}

export default MoviesList;
