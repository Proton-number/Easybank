import { useState } from 'react'
import './App.css'
import Top from './first-section/Top'
import Footer from './fourth-section/Footer'
import Navigation from './MobileNavigation/Navigation'
import Middle from './second-section/Middle'
import Articles from './third-section/Articles'

function App() {
  const [display, setDisplay] = useState(false)


  return (
    <div className="App">
     <Top setDisplay={setDisplay} />
     {display && <Navigation setDisplay={setDisplay} />}
     <Middle />
     <Articles />
     <Footer/>
    </div>
  )
}

export default App
