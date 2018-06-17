---
layout: post
title: Migrating Jekyll to Ghost

description: When I decided to migrate my blog platform Jekyll to Ghost blog platform I did not find any simple/useful way to export/import my posts besides this old Ruby script which did not work for me.. So I decided to solve this problem creating a nice npm module called Nodejs-Jekyll-to-Ghost which do the heavy work for those that want to migrate to ghost from Jekyll.
---

When I decided to migrate my blog platform Jekyll to Ghost blog platform I did not find any simple/useful way to export/import my posts besides this <a href="https://github.com/mattvh/Jekyll-to-Ghost" title="Jekyll to Ghost Ruby script" target="_blank">old Ruby script</a> which did not work for me.. So I decided to solve this problem creating a nice npm module called <a href="https://github.com/weblancaster/nodejs-jekyll-to-ghost" title="Nodejs-Jekyll-to-Ghost" target="_blank">Nodejs-Jekyll-to-Ghost</a> which do the heavy work for those that want to migrate to ghost from Jekyll.

This npm module will help you to export your Markdown posts from <a href="http://jekyllrb.com" title="Jekyll static blog platform" target="_blank">Jekyll</a> to a format that can be easily imported into <a href="http://ghost.org" title="Ghost blog platform" target="_blank">Ghost blog platform</a>. <br> 
It doesn't handle static pages, and it doesn't do anything with images. You'll have to copy those over yourself and manually adjust any URL differences.

This was built by reverse-engineering the version of <a href="https://wordpress.org/plugins/ghost/" title="Wordpress plugin" target="_blank">Wordpress plugin</a> and  <a href="https://github.com/TryGhost/Ghost/blob/master/core/server/data/schema.js" title="Ghost schema" target="_blank">Ghost schema</a> to match the JSON file it outputs.

<a href="https://github.com/weblancaster/nodejs-jekyll-to-ghost" title="Nodejs-Jekyll-to-Ghost" target="_blank">Nodejs-Jekyll-to-Ghost</a> <br>
Enjoy!