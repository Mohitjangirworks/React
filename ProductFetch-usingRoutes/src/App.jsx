import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Product from './pages/Product'
import { BrowserRouter } from 'react-router-dom'
import AppRouters from './routes/AppRouters'

function App() {
  const [count, setCount] = useState(0)

  return (
     <BrowserRouter>
         <AppRouters/>
    </BrowserRouter>
  )
}

export default App
