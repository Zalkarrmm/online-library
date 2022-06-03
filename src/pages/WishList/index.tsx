import React from 'react'
import { Link } from 'react-router-dom'
import Book from '../../components/Book'
import { IBook } from '../../types'
import cls from './Wishlist.module.scss'
//TODO fix the ANY
const WishList = () => {
  const wishList: IBook[] = JSON.parse(localStorage.getItem('wishlist') as any)
  return (
    <div className={cls.root}>
      <Link to="/" className={cls.turnBackBtn} > {'<= '} TURN BACK</Link>
      <div className={cls.container}>
        {
          wishList.map((item: IBook) => {
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

export default WishList