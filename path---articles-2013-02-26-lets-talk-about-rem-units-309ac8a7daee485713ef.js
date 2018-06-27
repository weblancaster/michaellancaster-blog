webpackJsonp([63993021546124],{439:function(n,s){n.exports={data:{site:{siteMetadata:{title:"Blog by Michael Lancaster",subtitle:"Software Engineer focused in Javascript applications",copyright:"© All rights reserved.",author:{name:"Michael Lancaster",twitter:"weblancaster"},url:"http://www.bymichaellancaster.com"}},markdownRemark:{id:"/Users/michaellancaster/Sites/github/michaellancaster-blog/src/pages/articles/2013-02-26-lets-talk-about-rem-units/index.md absPath of file >>> MarkdownRemark",html:'<h2>The past/present</h2>\n<p>I could talk a lot about all the principal units we have been using but let’s get this straight we have been using “px” since ever and this approach just doesn’t work anymore or scale.</p>\n<div class="gatsby-highlight">\n      <pre class="language-css"><code class="language-css"><span class="token selector">.parent</span> <span class="token punctuation">{</span>\n\t<span class="token property">font-size</span><span class="token punctuation">:</span> 16px<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\n<span class="token selector">.child</span> <span class="token punctuation">{</span>\n\t<span class="token property">font-size</span><span class="token punctuation">:</span> 12px<span class="token punctuation">;</span>\n<span class="token punctuation">}</span></code></pre>\n      </div>\n<p>Now with the popularity and acceptance of the Responsive Design (web applications accessible in any devices) developers and designers are thinking more about scale things and make it fit to their user’s device.\nStyle sheets that use relative units can more easily scale from one device environment to another.\nTherefore we started to scale the font-size transforming pixel in em’s using this math child / parent = em’s voila!!</p>\n<div class="gatsby-highlight">\n      <pre class="language-css"><code class="language-css"><span class="token selector">.parent</span> <span class="token punctuation">{</span>\n\t<span class="token property">font-size</span><span class="token punctuation">:</span> 16px<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\n<span class="token selector">.child</span> <span class="token punctuation">{</span>\n\t<span class="token property">font-size</span><span class="token punctuation">:</span> 0.75em<span class="token punctuation">;</span> <span class="token comment">/* 12 / 16 = 0.75 */</span>\n<span class="token punctuation">}</span></code></pre>\n      </div>\n<p>Oh! wait. Do we have to repeat this math going through element parent by element parent to give their child the right em’s values? It’s hard to believe but yes we do.</p>\n<p>Now when your wife, girlfriend, dog (whatever) asked you why you are loosing hair and getting bald that’s your answer “I use px to calculate em’s Baby!”</p>\n<h2>The present/future</h2>\n<p>But now (a while ago) the <a href="http://www.w3.org/TR/css3-values/#font-relative-lengths">W3C spec</a> added to CSS3 the rem unit that is relative to the document parent (root em).</p>\n<div class="gatsby-highlight">\n      <pre class="language-css"><code class="language-css"><span class="token selector">html</span> <span class="token punctuation">{</span>\n\t<span class="token property">font-size</span><span class="token punctuation">:</span> 62.5%<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\n<span class="token selector">parent</span> <span class="token punctuation">{</span>\n\t<span class="token property">font-size</span><span class="token punctuation">:</span> 1.6rem<span class="token punctuation">;</span> <span class="token comment">/* 16px */</span>\n<span class="token punctuation">}</span>\n\n<span class="token selector">child</span> <span class="token punctuation">{</span>\n\t<span class="token property">font-size</span><span class="token punctuation">:</span> 1.2rem<span class="token punctuation">;</span> <span class="token comment">/* 12px */</span>\n<span class="token punctuation">}</span></code></pre>\n      </div>\n<p>No need to go through all your parent doing that math to change their child and the browser support makes us even happier developers <a href="http://caniuse.com/rem">caniuse.com/rem</a></p>\n<h2>Browser support</h2>\n<ul>\n<li>IE 9+</li>\n<li>Firefox 3.6+</li>\n<li>Chrome 6+</li>\n<li>Safari 5+</li>\n<li>Opera 11.6+</li>\n</ul>\n<h2>Old browser support</h2>\n<div class="gatsby-highlight">\n      <pre class="language-css"><code class="language-css"><span class="token selector">html</span> <span class="token punctuation">{</span>\n\t<span class="token property">font-size</span><span class="token punctuation">:</span> 62.5%<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\n<span class="token selector">parent</span> <span class="token punctuation">{</span>\n\t<span class="token property">font-size</span><span class="token punctuation">:</span> 16px<span class="token punctuation">;</span>\n\t<span class="token property">font-size</span><span class="token punctuation">:</span> 1.6rem<span class="token punctuation">;</span> <span class="token comment">/* 16px */</span>\n<span class="token punctuation">}</span>\n\n<span class="token selector">child</span> <span class="token punctuation">{</span>\n\t<span class="token property">font-size</span><span class="token punctuation">:</span> 12px<span class="token punctuation">;</span>\n\t<span class="token property">font-size</span><span class="token punctuation">:</span> 1.2rem<span class="token punctuation">;</span> <span class="token comment">/* 12px */</span>\n<span class="token punctuation">}</span></code></pre>\n      </div>\n<p>Let’s go now change all our style sheets and make it good for all users and developers!!</p>',fields:{date:"2013-02-26"},frontmatter:{title:"Let's talk about rem units.",description:'I think choose the right units of measurement have been always not "cool" enough but now with the popularity and acceptance of the Responsive Design people are thinking more about scale typography.'}}},pathContext:{slug:"/articles/2013-02-26-lets-talk-about-rem-units/"}}}});
//# sourceMappingURL=path---articles-2013-02-26-lets-talk-about-rem-units-309ac8a7daee485713ef.js.map