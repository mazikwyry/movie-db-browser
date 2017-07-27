import chai  from 'chai';
import sinon from 'sinon';
import chaiAsPromised from 'chai-as-promised';
import fetchMock from 'fetch-mock';
import fetch from 'node-fetch';

chai.use(chaiAsPromised);
const expect = chai.expect;

import MovieDb from '../js/wrappers/MovieDb.js';

describe('MovieDb', function(){
  describe('.searchMovie', function(){
    afterEach(() => {
      fetchMock.restore();
    });

    context('when no arguments given', function(){
      before(function(){
        fetchMock.get("begin:https://api.themoviedb.org/3/",
          {
            ok: false,
            status: 422
         }).catch(unmatchedUrl => {
          return fetch(unmatchedUrl)
        });
      })

      it('should throw an error', function(){
        expect(MovieDb.searchMovie()).to.be.rejectedWith(Error);
      });
    });

    context('when query given in options', function(){
      before(function(){
        fetchMock.get("begin:https://api.themoviedb.org/3/",
          {
            ok: true,
            status: 200,
            body: JSON.stringify({"page":1 ,"total_results":1, "total_pages":1, "results":[{"vote_count":2,"id":115268,"video":false,"vote_average":4,"title":"Balu ABCDEFG","popularity":1.000831,"poster_path":"\/gFsFtGnRBOT6BprnmaKnf4tmGKM.jpg","original_language":"en","original_title":"Balu ABCDEFG","genre_ids":[18,10749,10769],"backdrop_path":null,"adult":false,"overview":"Balu ABCDEFG (Telugu: బాలు ABCDEFG) is a Telugu film released on 6 January 2005 and was directed by A. Karunakaran. This film stars Pawan Kalyan, Shriya, and Neha Oberoi. The film was produced by C. Ashwini Dutt under his production company Vyjayanthi Movies. The movie was a good grosser at the box office; it ran for 100 days successfully in 8 theaters in Andhra Pradesh","release_date":"2005-01-06"}]})
        }).catch(unmatchedUrl => {
          return fetch(unmatchedUrl)
        });
      })

      it('should return a promise with json response', function(){
        return MovieDb.searchMovie({query: 'abc'})
          .then(function(data){
            expect(data.page).to.equal(1);
            expect(data.total_results).to.equal(1);
            expect(data.results.length).to.equal(1);
          });
      });
    });
  });
});
