const React = require('react');

module.exports = function PugTemplate(p){
  return (function(){
    return pug`%`;
  }).call(p);
}
