class MoviesList {
  constructor(movies = []) {
    this.movies = movies;
  }

  refresh(movies) {
    this.movies = movies;
    this.render();
  }

  render(){
    const movieList = document.getElementById('movie_list');

    //TODO: move to clear method
    while (movieList.firstChild) {
      movieList.removeChild(movieList.firstChild);
    }

    this.movies.map((movie) => {
      movieList.appendChild(movie.render());
    })
  }
}

export default MoviesList;
