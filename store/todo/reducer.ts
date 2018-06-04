import { Reducer } from 'redux'
import { ActionType, getType } from 'typesafe-actions'
import * as actions from './actions'
import { TodoState } from './types'

export type TodoAction = ActionType<typeof actions>

const initialState: TodoState = {
  items: []
}

const reducer: Reducer<TodoState> = (state: TodoState = initialState, action: TodoAction) => {
  switch (action.type) {
    case getType(actions.receiveTodo):
      const { items } = action.payload
      return {
        ...state,
        items
      }
    case getType(actions.clearTodo):
      return {
        ...state,
        items: []
      }
    default:
      return state
  }
}

export default reducer
