const path = require('path');
const fs = require('fs');

module.exports= function (arg2, arg3, callFun) {
  var array = [];
  fs.readdir(arg2, function (err, files){
    if(err){
      return callFun(err);
    }
  var match = '.' + arg3;

  files.filter(function (file){
    if(path.extname(file) === match){
      array.push(file);
    }
    });
    return callFun(null, array);
  });
};
