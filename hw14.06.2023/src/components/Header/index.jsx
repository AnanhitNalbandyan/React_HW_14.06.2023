import style from './style.module.css'
import mamonLogo from '../imgSVG/mamon-logo.svg'
import { Button } from '../Button'

export const Header =()=>{

    return (
        <div className={style.headerComponents}>
            <div className={style.logoContainer}>
                <img className={style.logo} src={mamonLogo} alt="mamon" />
                <p className={style.title}>mamon</p>
            </div>
            <nav className={style.navContainer} >
                <ul className={style.navLists}>
                    <li className={style.link}>Services</li>
                    <li className={style.link}>Clients</li>
                    <li className={style.link}>Our team</li>
                    <li className={style.link}><Button/></li>
                </ul>
            </nav>
        </div>
    )
}