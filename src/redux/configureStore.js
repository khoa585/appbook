import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../reducers'
function configureStore(initialSate) {
    const store = createStore(
        rootReducer,
        applyMiddleware(thunk)
    )
    return store
}
export default configureStore;