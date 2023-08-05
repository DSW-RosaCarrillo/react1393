import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Diseño de Sitios Web <br />
      Fase 5</h1>
      <div className="card">
        <h3>Integrantes</h3>
        <h5>Rosa Carrillo</h5>
        <h5>Integrante 2</h5>
        <h5>Integrante 3</h5>

        <h6>Enlace al proyecto</h6>
        <a href="fase4.HTML">Click aquí</a>

      </div>

      <p className="read-the-docs">
        Esto es RoCa
      </p>
    </>
  )
}

export default App
