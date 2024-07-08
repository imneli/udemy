const { html } = require('./base')

// greedy & non-greedy

console.log(html)
console.log(html.match(/<.+>.+<\/.+>/g)) // greedy
console.log(html.match(/<.+?>.+?<\/.+?>/g)) // non-greedy


// <.+>.+    <\/.+>