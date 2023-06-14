import aboutService from '../about.json'
import style from './style.module.css'
import { ServiceComponent } from '../ServiceComponent'

export const ServicesComponents = ()=>{

    return (
        <div className={style.componentsContainer}>

            {
                aboutService.map((el)=>
                <ServiceComponent key={el.id} {...el}/>
                )
            }

        </div>
    )
}