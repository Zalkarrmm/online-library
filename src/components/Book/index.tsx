import React from 'react'
// @ts-ignore
import ReactStars from 'react-rating-stars-component'
import { IBook } from '../../types'
import cls from './Book.module.scss'
interface Props {
  book: IBook
}

export default function Book({ book }: Props) {
  const [isLiked, setIsLiked] = React.useState<boolean | null>(null)
  React.useEffect(() => {
    localStorage.setItem('wishlist', JSON.stringify([]))
    const wishList = JSON.parse(localStorage.getItem('wishList') as any)
    if (wishList) {
      wishList.forEach((wishBook: IBook) => {
        if (wishBook.id === book.id) {
          setIsLiked(true)
        } else {
          setIsLiked(false)
        }
      })
    }

  }, [book.id])
  const onAddToWishList = (book: IBook) => {
    console.log(book)
  }

  const {
    id,
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
    <div className={cls.card} key={id}>
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
          isLiked
            ? <button>Remove from wish list</button>
            : <button onClick={() => onAddToWishList(book)}>Add to wish list</button>
        }


      </div>
    </div>
  )
}
