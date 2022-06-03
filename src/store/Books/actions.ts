// import { NavbarTypes } from '../../components/Navbar/types'
import { IBook } from '../../types'
import { booksTypes } from './types'


interface FilterAction {
  type: string
  payload: string
}

export const setBooksAction = (data: IBook[]) => {
  return {
    type: booksTypes.SET_BOOKS,
    payload: data,
  }
}

export const setSortBooksActionByAplhabet = (order: string) => {
  return{
    type: booksTypes.FILTER_BY_ORDER,
    payload: order,
  }
}
export const filterByAuthorAction = (payload: string): FilterAction => {
  return {
    type: booksTypes.FILTER_BY_AUTHOR,
    payload,
  }
}

export const filterByCategoryAction = (payload: string): FilterAction => {
  return {
    type: booksTypes.FILTER_BY_CATEGORY,
    payload,
  }
}