import { appTypes } from './types'


interface State {
  modalState: boolean
  sortMethod: null | string
}

interface Action {
  type: string
}

const initState: State = {
  modalState: false,
  sortMethod: null,
}

const  AppReducer = (state = initState, action: Action): State => {
  switch (action.type) {
    case appTypes.OPEN_MODAL:
      return {
        ...state,
        modalState: true,
      }
    case appTypes.CLOSE_MODAL:
      return {
        ...state,
        modalState: false,
      }
    default:
      return state
  }
}
export default AppReducer