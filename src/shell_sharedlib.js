"use strict";

// Capture the output of this into a variable, if you want
(function() {
  var Module = {};
  var args = [];
  Module.arguments = [];

  {{BODY}}

  // {{MODULE_ADDITIONS}}

  return Module;
});
