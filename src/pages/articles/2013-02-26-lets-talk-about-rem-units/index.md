---
layout: post
title: Let's talk about rem units.
posts: "/posts/2013-02-26-lets-talk-about-rem-units/"
description: I think choose the right units of measurement have been always not "cool" enough but now with the popularity and acceptance of the Responsive Design people are thinking more about scale typography.
---

## The past/present
I could talk a lot about all the principal units we have been using but let's get this straight we have been using "px" since ever and this approach just doesn't work anymore or scale.

```css
.parent {
	font-size: 16px;
}

.child {
	font-size: 12px;
}
```

Now with the popularity and acceptance of the Responsive Design (web applications accessible in any devices) developers and designers are thinking more about scale things and make it fit to their user's device.
Style sheets that use relative units can more easily scale from one device environment to another.
Therefore we started to scale the font-size transforming pixel in em's using this math child / parent = em's voila!!

```css
.parent {
	font-size: 16px;
}

.child {
	font-size: 0.75em; /* 12 / 16 = 0.75 */
}
```

Oh! wait. Do we have to repeat this math going through element parent by element parent to give their child the right em's values? It's hard to believe but yes we do.

Now when your wife, girlfriend, dog (whatever) asked you why you are loosing hair and getting bald that's your answer "I use px to calculate em's Baby!"

## The present/future
But now (a while ago) the [W3C spec](http://www.w3.org/TR/css3-values/#font-relative-lengths) added to CSS3 the rem unit that is relative to the document parent (root em).

```css
html {
	font-size: 62.5%;
}

parent {
	font-size: 1.6rem; /* 16px */
}

child {
	font-size: 1.2rem; /* 12px */
}
```

No need to go through all your parent doing that math to change their child and the browser support makes us even happier developers [caniuse.com/rem](http://caniuse.com/rem)

## Browser support
- IE 9+
- Firefox 3.6+
- Chrome 6+
- Safari 5+
- Opera 11.6+

## Old browser support

```css
html {
	font-size: 62.5%;
}

parent {
	font-size: 16px;
	font-size: 1.6rem; /* 16px */
}

child {
	font-size: 12px;
	font-size: 1.2rem; /* 12px */
}
```

Let's go now change all our style sheets and make it good for all users and developers!!


