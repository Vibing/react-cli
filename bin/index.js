#!/usr/bin/env node

var fs = require('fs');
var path = require('path');
var pg = require('../package');
var argv = require('yargs').argv;

var pname = 'react-create-fast';

if (argv._[0] === undefined) {
  console.log('你需要添加一个项目名称');
  console.log(`你应该执行: ${pname} [projectName]`);
  return;
}

var template = path.resolve(__dirname, '../templates/react-router');
var drt = path.resolve(`${process.cwd()}/${argv._[0]}`);

copyDir(template, drt, function(err) {
  console.log(err);
});

function copyDir(src, dist, callback) {
  fs.access(dist, function(err) {
    if (err) {
      // 目录不存在时创建目录
      fs.mkdirSync(dist);
    }
    _copy(null, src, dist);
  });

  function _copy(err, src, dist) {
    if (err) {
      callback(err);
    } else {
      fs.readdir(src, function(err, paths) {
        if (err) {
          callback(err);
        } else {
          paths.forEach(function(path) {
            var _src = src + '/' + path;
            var _dist = dist + '/' + path;
            fs.stat(_src, function(err, stat) {
              if (err) {
                callback(err);
              } else {
                // 判断是文件还是目录
                if (stat.isFile()) {
                  fs.writeFileSync(_dist, fs.readFileSync(_src));
                } else if (stat.isDirectory()) {
                  // 当是目录是，递归复制
                  copyDir(_src, _dist, callback);
                }
              }
            });
          });
        }
      });
    }
  }
}
