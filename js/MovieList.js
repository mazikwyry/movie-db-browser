class MoviesList {
  constructor(movies = []) {
    this.movies = movies;
  }

  render(){
    const movieList = document.getElementById('movie_list');

    this.movies.map((movie) => {
      movieList.appendChild(movie.render());
    })
  }
}

export default MoviesList;
