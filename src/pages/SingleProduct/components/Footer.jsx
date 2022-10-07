import ebayLogo from '../../../assets/images/ebay.png'
import paymentLogo from '../../../assets/images/Payment.png'
import style from './footer.module.css'

const Footer = () => {
  return (
    <footer className={style.footerContainer}>
        <div className={style.hr}></div>
        <div className={style.nav}>
            <div>
                <a href="#top">
                    <img src={ebayLogo} alt="" />
                </a>
            </div>
            <div className={style.navItems}>
                <h2>Account</h2>
                <div>
                    <a href="#">Wishlist</a>
                    <a href="#">Cart</a>
                    <a href="#">Track Order</a>
                    <a href="#">Shipping Details</a>
                </div>
            </div>
            <div className={style.navItems}>
                <h2>Useful links</h2>
                <div>
                    <a href="#">About us</a>
                    <a href="#">Contact</a>
                    <a href="#">Hot deals</a>
                    <a href="#">Promotions</a>
                    <a href="#">New products</a>
                </div>
            </div>
            <div className={style.navItems}>
                <h2>Help Center</h2>
                <div>
                    <a href="#">Payments</a>
                    <a href="#">Refund</a>
                    <a href="#">Checkout</a>
                    <a href="#">Shipping</a>
                    <a href="#">Q&A</a>
                    <a href="#">Privacy Policy</a>
                </div>
            </div>
        </div>

        <div className={style.payment}>
            <p>© 2022, All rights reserved</p>
            <img src={paymentLogo} alt="" />
        </div>
    </footer>
  )
}

export default Footer