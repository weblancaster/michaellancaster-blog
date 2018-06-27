webpackJsonp([64759627456542],{476:function(A,a){A.exports={data:{site:{siteMetadata:{title:"Blog by Michael Lancaster",subtitle:"Software Engineer focused in Javascript applications",copyright:"© All rights reserved.",author:{name:"Michael Lancaster",twitter:"weblancaster"},url:"http://www.bymichaellancaster.com"}},markdownRemark:{id:"/Users/michaellancaster/Sites/github/michaellancaster-blog/src/pages/articles/2015-07-01-iot-javascript-battlehack-tessel/index.md absPath of file >>> MarkdownRemark",html:'<h3>Experimenting with IoT</h3>\n<p>So there was I at <a href="https://2015.battlehack.org/" title="Battlehack Chicago" target="_blank">Battlehack</a> Chicago brainstorming ideas…trying to come up with something I would have fun developing and at the same time learn something new.</p>\n<p>\n  <a\n    class="gatsby-resp-image-link"\n    href="/static/battlehack-02-8d6aa33ed9b4c5c8a96b2942386b5648-739d4.jpg"\n    style="display: block"\n    target="_blank"\n    rel="noopener"\n  >\n  \n  <span\n    class="gatsby-resp-image-wrapper"\n    style="position: relative; display: block; ; max-width: 960px; margin-left: auto; margin-right: auto;"\n  >\n    <span\n      class="gatsby-resp-image-background-image"\n      style="padding-bottom: 75%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAPABQDASIAAhEBAxEB/8QAFwAAAwEAAAAAAAAAAAAAAAAAAAMEAv/EABYBAQEBAAAAAAAAAAAAAAAAAAABAv/aAAwDAQACEAMQAAABMJVq2kof/8QAGBAAAwEBAAAAAAAAAAAAAAAAAAECERL/2gAIAQEAAQUCpTk8w8TKrR3p2f/EABQRAQAAAAAAAAAAAAAAAAAAABD/2gAIAQMBAT8BP//EABcRAQEBAQAAAAAAAAAAAAAAAAEAAxL/2gAIAQIBAT8BM24b/8QAGRAAAgMBAAAAAAAAAAAAAAAAAAEQESEx/9oACAEBAAY/AuIuMZsf/8QAGRABAAMBAQAAAAAAAAAAAAAAAQARMSFB/9oACAEBAAE/IWX2yC75LSoPZUBE3Ili0DXs/9oADAMBAAIAAwAAABA/3//EABYRAAMAAAAAAAAAAAAAAAAAABARIf/aAAgBAwEBPxBQf//EABcRAQEBAQAAAAAAAAAAAAAAAAEAEWH/2gAIAQIBAT8QSaFzv//EABoQAQEBAQEBAQAAAAAAAAAAAAERMQAhQdH/2gAIAQEAAT8QLFKBBLeJUMPTd6gor2b03y/AiZypRlky3j4/Hf/Z\'); background-size: cover; display: block;"\n    >\n      <img\n        class="gatsby-resp-image-image"\n        style="width: 100%; height: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px white;"\n        alt="Battlehack Chicago 2015"\n        title=""\n        src="/static/battlehack-02-8d6aa33ed9b4c5c8a96b2942386b5648-d564d.jpg"\n        srcset="/static/battlehack-02-8d6aa33ed9b4c5c8a96b2942386b5648-865fd.jpg 240w,\n/static/battlehack-02-8d6aa33ed9b4c5c8a96b2942386b5648-d40a0.jpg 480w,\n/static/battlehack-02-8d6aa33ed9b4c5c8a96b2942386b5648-d564d.jpg 960w,\n/static/battlehack-02-8d6aa33ed9b4c5c8a96b2942386b5648-c67c1.jpg 1440w,\n/static/battlehack-02-8d6aa33ed9b4c5c8a96b2942386b5648-667be.jpg 1920w,\n/static/battlehack-02-8d6aa33ed9b4c5c8a96b2942386b5648-85f07.jpg 2880w,\n/static/battlehack-02-8d6aa33ed9b4c5c8a96b2942386b5648-739d4.jpg 3264w"\n        sizes="(max-width: 960px) 100vw, 960px"\n      />\n    </span>\n  </span>\n  \n  </a>\n    </p>\n<p>After teaming up with <a href="https://josephmilla.com/" title="Joseph Milla" target="_blank">Joseph Milla</a> a young and smart CS student, After discussing what we should do we decided to build something related to IoT so we ended up using my <a href="https://tessel.io/" title="Tessel IoT" target="_blank">Tessel</a>micro-controller and the Tessel Ambient module.</p>\n<p>Tessel is a micro-controller with built-in wifi and support to run nodejs out-of-the-box, therefore we were good because both of us have experience with Nodejs.</p>\n<h3>Clappity</h3>\n<p><a href="https://github.com/josephmilla/clappity" title="Clappity" target="_blank">Clappity</a> is a device that you plug into your wall and listen to your configured claps to trigger an online order, in our case you would be able to order a pizza, sandwich or burrito.</p>\n<h3>How does it that work?</h3>\n<p>Anyone could just clap and order without permission, right? no. <br>\nThe device would be linked to your user account in the website where you would have access to order options and how many claps they require through the user configuration. <br>\nAll claps have 1x clap for confirmation.. let’s say you want to order pizza, you would clap 2x than wait 3 secs and clap again to confirm you actually want that.</p>\n<p>The tech stack:</p>\n<ul>\n<li>Tessel micro-controller</li>\n<li>Tessel Ambient Module</li>\n<li>Node.js (websocket)</li>\n<li>HTML5/Javascript</li>\n</ul>\n<p>We did not win the Battlehack but was a fun experimentation with IoT. <br>\nThe code is <a href="https://github.com/josephmilla/clappity" title="Clappity Open Source" target="_blank">Open Source</a>.</p>',fields:{date:"2015-07-01"},frontmatter:{title:"IoT for fun and Lazyness",description:"So there was I at Battlehack Chicago brainstorming ideas..."}}},pathContext:{slug:"/articles/2015-07-01-iot-javascript-battlehack-tessel/"}}}});
//# sourceMappingURL=path---articles-2015-07-01-iot-javascript-battlehack-tessel-2d45c149010dda211d16.js.map