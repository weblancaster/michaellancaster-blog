webpackJsonp([0x7a5095da36f0],{466:function(n,a){n.exports={data:{site:{siteMetadata:{title:"Blog by Michael Lancaster",subtitle:"Software Engineer focused in Javascript applications",copyright:"© All rights reserved.",author:{name:"Michael Lancaster",twitter:"weblancaster"},url:"http://www.bymichaellancaster.com"}},markdownRemark:{id:"/Users/michaellancaster/Sites/github/michaellancaster-blog/src/pages/articles/2014-08-25-javascript-object-oriented-simple-form-validation/index.md absPath of file >>> MarkdownRemark",html:'<p>Today I want to show you how to build a simple form validation with Object Oriented programming in Javascript.</p>\n<h3>Why Object Oriented</h3>\n<p>Object Oriented programming aim to provide a model of programming based on Objects where an Object has both behaviors state (data) and behavior (code). <br>\nTherefore focus on Objects rather than actions and data rather than logic with that our advantages are a more clear modular structure, easier to maintain and modify since we can create more objects with small differences from the exiting ones.</p>\n<p><strong>The core concepts</strong></p>\n<ul>\n<li>Objects</li>\n<li>Classes</li>\n<li>Data Abstraction and Encapsulation</li>\n<li>Inheritance</li>\n<li>Polymorphism</li>\n</ul>\n<h2>OO form validation</h2>\n<p>Here’s our simple form validation in javascript based on Object Oriented programming. <br>\nOur scenario: validate fields when form is submitted.</p>\n<p>First things first… Let’s create our class called <code class="language-text">Validator</code> and also create our constructor called as method <code class="language-text">constructor</code> which is responsible to setup our basic data.</p>\n<div class="gatsby-highlight">\n      <pre class="language-javascript"><code class="language-javascript"><span class="token punctuation">;</span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span>window<span class="token punctuation">,</span> undefined<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  \n  <span class="token keyword">var</span> Validator <span class="token operator">=</span> <span class="token punctuation">{</span>\n    \n    constructor<span class="token punctuation">:</span> <span class="token keyword">function</span><span class="token punctuation">(</span>form<span class="token punctuation">,</span> config<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n      <span class="token keyword">this</span><span class="token punctuation">.</span>_elForm <span class="token operator">=</span> form<span class="token punctuation">;</span>\n      <span class="token keyword">this</span><span class="token punctuation">.</span>_els <span class="token operator">=</span> config<span class="token punctuation">.</span>fields <span class="token operator">||</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n  \n  <span class="token punctuation">}</span>\n  \n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">(</span>window<span class="token punctuation">,</span> undefined<span class="token punctuation">)</span><span class="token punctuation">;</span></code></pre>\n      </div>\n<p>Now let’s create our initializer called <code class="language-text">init</code> and initialize the program adding a listener to the form using the info/data was passed to our constructor. <br></p>\n<div class="gatsby-highlight">\n      <pre class="language-javascript"><code class="language-javascript"><span class="token punctuation">;</span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span>window<span class="token punctuation">,</span> undefined<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  \n  <span class="token keyword">var</span> Validator <span class="token operator">=</span> <span class="token punctuation">{</span>\n    \n    constructor<span class="token punctuation">:</span> <span class="token keyword">function</span><span class="token punctuation">(</span>form<span class="token punctuation">,</span> config<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n      <span class="token keyword">this</span><span class="token punctuation">.</span>_elForm <span class="token operator">=</span> form<span class="token punctuation">;</span>\n      <span class="token keyword">this</span><span class="token punctuation">.</span>_els <span class="token operator">=</span> config<span class="token punctuation">.</span>fields <span class="token operator">||</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>\n      \n      <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">init</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span><span class="token punctuation">,</span>\n    \n    init<span class="token punctuation">:</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n      <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">addFormListener</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span><span class="token punctuation">,</span>\n    \n    addFormListener<span class="token punctuation">:</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        <span class="token keyword">var</span> formSelector <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>_elForm\n          <span class="token punctuation">,</span> elForm <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span>formSelector<span class="token punctuation">)</span><span class="token punctuation">;</span>\n          \n          elForm<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">\'submit\'</span><span class="token punctuation">,</span> <span class="token keyword">this</span><span class="token punctuation">.</span>validate<span class="token punctuation">.</span><span class="token function">bind</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n  \n  <span class="token punctuation">}</span>\n  \n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">(</span>window<span class="token punctuation">,</span> undefined<span class="token punctuation">)</span><span class="token punctuation">;</span></code></pre>\n      </div>\n<p>The method called <code class="language-text">addFormListener</code> does what it’s named.. we add a listener to the form to when submitted trigger a method and also chain a method called <code class="language-text">bind</code> which call the method <code class="language-text">this.validate</code> with the context of the class instead of send the object clicked <code class="language-text">form</code>.</p>\n<p>The example below we are going add the method to <code class="language-text">validate</code> which is responsible to test against the field requirement <code class="language-text">required</code>, <code class="language-text">empty</code> or <code class="language-text">maxlength</code> and then add a CSS class to the input field.</p>\n<div class="gatsby-highlight">\n      <pre class="language-javascript"><code class="language-javascript"><span class="token punctuation">;</span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span>window<span class="token punctuation">,</span> undefined<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  \n  <span class="token keyword">var</span> Validator <span class="token operator">=</span> <span class="token punctuation">{</span>\n    \n    constructor<span class="token punctuation">:</span> <span class="token keyword">function</span><span class="token punctuation">(</span>form<span class="token punctuation">,</span> config<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n      <span class="token keyword">this</span><span class="token punctuation">.</span>_elForm <span class="token operator">=</span> form<span class="token punctuation">;</span>\n      <span class="token keyword">this</span><span class="token punctuation">.</span>_els <span class="token operator">=</span> config<span class="token punctuation">.</span>fields <span class="token operator">||</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>\n      \n      <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">init</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span><span class="token punctuation">,</span>\n    \n    init<span class="token punctuation">:</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n      <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">addFormListener</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span><span class="token punctuation">,</span>\n    \n    addFormListener<span class="token punctuation">:</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        <span class="token keyword">var</span> formSelector <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>_elForm\n          <span class="token punctuation">,</span> elForm <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span>formSelector<span class="token punctuation">)</span><span class="token punctuation">;</span>\n          \n          elForm<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">\'submit\'</span><span class="token punctuation">,</span> <span class="token keyword">this</span><span class="token punctuation">.</span>validate<span class="token punctuation">.</span><span class="token function">bind</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span><span class="token punctuation">,</span>\n    \n    validate<span class="token punctuation">:</span> <span class="token keyword">function</span><span class="token punctuation">(</span>e<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n      <span class="token keyword">var</span> elFields <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>_els<span class="token punctuation">;</span>\n      \n      <span class="token keyword">for</span> <span class="token punctuation">(</span> <span class="token keyword">var</span> field <span class="token keyword">in</span> elFields <span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        <span class="token keyword">var</span> el <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span>field<span class="token punctuation">)</span>\n          <span class="token punctuation">,</span> elVal <span class="token operator">=</span> el<span class="token punctuation">.</span>value<span class="token punctuation">;</span>\n          \n        <span class="token keyword">if</span> <span class="token punctuation">(</span> elFields<span class="token punctuation">[</span>field<span class="token punctuation">]</span><span class="token punctuation">.</span>require <span class="token operator">||</span> elVal <span class="token operator">===</span> <span class="token string">\'\'</span> <span class="token operator">||</span> elVal<span class="token punctuation">.</span>length <span class="token operator">></span> elFields<span class="token punctuation">[</span>field<span class="token punctuation">]</span><span class="token punctuation">.</span>maxlength <span class="token punctuation">)</span> <span class="token punctuation">{</span>\n          el<span class="token punctuation">.</span>classList<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token string">\'invalid\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n        <span class="token punctuation">}</span>\n      <span class="token punctuation">}</span>\n      \n      e<span class="token punctuation">.</span><span class="token function">preventDefault</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n  \n  <span class="token punctuation">}</span>\n  \n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">(</span>window<span class="token punctuation">,</span> undefined<span class="token punctuation">)</span><span class="token punctuation">;</span></code></pre>\n      </div>\n<p>We simply create a new object which are going to inherit directly from our class/object and call the constructor passing the <code class="language-text">form ID</code> and an Object containing an Object called <code class="language-text">fields</code> which contain all fields that need to be validate with our requirements <code class="language-text">required</code> and <code class="language-text">maxlength</code>.</p>\n<div class="gatsby-highlight">\n      <pre class="language-javascript"><code class="language-javascript"><span class="token keyword">var</span> form1 <span class="token operator">=</span> Object<span class="token punctuation">.</span><span class="token function">create</span><span class="token punctuation">(</span>Validator<span class="token punctuation">)</span><span class="token punctuation">;</span>\nform1<span class="token punctuation">.</span><span class="token function">constructor</span><span class="token punctuation">(</span><span class="token string">\'#form1\'</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>\n  fields<span class="token punctuation">:</span> <span class="token punctuation">{</span>\n    <span class="token string">\'#fname\'</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>\n      required<span class="token punctuation">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>\n      maxlength<span class="token punctuation">:</span> <span class="token number">20</span>\n    <span class="token punctuation">}</span><span class="token punctuation">,</span>\n    <span class="token string">\'#lname\'</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>\n      maxlength<span class="token punctuation">:</span> <span class="token number">10</span>\n    <span class="token punctuation">}</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></code></pre>\n      </div>\n<p>As a reference the HTML markup looks like this.</p>\n<div class="gatsby-highlight">\n      <pre class="language-html"><code class="language-html"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>form</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>form1<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>fieldset</span><span class="token punctuation">></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>legend</span><span class="token punctuation">></span></span>Person<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>legend</span><span class="token punctuation">></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">></span></span>\n            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>label</span> <span class="token attr-name">for</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>fname<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>First name:<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>label</span><span class="token punctuation">></span></span>\n            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>text<span class="token punctuation">"</span></span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>fname<span class="token punctuation">"</span></span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>fname<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">></span></span>\n            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>label</span> <span class="token attr-name">for</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>lname<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Last name:<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>label</span><span class="token punctuation">></span></span>\n            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>text<span class="token punctuation">"</span></span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>fname<span class="token punctuation">"</span></span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>lname<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>submit<span class="token punctuation">"</span></span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>submit<span class="token punctuation">"</span></span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>submit<span class="token punctuation">"</span></span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>Submit<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>fieldset</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>form</span><span class="token punctuation">></span></span></code></pre>\n      </div>\n<p>Note that we can use a different design pattern to just the <code class="language-text">constructor</code> method be accessible, but let’s keep it simple. <br>\nAlso note that in ES6 this OO Approach are going to very clear on how to use the API.</p>\n<p>Cheers!</p>',fields:{date:"2014-08-25"},frontmatter:{title:"Javascript Object Oriented simple form validation",description:"Today I want to show you how to build a simple form validation with Object Oriented programming in Javascript."}}},pathContext:{slug:"/articles/2014-08-25-javascript-object-oriented-simple-form-validation/"}}}});
//# sourceMappingURL=path---articles-2014-08-25-javascript-object-oriented-simple-form-validation-28ee547e4b263a00f155.js.map