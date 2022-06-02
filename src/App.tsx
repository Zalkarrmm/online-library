import React from 'react'
import { Link, Route, Routes } from 'react-router-dom'
import Main from './pages/Main'
import cls from './App.module.scss'
import WishList from './pages/WishList'
const App = () => {
  return (
    <div className={cls.root}>
      <header>
        <Link to="/wishlist">Wish list</Link>
      </header>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/wishList" element={<WishList />} />
      </Routes>
    </div>
  )
}

export default App
