import { appTypes } from './types'




export const setModalOpen = () => {
  return {
    type: appTypes.OPEN_MODAL,
  }
}

export const setModalClose = () => {
  return {
    type: appTypes.CLOSE_MODAL,
  }
}

