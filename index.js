const fs = require('fs');
const Inject = fs.readFileSync(`${__dirname}/inject.js`).toString();

module.exports = function PugTemplate(source) {
  return Inject
    .replace('%', source);
};
