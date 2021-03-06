---
layout: post
title: HTML5 Dev Conf 2015 overview

description: A quick overview of what I saw at the HTML5 dev conf in San Francisco
---

A quick overview of what I saw at <a href="http://html5devconf.com/" target="_blank" title="HTML5devconf">HTML5devconf</a> in San Francisco

### Overview

First of all I was glad visiting back San Francisco, last time I was there I was visiting Ciro Nunes during the weekend while he was working here as Contractor/Consultant for Macy's.

I feel like San Francisco is very similar to SP, a lot of culture, good options to do things, lot's of hills and not so clean city. <br>
Besides all that the weather feels good.. not so warm not so cold (like in Chicago), you can see the tech environment taking the city over with outdoors, people wearing t-shirts or using devices (electric skateboard) that you usually don't see in a non-tech city.

I stayed in the Marker hotel which was pleasant and comfortable enough for the 4 nights, nothing special though, no city/bay view from my room, no free breakfast (even though I'm vegan I like to have fruits when hotels provide breakfast). <br>
Just a few blocks from where the conference was happening so I could just walk there every morning to Yerba Buena Center.

I would say that 90% of the talks I was familiar what was because of my constantly reading trying to stay updated on what can help me and what can't. <br>
So the talks I saw was based on how much content I have read about, how much of that I can learn on the internet or because I already know and have been using.

### Talks

**“Post” is the New “Pre”: Using Postprocessors to Revolutionize Your Workflow** <small>Aaron Ladage, DEG</small>

Pre processors have been in the devs toolbelt for a while helping us to enable use new technologies or better technologies not supported by the standards (e.g SASS) or just because it's someone's preference but that comes with some problems which are, pre processors doesn't really use standardized code for example the code you write in sass using compass won't be the same when compiled, pre is also time consuming depending on the size of the project and when not properly set up this can take some time to compile all the tasks until the dev can do something, pre also adds more complexity for debugging when not properly setup.

Although I have heard of post processors I have never stopped to really get my hands dirty, in this case the speaker gave us a little/quick overview on <a href="https://github.com/postcss/postcss" target="_blank" title="PostCSS">PostCSS</a> where you can add to your tasks the same way the pre processors are.. although when using PostCSS you will be able to write standardized code and just add <a href="https://github.com/postcss/postcss#plugins" target="_blank" title="PostCSS plugins/modules">Plugins/modules</a> to your PostCSS to work on compiling to something "better" once you are done, you can use prefixes (-webkit-) as example, you would write your code without any prefix but afterwards PostCSS would add them for you.

I don't see myself using it soon but the idea seems interesting.

**Falcor: One Model Everywhere** <small>Jafar Husain, Netflix</small>

RESTful API architecture style is "broken" and the internet isn't a place where we get things anymore but where we do things. <br>
You ask what's wrong with RESTful API.. In the RESTful API architecture style we would need to make sometimes hundreds of calls and maintain hundreds of ENDPOINTS, it's also hard to keep UI engineers aware of what ENDPOINTS call what, another problem is that browsers have a limitation problem which is max parallel HTTP connections.

<a href="https://netflix.github.io/falcor/" target="_blank" title="Falcor">Falcor</a> was built by the team at Netflix (which I admire for what they are doing over there) because they faced those issues and saw good opportunities in using an different architecture style called RPC (Remote Procedure Call), they still have ENDPOINTS though but not specifically built around RESTful.

Facebook ended up with he same idea and built <a href="https://github.com/facebook/graphql" target="_blank" title="GraphQL">GraphQL</a> which I have tried and really liked as well.

You would have one ENDPOINT (if you like) where you define your model and the client retrieve the key.. there is much more to know so take a look <a href="http://netflix.github.io/falcor/starter/why-falcor.html" target="_blank" title="learn more about Falcor">here</a> to learn more.


**To Err Is Human** <small>Alex Liu, Netflix</small>

Oh errors. How easy and boring our lives would be without you? Alex Liu gave a great talk on how his team is handling errors at Netflix.

His talk resumes to learn from your errors and deal with them preserving and adding, cause, time, history and not using catch so often.

there is two kinds of errors we face, expected and not expected where when in Node we have a "best practice" to call callback with error where at some point we might deal with that.

```javascript
function foo(cb) {
    service.get('movies', function(err, data) {
        if (err) {
            return cb(err);
        }
        return cb(null, data);
    });
}
```

Some of the modules him and his team have been using are <a href="https://github.com/davepacheco/node-verror" target="_blank" title="node-verror">Verror</a> where will combine errors while preserving each one's error message and for wrapping errors. Another module is <a href="https://github.com/restify/errors" target="_blank" title="Restify-errors">Restify-errors</a> has a collection of HTTP and REST Error constructors.

You can find the <a href="http://www.slideshare.net/AlexLiu24/to-err-is-human-54101650" target="_blank" title="To err is human, hadling errors in Node js">slides here</a>.


**Architecting modern JavaScript apps** <small>Matt DeBergalis, Meteor</small>

I was afraid Matt would just talk about Meteor.js but turned out that he actually did not sell Meteor although he used as use case on his talk which is fair. <br>
His talk was a overview of how a modern Javascript Application architecture works.. where in the old days we would navigate to an page and the browser would refresh/request that page and start clean/fresh but nowadays we are focused on rich UX/UI which take us to have stateful Apps (no refresh), real time data pushed to the client and the client need to be reactive to update the UI.

Not a very technical talk but enjoyable and knowledgeable.


**JavaScript and the AST** <small>Jarrod Overson, Shape Security</small>

A very technical and nice talk about Abstract Syntax Tree, for those that are not familiar with that name AST is an tree representation of your code (beautiful stuff).

The points he touched was why would we use AST in "real life" one of the examples was let's say you want to read from a input and most of the cases you/we would write an Regex but this input could be very complex and "nobody" really knows Regex so one better solution is to have AST from the input where would be just plain old Javascript Obj he also touched on how to get started with Javascript AST mentioning tools such as parsers Esprima, Acorn and Shift, other points were Standardized AST formats.

AST is something I'm interested to use anytime soon. You can find the <a href="http://www.slideshare.net/JarrodOverson/javascript-asts-transformations-analysis-and-transpiling" target="_blank" title="JavaScript and the AST">slides here</a>.


**Measuring web Perf ? Lets write an app for that !!** <small>Parashuram Narasimhan, Microsoft</small>

Parashuram Narasimhan spoke about how measuring client side performance can actually work when done right, He was focused in the performance while the user is using the Web App and not the waiting time (usually loading time) which is what most of the research and work on performance improvements has been done.

When someone says "the website feels slow" that did not meant necessarily on waiting/loading but on the feels, that being said the website is <a href="http://jankfree.org/" target="_blank" title="Jank free">Janky free</a>/choppy so he showed us that this can be monitored using the Chrome DevTools profiling to check if the rendering/repaint is at 60 FPS or close (nothing I haven't done) but he reserved the best for last.. Imagine for every change in the code you need to go back to DevTools and profiling again then again, this is a tedious work and comparing to Back End most of the time they have test cases, CI (automation) integrated on every time someone pushes code the CI will catch any broken test and report back to the person.

I like him believe all tests should be integrated with CI, if you want to know more about his talk go here <a href="https://www.youtube.com/watch?v=86LwhTD_rkM" target="_blank" title="Measuring web Perf ? Lets write an app for that !!">visit here</a>.


**How Automation Can Open Up Your Product to a Billion More Users** <small>Leith Abdulla, Coursera</small>

Internet is a very diverse environment, you might think that a local website doesn't need internationalization but even hyper local websites has people from other locations at that particular location.. e.g Asian people in SF a lot of them doesn't know english very well and some doesn't even know at all so internationalization could be a game changer bringing your product/service to a new clientele.

Several tools that can help us bringing internationalization to a lot of people and some of them are <a href="http://formatjs.io/" target="_blank" title="formatjs">Formatjs</a>, <a href="https://github.com/airbnb/polyglot.js" target="_blank" title="formatjs">Polyglot.js</a> but a lot of websites like Orbitz, Coursera, Ebay, Groupon, etc uses crowdsource therefore it's more than enough prove that crowdsource internationalization works.

Also, do not forget to make this a easier process integrating with your CI. <br>
You can find more about it <a href="https://www.youtube.com/watch?v=WO0BFNCyugQ" target="_blank" title="How Coursera Automates i18n on the Front-End">here</a>.


**When can I have Native Code?** <small>Brad Nelson, Google</small>

This was a interesting talk. The web is open, "free", portable and what is missing is the power the native code brings to the web where this technology will enable some very powerful and cool opportunities.

Why native code on the browser, it's really fast because it's close to the metal, lower power, has access to hardware, Threads + Shared Memory, Dynamic code generation and would support all the languages like C++, Java, Python, etc therefore starting at gaming, no console?! just open type the url into your browser and start playing native like games experience (e.g Call of Duty).

What you can start using now are NaCl (Native Client), PNaCl (Portable Native Client), Emscripten, Asm.js (Assembly Language).. you can also start using now with Javascript type declarations (float64, float32, int32, uint32, TypedArray).

Of course all that comes with good and bad sides.. the bad sides are those we already know such as Malwares, data theft, Architecture dependent, OS dependent, Browser dependent, Configuration dependent.

All that looks promising when you see the pros over the cons. If you want to know more take a look on his <a href="https://flagxor-html5devconf2015.storage.googleapis.com/index.html" target="_blank" title="How Coursera Automates i18n on the Front-End">slides</a>.

### End

In general the conference was great, I did not see any issues, 90% of the speakers were prepared and knowledgeable about their subjects. <br>
I saw some people I haven't seen in a while, made some new friends, hung out around the city so my days in SF was enjoyable.








