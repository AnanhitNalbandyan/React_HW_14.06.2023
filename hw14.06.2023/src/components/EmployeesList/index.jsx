import employees from '../employees.json'
import { EmployeeCard } from '../EmployeeCard'
import style from './style.module.css'

export const EmployeesList = ()=>{

    return(
        <div className={style.employeesList}>
            {
                employees.map((el)=>
                <EmployeeCard key={el.id} {...el}/>
                )
            }
        </div>
    )
}