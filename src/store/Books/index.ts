import { IBook } from '../../types'
import { booksTypes } from './types'

export type FilterBy = 'order' | 'author' | 'category' | null

const initState: any = {
  books: null,
}

const books = JSON.parse(localStorage.getItem('books') || '{}')

// functions
// TODO create file for fucntions or do it more simple
// TODO create some intarfaces for ANY

function sortBooksByAbc( books: any, initialBooks: any,sort: any) {
  if (sort === 'asc') return books.sort(compareByAlp)
  if (sort === 'desc') return books.sort(compareByAlp).reverse()
  return initialBooks
}

function compareByAlp(a: IBook, b: IBook) {
  if (a.name > b.name) return 1
  if (a.name < b.name) return -1
  return 0
}


const BooksReducer = (state = initState, action: any) => {
  switch(action.type) {
    case booksTypes.SET_BOOKS:
      return {
        ...state,
        books: action.payload,
      }
    case booksTypes.FILTER_BY_AUTHOR:
      return {
        ...state,
        books: books.filter((book: any) => book.author === action.payload),
      }
    case booksTypes.FILTER_BY_CATEGORY:
      return {
        ...state,
        books: books.filter((book: any) => book.category === action.payload),
      }
    case booksTypes.FILTER_BY_ORDER:
      return {
        ...state,
        books:sortBooksByAbc([...state.books],state ,action.payload) ,
      }
    default:
      return state
  }
}

export default BooksReducer