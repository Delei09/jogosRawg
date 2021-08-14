import React from 'react'
import {Switch, Route} from 'react-router-dom'
import Home from './Home'
import Info from './Info'

const Rotas: React.FC = () =>{
    return(
      
        <Switch>
           
            <Route path = '/info'>
                <Info />
            </Route>
            <Route exact path = '/'>
                <Home />
            </Route>
        </Switch>
        
    )
}

export default Rotas