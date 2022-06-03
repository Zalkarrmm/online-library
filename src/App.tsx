import React from 'react'
import { Link, Route, Routes } from 'react-router-dom'
import Main from './pages/Main'
import cls from './App.module.scss'
import WishList from './pages/WishList'
import AddWindow from './components/AddWindow'
const App = () => {
  React.useEffect(() => {
    if(!localStorage.getItem('books')){
      localStorage.setItem('books', JSON.stringify([]))
      window.location.reload()
    }
  })
  return (
    <div className={cls.root}>
      <header>
        <Link to="/wishlist">Wish list</Link>
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
