const API_URL = 'https://api.themoviedb.org/3/';
const API_KEY = 'abd0a73367a21a2827c86f7445358c37';

class MovieDb {
  static searchMovie(options){
    return fetch(buildRequestUrl('search/movie', options))
      .then(response => response.json());
  }
}

const buildRequestUrl = (endpoint, options = {}) => {
  const requestUrl = new URL(`${API_URL}${endpoint}`);
  options.api_key = API_KEY;
  Object.keys(options).map(key => requestUrl.searchParams.append(key, options[key]))
  return requestUrl;
}

export default MovieDb;
