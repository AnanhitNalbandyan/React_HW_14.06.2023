import style from './style.module.css'

export const ServiceComponent = ({image, title, description})=>{

    return(
        <>
    <div className={style.componentContainer}>
        <img className={style.img} src={image} />
        <div className={style.aboutContainer}>
            <p className={style.serviceTitle}>{title}</p>
            <p className={style.description}>{description}</p>
        </div>
    </div>
    </>
    )
}