import React from 'react'
// @ts-ignore
import ReactStars from 'react-rating-stars-component'
import { IBook } from '../../types'
import cls from './Book.module.scss'
interface Props {
  book: IBook
}

export default function Book({ book }: Props) {

  React.useEffect(() => {
    if(!localStorage.getItem('wishlist')){
      localStorage.setItem('wishlist', JSON.stringify([]))
    }
  })

  const [isLiked, setIsLiked] = React.useState<boolean>(false)

  React.useEffect(() => {
    const wishList: IBook[] = JSON.parse(localStorage.getItem('wishlist') as any)
    wishList.map((item: IBook) => {
      if (item.id === book.id) {
        setIsLiked(true)
      }
    })

  }, [book.id])

  const onAddToWishList = (book: any)  => {
    const wishList: IBook[] = JSON.parse(localStorage.getItem('wishlist') as any)
    localStorage.setItem('wishlist' , JSON.stringify([
      ...wishList,
      book,
    ]))
    setIsLiked(true)
  }

  const {
    name,
    image,
    cost,
    description,
    stars ,
    author,
    category,
  } = book

  const starRating = {
    size: 25,
    count: 5,
    isHalf: false,
    value: stars,
    color: 'grey',
    activeColor: 'gold',
  }

  return (
    <div className={cls.card}>
      <div className={cls.heartbox}></div>

      <div className={cls.cardBody}>
        <img src={image}  alt="book" />
        <ReactStars {...starRating} />
      </div>

      <div className={cls.cardFooter}>

        <div className={cls.topFooter}>

          <div>
            <p className={cls.bookName}>name: <b>{name}</b></p>
            <p>genre:<span className={cls.category}>{category}</span></p>
          </div>

          <div>
            <p>author:{author}</p>
            <p>price:{cost}</p>

          </div>

        </div>

        <p className={cls.description}>{description}</p>

        {
          isLiked === true
            ? <button className={cls.removeBtn}>Remove from wish list</button>
            : <button className={cls.addBtn} onClick={() => onAddToWishList(book)}>Add to wish list</button>
        }


      </div>
    </div>
  )
}
