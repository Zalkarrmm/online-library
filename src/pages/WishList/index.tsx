import React from 'react'
import { Link } from 'react-router-dom'
import cls from './Wishlist.module.scss'
const WishList = () => {
  return (
    <div>
      <Link to="/" className={cls.turnBackBtn} > {'<= '} TURN BACK</Link>
      wish list
    </div>
  )
}

export default WishList