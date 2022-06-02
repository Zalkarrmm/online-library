import React from 'react'
import cls from './AddBook.module.scss'
import { setModalOpen } from '../../store/App/actions'
import { useDispatch } from 'react-redux'
const AddBook = () => {
  const dispatch = useDispatch()

  const openModalWindow = () => {
    dispatch(setModalOpen())
  }


  return (
    <div className={cls.root}>
      <button onClick={openModalWindow} className={cls.addButton}> + ADD BOOK </button>
    </div>
  )
}

export default AddBook