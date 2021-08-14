import React from 'react'
import './Paginacao.css'


 interface Iprops {
name: string  ;
button: React.Dispatch<React.SetStateAction<string>> ;
cont: React.Dispatch<React.SetStateAction<number>> ;
atual : number
}
 

const Paginacao: React.FC<Iprops>  = ({name, button, cont , atual} ) => {

function pagina(func: string){
    button(func)
    if(func === 'proximo'){
        cont(atual + 1)
    }
    if(func === 'anterior'){
        if(atual > 1){
            cont(atual - 1)
        }
       
    }
}
    return(
        <div className = 'paginacao'>
            <button className = 'btn btn-dark' onClick ={e => pagina('anterior')}  >
                Anterior
            </button>
            <button className = 'btn btn-dark' onClick ={e => pagina('proximo')}>
                Proximo
            </button>
        </div>
    )
} 

export default Paginacao