import SearchMovie from './SearchMovie.js';
import SearchForm from './SearchForm.js';
import MovieList from './MovieList.js';
import Movie from './Movie.js';

const search = new SearchMovie;
search.findByText('test').then(results => console.log(results));


const searchForm = new SearchForm(value => console.log(value));
searchForm.render();

const movies = [new Movie('Film', '2014', 'Super film', null)]
const movieList = new MovieList(movies);
movieList.render();
