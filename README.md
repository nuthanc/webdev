# Webdev course by Andrei

### CSS Grids
* Why CSS Grid when we have Flex box
  * Flex box is good for 1 Dimension(Columns)
  * CSS Grid is good for 2 Dimension(Both Columns and Rows)
* CSS Grids work similar to Flexbox
  * Need to wrap the elements within a container
  * The container must have display of grid
* Another cool CSS size property is fr
  * fr stands for fraction
* Cool properties:
  * repeat(n, size)
  * auto: Max size of content
  * justify-items: Row axis
    * start
    * end
    * Check this by Inspecting in Chrome
  * align-items: Column axis
* Super common pattern
  * grid-template-columns: repeat(auto-fill, 300px)
  * Even more optimized is use minmax
  