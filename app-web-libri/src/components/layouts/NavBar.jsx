import {Outlet, Link} from 'react-router-dom'
import style from './NavBar.module.css'

const NavBar = () => {
    // console.log(<Link></Link>)
    return (
        <>
            <nav className={style.navbar}>
                <ul className={style.list}>
                    <Link to='/'><li className={style.item}><img className={style.logo} src="./book.png" alt="" /></li></Link>
                    <Link to='/'><li className={style.item}>HOME</li></Link>
                    <Link to='/listBook'><li className={style.item}>LISTAR LIVROS</li></Link>
                    <Link to='/newBook'><li className={style.item}>CADASTRA LIVROS</li></Link>
                </ul>
            </nav>
            <Outlet />
        </>
    )
}

export default NavBar