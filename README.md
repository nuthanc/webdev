# Webdev course by Andrei

### HTML vs HTML5
* HTML5 is more semantic
* Also improves the performance of the web

### Copy a Website
* Good website to read: waitbutwhy.com
* View Page Source 
* Copy and Paste into your file

### CSS
* Good resource: https://css-tricks.com/almanac/

### CSS selectors
```txt
> is for direct child
h2 > p
<h2><p></p><h2>
h2 as parent of p
<h2><div><p></p></div><h2>
Doesn't apply here

h2 p is for descendant
p in h2

+ is for adjacent sibling
```
* CSS selector game: https://flukeout.github.io/
* clear property for float

### CSS specificity
* Inline style in 1000s
* ID in 100s
* Class, pseudo-class and attributes in 10s
* Elements in units

### Box model
* Every element has a box
* Each box has Inner Content box, padding, border and margin
* Inner Content box: weight and height

### Borders
* Generally units in px because they are very small
* We don't see anything unless we provide the color and style
* If we provide border-box, then width of element including border will be considered

### Inline and Block elements
* Inline elements fit in alongside other elements
* Block level elements take up a whole **block** of space

### Display
* Inline
  * Width and Height are ignored
  * Margin and Padding push elements away horizontally but not vertically
* Block
  * Breaks the flow of the document
  * Width, Height, Margin and Padding are respected
* Inline-block
  * Behaved like an inline element except
  * Width, Height, Margin and Padding are respected

### ems and rems 
* Check the resources attached

### For position
* Check MDN docs: https://developer.mozilla.org/en-US/docs/Web/CSS/position