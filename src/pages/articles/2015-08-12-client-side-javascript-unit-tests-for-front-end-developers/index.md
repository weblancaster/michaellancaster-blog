---
layout: post
title: Javascript Unit Test for UI developers

description: Unit tests for UI developers is a underground world and today we will explore this world a bit, this is not a deep dive in the tools or Unit Test philosophy, for that you can find endless resource around the web.
---

Unit tests for UI developers is a underground world and today we will explore this world a bit, this is not a deep dive in the tools or Unit Test philosophy, for that you can find endless resource around the web.

You can find the code example <a href="https://github.com/weblancaster/karma-mocha-chai-sinon" target="_blank" title="karma-mocha-chai-sinon starter kit">here</a>.

### Where to start

The first question you need to answer is, why unit test my code? that will give you a better understanding of why unit tests are important and useful. <br>
Here a few points.

- Reduce bugs (new and/or existing features)
- Serve as documentation
- Improve Software Design
- Reduce fear (you can write code with no fear of breaking something else)

Unit tests are meant to be **small** but what I mean by that is, let's say you have a function called foo() that calls two other functions fooUno() and fooDos() each function has a specific logic/goal, let's also say that one of those functions inside foo() make a XHR request.. <br>
You don't want to make a XHR request because it's slow and the XHR might depend on something else from the system, but foo() require the data from the function that make XHR request, so what do you do? this scenario is very common for UI developers.

One of the ways to achieve isolation and small unit tests is using **Spies**, **Stubs** and **Mocks** understanding them will help you write better unit tests, I'm going to talk more about it later.

A good structure for unit tests is 3A's **Arrange, Act, Assert** (not applicable to all scenarios), where Arrange is the set up of the object/function being tested (e.g stub a dependency), Act is when you act on the object being tested (e.g call the function) and Assert where you claim the object. (e.g assert that the function was called with xyz arguments);

### What tools to use

Javascript ecosystem isn't like Java, .Net, C++ and other languages with established frameworks/tools for unit tests, in Javascript you will find a lot of frameworks/tools, the good part is that you will have multiple options that suits you the bad part is that most of them isn't well established.

In this article I'm going to introduce you to the most established framework/tools I know.

**Karma** <br>
<a href="http://karma-runner.github.io/0.13/index.html" target="_blank" title="Karma.js">Karma</a> is a test runner by Google/Angular team created to increase developer productivity helping on setting up the environment for testing, with features like tests in real browser, debugging for tests, plugins and more.

**Mocha** <br>
The website has a good explanation, "<a href="http://mochajs.org/" target="_blank" title="Mocha.js">Mocha</a> is a JavaScript test framework running on Node.js and the browser, making asynchronous testing simple. Mocha tests run serially, allowing for flexible and accurate reporting, while mapping uncaught exceptions to the correct test cases".

Mocha include a series of interfaces where you can choose how to write your tests in BDD, TDD, Exports, QUnit or Require.

We will be using the BDD interface which provide **describe()**, **context()** (same as describe, just a way to keep tests easier to read and organized), **before()**, **after()**, **beforeEach()**, **afterEach()** and **it()**, this introduce a great design structure for unit tests.

**Chai** <br>
<a href="http://chaijs.com/" target="_blank" title="Chai.js">Chai</a> is a BDD/TDD assertion library which has several styles **assert**, **should** or **expect**, this makes very flexible for the developer to express the unit test.

**Sinon** <br>
<a href="http://sinonjs.org/" target="_blank" title="Sinon.js">Sinon</a> is the library that implements features like stubs, spies, mocks and things like fake XHR and server.

### Spies, Stubs & Mocks

<br>**Spies** <br>
The word basically describe what the concept means, you spy on a function and then you can assert if the function was called, how many times was called, what the parameters was called with and what was returned.

<pre><code data-language="javascript">
context('Spy', function() {
    it('spy on a function', function() {
        var addSpy = sinon.spy(add());

        addSpy(2, 4);

        expect(addSpy.called).to.be.true;

        addSpy.reset(); // reset spy to it's normal state
    });
});
</code></pre>

**Stubs** <br>
This concept is used to isolate a function from the rest of the App, stubs are going to take place of the component and return consistent results making easier to write tests, stubs are also spies.

<pre><code data-language="javascript">
context('Stub', function() {
    it('stub function', function() {
        var result;
        var isTruthyStub = sinon.stub(isTruthy()).returns(true);
        var obj = {
            "name": "John Doe",
            "age": 24
        };

        result = person('John Doe', 24);

        expect(result).to.be.deep.equal(obj);

        isTruthyStub.reset(); // reset spy to it's normal state
    })
});
</code></pre>

**Mocks** <br>
Mocks are very similar to spies and stubs with the difference you need to define all things that need to happen before you assert and when you are done with all the actions defined you then assert everything happened as planned/defined.

<pre><code data-language="javascript">
 context('Mock', function() {
    it('mock function', function() {
        var multiplyMock = sinon.mock(obj);

        multiplyMock.expects('foo').once();

        obj.foo();

        multiplyMock.verify();
    });
});
</code></pre>

### Setup

I created this <a href="https://github.com/weblancaster/karma-mocha-chai-sinon" target="_blank" title="karma-mocha-chai-sinon starter kit">starter kit</a> to help anyone starting with Javascript unit tests get up to speed. <br>
I suggest you read how to use those tools and start writing tests which is the best and only way to learn.