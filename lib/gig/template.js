/**
 * gig
 *  
 * Copyright (c) 2013 Insanehong
 * 
 * Contributors
 *
 * Licensed under the MIT license.
 * https://github.com/insanehong/gig/blob/master/LICENSE
 */
var path = require('path'),
    fs = require('fs'),
    config = require('../../config');

var tDir = config._fileDir;

var filelist = fs.readdirSync(tDir);
var globallist = fs.readdirSync(path.join(tDir,'Global'));

var filemap = {},
    files = [];

filelist.forEach(function(file) {
  if(file == 'LICENSE') return ;
  var name = path.basename(file,config._ext).toLowerCase();
  filemap[name] = file;
  files.push(name);
});

globallist.forEach(function(file) {
  if(file == 'LICENSE') return ;
  var name = path.basename(file,config._ext).toLowerCase();
  filemap[name] = path.join('Global',file);
  files.push(name);
});

exports.filemap = filemap;
exports.filelist = files;
