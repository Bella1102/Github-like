import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension'
import reducer from './reducer';



// const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)));
// export default store;

export default function initializeStore(state) {
    const store = createStore(reducer, Object.assign({}, state), composeWithDevTools(applyMiddleware(thunk)))
    return store
}

