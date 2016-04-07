module.exports = {
  normalizeEntityName: function() {}, // no-op since we're just adding dependencies

  afterInstall: function(options) {
    return this.addBowerPackageToProject('nouislider', 'git://github.com/habeascorp/noUiSlider'); // is a promise
  }
};
