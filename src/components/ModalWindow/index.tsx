import React, { useState } from 'react'
import cls from './ModalWindow.module.scss'
import { setModalClose } from '../../store/App/actions'
import { useDispatch } from 'react-redux'
// import { IBook } from '../../types'
const ModalWindow = () => {
  const dispatch = useDispatch()
  // const [bookInputs, setBookInputs] = useState<IBook[]>([])
  const [nameValue, setNameValue] = useState<string>('')
  const [authorValue, setAuthorValue] = useState<string>('')
  const [imageValue, setImageValue] = useState<string>('')
  const [genreValue, setGenreValue] = useState<string>('')
  const [priceValue, setPriveValue] = useState<string>('')
  const [descriptionValue, setDecrioptionValue] = useState<string>('')


  const closeModalWindow = () => {
    dispatch(setModalClose())
  }
  const onChangeBooksNameInput = (e: any) => {
    setNameValue(e.target.value)

  }
  const onChangeBooksAuthorInput = (e: any) => {
    setAuthorValue(e.target.value)

  }
  const onChangeBooksImageUrlInput = (e: any) => {
    setImageValue(e.target.value)

  }
  const onChangeBooksGenreInput = (e: any) => {
    setGenreValue(e.target.value)

  }
  const onChangeBooksPriceInput = (e: any) => {
    setPriveValue(e.target.value)

  }
  const onChangeBooksDescriptionInput = (e: any) => {
    setDecrioptionValue(e.target.value)

  }
  const onclickSubmit = () =>{
    closeModalWindow()
  }
  return (
    <div className={cls.root}>
      <button   onClick={closeModalWindow} className={cls.removeBtn} ><img src="/icons/remove.png" alt="delete" /></button>
      <input value={nameValue} onChange={onChangeBooksNameInput} type="text" placeholder="Enter book name" />
      <input value={authorValue} onChange={onChangeBooksAuthorInput} type="text" placeholder="Enter book author" />
      <input value={imageValue} onChange={onChangeBooksImageUrlInput} type="text" placeholder="Enter book image url" />
      <input value={genreValue} onChange={onChangeBooksGenreInput} type="text" placeholder="Enter book genre" />
      <input value={priceValue} onChange={onChangeBooksPriceInput} type="text" placeholder="Enter book price" />
      <textarea
        value={descriptionValue}
        onChange={onChangeBooksDescriptionInput}
        className={cls.bookDescription}
        name=""
        id=""
        placeholder="Enter book description"
      ></textarea>
      <button onClick={onclickSubmit} className={cls.submitBtn}>Submit</button>
    </div>
  )
}

export default ModalWindow