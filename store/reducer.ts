import { combineReducers, Reducer } from 'redux'
import { TodoState } from './todo/types'
import TodoReducer from './todo/reducer'

export interface RootState {
  todo: TodoState
}

export const RootReducer: Reducer<RootState> = combineReducers<RootState>({
  todo: TodoReducer
})
