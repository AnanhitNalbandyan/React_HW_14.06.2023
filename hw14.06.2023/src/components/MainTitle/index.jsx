import { Button } from "../Button"
import style from './style.module.css'

export const MainTitle =()=>{

    return(
        <div className={style.mainContainer}>
            <h1>We're an independent development agency.</h1>
            <p className={style.text}>We understand the intricacies of web development inside-out. 
                That's why we build rock-solid Mobile and Web applications enriched with user-centered visual experiences.</p>
            <button className={style.button}>Contact Us</button>
        </div>
    )
}