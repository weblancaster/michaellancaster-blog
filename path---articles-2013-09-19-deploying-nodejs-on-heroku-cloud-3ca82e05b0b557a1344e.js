webpackJsonp([0xeb56397ee2ab],{452:function(e,a){e.exports={data:{site:{siteMetadata:{title:"Blog by Michael Lancaster",subtitle:"Software Engineer focused in Javascript applications",copyright:"© All rights reserved.",author:{name:"Michael Lancaster",twitter:"weblancaster"},url:"http://www.bymichaellancaster.com"}},markdownRemark:{id:"/Users/michaellancaster/Sites/github/michaellancaster-blog/src/pages/articles/2013-09-19-deploying-nodejs-on-heroku-cloud/index.md absPath of file >>> MarkdownRemark",html:'<p>[post under improvements]</p>\n<p>As a developer I have been always curious to learn and try new technologies that can improve my skill and help me build better Web Applications..So today I’m going to try help you set up a simple Node.js server on Heroku Cloud using my small open source project aims deploy even faster Node.js applications.</p>\n<h2>Why Heroku</h2>\n<p>&#x3C;a href=”<a href="http://www.heroku.com">http://www.heroku.com</a>” target=""_blank title="">Heroku</a> is a cloud application platform where you can build and deploy web apps\nwith the technologies you know as Java, Ruby, Closure, Node.js, Python and Scala..Heroku uses integration with Git so you can deploy your Application\nsimply pushing to master. Oh and It’s FREE!</p>\n<p>I have four web apps hosted on heroku but two are for public access this blog/portfolio running on Ruby and Lollagram running on Node.js.</p>\n<h2>Why Node.js</h2>\n<p>Javascript is well known by us Front End Developers/Engineers.</p>\n<p>That’s already one good reason but the main “real” reasons are Node.js is all about making event-driven (Ajax can be done on the server side), low-latency, non-blocking I/O…perfect for real time.</p>\n<p>Node.js makes a much smaller footprint on your web server It allocates web server resources on an as-needed basis, not pre-allocating a large chunk of resources for each user. For example, Apache might assign 8MB to a user, while Node assigns 8KB.</p>\n<h2>Heroku set up</h2>\n<p>I’m going to assume you have account on Heroku (it’s free) and the <a href="https://toolbelt.heroku.com/" title="toolbelt kit" target="_blank">toolbelt kit</a> installed and you also have <a href="http://Nodejs.org/" title="Node.js" target="_blank">Node.js</a> installed.</p>\n<h2>Let’s get it start</h2>\n<p>First of all (after everything installed) create a new folder (whatever-name-you-want) then open your terminal go to your folder and type..</p>\n<div class="gatsby-highlight">\n      <pre class="language-ruby"><code class="language-ruby">git init</code></pre>\n      </div>\n<p>then</p>\n<div class="gatsby-highlight">\n      <pre class="language-ruby"><code class="language-ruby">git add <span class="token punctuation">.</span></code></pre>\n      </div>\n<p>then</p>\n<div class="gatsby-highlight">\n      <pre class="language-ruby"><code class="language-ruby">git commit <span class="token operator">-</span>m <span class="token string">"first commit"</span></code></pre>\n      </div>\n<p>Now you have git initialized..time to create a Heroku app. <br>\nFirst thing you need to login to Heroku (remember that we are doing everything from the command line on terminal)</p>\n<div class="gatsby-highlight">\n      <pre class="language-ruby"><code class="language-ruby">heroku login</code></pre>\n      </div>\n<div class="gatsby-highlight">\n      <pre class="language-ruby"><code class="language-ruby">heroku create name<span class="token operator">-</span>of<span class="token operator">-</span>your<span class="token operator">-</span>app</code></pre>\n      </div>\n<p>Done! You just need to push your code.</p>\n<div class="gatsby-highlight">\n      <pre class="language-ruby"><code class="language-ruby">git push</code></pre>\n      </div>\n<p>You can access your Web App url on www.your-app-name.heroku.com</p>\n<p>Oh wait! What is this?</p>\n<p>\n  <a\n    class="gatsby-resp-image-link"\n    href="/static/heroku-404-7df1af2684cb58679fa5c764423528db-5762c.png"\n    style="display: block"\n    target="_blank"\n    rel="noopener"\n  >\n  \n  <span\n    class="gatsby-resp-image-wrapper"\n    style="position: relative; display: block; ; max-width: 532px; margin-left: auto; margin-right: auto;"\n  >\n    <span\n      class="gatsby-resp-image-background-image"\n      style="padding-bottom: 42.4812030075188%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAICAIAAAB2/0i6AAAACXBIWXMAAAsSAAALEgHS3X78AAABFklEQVQY032PX0vDMBTF8/0f9UVRJoIoc8MHkeGL+AF8UtxKWWTd2qZNE5ukmc62SbpkwQr+O/y4nHtucuGCj01DiWDl2sLZm/fW2Fq+SsHfvfkVIMXmanR7eHA2ODofX06GF9enJ6Px8GYwGI5Hk/294/u7h3CaPj9G06flN8BabtKYxivsSROSxEWywhaUkBcYo5QSLIqc/wQ0jdLadP/I/DkFWpkMoSAIlssIwjmEcDabzuHcKwzDaLHgXFRVJYSQsqqkNJ/rQNsqmyKECCU5xoUTppQWBOdZVpYl48y29kGWIUpIyZjuP9d12zaqM53WnfE4b6xxoTJKGXeXcbkNbdLUrQfsjnLjvhr9ZXrt1vVd59kCMVa8kJ3UaGAAAAAASUVORK5CYII=\'); background-size: cover; display: block;"\n    >\n      <img\n        class="gatsby-resp-image-image"\n        style="width: 100%; height: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px white;"\n        alt="heroku 404"\n        title=""\n        src="/static/heroku-404-7df1af2684cb58679fa5c764423528db-5762c.png"\n        srcset="/static/heroku-404-7df1af2684cb58679fa5c764423528db-83dd7.png 240w,\n/static/heroku-404-7df1af2684cb58679fa5c764423528db-08cd3.png 480w,\n/static/heroku-404-7df1af2684cb58679fa5c764423528db-5762c.png 532w"\n        sizes="(max-width: 532px) 100vw, 532px"\n      />\n    </span>\n  </span>\n  \n  </a>\n    </p>\n<p>To make your Web App run on Heroku you need to run your Web App in one of those languages I said right on the beginning of this post.</p>\n<p>Today we are going to run and deploy a simple Node.js/Express.js Application..since I have been using Heroku and Node.js for all my personal/aside projects I created a Express.js boilerplate to run and deploy fast and easy with <a href="/articles/2013-06-01-introduction-to-task-runner-gruntjs/" target="_blank" title="introduction to Grunt.js">Grunt.js</a> included so you can watch for changes on your files to minify CSS and uglify JS. I also included static assets and NO Jade (jade is native on Express.js) so you can code your normal HTML instead of Jade.</p>\n<p>Go to my Github repository <a href="https://github.com/weblancaster/expressjs-static-boilerplate" target="_blank" title="Express.js static boilerplate">Express.js static boilerplate</a> and download the zip file then extract and copy everything has inside of “expressjs-static-boilerplate” folder to your Web App folder.</p>\n<h2>Running Node.js</h2>\n<p>After download my boilerplate let’s install the dependencies and run our Node.js server</p>\n<div class="gatsby-highlight">\n      <pre class="language-ruby"><code class="language-ruby">sudo npm install <span class="token operator">-</span>g</code></pre>\n      </div>\n<p>Enter your password.\nYou should see something like the image below.. notice that not every log is showed on the image..</p>\n<p>\n  <a\n    class="gatsby-resp-image-link"\n    href="/static/success-image-74b5cb97b6ec9bfe2405088bc20ec3d7-51750.png"\n    style="display: block"\n    target="_blank"\n    rel="noopener"\n  >\n  \n  <span\n    class="gatsby-resp-image-wrapper"\n    style="position: relative; display: block; ; max-width: 554px; margin-left: auto; margin-right: auto;"\n  >\n    <span\n      class="gatsby-resp-image-background-image"\n      style="padding-bottom: 53.24909747292419%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAALCAIAAADwazoUAAAACXBIWXMAAAsSAAALEgHS3X78AAACCklEQVQozz2RW7OaMBRGeWw13MHLUcETAihyExKSIDcRT7X9//+noe10Zs9+yjdf1tpScguC9ugyZ03sDdkemAdbz28Q6hGsvU/uucw9XPbQPbruwXEOCHk7+Knvtsb+Q8Lv441GNCnDxvNKeO16zPB47xkj96FpelaSFAWuaam6Luu6oihAVWVZXoqRjETz9368SeI4DjyfVWWRJh3lvMC0yCqWJmmYZGh3WG025sfWNk0dgMW/8LrWYnTmkNdDnefZND3qmr3uj/ZWT8PwNT2vecZr3rZNEPhRdC6KbLH49jcvaaclcmDiJFmRncKQEJzEUUVwliWUYsqqKAohdLfb9co2RK1lGivbtG3TMHTJovIZhcQj3b275vk4DozT6Tlxzt+vr+fzQWkV+J6mAk1ZqjKYmZV5KzKQ9Ah4h8/YifMiD8OgqnCaXBghaRZRWnJOGcOEXC3LXCy/A7AUH/6/JZPIZxhiiJu+Eczj436j9N0PdVf8ePW/fo5dR7oOC5tCmKED21JMU7ZMWdOApEUAOV7qplmRn06hoE3TuMEkjiPhBpMiik4+OiIksG1FWRrGHBOjquBPsxeWELf3dm4eB+FpejxqzqZpfL9fWRr7CK7Xq9mWoRq6qumasKWqiqRfAJyZL7PtU0gpEa9vNS+KvK4FMK1wKUQEARKncvY72zIsyxC2Tcv8DdjxY7t+ORJIAAAAAElFTkSuQmCC\'); background-size: cover; display: block;"\n    >\n      <img\n        class="gatsby-resp-image-image"\n        style="width: 100%; height: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px white;"\n        alt="success image"\n        title=""\n        src="/static/success-image-74b5cb97b6ec9bfe2405088bc20ec3d7-51750.png"\n        srcset="/static/success-image-74b5cb97b6ec9bfe2405088bc20ec3d7-c2e28.png 240w,\n/static/success-image-74b5cb97b6ec9bfe2405088bc20ec3d7-0845e.png 480w,\n/static/success-image-74b5cb97b6ec9bfe2405088bc20ec3d7-51750.png 554w"\n        sizes="(max-width: 554px) 100vw, 554px"\n      />\n    </span>\n  </span>\n  \n  </a>\n    </p>\n<p>All Node dependencies are installed and now you can start run your server.</p>\n<div class="gatsby-highlight">\n      <pre class="language-ruby"><code class="language-ruby">node server<span class="token punctuation">.</span>js</code></pre>\n      </div>\n<p>Or to not need to quit the server “control + c” every time you do any change I also added a monitor to the boilerplate so every time you do your changes and save the monitor you automatically re-run the server.</p>\n<div class="gatsby-highlight">\n      <pre class="language-ruby"><code class="language-ruby">nodemon server<span class="token punctuation">.</span>js</code></pre>\n      </div>\n<h2>Running Grunt.js</h2>\n<p>After install all the Node.js dependencies you can start run your tasks to minify CSS and uglify JS. <br>\nOpen a new tab on your terminal and run the command.</p>\n<div class="gatsby-highlight">\n      <pre class="language-ruby"><code class="language-ruby">grunt build</code></pre>\n      </div>\n<p>This is the message you should get.</p>\n<p>\n  <a\n    class="gatsby-resp-image-link"\n    href="/static/grunt-build-adae9943aeb145dac22496e95f35916c-f9056.png"\n    style="display: block"\n    target="_blank"\n    rel="noopener"\n  >\n  \n  <span\n    class="gatsby-resp-image-wrapper"\n    style="position: relative; display: block; ; max-width: 388px; margin-left: auto; margin-right: auto;"\n  >\n    <span\n      class="gatsby-resp-image-background-image"\n      style="padding-bottom: 39.69072164948454%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAICAIAAAB2/0i6AAAACXBIWXMAAAsSAAALEgHS3X78AAABlElEQVQY0xWPXXOiMABFedqtBsKXJJCEBAK2gNrp2mJAQECRYv//D1o7986ZuW/nanZAxSFK+kR2MakYrRm/CNHG0Vmkk5RXyVUop3g7beMuEmcupyRUNBmkEKFmB+n1ri7X+PKdlOc38R65jeG867wsZftVqMNlao7P3M7Fv9wlDttSvg1ZSn0faUrV8/0+T7emrvu2qyvVtHV9Vo/Hz+mkura9j9fmpGp16hrlI8+GhmkACwIIdY2xME2S/eGw3+0JIVmWFVmepunn8aP8Ou72+Uea7ZKUp+5nmXdtWRSCBFBwm1FbQwjHUcwodR2Hc+5j7CFESBDH4ilGWJBFMkG+iAnGGwD+uI7uOobj6J5naKqqhmFYlnkYx3mex3H4XpbHzzLP0zj0t+k2Xce2qvq+ryqVJBJCCMAagF9olmG75oYzHgYc2ShAxHcDggnnLMtfCfEF9uVzYFyEMi8iTIHjrTz/txrMV/BtZQjgHHVrvwbRC9y9APbX0HXLgqZp0OcTtAkwohhblg7NlWkB01pb9vo/JdRD+PixHyoAAAAASUVORK5CYII=\'); background-size: cover; display: block;"\n    >\n      <img\n        class="gatsby-resp-image-image"\n        style="width: 100%; height: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px white;"\n        alt="Grunt build"\n        title=""\n        src="/static/grunt-build-adae9943aeb145dac22496e95f35916c-f9056.png"\n        srcset="/static/grunt-build-adae9943aeb145dac22496e95f35916c-94717.png 240w,\n/static/grunt-build-adae9943aeb145dac22496e95f35916c-f9056.png 388w"\n        sizes="(max-width: 388px) 100vw, 388px"\n      />\n    </span>\n  </span>\n  \n  </a>\n    </p>\n<p>But still not quite good enough because we would need to build every time we did any change.\nSo let’s start to watch for changes on the files.</p>\n<div class="gatsby-highlight">\n      <pre class="language-ruby"><code class="language-ruby">grunt watch</code></pre>\n      </div>\n<p>Now every time you do any change and save the file grunt you build automatically.</p>\n<p>\n  <a\n    class="gatsby-resp-image-link"\n    href="/static/grunt-watch-76afb04db0b6c8e53c8249e05cb8af10-497d7.png"\n    style="display: block"\n    target="_blank"\n    rel="noopener"\n  >\n  \n  <span\n    class="gatsby-resp-image-wrapper"\n    style="position: relative; display: block; ; max-width: 297px; margin-left: auto; margin-right: auto;"\n  >\n    <span\n      class="gatsby-resp-image-background-image"\n      style="padding-bottom: 23.905723905723907%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAFCAIAAADKYVtkAAAACXBIWXMAAAsSAAALEgHS3X78AAABDUlEQVQY0x2LbWuCUABGhdgYdb1vdcs0d6/ummZZt1LTYqw3I4LGCGLu0/r/v2I6eDic58PRZDyXmRUWnvoeR7cguIyHX0PnUww+BvLueddIPdLJr/Ivo+S+TO6zzW2e/CSrRxzEQpuq/Hr233O+zV83mT0Lle32QfSMF01gN4xwzcd5R7ixWsZq4TtShWqdrd9s8dJ40lZpmiT1PH90OBy3+53r8Gg6OxVF32BAb3YZRRDQNjYpNRDu9ToGITYkbahrxfG42+/Pp0JKWZalEIIxZlkW55wQjBBkrI0xhEg3CGUIU4q7mBiIEAg113E4F0EQWKYZRZOqpJQCAFqtFqySqv5nLQjq9atZC0J/9Cgp+SFP4sAAAAAASUVORK5CYII=\'); background-size: cover; display: block;"\n    >\n      <img\n        class="gatsby-resp-image-image"\n        style="width: 100%; height: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px white;"\n        alt="Grunt watch"\n        title=""\n        src="/static/grunt-watch-76afb04db0b6c8e53c8249e05cb8af10-497d7.png"\n        srcset="/static/grunt-watch-76afb04db0b6c8e53c8249e05cb8af10-4e398.png 240w,\n/static/grunt-watch-76afb04db0b6c8e53c8249e05cb8af10-497d7.png 297w"\n        sizes="(max-width: 297px) 100vw, 297px"\n      />\n    </span>\n  </span>\n  \n  </a>\n    </p>\n<p>Ok. That’s pretty cool right?!.</p>\n<h2>Deploying and Running on Heroku</h2>\n<p>Now let’s push to Heroku and see if it works.</p>\n<div class="gatsby-highlight">\n      <pre class="language-ruby"><code class="language-ruby">git add <span class="token punctuation">.</span></code></pre>\n      </div>\n<div class="gatsby-highlight">\n      <pre class="language-ruby"><code class="language-ruby">git commit <span class="token operator">-</span>m <span class="token string">"added express boilerplate"</span></code></pre>\n      </div>\n<div class="gatsby-highlight">\n      <pre class="language-ruby"><code class="language-ruby">git push origin master</code></pre>\n      </div>\n<p>and this is what happened..</p>\n<p>\n  <a\n    class="gatsby-resp-image-link"\n    href="/static/no-support-8d82d37800c5a2fa2c06e1133a925329-55f02.png"\n    style="display: block"\n    target="_blank"\n    rel="noopener"\n  >\n  \n  <span\n    class="gatsby-resp-image-wrapper"\n    style="position: relative; display: block; ; max-width: 569px; margin-left: auto; margin-right: auto;"\n  >\n    <span\n      class="gatsby-resp-image-background-image"\n      style="padding-bottom: 39.894551845342704%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAICAIAAAB2/0i6AAAACXBIWXMAAAsSAAALEgHS3X78AAABdUlEQVQY0z2QW2+rMBCEeaUBbHNJIBBibrbxBQIhKUFHbYrUpv//F3WjSEeaffJ+452xuuHy+zt9/0zT+1jNx3o0/XkyqmVNLVvOWC0ED0NCCMIY+QQR4rnu5iWrFa3WvdadbCU9FEPfnzrNeWOMlhIwH3kuJsj3MfABQREMcl+ybsvyeDzWdZ3n+bbM96/7un6t631+v94/Pz4//tEiBxc4hTUl5ywCGlwCArIopYyx7JAf8zzLsuMxLwrK64rVpWpYmkY4sKOds9u72y1OYh8+dJy3lyzbtl3PC4LA9wPPQwh54L3dhjTZ7+NdEkZRBBMCs9nYAPwP/MwMUWBNyrYs4SpeVYXS0sh2NOYkpOBFxTKhaJJijDdB4GIMaR3Pc57wLk6WZRmGQSmplB7H0XS6N3q5XufL1JQQ61AUh4bRqi6EaOI4gvKgyCcMj01TK62VBlqeTr0xSrQMGr9M4+166XtwHKC/83mYpnNnlJQiTWOI8Ad2ET1B7ts5ZQAAAABJRU5ErkJggg==\'); background-size: cover; display: block;"\n    >\n      <img\n        class="gatsby-resp-image-image"\n        style="width: 100%; height: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px white;"\n        alt="no support"\n        title=""\n        src="/static/no-support-8d82d37800c5a2fa2c06e1133a925329-55f02.png"\n        srcset="/static/no-support-8d82d37800c5a2fa2c06e1133a925329-19eb2.png 240w,\n/static/no-support-8d82d37800c5a2fa2c06e1133a925329-d8ffd.png 480w,\n/static/no-support-8d82d37800c5a2fa2c06e1133a925329-55f02.png 569w"\n        sizes="(max-width: 569px) 100vw, 569px"\n      />\n    </span>\n  </span>\n  \n  </a>\n    </p>\n<p>If you read the message you will see “Push rejected, no Cedar-supported app detected” so let’s add support to make this baby work..\nEvery Web App on Heroku needs a file to tell Heroku what are we deploying..</p>\n<p>In this case we need a “Procfile”. So create a new file named “Procfile” and type “web: node server.js” save inside your app folder. <br></p>\n<p>Then you need to activate your server and tell Heroku to run 1 “Cedar” (one cedar is free hosting).</p>\n<div class="gatsby-highlight">\n      <pre class="language-ruby"><code class="language-ruby">heroku ps<span class="token symbol">:scale</span> web<span class="token operator">=</span><span class="token number">1</span></code></pre>\n      </div>\n<p>\n  <a\n    class="gatsby-resp-image-link"\n    href="/static/cedar-00f505175b5728a910289a5f4a9ce4cc-99587.png"\n    style="display: block"\n    target="_blank"\n    rel="noopener"\n  >\n  \n  <span\n    class="gatsby-resp-image-wrapper"\n    style="position: relative; display: block; ; max-width: 345px; margin-left: auto; margin-right: auto;"\n  >\n    <span\n      class="gatsby-resp-image-background-image"\n      style="padding-bottom: 10.144927536231883%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAACCAIAAADXZGvcAAAACXBIWXMAAAsSAAALEgHS3X78AAAAc0lEQVQI1yWKwQrCMBBE+3OevAhtQTHJ4qGtMWGzWbuLhbS0f27EYR5zeNN0xpc1lXLfDzuL8VNo4+U8n1p/vT3ZTEOmnIlijCG8EuU6iCgi1poGU2J+16oqM4vosnzg4ZyDbd3GccD6oB+iWi0A9P90/RfrzTHM3b6V+gAAAABJRU5ErkJggg==\'); background-size: cover; display: block;"\n    >\n      <img\n        class="gatsby-resp-image-image"\n        style="width: 100%; height: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px white;"\n        alt="no support"\n        title=""\n        src="/static/cedar-00f505175b5728a910289a5f4a9ce4cc-99587.png"\n        srcset="/static/cedar-00f505175b5728a910289a5f4a9ce4cc-e956a.png 240w,\n/static/cedar-00f505175b5728a910289a5f4a9ce4cc-99587.png 345w"\n        sizes="(max-width: 345px) 100vw, 345px"\n      />\n    </span>\n  </span>\n  \n  </a>\n    </p>\n<p>Repeat the push process.. after do the push process again “git add .” “git commit” and “git push origin master” a bunch of message will log and the final logs would be like this image below.. now you can access your Web App URL in my case is <a href="http://deployed-nodejs-app.herokuapp.com/" title="my how to deploy node.js to Heroku post" target="_blank">deployed-nodejs-app</a>.</p>\n<p>\n  <a\n    class="gatsby-resp-image-link"\n    href="/static/pushed-4cefc003b9c5544131df2e06e9ec9008-a9fc6.png"\n    style="display: block"\n    target="_blank"\n    rel="noopener"\n  >\n  \n  <span\n    class="gatsby-resp-image-wrapper"\n    style="position: relative; display: block; ; max-width: 524px; margin-left: auto; margin-right: auto;"\n  >\n    <span\n      class="gatsby-resp-image-background-image"\n      style="padding-bottom: 35.87786259541985%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAHCAIAAACHqfpvAAAACXBIWXMAAAsSAAALEgHS3X78AAABT0lEQVQY0yWQWW+DMBCEeeQw4IvbOBhzJykl4Sg5VKL0of3/f6iOsvo02oddaWY0YAEI4TQvavq+77puHM/n06cs8jgOEXZ9j2IMCcEeJYSgFxhRitWiUUpZyqZpnsZxXr7meVoWJef75ZJxRlwHYQCxhbBFqE2IQ6mLseu6tkIzDAMAIKXMhaiquqrLPBf9x35fFEPXyjhJQhyGiDHi+8CFFkY2QjYApm1bGkLI87ymaeq6FiLLRFYUgqVJW5XINKHtYOAA07RMQ9d14zVKdaDSAksLg4Axtj0ez+fPtm3rut5u12Hou7wUIqlaVpa8qnfHg2wbyXmcy53IGHQtCIGmSoiiSP1TSuI45pwzpi7EUVaNSOtWVAXf8SDP40KyNPXTNOA88DwV3tHCKPr9+3tsm6pa6XA6fd/vfX9QtV3XVWQ7x7HfVhWmabx52/4HG1EwatluQGYAAAAASUVORK5CYII=\'); background-size: cover; display: block;"\n    >\n      <img\n        class="gatsby-resp-image-image"\n        style="width: 100%; height: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px white;"\n        alt="Web app deployed"\n        title=""\n        src="/static/pushed-4cefc003b9c5544131df2e06e9ec9008-a9fc6.png"\n        srcset="/static/pushed-4cefc003b9c5544131df2e06e9ec9008-84b6a.png 240w,\n/static/pushed-4cefc003b9c5544131df2e06e9ec9008-5fff8.png 480w,\n/static/pushed-4cefc003b9c5544131df2e06e9ec9008-a9fc6.png 524w"\n        sizes="(max-width: 524px) 100vw, 524px"\n      />\n    </span>\n  </span>\n  \n  </a>\n    </p>\n<p>And this is how we deploy Node.js to Heroku.. fast and easy.</p>\n<p>Cheers!</p>',fields:{date:"2013-09-19"},frontmatter:{title:"Deploying Node.js server on Heroku Cloud",description:"As a developer I have been always curious to learn and try new technologies that can improve my skill and help me build better Web Applications..So today I'm going to try help you set up a simple Node.js server on Heroku Cloud using my small open source project aims deploy even faster Node.js applications."}}},pathContext:{slug:"/articles/2013-09-19-deploying-nodejs-on-heroku-cloud/"}}}});
//# sourceMappingURL=path---articles-2013-09-19-deploying-nodejs-on-heroku-cloud-3ca82e05b0b557a1344e.js.map