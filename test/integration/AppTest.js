describe("Movie Search Test", function () {
  context('when submitting search form', function(){
    before(function(){
      var input = document.querySelector('input');
      input.value = 'abc';
      var button = document.querySelector('button');
      button.click();
    })

    it("shows search results", function () {
      setTimeout(function() {
        expect(document.getElementById('#movie_list').length)
          .to.be.equal(20);
      }, 1000);
    });
  });
});
