import React from 'react'
import { Link, Route, Routes } from 'react-router-dom'
import Main from './pages/Main'
import cls from './App.module.scss'
import WishList from './pages/WishList'
import AddWindow from './components/AddWindow'

if (!localStorage.getItem('books')) {
  localStorage.setItem('books', JSON.stringify([]))
}else if (!localStorage.getItem('wishlist')){
  localStorage.setItem('wishlist' , JSON.stringify([]))
}
const wishListItems = JSON.parse(localStorage.getItem('wishlist') || '{}')
const App = () => {
  return (
    <div className={cls.root}>
      <header>
        <Link to="/wishlist">Wish list({wishListItems.length}) </Link>
      </header>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/wishList" element={<WishList />} />
        <Route path="/addBook"  element={<AddWindow />} />
      </Routes>
    </div>
  )
}

export default App
