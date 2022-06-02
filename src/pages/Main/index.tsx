import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Book from '../../components/Book'
import ModalWindow from '../../components/ModalWindow'
import Navbar from '../../components/Navbar'
import { RootState } from '../../store'
import { setBooksAction } from '../../store/Books/actions'
import { IBook } from '../../types'
import cls from './Main.module.scss'
import data from '../../data/books.json'



const Main = () => {
  const dispatch = useDispatch()
  const { books } = useSelector((s: RootState) => s.Books)
  const [amount, setAmount] = React.useState<number>(0)

  const modalState = useSelector((state: any) => state.App.modalState)

  const templateModal = () => {
    if (modalState) {
      return <ModalWindow />
    } else{
      return <></>
    }
  }
  React.useEffect(() => {
    const booksData: IBook[] = JSON.parse(localStorage.getItem('books') || '{}')
    dispatch(setBooksAction(booksData))
    localStorage.setItem('books', JSON.stringify(data))
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
      {templateModal()}

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
