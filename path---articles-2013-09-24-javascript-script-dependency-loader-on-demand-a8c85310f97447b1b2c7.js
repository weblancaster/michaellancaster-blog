webpackJsonp([68056595680846],{450:function(n,s){n.exports={data:{site:{siteMetadata:{title:"Blog by Michael Lancaster",subtitle:"Software Engineer focused in Javascript applications",copyright:"© All rights reserved.",author:{name:"Michael Lancaster",twitter:"weblancaster"},url:"http://www.bymichaellancaster.com"}},markdownRemark:{id:"/Users/michaellancaster/Sites/github/michaellancaster-blog/src/pages/articles/2013-09-24-javascript-script-dependency-loader-on-demand/index.md absPath of file >>> MarkdownRemark",html:'<p>My love for Javascript just get bigger and also my knowledge but that’s not what I’m going to blog about today.. at this time I’m going to post about the Micro-Library I created Jet.js</p>\n<h2>Jet.js</h2>\n<p>One of the senior developers at my former company was having some performance issues on a particular Web Application..\nAfter see the code at my perspective one of the problems were all the plugins (was more than 15) being download on the entire Application.</p>\n<p>I decided create a very lightweight library (called modular-script-loader) to solve that problem downloading scripts asynchronously (non-block) and on demand (not for all the pages).</p>\n<p>So last night I decided re-write entirely using better Design pattern and cleaner code I also gave a better name “Jet.js”.</p>\n<h3>Code</h3>\n<p>Check out on Github &#x3C;a href=”<a href="http://www.github.com/weblancaster/jet">http://www.github.com/weblancaster/jet</a>” target=""_blank title=“Jet js”>Jet.js</a></p>\n<p>My goal here is to make the Web Application faster therefore <strong> download scripts asynchronously (non-block), better organized script dependency and very very lightweight</strong>.</p>\n<p>Below is the code to make the “magic” happen..just a few lines of code.</p>\n<div class="gatsby-highlight">\n      <pre class="language-javascript"><code class="language-javascript"><span class="token comment">/*!\n * Jet.js (Micro-library)\n * Version: 0.3\n * http://git.io/LwFXlg\n * Released under the MIT license\n *\n * Author\'s name: Michael Lancaster\n * website: www.bymichaellancaster.com\n * Twitter: @weblancaster\n * Date: 24-09-2013\n */</span>\n<span class="token punctuation">;</span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span>window<span class="token punctuation">,</span> undefined<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n\n    window<span class="token punctuation">.</span>Jet <span class="token operator">=</span> window<span class="token punctuation">.</span>Jet <span class="token operator">||</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>\n\n    Jet<span class="token punctuation">.</span>App <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        <span class="token comment">// PRIVATE</span>\n\n        <span class="token comment">/**\n         * Responsible to inject widgets/scripts\n         * on the page\n         * @method inject\n         */</span>\n         <span class="token keyword">function</span> <span class="token function">inject</span><span class="token punctuation">(</span>url<span class="token punctuation">,</span> callback<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n            <span class="token keyword">var</span> script <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">createElement</span><span class="token punctuation">(</span><span class="token string">"script"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n            script<span class="token punctuation">.</span>type <span class="token operator">=</span> <span class="token string">"text/javascript"</span><span class="token punctuation">;</span>\n\n            <span class="token keyword">if</span> <span class="token punctuation">(</span>script<span class="token punctuation">.</span>readyState<span class="token punctuation">)</span><span class="token punctuation">{</span>  <span class="token comment">//IE</span>\n                script<span class="token punctuation">.</span><span class="token function-variable function">onreadystatechange</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>\n                    <span class="token keyword">if</span> <span class="token punctuation">(</span> script<span class="token punctuation">.</span>readyState <span class="token operator">==</span> <span class="token string">"loaded"</span> <span class="token operator">||</span> script<span class="token punctuation">.</span>readyState <span class="token operator">==</span> <span class="token string">"complete"</span> <span class="token punctuation">)</span> <span class="token punctuation">{</span>\n                        script<span class="token punctuation">.</span>onreadystatechange <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>\n                        <span class="token keyword">if</span> <span class="token punctuation">(</span> callback <span class="token operator">!==</span> undefined <span class="token punctuation">)</span> <span class="token punctuation">{</span>\n                            <span class="token function">callback</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n                        <span class="token punctuation">}</span>\n                    <span class="token punctuation">}</span>\n                <span class="token punctuation">}</span><span class="token punctuation">;</span>\n            <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>  <span class="token comment">//Others</span>\n                script<span class="token punctuation">.</span><span class="token function-variable function">onload</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>\n                    <span class="token keyword">if</span> <span class="token punctuation">(</span> callback <span class="token operator">!==</span> undefined <span class="token punctuation">)</span> <span class="token punctuation">{</span>\n                        <span class="token function">callback</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n                    <span class="token punctuation">}</span>\n                <span class="token punctuation">}</span><span class="token punctuation">;</span>\n            <span class="token punctuation">}</span>\n\n            script<span class="token punctuation">.</span>src <span class="token operator">=</span> url<span class="token punctuation">;</span>\n            document<span class="token punctuation">.</span><span class="token function">getElementsByTagName</span><span class="token punctuation">(</span><span class="token string">\'body\'</span><span class="token punctuation">)</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">appendChild</span><span class="token punctuation">(</span>script<span class="token punctuation">)</span><span class="token punctuation">;</span>\n        <span class="token punctuation">}</span>\n\n        <span class="token comment">// PUBLIC</span>\n        <span class="token keyword">return</span> <span class="token punctuation">{</span>\n            <span class="token comment">/**\n             * Responsible to store all widgets\n             * as an array\n             * @property WIDGETS_COLLECTION\n             */</span>\n            <span class="token constant">WIDGETS_COLLECTION</span><span class="token punctuation">:</span> <span class="token keyword">null</span><span class="token punctuation">,</span>\n\n            <span class="token comment">/**\n             * Responsible to get widgets\n             * and transform in array\n             * and assign to the property\n             * @method widgets\n             */</span>\n            widgets<span class="token punctuation">:</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n                <span class="token keyword">var</span> widgets <span class="token operator">=</span> document<span class="token punctuation">.</span>body<span class="token punctuation">.</span><span class="token function">getAttribute</span><span class="token punctuation">(</span><span class="token string">\'data-ui-widget\'</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n                    widgetsArr <span class="token operator">=</span> widgets<span class="token punctuation">.</span><span class="token function">split</span><span class="token punctuation">(</span><span class="token string">\' \'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n                <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token constant">WIDGETS_COLLECTION</span> <span class="token operator">=</span> widgetsArr<span class="token punctuation">;</span>\n            <span class="token punctuation">}</span><span class="token punctuation">,</span>\n\n            <span class="token comment">/**\n             * Responsible for receive arguments and initialize widget\n             * @method init\n             */</span>\n            init<span class="token punctuation">:</span> <span class="token keyword">function</span><span class="token punctuation">(</span>name<span class="token punctuation">,</span> url<span class="token punctuation">,</span> callback<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n                <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">widgets</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n                <span class="token keyword">if</span> <span class="token punctuation">(</span> arguments<span class="token punctuation">.</span>length <span class="token operator">&lt;</span> <span class="token number">2</span> <span class="token punctuation">)</span> <span class="token punctuation">{</span>\n                    <span class="token keyword">return</span> <span class="token boolean">false</span>\n                <span class="token punctuation">}</span>\n\n                <span class="token keyword">var</span> widget <span class="token operator">=</span> name<span class="token punctuation">,</span>\n                    widgetCollection <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token constant">WIDGETS_COLLECTION</span><span class="token punctuation">,</span>\n                    widgetCollectionLength <span class="token operator">=</span> widgetCollection<span class="token punctuation">.</span>length<span class="token punctuation">,</span>\n                    i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>\n\n                <span class="token keyword">for</span> <span class="token punctuation">(</span> <span class="token punctuation">;</span> i <span class="token operator">&lt;</span> widgetCollectionLength<span class="token punctuation">;</span> i<span class="token operator">++</span> <span class="token punctuation">)</span> <span class="token punctuation">{</span>\n                    <span class="token keyword">if</span> <span class="token punctuation">(</span> widgetCollection<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">indexOf</span><span class="token punctuation">(</span>widget<span class="token punctuation">)</span> <span class="token operator">===</span> <span class="token number">0</span> <span class="token punctuation">)</span> <span class="token punctuation">{</span>\n                        <span class="token function">inject</span><span class="token punctuation">(</span>url<span class="token punctuation">,</span> callback<span class="token punctuation">)</span><span class="token punctuation">;</span>\n                    <span class="token punctuation">}</span>\n                <span class="token punctuation">}</span>\n            <span class="token punctuation">}</span>\n        <span class="token punctuation">}</span>\n\n    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">(</span>window<span class="token punctuation">)</span><span class="token punctuation">;</span></code></pre>\n      </div>\n<h3>how to use</h3>\n<p>Define what are the widgets you want to use on that page (on body element).</p>\n<div class="gatsby-highlight">\n      <pre class="language-html"><code class="language-html">&lt; body data-ui-widget="widget-jquery widget-cycle" ></code></pre>\n      </div>\n<p>include Jet.js on your page</p>\n<div class="gatsby-highlight">\n      <pre class="language-html"><code class="language-html"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>js/jet.min.js<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token script language-javascript"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span></code></pre>\n      </div>\n<p>I would suggest you create a JS file which has all your widgets been called.</p>\n<div class="gatsby-highlight">\n      <pre class="language-javascript"><code class="language-javascript"><span class="token comment">// Cycle</span>\n<span class="token keyword">var</span> dependency1 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Jet<span class="token punctuation">.</span>App</span><span class="token punctuation">;</span>\n    dependency1<span class="token punctuation">.</span><span class="token function">init</span><span class="token punctuation">(</span><span class="token string">\'widget-cycle\'</span><span class="token punctuation">,</span> <span class="token string">\'http://malsup.github.io/jquery.cycle.all.js\'</span><span class="token punctuation">,</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">\'cycle loaded\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n        <span class="token function">$</span><span class="token punctuation">(</span><span class="token string">\'#outdoor-context-content\'</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">cycle</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n            fx<span class="token punctuation">:</span> <span class="token string">\'fade\'</span>\n        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></code></pre>\n      </div>\n<p>Done!</p>\n<h3>Example of use</h3>\n<ul>\n<li>Relatively small to medium Web Applications</li>\n<li>Wordpress, Drupal, CMS’s Web Applications in general</li>\n</ul>\n<h3>(Intended) browser support</h3>\n<ul>\n<li>Google Chrome</li>\n<li>Mozilla Firefox 3+</li>\n<li>Apple Safari 4+</li>\n<li>Opera 10+</li>\n<li>Internet Explorer 7+</li>\n</ul>\n<p>If you found any bug or want to contribute or want to give me any opinion feel free to do that.</p>',fields:{date:"2013-09-24"},frontmatter:{title:"My Micro-Library called Jet.js",description:"My love for Javascript just get bigger and also my knowledge but that's not what I'm going to blog about today.. at this time I'm going to post about the Micro-Library I created Jet.js"}}},pathContext:{slug:"/articles/2013-09-24-javascript-script-dependency-loader-on-demand/"}}}});
//# sourceMappingURL=path---articles-2013-09-24-javascript-script-dependency-loader-on-demand-a8c85310f97447b1b2c7.js.map