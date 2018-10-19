const DEFAULT_STATE = {
  scatter: null
}

export default (state = DEFAULT_STATE, action: any) => {
  switch (action.type) {
    case 'SET_SCATTER':
      return state.scatter = action.payload
    default:
      return state
  }
}