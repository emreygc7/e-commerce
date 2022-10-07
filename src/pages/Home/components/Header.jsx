import { MdOutlineKeyboardArrowDown } from 'react-icons/md'
import style from './header.module.css'


const Header = () => {
  return (
    <header className={style.header}>
        <h1><a href="#home">Zing</a><span style={{color: "#F66B0E"}}>.</span></h1>
        <nav>
            <ul className={style.headerList}>
                <li><a href="#home">Home</a></li>
                <li><a href="#about">About us</a></li>
                <li><a href="#products">Products <MdOutlineKeyboardArrowDown /></a></li>
                <li><a href="#testimonial">Testimonial</a></li>
            </ul>
        </nav>
        <div className={style.navBarRight}>
            <a href="#contact">Contact</a>
            <a href="#" className={style.btnBuyOnline}>Buy online</a>
        </div>
    </header>
  )
}

export default Header