# Webdev course by Andrei

### CSS Grids
* Grid Cheat Sheet: https://grid.malven.co/
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
* Properties for individual items:
  * Another property is grid-column
    * grid-column-start and grid-column-end
      * grid-column-start: 1
      * grid-column-end: 3
      * Start at 1 and end at 3
    * Short hand for the above: 
      * grid-column: 1/3
    * -1 is for the end of the viewport
      * grid-column: 1/-1;
    * span across n grids
      * grid-column: span 3
  * Similarly grid-row
  * justify-self w.r.t column
  * align-self w.r.t row