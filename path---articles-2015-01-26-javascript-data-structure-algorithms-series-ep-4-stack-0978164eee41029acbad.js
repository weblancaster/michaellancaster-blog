webpackJsonp([51441233653146],{468:function(n,s){n.exports={data:{site:{siteMetadata:{title:"Blog by Michael Lancaster",subtitle:"Software Engineer focused in Javascript applications",copyright:"© All rights reserved.",author:{name:"Michael Lancaster",twitter:"weblancaster"},url:"http://www.bymichaellancaster.com"}},markdownRemark:{id:"/Users/michaellancaster/Sites/github/michaellancaster-blog/src/pages/articles/2015-01-26-javascript-data-structure-algorithms-series-ep4-stack/index.md absPath of file >>> MarkdownRemark",html:'<div class="intro-series">\n    <strong>Be advised!</strong> <br> \n    This post is part of the series: Data Structures and Algorithms with JS therefore before continue to read I suggest you <a href="/articles/2014-08-06-javascript-data-structure-algorithms-series-ep1/" title="Data Structures and Algorithms Ep.1">the introduction</a> to this series of posts if you haven\'t read yet. thanks.\n</div>\n<p>Let’s talk about Pringles tube today..I meant Stack data structure another ADT used to solve problems</p>\n<h3>Stacks</h3>\n<p>Stacks in Computer Science are not very different than in real world where is just another way to organize things.. for example let’s say we have an Pringles tube so all those potatoes chips are organized as stack (LIFO - Last In First Out) which you can’t have the bottom potatoes chips before eating the top of the stack and for that reason Stacks are a very good data structure because you add and remove just from one end. From the top.</p>\n<p>That being said Stacks operation can be executed only from one end which is the top of the stack and the fundamental operations for Stacks are <code class="language-text">push</code> to add new element at the top of the stack, <code class="language-text">pop</code> to return and remove an element from the top of the stack.. Stacks also might have operations like <code class="language-text">peek</code> which returns the element in the top of the stack, <code class="language-text">clear</code> clean the stack removing all elements and <code class="language-text">length</code> which returns the size/length of the stack.</p>\n<p>Therefore..</p>\n<ul>\n<li><code class="language-text">push</code> add an element at the top of the stack</li>\n<li><code class="language-text">pop</code> return and remove an element at the top of the stack</li>\n<li><code class="language-text">peek</code> return element at the top of the stack</li>\n<li><code class="language-text">clear</code> clear the stack</li>\n<li><code class="language-text">length</code> returns the size/length of the Stack</li>\n</ul>\n<p>That being said lets get our bellies full. I mean. our hands dirty (WAT).</p>\n<div class="gatsby-highlight">\n      <pre class="language-javascript"><code class="language-javascript"><span class="token comment">/**\n * Stack constructor\n * @class Stack\n */</span>\n<span class="token keyword">function</span> <span class="token function">Stack</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">this</span><span class="token punctuation">.</span>stack <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>\n    <span class="token keyword">this</span><span class="token punctuation">.</span>top <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\n<span class="token comment">/**\n * Add new element at the top of the stack\n * @param element\n * @method push\n */</span>\nStack<span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function-variable function">push</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span>element<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">this</span><span class="token punctuation">.</span>stack<span class="token punctuation">[</span><span class="token keyword">this</span><span class="token punctuation">.</span>top<span class="token operator">++</span><span class="token punctuation">]</span> <span class="token operator">=</span> element<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\n<span class="token comment">/**\n * Return and Remove element at the top of the stack\n * @method pop\n */</span>\nStack<span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function-variable function">pop</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>stack<span class="token punctuation">[</span><span class="token operator">--</span><span class="token keyword">this</span><span class="token punctuation">.</span>top<span class="token punctuation">]</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\n<span class="token comment">/**\n * Clean stack\n * @method clear\n */</span>\nStack<span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function-variable function">clear</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">this</span><span class="token punctuation">.</span>top <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>\n  <span class="token keyword">this</span><span class="token punctuation">.</span>stack <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\n<span class="token comment">/**\n * Return the size of the stack\n * @method length\n */</span>\nStack<span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function-variable function">length</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>top<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\n<span class="token comment">/**\n * Return top element in the stack\n * @method top\n */</span>\nStack<span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function-variable function">peek</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>stack<span class="token punctuation">[</span><span class="token keyword">this</span><span class="token punctuation">.</span>top<span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\n<span class="token comment">/**\n * This method was created to log/debug the stack\n * @debug\n */</span>\nStack<span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function-variable function">debug</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span>options<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">var</span> options <span class="token operator">=</span> options <span class="token operator">||</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>\n        options<span class="token punctuation">.</span>stack <span class="token operator">=</span> options<span class="token punctuation">.</span>stack <span class="token operator">||</span> <span class="token boolean">false</span><span class="token punctuation">;</span>\n        options<span class="token punctuation">.</span>peek <span class="token operator">=</span> options<span class="token punctuation">.</span>peek <span class="token operator">||</span> <span class="token boolean">false</span><span class="token punctuation">;</span>\n\n    <span class="token keyword">if</span> <span class="token punctuation">(</span> options<span class="token punctuation">.</span>list <span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">\'list >>\'</span><span class="token punctuation">,</span> <span class="token keyword">this</span><span class="token punctuation">.</span>stack<span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n  \n    <span class="token keyword">if</span> <span class="token punctuation">(</span> options<span class="token punctuation">.</span>peek <span class="token punctuation">)</span> <span class="token punctuation">{</span>\n      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">\'Top >>\'</span><span class="token punctuation">,</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">peek</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">var</span> pringles <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Stack</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\npringles<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token string">\'potato chips 1\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\npringles<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token string">\'potato chips 2\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\npringles<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token string">\'potato chips 3\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\npringles<span class="token punctuation">.</span><span class="token function">peek</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// returns potato chips 3</span>\npringles<span class="token punctuation">.</span><span class="token function">pop</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\npringles<span class="token punctuation">.</span><span class="token function">peek</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// returns potato chips 2</span>\npringles<span class="token punctuation">.</span><span class="token function">clear</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\npringles<span class="token punctuation">.</span><span class="token function">length</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// returns 0</span>\n\npringles<span class="token punctuation">.</span><span class="token function">debug</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n  list<span class="token punctuation">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>\n  peek<span class="token punctuation">:</span> <span class="token boolean">true</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span></code></pre>\n      </div>\n<p>More examples to come on how to use Stacks but for now this was the Ep.4 about Data Structures and Algorithms - Stacks.</p>\n<p>Cheers!</p>',fields:{date:"2015-01-26"},frontmatter:{title:"Ep.4 Data Structures and Algorithms with JS - Stacks",description:"Let's talk about Pringles tube today..I meant Stack data structure another ADT used to solve problems"}}},pathContext:{slug:"/articles/2015-01-26-javascript-data-structure-algorithms-series-ep4-stack/"}}}});
//# sourceMappingURL=path---articles-2015-01-26-javascript-data-structure-algorithms-series-ep-4-stack-0978164eee41029acbad.js.map