import { expect } from 'chai';
import sinon from 'sinon';

import SearchMovie from '../../js/services/SearchMovie.js';
import MovieDb from '../../js/wrappers/MovieDb.js';

describe('SearchMovie', function(){
  let searchMovie;

  beforeEach(() => {
    searchMovie = sinon.stub(MovieDb, 'searchMovie');
  });

  afterEach(() => {
    searchMovie.restore();
  });

  describe('.findByText', function(){
    it('should return Promise with empty results when called with no arguments', function(){
      searchMovie.returns(Promise.resolve({
        results: [],
        page: 1,
      }));

      return SearchMovie.findByText().then(function(data){
        expect(data.results.length).to.equal(0);
        expect(data.page).to.equal(1);
      });
    });

    it('should return Promise with results when called with arguments', function(){
      searchMovie.returns(Promise.resolve({
        results: [{title: 'abc'}, {title: 'abcd'}],
        page: 2,
      }));

      return SearchMovie.findByText('abc', 2).then(function(data){
        expect(data.results.length).to.equal(2);
        expect(data.page).to.equal(2);
      });
    });
  });
});
