---
layout: post
title: Introduction to GruntJS
posts: "/posts/2013-06-01-introduction-to-task-runner-gruntjs/"
description: Which developer never wasted time doing repetitive and boring tasks instead of being focused on what we do best "Code".
---

Which developer never wasted time doing repetitive and boring tasks instead of being focused on what we do best "Code".

Developers should be worry about write code but very often we got ourself doing a lot of repetitive and boring tasks like cleaning the code, minifying, combining, generating and so on so forth.

How many time would you save not doing those tasks? today I will show you the introduction use to help you on your daily bases development work flow.

There's a answer and it's called GruntJS I have been using a while and I got say "It's true love" I can watch for changes on my files, run tests, minify, pre-process SASS, minify images and the list goes on take at look on the plugins at <a href="http://gruntjs.com/plugins" title="GruntJS plugins" target="_blank">GruntJS plugins</a> and for more information and further reference you MUST go to <a href="http://gruntjs.com" title="GruntJS" target="_blank">GruntJS website</a>.

Let's say we want to watch for changes on the js files and HTML markup minify both and concatenate all js files in one single file.

## Let's get start

Create a folder on your desktop (or whatever you want to) and let's call it GruntJS-app.
<br>
Add this follow simple architecture to your project.
<br><br>
- GruntJS-app
<br>
-- dist // html destination
<br>
-- src // html source
<br>
--- index.html
<br>
--- internal.html
<br>
-- assets
<br>
--- js
<br>
---- main.js
<br>
---- app.js
<br>
---- module.js
<br>
--- css
<br>
--- images

Then you will need NodeJS if you don't have go to the <a href="http://nodejs.org/" title="NodeJS website" target="_blank">NodeJS website</a> for installation information.

To make GruntJS work properly you will need some two specific files "package.json" used by <a href="https://npmjs.org/" title="npm website" target="_blank">npm</a> contain the information for the project where you list grunt and plugins used by your project as "devDependencies" and the "Gruntfile.js" where you set your tasks to run.

So let's add to the project GruntJS-app
<br><br>
- GruntJS-app
<br>
-- dist // html destination
<br>
-- src // html source
<br>
--- index.html
<br>
--- internal.html
<br>
-- assets
<br>
--- js
<br>
---- main.js
<br>
---- app.js
<br>
---- module.js
<br>
--- css
<br>
--- images
<br>
-- package.json // added new file
<br>
-- Gruntfile.js // added new file

## Installing GruntJS

On your root project folder run the command line

```ruby
sudo npm install -g grunt-cli
```

Now you have the grunt command line installed globally to your project

## Configuring GruntJS (Gruntfile.js)

the basic structure to configure your Gruntfile.js file is simple.

```javascript
module.exports = function(grunt) {

	grunt.initConfig({
		
	});

}
```

## Configuring the package.json

You can add tons of information on you package json and you can check all information <a href="http://package.json.nodejitsu.com/" title="package json reference information" target="blank">here</a> but in this case let's keep it as simple as possible.

<pre><code data-language="json">
{
	"name": "GruntJS-app",
	"title": "GruntJS-app",
	"description": "Simple introduction to GruntJS set up",
	"author": "your name",
	"homepage": "your project website",
	"version": "0.0.1",
	"devDependencies": {
		"grunt": "~0.4.1"
	}
}
```

## Adding plugins to use as task

Remember that we want to "watch" for changes minify both HTML, js files and concatenate all js files in one single file

Now on you wont need to go manually to package.json to add the plugins as devDependencies because you are going to run the command on your terminal to add it automatically.

First let's install Uglify

```ruby
npm install grunt-contrib-uglify --save-dev
```

And enable the plugin inside of Gruntfile.js

```javascript
grunt.loadNpmTasks('grunt-contrib-uglify');
```

Now Gruntfile.js looks like this

```javascript
module.exports = function(grunt) {

	grunt.initConfig({

	});

	grunt.loadNpmTasks('grunt-contrib-uglify');

}
```

Install htmlmin

```ruby
npm install grunt-contrib-htmlmin --save-dev
```

Enable the plugin

```javascript
grunt.loadNpmTasks('grunt-contrib-htmlmin');
```

Now Gruntfile.js looks like this

```javascript
module.exports = function(grunt) {

	grunt.initConfig({

	});

	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-htmlmin');

}
```

## Setting the tasks

On your Gruntfile.js you will define the configuration for your tasks (check out the plugins documentation for configuration) as should be and the task register.

```javascript
module.exports = function(grunt) {

	grunt.initConfig({

		uglify: {
			my_target: {
		      files: {
		        'assets/js/app.min.js': // destination
		        ['assets/js/app.js', 'assets/js/main.js', 'assets/js/module.js'] // source
		      }
		    }
		},

		htmlmin: {
			dist: {
		  		options: {
		    	removeComments: true,
		    	collapseWhitespace: true
		  	},
		  	files: {
		    		'dist/index.html': 'src/index.html', // destination
					'dist/internal.html': 'src/internal.html' // source
				}
			}
		}

	});

	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-htmlmin');

	grunt.registerTask('build', ['htmlmin', 'uglify']);

}
```

## Running the tasks

Make sure you have all the npm installed

```ruby
npm install
```

Run the task

```ruby
grunt build
```

Done! This is what you should have as a response.

```ruby
Running "htmlmin:dist" (htmlmin) task
File dist/index.html created.
File dist/internal.html created.

Running "uglify:my_target" (uglify) task
File "assets/js/app.min.js" created.

Done, without errors.
```

## Adding and configuring watch

Remember "no waste of time" with repetitive tasks right? so to not need run "grunt build" every time after changes let's add the plugin watch.

Install watch

```ruby
npm install grunt-contrib-watch --save-dev
```

Enable the plugin and configure the watch task

```javascript
grunt.loadNpmTasks('grunt-contrib-watch');

grunt.event.on('watch', function(action, filepath) {
  grunt.log.writeln(filepath + ' has ' + action);
});
```

Now Gruntfile.js looks like this (check out the plugin documentation for configuration).

```javascript
module.exports = function(grunt) {

	grunt.initConfig({

		uglify: {
			my_target: {
		      files: {
		        'assets/js/app.min.js': // destination
		        ['assets/js/app.js', 'assets/js/main.js', 'assets/js/module.js'] // source
		      }
		    }
		},

		htmlmin: {
			dist: {
		  		options: {
		    	removeComments: true,
		    	collapseWhitespace: true
		  	},
		  	files: {
		    		'dist/index.html': 'src/index.html', // destination
					'dist/internal.html': 'src/internal.html' // source
				}
			}
		},

		watch: {
		    src: {
		      files: ['src/*.html', 'assets/js/*.js', 'assets/css/*.css', '!assets/js/app.min.js'], // ! means not
		      tasks: ['build'],
		    },
		}

	});

	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-htmlmin');
	grunt.loadNpmTasks('grunt-contrib-watch');

	grunt.registerTask('build', ['htmlmin', 'uglify']);

	grunt.event.on('watch', function(action, filepath) {
	  grunt.log.writeln(filepath + ' has ' + action);
	});

}
```

Now on you will just need to run "grunt watch" so every time you change something in the files set up to watch will run the task "build"

```ruby
grunt watch
```

and this is what you should see after run the command

```ruby
Running "watch" task
Waiting...
```

To stop watch press "control + c" 

## Conclusion

GruntJS is AWESOME and you can do much more complex things with it.
<br>
Check out the example on <a href="https://github.com/weblancaster/blog-examples/tree/master/GruntJS-app" title="example on github" target="blank">Github</a>.

Now you have more time to play with new experiments.
<br>
Cheers!




