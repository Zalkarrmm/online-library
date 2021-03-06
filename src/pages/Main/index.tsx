import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Book from '../../components/Book'
import Navbar from '../../components/Navbar'
import { RootState } from '../../store'
import { setBooksAction } from '../../store/Books/actions'
import { IBook } from '../../types'
import cls from './Main.module.scss'



const Main = () => {
  const dispatch = useDispatch()
  const { books } = useSelector((s: RootState) => s.Books)
  const [amount, setAmount] = React.useState<number>(0)

  React.useEffect(() => {
    const booksData: IBook[] = JSON.parse(localStorage.getItem('books') || '{}')
    dispatch(setBooksAction(booksData))
  }, [dispatch])

  React.useEffect(() => {
    if(books){
      setAmount(books.length)
    }
  }, [books])

  if (!books) return <h1>Loading...</h1>


  return (
    <div className={cls.root}>
      <Navbar amount={amount}  />

      {
        !books.length && <h1 className={cls.emptyText}>Library is empty</h1>
      }

      <div className={cls.container}>
        {
          books.map((item: IBook) => {
            return  (
              <Book
                book={item}
                key={item.id}
              />)
          } )
        }
      </div>
    </div>
  )
}

export default Main
