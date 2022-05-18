import React from 'react'
import { Clock, TemperatureInCelcius, Weather } from './Clock'
import {Navbar} from './Navbar'



const App = () => {
  return (
    <div>

    <Navbar/>
    <Weather/>
    <Clock/>
    <TemperatureInCelcius/>
    

    </div>
  )
}

export default App