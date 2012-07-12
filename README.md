g.js
====

*g.js* is a very small library which provide a simple method to iterate over a
suit of numbers. It can be used with Node.js or in the browser.

Examples
--------

Normal:

```javascript
> g.from(1).to(5).do(function(e) {
 console.log(e);
});
1
2
3
4
5
```

Excluding final step:

```javascript
> g.from(1).to(5).excluded().do(function(e) {
 console.log(e);
});
1
2
3
4
```

Negative step:


```javascript
> g.from(3).to(0).by(-1).do(function(e) {
    console.log(e);
});
3
2
1
0
```
