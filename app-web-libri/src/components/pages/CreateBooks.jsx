import React, { useState } from 'react' 
import style from './Createbooks.module.css' 

import Input from '../form/Input'
import Select from '../form/Select' 
import Button from '../form/Button'

const Createbooks = () => { 

  const [book, setBook] = useState({}) 

  function handlerChangeBook(event) { 
    setBook({ 
      ...book, 
      [event.target.name]: event.target.value 
    }) 
    console.log(book)
  }

  return ( 
    <section className={style.create_book_container}> 
      <h1>CREATE BOOKS</h1> 

      <Input 
        type='text' 
        name='nome_livro' 
        id='nome_livro' 
        placeholder='Digite o título' 
        text='TÍTULO' 
        handlerChange={handlerChangeBook}
      /> 

      <Input 
        type='text' 
        name='autor_livro' 
        id='autor_livro' 
        placeholder='Digite o nome do autor' 
        text='AUTOR' 
        handlerChange={handlerChangeBook}
      /> 

      <Input 
        type='text' 
        name='descricao_livro' 
        id='descricao_livro' 
        placeholder='Digite uma descrição para o livro' 
        text='DESCRIÇÃO' 
        handlerChange={handlerChangeBook}
      /> 

      <Select 
        name="categoria_id" 
        text="CATEGORIA" 
      />

      <Button 
        label="CADASTRAR LIVROS" 
      />
    </section>
  ) 
} 

export default Createbooks