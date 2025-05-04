import React from "react"
import style from "./Home.module.css"

const Home = ()=>{
    return(
        <section className={style.home_container}>

            <h1>Bem vindo ao<span>LIBRI!</span></h1>
            <p>Sua plataforma de gestão de livros!</p>
            <img src="./book_home.jpg" alt="Imagem de um livro" title="Uma imagem de um livro"/>

        </section>
    )
}

export default Home