const PRC = require('./compile');

module.exports = function PugTemplate(source) {
  if(!source) throw `File "${this.resource}" is empty`
  let out = 'const React = require(\'react\');\n';
  out += PRC.compileClient(source, {
    filename: this.resource,
    class: this.rawRequest,
  });
  return out;
};
