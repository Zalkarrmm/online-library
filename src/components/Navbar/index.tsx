import React from 'react'
// import AddBook from '../AddBook'
import cls from './Navbar.module.scss'
import { NavbarTypes } from './types'
import { useDispatch, useSelector } from 'react-redux'
import { IBook } from '../../types'
import { filterByAuthorAction, filterByCategoryAction, setBooksAction, setSortBooksActionByAplhabet } from '../../store/Books/actions'

const sortOptions: NavbarTypes.Order[] = [
  {
    id: 1,
    title: 'ASC',
    value: 'asc',
  },
  {
    id: 2,
    title: 'DESC',
    value: 'desc',
  },
]

const localBooks = JSON.parse(localStorage.getItem('books') || '{}')
//this local getting uses for categories and authors
//TODO create state of filters in store
// Find solution to fix ANY
const Navbar = ({ amount }: any) => {

  const dispatch = useDispatch()

  const booksData: IBook[] = JSON.parse(localStorage.getItem('books') || '{}')

  const [uniqueAuthors, setUniqueAuthors] = React.useState< NavbarTypes.Author[]>([])
  const [authors, setAuthors] = React.useState<null | NavbarTypes.Author[]>([])

  const [uniqueCategories, setUniqueCategories] = React.useState<NavbarTypes.Category[]>([])
  const [category, setCategory] = React.useState<null | NavbarTypes.Category[]>([])
  //get some parameters for options
  const authorsList = booksData.map(item => {
    return { author:item.author, id: item.id }
  })

  const categoriesList = booksData.map(item => {
    return { category:item.category, id: item.id }
  })

  React.useEffect(() => {
    setAuthors(authorsList)
    setCategory(categoriesList)
  }, [])

  //sort by aplhabet
  const onChangeSortingByAplhabet = (order: string ) => {
    if(!order) return dispatch(setBooksAction(localBooks))
    dispatch(setSortBooksActionByAplhabet(order))
    // console.log(order, setSortBooksActionByAplhabet)

  }
  //filter by authors
  const onChangeAuthor = (author: string) => {
    if (!author) return dispatch(setBooksAction(localBooks))
    dispatch(filterByAuthorAction(author))
  }
  // filter by categories
  const onChangeCategory = (category: string) => {
    if (!category) return dispatch(setBooksAction(localBooks))
    dispatch(filterByCategoryAction(category))
  }

  React.useEffect(() => {
    if (category) {
      setUniqueCategories(Array.from(new Map(category.map(item => [item['category'], item])).values()))
    }

    if (authors) {
      setUniqueAuthors(Array.from(new Map(authors.map(item => [item['author'], item])).values()))
    }
  }, [authors, category])

  return (
    <nav className={cls.root}>
      <div>
        <select onChange={(e) => onChangeSortingByAplhabet(e.target.value)} >
          <option defaultChecked value="">Choose order</option>
          {
            sortOptions.map(option => (
              <option key={option.id} value={option.value}>{option.title}</option>
            ))
          }
        </select>
      </div>

      <div>
        <select onChange={(e) => onChangeAuthor(e.target.value)}>
          <option defaultChecked value="">Choose author</option>
          {uniqueAuthors.map(item => {
            return <option key={item.id} value={item.author}  >{item.author}</option>
          })}
        </select>
      </div>

      <div>
        <select onChange={(e) => onChangeCategory(e.target.value)}>
          <option defaultChecked value="">Choose category</option>
          { uniqueCategories.map(item => {
            return (
              <option key={item.id} value={item.category}>{item.category}</option>
            )
          })}
        </select>
      </div>

      <div>
        <p>Books amount: {amount}</p>
      </div>

      {/* <AddBook /> */}
    </nav>
  )
}

export default Navbar
