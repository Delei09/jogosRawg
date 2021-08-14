import React from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'


interface Iprops {
    name?: string;
    }


 let nameJogo: String = '' ;
let  fotoJogo: String = ''
let  categoriasJogo : [String] = ['']
let  plataformasJogo : [String]  = ['']
let  desenvolvedorJogo : String = ''


    export function resposta (nome : String, foto : String ,data : String, categoria : [String], plataforma : [String], desenvolvedor : String){
         nameJogo = nome ;
          fotoJogo = foto
          categoriasJogo  = categoria
          plataformasJogo  = plataforma
          desenvolvedorJogo  = desenvolvedor
          console.log(plataformasJogo.forEach(plat => console.log(plat))
          )}

const Info: React.FC<Iprops> = ({name}) =>{

    return(
        <>
            <Header/>
            <main>
            <div className="">
                <h5 className="">{nameJogo}</h5>
                <img src= {`${fotoJogo}`} className="card-img-top" alt="..."></img>
                <div className="card-body">
                    <a href="/" className="btn btn-primary">Voltar</a>
                </div>
                </div>
            </main>
            <Footer />
        </>
    )
}

export default Info