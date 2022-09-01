import Styles from "../styles/Footer.module.css"

function Footer() {
    return (
        <div className={Styles.footerContainer}>
            <p className={Styles.copyrightText}>Copyright © 2022 Design &  Development by <a className={Styles.linkPortfolio} target="_blank" href="https://www.jamalaartsen.com/" rel="noopener noreferrer">Jamal Aartsen</a></p>
        </div>
    )
}

export default Footer