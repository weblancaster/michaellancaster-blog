webpackJsonp([0xdcba0da6cad6],{459:function(n,s){n.exports={data:{site:{siteMetadata:{title:"Blog by Michael Lancaster",subtitle:"Software Engineer focused in Javascript applications",copyright:"© All rights reserved.",author:{name:"Michael Lancaster",twitter:"weblancaster"},url:"http://www.bymichaellancaster.com"}},markdownRemark:{id:"/Users/michaellancaster/Sites/github/michaellancaster-blog/src/pages/articles/2014-01-08-DOM-insert-html-method-you-might-not-know-about/index.md absPath of file >>> MarkdownRemark",html:'<p>Everybody knows/use “innerHTML” to insert HTML but I was looking at the MDN website jumping between Web\nAPI’s when I saw this DOM method called insertAdjacentHTML..it’s “innerHTML” brothers but cooler and\n<strong>faster</strong>.\n<br>\nBesides the performance another difference is that “innerHTML” will overwrite the content inside the element when\n“insertAdjacentHTML” will add to the specified position.</p>\n<p>Here you can compare the performance between “innerHTML” and “insertAdjacentHTML” <a href="http://jsperf\n.com/insertadjacenthtml-perf/3" target="_blank" title="innerHTML vs insertAdjacentHTMl">here</a> and gets better\nits <strong>supported in all browsers</strong>.</p>\n<p>It’s been out there for a while now even John Resig has an <a href="http://ejohn.org/blog/dom-insertadjacenthtml/"\ntarget="_blank" title="insertAdjacentHTML post John Resig">post</a> about it back in 2008.</p>\n<p>It’s very simple to use you are going to need to pass one of the positions (below) and then pass the content.</p>\n<h4>Position</h4>\n<ul>\n<li>“beforebegin” (insert before the element)</li>\n<li>“afterend” (insert after the element)</li>\n<li>“afterbegin” (insert inside element after begin)</li>\n<li>“beforeend” (insert inside element before end)</li>\n</ul>\n<div class="gatsby-highlight">\n      <pre class="language-javascript"><code class="language-javascript">element<span class="token punctuation">.</span><span class="token function">insertAdjacentHTML</span><span class="token punctuation">(</span><span class="token string">"position"</span><span class="token punctuation">,</span> <span class="token string">"content"</span><span class="token punctuation">)</span><span class="token punctuation">;</span></code></pre>\n      </div>\n<p>Let’s say we have a method that do the job for us when we pass the “position” and “content”.</p>\n<div class="gatsby-highlight">\n      <pre class="language-javascript"><code class="language-javascript"><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span>window<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n\twindow<span class="token punctuation">.</span>App <span class="token operator">=</span> window<span class="token punctuation">.</span>App <span class="token operator">||</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>\n\n\twindow<span class="token punctuation">.</span>App <span class="token operator">=</span> <span class="token punctuation">{</span>\n\t\tinsertElement<span class="token punctuation">:</span> <span class="token keyword">function</span><span class="token punctuation">(</span>position<span class="token punctuation">,</span> content<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n\t\t\t<span class="token keyword">var</span> elDiv <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">\'wrapper\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\t\t\t\telDiv<span class="token punctuation">.</span><span class="token function">insertAdjacentHTML</span><span class="token punctuation">(</span>position<span class="token punctuation">,</span> content<span class="token punctuation">)</span>\n\t\t<span class="token punctuation">}</span>\n\t<span class="token punctuation">}</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">(</span>window<span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token keyword">var</span> content1 <span class="token operator">=</span> <span class="token string">\'&lt;p id="ct1">this is a paragrag a "beforebegin" element&lt;/p>\'</span><span class="token punctuation">;</span>\n<span class="token keyword">var</span> content2 <span class="token operator">=</span> <span class="token string">\'&lt;p id="ct2">this is a paragrag a "afterbegin" element&lt;/p>\'</span><span class="token punctuation">;</span>\n<span class="token keyword">var</span> content3 <span class="token operator">=</span> <span class="token string">\'&lt;p id="ct3">this is a paragrag a "beforeend" element&lt;/p>\'</span><span class="token punctuation">;</span>\n<span class="token keyword">var</span> content4 <span class="token operator">=</span> <span class="token string">\'&lt;p id="ct4">this is a paragrag a "afterend" element&lt;/p>\'</span><span class="token punctuation">;</span>\n\nApp<span class="token punctuation">.</span><span class="token function">insertElement</span><span class="token punctuation">(</span><span class="token string">\'beforebegin\'</span><span class="token punctuation">,</span> content1<span class="token punctuation">)</span><span class="token punctuation">;</span>\nApp<span class="token punctuation">.</span><span class="token function">insertElement</span><span class="token punctuation">(</span><span class="token string">\'afterbegin\'</span><span class="token punctuation">,</span> content2<span class="token punctuation">)</span><span class="token punctuation">;</span>\nApp<span class="token punctuation">.</span><span class="token function">insertElement</span><span class="token punctuation">(</span><span class="token string">\'beforeend\'</span><span class="token punctuation">,</span> content3<span class="token punctuation">)</span><span class="token punctuation">;</span>\nApp<span class="token punctuation">.</span><span class="token function">insertElement</span><span class="token punctuation">(</span><span class="token string">\'afterend\'</span><span class="token punctuation">,</span> content4<span class="token punctuation">)</span><span class="token punctuation">;</span></code></pre>\n      </div>\n<p>Here’s a example how it works <a href="http://jsfiddle.net/ftZyn/2/" target="_blank" title="how insertAdjacentHTMl works">link</a>.</p>\n<p>Enjoy the tip.</p>',fields:{date:"2014-01-08"},frontmatter:{title:"DOM insert HTML method you might not know",description:"Everybody knows/use \"innerHTML\" to insert HTML but I was looking at the MDN website jumping between Web API's I did not know and one of them got my attention it's called insertAdjacentHTML.."}}},pathContext:{slug:"/articles/2014-01-08-DOM-insert-html-method-you-might-not-know-about/"}}}});
//# sourceMappingURL=path---articles-2014-01-08-dom-insert-html-method-you-might-not-know-about-3f2885a16c78a58d0e52.js.map