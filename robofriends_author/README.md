### Author's implementation

#### Card Component
* He started from Card Component(I called it ProfileCard component because I had Card from react-bootstrap)
* Need to import React because without it we can't use JSX
* He used tachyons for styling
  * class of bg-light-green, tc(text centered) dib(for display inline-block), br3(border radius), pa3(padding), ma2(margin) and grow(animation), bw2 and shadow-5
* Just like me, Andrei used profiles(which he called robots in robots.js)
  * His object properties were id, name, email and username

* CardList Component
* Next he used App components instead of CardList in index.js
* Turned App to a Class based Component to have state and Callback
* Used tachyons for styling of Components
* Use Sega Fonts for fonts
* Use jsonplaceholder api to make app more realistic

### App mounting

* Replacing div of root with our components in the DOM
* Order of execution: constructor, render, componentDidMount and render again(since state changes or updates)

### Scroll component

* I didn't have this. I just gave style of overflow-y: scroll to the CardList component

### Organizing Project files

* Move pure Components to components folder
* Move Components with State to containers folder

### Error Boundary

![error boundary](img/errBd.png)
* componentDidCatch like try catch
  * If anything errors, it will run this Lifecycle hook
* In App.js, import ErrorBoundry and wrap CardList with ErrorBoundary
* ErrorBoundary good for Production
* In Development, it will show the detailed Error