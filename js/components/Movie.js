class Movie {
  constructor(title, release_date, overview, poster_path) {
    this.title = title;
    this.release_year = release_date.substring(0, 4);
    this.overview = overview;
    this.poster_path = poster_path;
  }

  render(){
    const {title, release_year, overview, poster_path} = this;
    const movieElement = document.createElement('LI');

    const movieDetails = `${title} (${release_year}), ${overview}`;
    movieElement.appendChild(document.createTextNode(movieDetails));
    return movieElement;
  }
}

export default Movie;
