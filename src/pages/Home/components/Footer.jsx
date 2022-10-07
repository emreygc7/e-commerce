import style from './footer.module.css'

const Footer = () => {
  return (
    <footer className={style.footerContainer}>
        <div className={style.footerElements}>
            <div className={style.footerSections}>
                <h3>Zing<span style={{color: "#F66B0E"}}>.</span></h3>
                <p>4517 Washington Ave. <br /> Manchester, Kentucky <br /> 39495</p>
            </div>
            <div className={style.footerSections}>
                <h3>Quick links</h3>
                <a href="#">Gallery</a>
                <a href="#">About us</a>
                <a href="#">Buy online</a>
            </div>
            <div className={style.footerSections}>
                <h3>Policy</h3>
                <a href="#">Terms & conditions</a>
                <a href="#">Privacy policy</a>
            </div>
            <div className={style.footerSections}>
                <h3>Social</h3>
                <a href="#">Facebook</a>
                <a href="#">Instagram</a>
                <a href="#">LinkedIN</a>
            </div>
        </div>
   
        <span>Copyright ©2022 Zing Inc. All right reserved.</span>
    </footer>
  )
}

export default Footer