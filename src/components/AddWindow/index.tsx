import React, { useState } from 'react'
import cls from './AddWindow.module.scss'
import { Link, useNavigate } from 'react-router-dom'
import { IBook } from '../../types'
const AddWindow = () => {
  const [nameValue, setNameValue] = useState<string>('')
  const [authorValue, setAuthorValue] = useState<string>('')
  const [imageValue, setImageValue] = useState<string>('')
  const [genreValue, setGenreValue] = useState<string>('')
  const [priceValue, setPriveValue] = useState<string>('')
  const [descriptionValue, setDecrioptionValue] = useState<string>('')
  const navigate = useNavigate()
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
  // nameValue, authorValue,imageValue ,genreValue,descriptionValue
  const onClickSubmit = () =>{
    const books: IBook[] = JSON.parse(localStorage.getItem('books') || '{}')
    if(nameValue !== '' && authorValue !== '' && imageValue !=='' && genreValue !== '' && descriptionValue !== '' && priceValue!==''){
      localStorage.setItem('books' , JSON.stringify([
        ...books,
        {
          name: nameValue,
          author: authorValue,
          image:imageValue,
          category:genreValue,
          description: descriptionValue,
          stars: 0,
          cost: priceValue,
          id:  new Date().getTime(),
        },
      ]))
      navigate('/')
      window.location.reload()
    }
  }
  //TODO create some normal way to redirect
  return (
    <div className={cls.root}>
      <div className={cls.container}>

        <Link to="/"><button className={cls.removeBtn} ><img src="/icons/remove.png" alt="delete" /></button></Link>


        <input id="bookName" value={nameValue} onChange={onChangeBooksNameInput} type="text" placeholder="Enter book name" />
        <input id="authorName" value={authorValue} onChange={onChangeBooksAuthorInput} type="text" placeholder="Enter book author" />

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
        <button onClick={onClickSubmit}  className={cls.submitBtn}>SUBMIT</button>
      </div>
    </div>
  )
}

export default AddWindow