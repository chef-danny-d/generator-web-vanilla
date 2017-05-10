'use strict';
var Generator = require('yeoman-generator');

module.exports = class extends Generator {
  writing() {
    this.fs.copy(
      this.templatePath('static/**/*'),
      this.destinationRoot()
    );
  }
};
