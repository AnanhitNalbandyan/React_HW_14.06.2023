import style from './style.module.css'


export const EmployeeCard = ({imagePath, name, position})=>{

    return(
        <div className={style.employeeCardContainer}>
            <img className={style.employeeImg} 
                src={imagePath} alt={name} />
            <div className={style.positionContainer}>
                <p className={style.employeeName}>{name}</p>
                <p className={style.employePosition}>{position}</p>
            </div>
        </div>
    )
}