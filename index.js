const PRC = require('./compile');

module.exports = function PugTemplate(source) {
  if(!source) throw `File "${this.resource}" is empty`
  let out = 'const React = require(\'react\');\n';
  out += PRC.compileClient(source, {
    filename: this.resource,
    component: this.resource.slice(this.rootContext.length),
  });

  console.log(out);
  return out;
};
