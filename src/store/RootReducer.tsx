import BooksReducer from './Books'
import { combineReducers } from 'redux'
import  AppReducer   from './App'
export const RootReducer = combineReducers({
  Books: BooksReducer,
  App: AppReducer,
})

