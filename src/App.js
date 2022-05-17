import React from 'react'
import { Clock, Weather } from './Clock'
import {Navbar} from './Navbar'



const App = () => {
  return (
    <div>

    <Navbar/>
    <Weather/>
    <Clock/>
    

    </div>
  )
}

export default App