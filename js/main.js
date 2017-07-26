import SearchMovie from './SearchMovie.js';

const search = new SearchMovie;
search.findByText('test').then(results => console.log(results));
