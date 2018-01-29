'use strict';
var Generator = require('yeoman-generator');

module.exports = class extends Generator {
  /*initializing() {
    this.props = {};
  }*/
  /*
  prompting() {
    return askName({
      name: 'name',
      message: 'Your generator name',
      default: makeGeneratorName(path.basename(process.cwd())),
      filter: makeGeneratorName,
      validate: str => {
        return str.length > 'generator-'.length;
      }
    }, this).then(props => {
      this.props.name = props.name;
    });
  }*/

  writing() {
    this.fs.copy(
      this.templatePath('static/**/*'),
      this.destinationRoot()
    );
  }
};