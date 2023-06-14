import clients from '../clients.json'
import { ClientComponents } from '../ClientComponents'
import style from './style.module.css'

export const ClientsList =()=>{

    return(
        <div className={style.clientListContainer}>
            {
                clients.map((el)=>
                <ClientComponents key={el.id} {...el}
                />)
            }
        </div>
    )
}

