---
layout: post
title: Ep.5 Data Structures and Algorithms with JS - Binary Search

description: One of the most know and perhaps most used search algorithm. Binary Search.
---

<div class="intro-series">
    <strong>Be advised!</strong> <br> 
    This post is part of the series: Data Structures and Algorithms with JS therefore before continuing I suggest you to read <a href="/blog/javascript-data-structure-algorithms-series-ep1/" title="Data Structures and Algorithms Ep.1">the introduction</a> if you haven't read yet. thanks.
</div>


### Binary Search

Imagine you have a yellow pages book that has 10000 pages and you need to find Michael's phone number in there. <br> 
You wouldn't go page by page and name by name to find Michael's phone number (this is called linear search in CS), instead you would jump to the middle of the book and start from there.

Binary Search works basically the same way, starting at the middle then from there check if the current item is the the same as the one need to find. <br>
<br>
Let's say you want to know if number 8 is in a list of 10 elements. Binary Search will start at 5 and then check if the current position (middle) is what looking for then return correct (the position of the element or the element itself), 
low (when the current position is less than what looking for) or high (when the current position is greater than what looking for) and continuing iterate from there eliminating half and checking correct, low, high. <br>
Making Binary Search Log2(n). That's why Binary Search is very efficient even for massive collections. 

Another take away is that Binary Search requires sorted (ordered) list.

<pre><code data-language="javascript">
const binarySearch = (list, item) => {
    let low = 0;
    let high = list.length - 1;

    while (low <= high) {
        let mid = Math.floor((low + high) / (2)); // Math.floor makes number integer
        let guess = list[mid];

        if (guess === item) {
            return guess;
        }

        if (guess > item) {
            high = mid - 1;
        }

        if (guess < item) {
            low = mid + 1;
        }
    }

    return null;
}

binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 8);
</code></pre>

Thanks.