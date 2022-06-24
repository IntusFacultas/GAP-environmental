const industries = require('./industries');
const works = require('./works');
const awards = require('./awards');
const employees = require('./employees');

const { version } = require('./package.json');

module.exports = {
  build: {
    srcPath: './src',
    outputPath: './public'
  },
  site: {
    version,
    title: 'GAP Advisors',
    industries,
    works,
    awards,
    employees
  }
};
