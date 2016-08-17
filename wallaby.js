module.exports = function (wallaby) {
  // There is a weird error with the mui and mantra.
  // See: https://goo.gl/cLH8ib
  // Using require here seems to be the error.
  // Renaming it into `load` just fixed the issue.
  var load = require;

  return {
    files: [
      'client/modules/**/components/*.js',
      'client/modules/**/actions/*.js',
      'client/modules/**/containers/*.js',
      'client/modules/**/libs/*.js',
      'public/lib/getmdl/material.min.js',
      'public/lib/getmdl/material.min.css',
      'css-null-compiler.js',
      '.scripts/mocha_boot.js'
    ],
    tests: [
      'client/**/tests/*.js'
    ],
    compilers: {
       '**/*.js*': wallaby.compilers.babel({
         babel: load('babel-core'),
         presets: ['es2015', 'stage-2', 'react']
       })
    },
    env: {
      type: 'node'
    },
    testFramework: 'mocha',
    setup: function() {
      global.React = require('react');
      require('./css-null-compiler');
      require('./.scripts/mocha_boot.js');
    }
  };
};
