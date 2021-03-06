const expect = require('chai').expect;
const dbz = require('./index');

describe('dbz-names', function(){
  describe('all', function(){
    it('should be an array of strings', function(){
      expect(dbz.all).to.satisfy(isArrayOfStrings);

      function isArrayOfStrings(array){
        return array.every(function(item){
          return typeof item === 'string';
        });
      }
    });

    it('should contain `Goku`', function(){
      expect(dbz.all).to.include('goku')
    });
  });

  describe('random', function(){
    it('should return a random item from the dbz.all', function(){
      let randomItem = dbz.random();
      expect(dbz.all).to.include(randomItem);
    });

    it('should return an array of random items if passed', function(){
      let randomItems = dbz.random(3);
      expect(randomItems).to.have.length(3);
      
      randomItems.forEach(function(item) {
        expect(dbz).to.include(item);
      })
    })
  })
});
