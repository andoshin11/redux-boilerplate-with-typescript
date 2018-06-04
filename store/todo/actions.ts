import { createAction } from 'typesafe-actions'
import { Types, ReceiveTodoActionPayload } from './types'

export const receiveTodo = createAction(Types.RECEIVE_TODO, resolve => {
  return (items: Todo[]) => resolve({ items } as ReceiveTodoActionPayload)
})

export const clearTodo = createAction(Types.CLEAR_TODO)
