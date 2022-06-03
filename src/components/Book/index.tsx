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


  //Adding to wishlist
  const onAddToWishList = (book: any)  => {
    const wishList: IBook[] = JSON.parse(localStorage.getItem('wishlist') as any)
    localStorage.setItem('wishlist' , JSON.stringify([
      ...wishList,
      book,
    ]))
    setIsLiked(true)
  }
  const onRemoveFromWishList = (book: any) => {
    const wishList: IBook[] = JSON.parse(localStorage.getItem('wishlist') as any)
    const filteredBooks = wishList.filter((item: any) => item.id !== book.id)
    localStorage.setItem('wishlist' , JSON.stringify(
      filteredBooks,
    ))
    setIsLiked(false)
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
  //TODO fix the ANY
  const onChangeStars = () => {
    console.log(book)
  }
  const starRating = {
    size: 25,
    count: 5,
    isHalf: false,
    value: stars,
    color: 'grey',
    activeColor: 'gold',
    onChange: onChangeStars,
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
            ? <button className={cls.removeBtn} onClick={() => onRemoveFromWishList(book)} >Remove from wish list</button>
            : <button className={cls.addBtn} onClick={() => onAddToWishList(book)}>Add to wish list</button>
        }
      </div>
    </div>
  )
}
