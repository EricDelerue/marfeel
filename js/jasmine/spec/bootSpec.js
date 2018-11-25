describe('Boot tests', function() {
  const regexp = /(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/;

  describe('from_urls tests', function() {
    it('from_urls should be an object', () => {
      expect(typeof from_urls).toBe('object');
    });

    it('from_urls has two source properties files and database', () => {
      expect(from_urls.hasOwnProperty('files')).toBe(true);
      expect(from_urls.hasOwnProperty('database')).toBe(true);
    });

    it('from_urls files are defined', () => {
      expect(from_urls['files'].length).not.toBe(0);
    });

    it('from_urls files urls are defined', function() {
      for (var i = 0; i < from_urls['files']; i++) {
        expect(from_urls['files'][i]).toBeDefined();
        expect(regexp.test(from_urls['files'][i])).toBe(true);
      }
    });

    it('from_urls database are defined', () => {
      expect(from_urls['database'].length).not.toBe(0);
    });

    it('from_urls database urls are defined and well formatted', function() {
      for (var i = 0; i < from_urls['files']; i++) {
        expect(from_urls['database'][i]).toBeDefined();
        expect(regexp.test(from_urls['database'][i])).toBe(true);
      }
    });
  });

  describe('options tests', function() {
    it('options should be an object', () => {
      expect(typeof options).toBe('object');
    });

    it('options should have the following properties', () => {
      expect(options.hasOwnProperty('title')).toBe(true);
      expect(options.hasOwnProperty('element')).toBe(true);
      expect(options.hasOwnProperty('endpoint')).toBe(true);
      expect(options.hasOwnProperty('domain')).toBe(true);
      expect(options.hasOwnProperty('range')).toBe(true);
    });

    it('options properties should have the right type', () => {
      expect(typeof options.title).toBe('string');
      expect(typeof options.element).toBe('object');
      expect(options.element instanceof Element).toBe(true);
      expect(typeof options.endpoint).toBe('string');
      expect(Array.isArray(options.domain)).toBe(true);
      expect(Array.isArray(options.range)).toBe(true);
    });

    it('options endpoint url should be well formatted', () => {
      expect(regexp.test(options.endpoint)).toBe(true);
    });
  });
});
