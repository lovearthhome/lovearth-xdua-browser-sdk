"use strict";

var CryptoJS = require('crypto-js');

function md5(content) {
  return CryptoJS.MD5(content).toString();
}

module.exports = md5;