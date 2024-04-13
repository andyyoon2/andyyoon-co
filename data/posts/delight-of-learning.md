---
title: "The Delight of Learning"
description: "Why I love software development"
date: "2024-04-13"
---

I spent this week meandering through the fog of ambiguity. I had to deliver a new website for a big client, with a nebulous mandate that it had to look modern, sleek, impressive. In my efforts to clarify the requirements, I bumped against the hard fact that nobody knew exactly what they were. What's more, everyone seemed reluctant to admit it so. The project was murky, but I eventually saw the clear message—just build it.

After several days, including one descent into exasperated exclamations alternating with silly songs to preserve my sanity, I drove through the barrier of "I don't know how this should look", and I finally arrived at a UI that worked well.

The next day was full of delights. I'd gone through the dark forest of creative work that we all need to go through sometimes. I'd come out in the clear, and now I could simply wire up the functionality without worry. Of the many new things I learned, I'll focus on one here, an advanced capability of String.prototype.split.

Here's an everyday use of the `split` function. It splits a string on a given pattern and returns an array of substrings.

```js
const names = 'Marmalade, Muffin, Nathaniel, Keith';
const namesArr = names.split(', ');
console.log(namesArr);
// ['Marmalade', 'Muffin', 'Nathaniel', 'Keith']

const sentence = 'The quick brown fox jumps over the lazy dog.';
const words = sentence.split(' ');
console.log(`The sentence has ${words.length} words.`);
// The sentence has 9 words.
```

In my app, I had to reformat sentences containing citations. In a string with the following format, each citation number had to be rendered as a link:

`Lorem ipsum dolor sit amet[[1]]. Arcu ac tortor dignissim convallis[[2, 3]].`

I thought a straightforward first step would be to extract the content inside the double brackets with regex. Then I thought, "Wouldn't it be great if I could call `split` and get that content inside the array?" To my delight, I learned that `split` can also take a regex expression, and if the expression contains capturing groups, the captured groups are returned as part of the array. Exactly what I needed! Here's an example:

```js
const input = 'Lorem ipsum dolor sit amet[[1]]. Arcu ac tortor dignissim convallis[[2, 3]].'
const doubleBracketGroups = /\[\[(.+?)\]\]/;
const parts = input.split(doubleBracketGroups);
console.log(parts);
/*
[
  "Lorem ipsum dolor sit amet",
  "1",
  ". Arcu ac tortor dignissim convallis",
  "2, 3",
  "."
]
*/
```

The regex in `doubleBracketGroups` has a capturing group in the parentheses, `(.+?)`. This captures the content within the double square brackets, denoted by the surrounding `\[\[` and `\]\]`. The resulting array contains these captured groups.

With the citation numbers captured, I could format and render them easily in the final output.

I was excited. With this discovery, I uncovered the exact tool I needed for the job at hand. The designers of this function had already considered my use cases and handled them. Having my needs anticipated and met—in fact already having them met before I knew it—was joyful.

Yet this was the same tool I had used so often. How many times had I invoked `split` and ignored the capturing groups capability, until I needed exactly that? But there was a chance I could have missed this opportunity entirely.

I wouldn't have been able to recognize this solution unless I actually understood the underlying mechanisms, in this case regex. I must admit, I never truly grasped regex until about a year ago, when I finally dedicated time to sit down and learn its fundamentals. I had invested in my learning, and in the moment of need, the solution presented itself. But I had never been able to see it until I had done that preparation.

The same tool becomes more powerful as the user grows in skill.

This is why I love software development. It's a joy to learn new things. It's delightful to see that your need was already met before you even knew about that need. It's gratifying to stand atop your previous work and see the landscape around you with greater clarity. It's *fun*.
