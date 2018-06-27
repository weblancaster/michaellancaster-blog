webpackJsonp([0x65cce3e88c89],{446:function(n,t){n.exports={data:{site:{siteMetadata:{title:"Blog by Michael Lancaster",subtitle:"Software Engineer focused in Javascript applications",copyright:"© All rights reserved.",author:{name:"Michael Lancaster",twitter:"weblancaster"},url:"http://www.bymichaellancaster.com"}},markdownRemark:{id:"/Users/michaellancaster/Sites/github/michaellancaster-blog/src/pages/articles/2013-06-01-introduction-to-task-runner-gruntjs/index.md absPath of file >>> MarkdownRemark",html:'<p>Which developer never wasted time doing repetitive and boring tasks instead of being focused on what we do best “Code”.</p>\n<p>Developers should be worry about write code but very often we got ourself doing a lot of repetitive and boring tasks like cleaning the code, minifying, combining, generating and so on so forth.</p>\n<p>How many time would you save not doing those tasks? today I will show you the introduction use to help you on your daily bases development work flow.</p>\n<p>There’s a answer and it’s called GruntJS I have been using a while and I got say “It’s true love” I can watch for changes on my files, run tests, minify, pre-process SASS, minify images and the list goes on take at look on the plugins at <a href="http://gruntjs.com/plugins" title="GruntJS plugins" target="_blank">GruntJS plugins</a> and for more information and further reference you MUST go to <a href="http://gruntjs.com" title="GruntJS" target="_blank">GruntJS website</a>.</p>\n<p>Let’s say we want to watch for changes on the js files and HTML markup minify both and concatenate all js files in one single file.</p>\n<h2>Let’s get start</h2>\n<p>Create a folder on your desktop (or whatever you want to) and let’s call it GruntJS-app.\n<br>\nAdd this follow simple architecture to your project.\n<br><br></p>\n<ul>\n<li>GruntJS-app\n<br>\n— dist // html destination\n<br>\n— src // html source\n<br>\n--- index.html\n<br>\n--- internal.html\n<br>\n— assets\n<br>\n--- js\n<br>\n---- main.js\n<br>\n---- app.js\n<br>\n---- module.js\n<br>\n--- css\n<br>\n--- images</li>\n</ul>\n<p>Then you will need NodeJS if you don’t have go to the <a href="http://nodejs.org/" title="NodeJS website" target="_blank">NodeJS website</a> for installation information.</p>\n<p>To make GruntJS work properly you will need some two specific files “package.json” used by <a href="https://npmjs.org/" title="npm website" target="_blank">npm</a> contain the information for the project where you list grunt and plugins used by your project as “devDependencies” and the “Gruntfile.js” where you set your tasks to run.</p>\n<p>So let’s add to the project GruntJS-app\n<br><br></p>\n<ul>\n<li>GruntJS-app\n<br>\n— dist // html destination\n<br>\n— src // html source\n<br>\n--- index.html\n<br>\n--- internal.html\n<br>\n— assets\n<br>\n--- js\n<br>\n---- main.js\n<br>\n---- app.js\n<br>\n---- module.js\n<br>\n--- css\n<br>\n--- images\n<br>\n— package.json // added new file\n<br>\n— Gruntfile.js // added new file</li>\n</ul>\n<h2>Installing GruntJS</h2>\n<p>On your root project folder run the command line</p>\n<div class="gatsby-highlight">\n      <pre class="language-ruby"><code class="language-ruby">sudo npm install <span class="token operator">-</span>g grunt<span class="token operator">-</span>cli</code></pre>\n      </div>\n<p>Now you have the grunt command line installed globally to your project</p>\n<h2>Configuring GruntJS (Gruntfile.js)</h2>\n<p>the basic structure to configure your Gruntfile.js file is simple.</p>\n<div class="gatsby-highlight">\n      <pre class="language-javascript"><code class="language-javascript">module<span class="token punctuation">.</span><span class="token function-variable function">exports</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span>grunt<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n\n\tgrunt<span class="token punctuation">.</span><span class="token function">initConfig</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n\t\t\n\t<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token punctuation">}</span></code></pre>\n      </div>\n<h2>Configuring the package.json</h2>\n<p>You can add tons of information on you package json and you can check all information <a href="http://package.json.nodejitsu.com/" title="package json reference information" target="blank">here</a> but in this case let’s keep it as simple as possible.</p>\n<pre><code data-language="json">\n{\n\t"name": "GruntJS-app",\n\t"title": "GruntJS-app",\n\t"description": "Simple introduction to GruntJS set up",\n\t"author": "your name",\n\t"homepage": "your project website",\n\t"version": "0.0.1",\n\t"devDependencies": {\n\t\t"grunt": "~0.4.1"\n\t}\n}\n```\n\n## Adding plugins to use as task\n\nRemember that we want to "watch" for changes minify both HTML, js files and concatenate all js files in one single file\n\nNow on you wont need to go manually to package.json to add the plugins as devDependencies because you are going to run the command on your terminal to add it automatically.\n\nFirst let\'s install Uglify\n\n```ruby\nnpm install grunt-contrib-uglify --save-dev\n```\n\nAnd enable the plugin inside of Gruntfile.js\n\n```javascript\ngrunt.loadNpmTasks(\'grunt-contrib-uglify\');\n```\n\nNow Gruntfile.js looks like this\n\n```javascript\nmodule.exports = function(grunt) {\n\n\tgrunt.initConfig({\n\n\t});\n\n\tgrunt.loadNpmTasks(\'grunt-contrib-uglify\');\n\n}\n```\n\nInstall htmlmin\n\n```ruby\nnpm install grunt-contrib-htmlmin --save-dev\n```\n\nEnable the plugin\n\n```javascript\ngrunt.loadNpmTasks(\'grunt-contrib-htmlmin\');\n```\n\nNow Gruntfile.js looks like this\n\n```javascript\nmodule.exports = function(grunt) {\n\n\tgrunt.initConfig({\n\n\t});\n\n\tgrunt.loadNpmTasks(\'grunt-contrib-uglify\');\n\tgrunt.loadNpmTasks(\'grunt-contrib-htmlmin\');\n\n}\n```\n\n## Setting the tasks\n\nOn your Gruntfile.js you will define the configuration for your tasks (check out the plugins documentation for configuration) as should be and the task register.\n\n```javascript\nmodule.exports = function(grunt) {\n\n\tgrunt.initConfig({\n\n\t\tuglify: {\n\t\t\tmy_target: {\n\t\t      files: {\n\t\t        \'assets/js/app.min.js\': // destination\n\t\t        [\'assets/js/app.js\', \'assets/js/main.js\', \'assets/js/module.js\'] // source\n\t\t      }\n\t\t    }\n\t\t},\n\n\t\thtmlmin: {\n\t\t\tdist: {\n\t\t  \t\toptions: {\n\t\t    \tremoveComments: true,\n\t\t    \tcollapseWhitespace: true\n\t\t  \t},\n\t\t  \tfiles: {\n\t\t    \t\t\'dist/index.html\': \'src/index.html\', // destination\n\t\t\t\t\t\'dist/internal.html\': \'src/internal.html\' // source\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\n\t});\n\n\tgrunt.loadNpmTasks(\'grunt-contrib-uglify\');\n\tgrunt.loadNpmTasks(\'grunt-contrib-htmlmin\');\n\n\tgrunt.registerTask(\'build\', [\'htmlmin\', \'uglify\']);\n\n}\n```\n\n## Running the tasks\n\nMake sure you have all the npm installed\n\n```ruby\nnpm install\n```\n\nRun the task\n\n```ruby\ngrunt build\n```\n\nDone! This is what you should have as a response.\n\n```ruby\nRunning "htmlmin:dist" (htmlmin) task\nFile dist/index.html created.\nFile dist/internal.html created.\n\nRunning "uglify:my_target" (uglify) task\nFile "assets/js/app.min.js" created.\n\nDone, without errors.\n```\n\n## Adding and configuring watch\n\nRemember "no waste of time" with repetitive tasks right? so to not need run "grunt build" every time after changes let\'s add the plugin watch.\n\nInstall watch\n\n```ruby\nnpm install grunt-contrib-watch --save-dev\n```\n\nEnable the plugin and configure the watch task\n\n```javascript\ngrunt.loadNpmTasks(\'grunt-contrib-watch\');\n\ngrunt.event.on(\'watch\', function(action, filepath) {\n  grunt.log.writeln(filepath + \' has \' + action);\n});\n```\n\nNow Gruntfile.js looks like this (check out the plugin documentation for configuration).\n\n```javascript\nmodule.exports = function(grunt) {\n\n\tgrunt.initConfig({\n\n\t\tuglify: {\n\t\t\tmy_target: {\n\t\t      files: {\n\t\t        \'assets/js/app.min.js\': // destination\n\t\t        [\'assets/js/app.js\', \'assets/js/main.js\', \'assets/js/module.js\'] // source\n\t\t      }\n\t\t    }\n\t\t},\n\n\t\thtmlmin: {\n\t\t\tdist: {\n\t\t  \t\toptions: {\n\t\t    \tremoveComments: true,\n\t\t    \tcollapseWhitespace: true\n\t\t  \t},\n\t\t  \tfiles: {\n\t\t    \t\t\'dist/index.html\': \'src/index.html\', // destination\n\t\t\t\t\t\'dist/internal.html\': \'src/internal.html\' // source\n\t\t\t\t}\n\t\t\t}\n\t\t},\n\n\t\twatch: {\n\t\t    src: {\n\t\t      files: [\'src/*.html\', \'assets/js/*.js\', \'assets/css/*.css\', \'!assets/js/app.min.js\'], // ! means not\n\t\t      tasks: [\'build\'],\n\t\t    },\n\t\t}\n\n\t});\n\n\tgrunt.loadNpmTasks(\'grunt-contrib-uglify\');\n\tgrunt.loadNpmTasks(\'grunt-contrib-htmlmin\');\n\tgrunt.loadNpmTasks(\'grunt-contrib-watch\');\n\n\tgrunt.registerTask(\'build\', [\'htmlmin\', \'uglify\']);\n\n\tgrunt.event.on(\'watch\', function(action, filepath) {\n\t  grunt.log.writeln(filepath + \' has \' + action);\n\t});\n\n}\n```\n\nNow on you will just need to run "grunt watch" so every time you change something in the files set up to watch will run the task "build"\n\n```ruby\ngrunt watch\n```\n\nand this is what you should see after run the command\n\n```ruby\nRunning "watch" task\nWaiting...\n```\n\nTo stop watch press "control + c" \n\n## Conclusion\n\nGruntJS is AWESOME and you can do much more complex things with it.\n<br>\nCheck out the example on <a href="https://github.com/weblancaster/blog-examples/tree/master/GruntJS-app" title="example on github" target="blank">Github</a>.\n\nNow you have more time to play with new experiments.\n<br>\nCheers!\n\n\n\n\n',fields:{date:"2013-06-01"},frontmatter:{title:"Introduction to GruntJS",description:'Which developer never wasted time doing repetitive and boring tasks instead of being focused on what we do best "Code".'}}},pathContext:{slug:"/articles/2013-06-01-introduction-to-task-runner-gruntjs/"}}}});
//# sourceMappingURL=path---articles-2013-06-01-introduction-to-task-runner-gruntjs-d97023bc46c58413db7e.js.map