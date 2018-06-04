export interface TodoState {
  items: Todo[];
}

// actions
export enum Types {
  RECEIVE_TODO = '@@museum/RECEIVE_TODO',
  CLEAR_TODO = '@@museum/CLEAR_TODO'
}

export interface ReceiveTodoActionPayload {
  items: Todo[]
}
