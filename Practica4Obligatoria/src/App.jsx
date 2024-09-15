import './App.css'
import arrayObjetos from './components/arrayObjetos/ArrayObjetos'
import Consigna from './components/consigna/Consigna'
import Formulario from './components/formulario/Formulario'
import Tarea from './components/tarea/tarea'
import {useState} from 'react'



function App() {

  const [tareas, setTareas] = useState(arrayObjetos)
  const [contadorId, setContadorId] = useState(arrayObjetos.length)

  const agregarTarea = (nuevaTarea) => {
    const objetoTarea = {
      id: contadorId + 1,
      ...nuevaTarea,
    }
    setTareas([...tareas, objetoTarea])
    setContadorId(contadorId + 1)
  }

  const borrarTarea = (tareaId) => {
    const nuevasTareas = tareas.filter((tarea) => tarea.id!== tareaId);
    setTareas(nuevasTareas)
}

const completarTarea = (tareaId) => {
  const nuevasTareas = tareas.map((tarea) =>
    tarea.id === tareaId ? { ...tarea, completada: !tarea.completada } : tarea
  )
  setTareas(nuevasTareas)
}

  return (
    <>
      <Consigna />
      <Formulario agregarTarea={agregarTarea} />
      <Tarea arrayObjetos={tareas} borrarTarea={borrarTarea} completarTarea={completarTarea} />
      
    </>
  )
}

export default App
