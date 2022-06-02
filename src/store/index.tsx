import {
  createStore,
} from 'redux'
import { RootReducer } from './RootReducer'

const store = createStore(RootReducer)

export type RootState = ReturnType<typeof store.getState>

export default store