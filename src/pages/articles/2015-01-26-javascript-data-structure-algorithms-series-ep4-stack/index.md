---
layout: post
title: Ep.4 Data Structures and Algorithms with JS - Stacks

description: Let's talk about Pringles tube today..I meant Stack data structure another ADT used to solve problems
---

<div class="intro-series">
    <strong>Be advised!</strong> <br> 
    This post is part of the series: Data Structures and Algorithms with JS therefore before continue to read I suggest you <a href="/blog/javascript-data-structure-algorithms-series-ep1/" title="Data Structures and Algorithms Ep.1">the introduction</a> to this series of posts if you haven't read yet. thanks.
</div>

Let's talk about Pringles tube today..I meant Stack data structure another ADT used to solve problems

### Stacks

Stacks in Computer Science are not very different than in real world where is just another way to organize things.. for example let's say we have an Pringles tube so all those potatoes chips are organized as stack (LIFO - Last In First Out) which you can't have the bottom potatoes chips before eating the top of the stack and for that reason Stacks are a very good data structure because you add and remove just from one end. From the top.

That being said Stacks operation can be executed only from one end which is the top of the stack and the fundamental operations for Stacks are `push` to add new element at the top of the stack, `pop` to return and remove an element from the top of the stack.. Stacks also might have operations like `peek` which returns the element in the top of the stack, `clear` clean the stack removing all elements and `length` which returns the size/length of the stack.

Therefore..

- `push` add an element at the top of the stack
- `pop` return and remove an element at the top of the stack
- `peek` return element at the top of the stack
- `clear` clear the stack
- `length` returns the size/length of the Stack


That being said lets get our bellies full. I mean. our hands dirty (WAT).

<pre><code data-language="javascript">
/**
 * Stack constructor
 * @class Stack
 */
function Stack() {
    this.stack = [];
    this.top = 0;
}

/**
 * Add new element at the top of the stack
 * @param element
 * @method push
 */
Stack.prototype.push = function(element) {
  this.stack[this.top++] = element;
}

/**
 * Return and Remove element at the top of the stack
 * @method pop
 */
Stack.prototype.pop = function() {
  return this.stack[--this.top];
}

/**
 * Clean stack
 * @method clear
 */
Stack.prototype.clear = function() {
  this.top = 0;
  this.stack = [];
}

/**
 * Return the size of the stack
 * @method length
 */
Stack.prototype.length = function() {
  return this.top;
}

/**
 * Return top element in the stack
 * @method top
 */
Stack.prototype.peek = function() {
  return this.stack[this.top-1];
}

/**
 * This method was created to log/debug the stack
 * @debug
 */
Stack.prototype.debug = function (options) {
    var options = options || {};
        options.stack = options.stack || false;
        options.peek = options.peek || false;

    if ( options.list ) {
        console.log('list >>', this.stack);
    }
  
    if ( options.peek ) {
      console.log('Top >>', this.peek());
    }
}

var pringles = new Stack();
pringles.push('potato chips 1');
pringles.push('potato chips 2');
pringles.push('potato chips 3');
pringles.peek(); // returns potato chips 3
pringles.pop();
pringles.peek(); // returns potato chips 2
pringles.clear();
pringles.length(); // returns 0

pringles.debug({
  list: true,
  peek: true
})
</code></pre>

More examples to come on how to use Stacks but for now this was the Ep.4 about Data Structures and Algorithms - Stacks.

Cheers!
