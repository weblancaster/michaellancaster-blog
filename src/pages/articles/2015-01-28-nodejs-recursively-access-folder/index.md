---
layout: post
title: Accessing folder recursively with Node.js

description: A very quick post on how to access folders recursively with Node.js.
---

A very quick post on how to access folders recursively with Node.js. <br>
This code was taken from Grunt.js src code with a slight change made by myself.

<pre><code data-language="javascript">
var fs = require('fs');
var path = require('path');

// Windows?
var win32 = process.platform === 'win32';
// Normalize \\ paths to / paths.
function unixifyPath(filepath) {
  if (win32) {
    return filepath.replace(/\\/g, '/');
  } else {
    return filepath;
  }
};

// Recurse into a directory, executing callback for each file.
function walk(rootdir, callback, subdir) {
  var abspath = subdir ? path.join(rootdir, subdir) : rootdir;
  fs.readdirSync(abspath).forEach(function(filename) {
    var filepath = path.join(abspath, filename);
    if (fs.statSync(filepath).isDirectory()) {
      walk(rootdir, callback, unixifyPath(path.join(subdir || '', filename || '')));
    } else {
      callback(unixifyPath(filepath), rootdir, subdir, filename);
    }
  });
};

</code></pre>

How to use?

<pre><code data-language="javascript">
walk('./pathTofolder', function(filepath, rootdir, subdir, filename) {
  console.log('Filepath', filepath);
});
</code>></pre>


Cheers!
