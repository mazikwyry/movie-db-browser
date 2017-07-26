class Movie {
  constructor(title, release_date, overview, poster_path) {
    this.title = title;
    this.release_date = release_date;
    this.overview = overview;
    this.poster_path = poster_path;
  }

  render(){
    const {title, release_date, overview, poster_path} = this;
    const movieElement = document.createElement('LI');

    const movieDetails = `${title}(${release_date}), ${overview}`;
    movieElement.appendChild(document.createTextNode(movieDetails));
    return movieElement;
  }
}

export default Movie;
