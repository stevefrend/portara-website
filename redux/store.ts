import { createStore, applyMiddleware } from 'redux'
import rootReducer from './reducers/rootReducer'
import { composeWithDevTools } from 'redux-devtools-extension'
import { initialState } from './reducers/exampleReducer'
import { IRootReducer } from '../interfaces'

export const initializeStore = (state: any = initialState) => {
  return createStore(
    rootReducer,
    state,
    composeWithDevTools(applyMiddleware())
  )
}
