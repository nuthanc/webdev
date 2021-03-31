# Getting Started with Client

### Components required

* App
  * Navigation(Header with Signin and Signout)
  * Logo
  * User with rank(determining num of faces they detected)
  * ImageLinkForm
  * FaceRecognition

### Dependencies

```sh
npm i tachyons
```
* Import tachyons in index.js

### Logo

* react-tilt library
```sh
npm install --save react-tilt
```
* Google royalty free icon brain -> 

### File structure

* Author had all the folder names in **Caps**
* I'm changing it to **lowercase**

### CSS styles

* For CSS styles to affect all buttons, style in index.css
* For honeycomb background, google search for css patterns
* react particles for animation
```sh
npm install react-particles-js
```

### Percentage or Pixels

```txt
Mobile webpages. %'s rock for that. As it will (obviously) adjust to suit.

However when you want a fixed width for say example an article of text that you want displayed in a certain way, px's is the winner.

Both have many plus's and minus's over each other :)
```
* One example is in ImageLinkForm's div which has a width of 700px
* Here the div width is fixed when the screen is resized
* If I want to use percentage, then I have to remove the padding in the button so that the text doesn't pop out