//for reporting lib
var HtmlReporter = require('protractor-beautiful-reporter');

exports.config = {
  seleniumAddress: 'http://localhost:4444/wd/hub',
   directConnect: true,

   capabilities: {
	    browserName: 'chrome'
	  },
   framework: 'jasmine',

  //specs: ['src/scripts/FirstProtractorScript.js','src/scripts/SecoundProtractorScript.js']
  specs: ['src/scripts/ThirdProtractorScript.js'],
  
  onPrepare: function() {
      // Add a screenshot reporter and store screenshots to `/tmp/screenshots`:
      jasmine.getEnv().addReporter(new HtmlReporter({
         baseDirectory: 'Reports/screenshots'
      }).getJasmine2Reporter());
   }
};
