import BooksReducer from './Books'
import { combineReducers } from 'redux'
export const RootReducer = combineReducers({
  Books: BooksReducer,
})

