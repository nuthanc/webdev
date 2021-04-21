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

Both have many plus's and minus's over each other
```
* One example is in ImageLinkForm's div which has a width of 700px
* Here the div width is fixed when the screen is resized
* If I want to use percentage, then I have to remove the padding in the button so that the text doesn't pop out

### Clarifai API

* One way of checking the models:
  * Go to clarifai npm package
  * Check the github link
  * Go to src/index.js

### Why imageUrl state

* Why another state property, when input is already there
* The reason is for rerendering the component
* Without imageUrl, render method won't be called after Detect is clicked

### Why this.state.input instead of this.state.imageUrl in app models predict

* We get an error(Bad Request in console) if we give imageUrl
* This is because of how setState works
* One way to go around this issue is to use a **callback function** or **componentDidUpdate**
```txt
Calling setState() in React is asynchronous, for various reasons (mainly performance). Under the covers React will batch multiple calls to setState() into a single call, and then re-render the component a single time, rather than re-rendering for every state change. Therefore the imageUrl parameter would have never worked in our example, because when we called Clarifai with our the predict function, React wasn't finished updating the state. 


setState(updater, callback)
More about it in: https://reactjs.org/docs/react-component.html#setstate
```

### To set the styles for Bounding box

* Author inspected the Clarafai Face Detection site to get the styles

### Note

* Arrow functions are not required **for Life cycle methods** that come with React

