import mamonLogo from '../imgSVG/mamon-logo.svg'
import Github from '../imgSVG/Github.svg'
import Behance from '../imgSVG/Behance.svg'
import LinkDin from '../imgSVG/LinkDin.svg'
import CodePen from '../imgSVG/CodePen.svg'

import style from './style.module.css'


export const Footer =()=>{

    return(
        <div className={style.footerComponents}>
            <img className={style.logo} src={mamonLogo} alt="mamon" />
        <ul className={style.socialLogos}>
            <li className={style.link}>
                <a><img src={Github} alt="" /></a>
            </li>
            <li className={style.link}>
                <a><img src={Behance} alt="" /></a>
            </li>
            <li className={style.link}>
                <a><img src={LinkDin} alt="" /></a>
            </li>
            <li className={style.link}>
                <a><img src={CodePen} alt="" /></a>
            </li>
        </ul>
        </div>
    )
}