import SearchMovie from './SearchMovie.js';
import SearchForm from './SearchForm.js';

const search = new SearchMovie;
search.findByText('test').then(results => console.log(results));


const searchForm = new SearchForm(value => console.log(value));
searchForm.render();
