import React, {useEffect, useState} from 'react'
import './Main.css'
import axios from 'axios'
import Paginacao from './Paginação'
import {Link} from 'react-router-dom'
import {resposta} from '../Paginas/Info'

interface Igames{
    name: string;
    background_image: string;
    released: string;
    categoria : [String],
    parent_platforms :[String] , 
    desenvolvedor : String
}

interface Iurl{
    urlAtual: string;
    urlProxima: string;
    urlAnterior: string;
}


const inicialUrl = {
    urlAtual: 'https://api.rawg.io/api/games?key=35ae302d253745f8a986956c73e4f47a',
    urlProxima: '',
    urlAnterior: ''
}



const Main : React.FC = () => {

    const [pagina, setPagina] = useState<string>('')
    const [games, setGames] = useState<[Igames]>()
    const [url, setUrl] = useState<Iurl>(inicialUrl)
    const [contador, setContador] = useState<number>(1)
    const carregar = 'Carregando...'

    useEffect( () => {
       
        if(!contador === false){
            if (pagina === 'proximo'){
                axios.get(`${url.urlAtual}&page=${contador}`)
                .then(resp => resp.data)
                .then(dados => {
                    setUrl({...url, urlProxima: dados.next, urlAnterior: url.urlAtual})
                    setGames(dados.results) 
                })
               }
               if (pagina === 'anterior'){
                axios.get(`${url.urlAtual}&page=${contador}`)
                .then(resp => resp.data)
                .then(dados => {
                    setUrl({...url, urlProxima: dados.next, urlAnterior: url.urlAtual})
                    setGames(dados.results) 
                })
               }
               if(pagina === ''){
                axios.get(url.urlAtual)
                .then(resp => resp.data)
                .then(dados => {
                    setUrl({...url, urlProxima: dados.next, urlAnterior: url.urlAtual})
                    setGames(dados.results) 
                    console.log(dados)
                })
               }
        }
     
       
    },[contador])

        function informacao (nome : String, foto : String ,data : String, categoria : [String], plataforma : [String], desenvolvedor : String){
        resposta(nome , foto  ,data , categoria , plataforma , desenvolvedor )
    }
    return (
        <main>
            <h2>Popular em 2020</h2>
        
            <div className = 'cardContainer'>
                {!games && carregar}
                {games && games.map( jogos  => {
                    return(
                    <Link to = 'info' key ={jogos.name} onClick = { e => informacao(jogos.name, jogos.background_image, jogos.released, jogos.categoria, jogos.parent_platforms, jogos.desenvolvedor)}>
                        <div className="card"  >
                        <img src={jogos.background_image} className="card-img-top" alt="..." />
                        <div className="card-body">
                                <h5 className="card-title">{jogos.name}</h5>
                                <p className="card-text">Data de lançamento: {jogos.released}</p>
                                <input type = 'button' value = 'Saber mais'  className="btn btn-primary"/>
                            </div>
                        </div>
                    </Link>
                    )
                })  }
            </div>
            <div>
             {games && <Paginacao atual = {contador} cont = {setContador} button = {setPagina} name = {'ola'}  />}
            </div>
           
            
        </main>
    )
}
 
export default Main