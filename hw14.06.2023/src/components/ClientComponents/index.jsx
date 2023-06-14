import style from './style.module.css'

export const ClientComponents = ({title, image})=>{

    return(
        <div className={style.clientContainer}>
            <a><img className={style.image} src={image}/></a>
            <p className={style.title}>{title}</p>
        </div>
    )
}