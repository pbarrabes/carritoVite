
import './App.css'
import { useEffect, useState } from 'react';
import ArticulosDisponibles from './componentes/ArticulosDisponibles/ArticulosDisponibles'; 
import Cesta from './componentes/Cesta/Cesta';
import BarraBusqueda from './componentes/BarraBusqueda/BarraBusqueda';
import {URL_SERVER} from '../src/constantes.js'

function App() {
  console.log('App renderizada');
/*   const  articulosIniciales= [
    { "id": 1, "nombre": "Laptop", "precio": 800, "unidades": 10 },
    { "id": 2, "nombre": "Teclado", "precio": 50, "unidades": 50 },
    { "id": 3, "nombre": "Mouse", "precio": 20, "unidades": 30 },
    { "id": 4, "nombre": "Monitor", "precio": 200, "unidades": 15 },
    { "id": 5, "nombre": "Disco Duro", "precio": 100, "unidades": 25 },
    { "id": 6, "nombre": "Memoria RAM", "precio": 80, "unidades": 40 },
    { "id": 7, "nombre": "Impresora", "precio": 150, "unidades": 12 },
    { "id": 8, "nombre": "Router", "precio": 60, "unidades": 20 },
    { "id": 9, "nombre": "Tarjeta Gráfica", "precio": 250, "unidades": 8 },
    { "id": 10, "nombre": "Cámara Web", "precio": 30, "unidades": 18 },
    { "id": 11, "nombre": "Altavoces", "precio": 40, "unidades": 22 },
    { "id": 12, "nombre": "Micrófono", "precio": 25, "unidades": 35 },
    { "id": 13, "nombre": "Software", "precio": 120, "unidades": 15 },
    { "id": 14, "nombre": "Cable HDMI", "precio": 10, "unidades": 60 },
    { "id": 15, "nombre": "Fuente de Poder", "precio": 45, "unidades": 25 },
    { "id": 16, "nombre": "Tarjeta Madre", "precio": 180, "unidades": 10 },
    { "id": 17, "nombre": "Tablet", "precio": 150, "unidades": 18 },
    { "id": 18, "nombre": "Batería Portátil", "precio": 35, "unidades": 30 },
    { "id": 19, "nombre": "Auriculares", "precio": 55, "unidades": 28 },
    { "id": 20, "nombre": "Silla Gaming", "precio": 120, "unidades": 15 }
  ]; */

  const [articulosDisponibles, setArticulosDisponibles] = useState([]);
  const [articulosCesta, setArticulosCesta] = useState([]);
  const [filter,setFilter]=useState('')
  useEffect(()=>{
    fetch(URL_SERVER+"articulos?nombre_like="+filter+"&unidades_gt=0&_sort=nombre&_order=asc")
    .then(response => response.json())
    .then(data => setArticulosDisponibles(data))
    .catch(error => console.error('Error:', error))
    return () => { 
      //Aqui iria la funcion de limpieza del efecto
    }
  },[articulosCesta,filter])
  return (
    <>
        <Cesta articulosCesta={articulosCesta} setArticulosCesta={setArticulosCesta}/>
        <BarraBusqueda  filter={filter} setFilter={setFilter}/>
        <ArticulosDisponibles 
          articulosDisponibles={articulosDisponibles} 
          setArticulosCesta={setArticulosCesta} 
          setArticulosDisponibles={setArticulosDisponibles}/>
    </>
  )
}

export default App
