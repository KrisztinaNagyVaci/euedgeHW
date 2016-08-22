describe('Config factory', function() {
  var Config;

  beforeEach(angular.mock.module('HRSystem'));

  beforeEach(inject(function(_Config_) {
    Config = _Config_;
  }));

  it('should exist', function() {
    expect(Config).toBeDefined();
  });
});

describe('Config factory', function() {
  var Config;

  beforeEach(angular.mock.module('HRSystem'));

  beforeEach(inject(function(_Config_) {
    Config = _Config_;
  }));

  it('should contain', function() {
    expect(JSON.stringify(Config)).toContain(JSON.stringify({
      baseUrl: 'http://localhost:3000/main',
      extendedUrl: 'http://localhost:3000/main/'
    }));
  });
});

describe('HRSystemService factory', function() {
  var factory;

  beforeEach(function() {
    module('HRSystem');

    inject(function ($injector) {
      factory = $injector.get('HRSystemService');
    });
  });

describe('HRSystemService', function() {
  it ('should exist', function () {
    expect(factory).toBeDefined()
  });
});
});
