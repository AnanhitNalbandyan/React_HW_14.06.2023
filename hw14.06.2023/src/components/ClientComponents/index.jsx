import style from './style.module.css'

export const ClientComponents = ({ image})=>{

    return(
        <div className={style.clientContainer}>
            <a><img className={style.image} src={image}/></a>
        
        </div>
    )
}