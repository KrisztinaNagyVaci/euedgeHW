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
