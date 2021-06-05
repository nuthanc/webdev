### Robofriends with Redux

* * Standard implementation of Redux from Stephen: https://github.com/nuthanc/react/tree/master/streams/client/src

```sh
npm i redux react-redux axios redux-thunk
npm i tachyons
```

### Author's implementation

* https://github.com/aneagoie/robofriends-redux
* Better naming for actions
  * setSearchField instead of my searcFor
* He used constants.js just like Stephen's types.js
* Used switch, Object.assign in reducers
```js
const initialState = {
  searchField: ''
}

export const searchRobots = (state=initialState, action={}) => {
  switch(action.type) {
    case CHANGE_SEARCH_FIELD:
      return Object.assign({}, state, {searchField: action.payload});
    default:
      return state;
  }
}
// Stephen's using spread operator
return { ...state, searchField: action.payload }
```
* It's good to have state as objects
* mapDispatchToProps in connect function
* redux-logger package for logging
```js
import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';
import 'tachyons';

import App from './containers/App';
import registerServiceWorker from './registerServiceWorker';
import { requestRobots, searchRobots } from './reducers'

import './index.css';

const logger = createLogger() 

const rootReducers = combineReducers({requestRobots, searchRobots})

const store = createStore(rootReducers, applyMiddleware(thunkMiddleware, logger))

ReactDOM.render(
  <Provider store={store}>
    <App/>
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();
``` 

### Styling in React

* Glamorous
* Styled components
* CSS modules

### Static Websites

* Gatsby

### Reusable components

* Material UI
* Semantic UI

### Redux helpers

* Reselect
* Redux saga (Think of redux thunk supercharged)

### Other helper libraries

* Immutable js

### Make decision whether they are necessary or not(Simply don't add them)