const LIBRARY_NAME = "jiam"
if (!process.env.NODE_ENV || process.env.NODE_ENV === 'development') {
    module.exports = require(`./dist/${LIBRARY_NAME}.js`);
  } else {
    module.exports = require(`./dist/${LIBRARY_NAME}.min.js`);
  }