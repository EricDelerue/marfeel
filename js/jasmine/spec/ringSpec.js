describe('Ring', function() {
  const regexp = /(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/;

  const ring = new Ring(options);

  beforeEach(function() {
    //const ring = new Ring(options);
    //console.log(typeof ring);
  });

  describe('ring options parameter', function() {
    it('ring options properties are defined', () => {
      expect(ring.title).not.toBe(undefined);
      expect(ring.element).not.toBe(undefined);
      expect(ring.endpoint).not.toBe(undefined);
      expect(ring.domain).not.toBe(undefined);
      expect(ring.range).not.toBe(undefined);
    });

    it('ring options properties should have the right type', () => {
      expect(typeof ring.title).toBe('string');
      expect(typeof ring.element).toBe('object');
      expect(ring.element instanceof Element).toBe(true);
      expect(typeof ring.endpoint).toBe('string');
      expect(Array.isArray(ring.domain)).toBe(true);
      expect(Array.isArray(ring.range)).toBe(true);
    });

    it('ring options endpoint should be an url', () => {
      expect(regexp.test(ring.endpoint)).toBe(true);
    });
  });

  describe('ring fetch', function() {
    // 1. The arguments passed to the function
    // 2. What value the function returns
    // 3. How many times the spied function was called

    const testEndpoint = from_urls['files'].revenue;

    const testData = [
      {
        name: 'tablet',
        value: 120000,
      },
      {
        name: 'smartphone',
        value: 80000,
      },
    ];

    /*  	    
    it('should call fetchData from ring', function(done) {

	    spyOn(window, 'fetch').and.returnValue(Promise.resolve(testData));

	    ring.fetchData()
	      .then( result => {
	        expect(window.fetch).toHaveBeenCalledWith(testEndpoint);
	        expect(result).toEqual(testData);
	        done();
	      });	  
	      
    }); 
    */

    it('should compare results form window.fetch(testEndpoint) and ring.getData() ', function(done) {
      window
        .fetch(testEndpoint)
        .then(response => response.json())
        .then(result => {
          expect(result).toEqual(testData);
          expect(result).toEqual(ring.getData());
          done();
        });
    });
  });

  //demonstrates use of expected exceptions
  describe('new ring', function() {
    it('throw an exception if ring is already instanciated', function() {
      /*expect(function() {
      	

        
      }).toThrowError('ring is already instanciated');*/
    });
  });
});

/*
describe('Testing DOM manipulation', function(){
      let Dom, item, todo;
      beforeEach(function(){
         todo = new ToDo();
        Dom = new DomManipulation();
        item = {
          complete: false,
          id : 1, 
          title: 'some Title'
        }
     })
     
    // it methods will go here ...
    it('should initialise HTML', function(){
        const form = document.createElement('form');
        const input = document.createElement('input')
        const ul = document.createElement('ul')
        input.id = "AddItemInput"
        form.id="addItemForm"
        form.appendChild(input);
        expect(Dom.init().form).toEqual(form)
        expect(Dom.init().ul).toEqual(ul)
      })    
});

*/
