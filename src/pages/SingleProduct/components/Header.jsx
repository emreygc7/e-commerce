// Assets
import ebayLogo from '../../../assets/images/ebay.png'
import userPhoto from '../../../assets/images/user.png'
import {CgHeart, CgShoppingCart} from 'react-icons/cg'
import { MdOutlineKeyboardArrowDown } from 'react-icons/md'
import { BsGrid } from 'react-icons/bs'
import style from './header.module.css'
//Components
import SearchBar from '../../../components/SearchBar'
import { useProduct } from '../../../context/ProductContext'
import { Link } from 'react-router-dom'

const Header = () => {

    const { cart, totalPrice } = useProduct()

  return (
    <header className={style.headerContainer}>
        <a href="#top">
            <img src={ebayLogo} alt="" />
        </a>
        <SearchBar />
        <div className={style.wishlist}>
            <CgHeart size={28} />
            <span>Wishlist</span>
            <p>0</p>
        </div>
        <Link className={style.myCart} to={"/basket"}>
            <CgShoppingCart size={28}/>
            <div>
                <span>My cart</span>
                <span style={{color:"#0064D2"}}>${totalPrice}</span>
            </div>
            <p data-testid="cartlength">{cart.length}</p>
        </Link>
        <div className={style.profile}>
            <img src={userPhoto} alt="" />
            <MdOutlineKeyboardArrowDown size={18} />
        </div>
        <button className={style.browseBtn}><BsGrid/> Browse all categories</button>
    </header>
  )
}

export default Header