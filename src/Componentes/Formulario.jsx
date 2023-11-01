import { useState } from 'react'
import Card from './Card'

const Formulario = () => {

    const [nombre, setNombre] = useState('')
    const [alias, setAlias] = useState('')
    const [edad, setEdad] = useState()
    const [show, setShow] = useState(false)
    const [error, setError] = useState(false)

    const handleSubmit = (event) => {
        event.preventDefault()
        if(nombre.length > 3 && alias.length > 6 && nombre === nombre.trim()){
          setShow(true)
          setError(false)
        } else {
          setError(true)
        }
    }


  return (
    <div>
        {!show && 
            <form onSubmit={handleSubmit} style={{display: 'flex', flexDirection: 'column', alignItems: 'Center'}}>
                <label>Nombre</label>
                <input type="text" value={nombre} onChange={(event) => setNombre(event.target.value)}/>
                <label>Swifty alias</label>
                <input type="text" value={alias} onChange={(event) => setAlias(event.target.value)}/>
                <label>Escribe tu edad</label>
                <input type="number" value={edad} onChange={(event) => setEdad(event.target.value)}/>
                <br />
                <button>Enviar</button>
            </form>
         } 
        {show && <Card nombre={nombre} alias={alias} edad={edad}/>}
        {error && <h5 style={{color: 'red'}}>Por favor chequea que la información sea correcta</h5>}  
    </div>
  )
}

export default Formulario