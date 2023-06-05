import { useState } from "react"
import "./Formulario.css"
import Campo from "../Campo"
import ListaOpciones from "../ListaOpciones"
import Boton from "../Boton"

const Formulario = (props) =>{

    const [nombre,setNombre] = useState("");
    const [puesto,setPuesto] = useState("");
    const [foto,setFoto] = useState("");
    const [equipo, setEquipo] = useState("");

    const [titulo, actualizartitulo] = useState("")
    const [color, actualizarColor] = useState("")

    const{ registrarColaborador, crearEquipo} = props

    const manejarEnvio = (e) => {
        e.preventDefault()
        let datosAEnviar ={
            nombre,
            puesto,
            foto,
            equipo
        }
        
       registrarColaborador(datosAEnviar)

    }

    const manejarNuevoEquipo = (e) => {
        e.preventDefault()
        crearEquipo({ titulo, colorSecundario: color })
    }

    return <section className="formulario">
        <form onSubmit={manejarEnvio}>
            <h2>Rellena el Formulario para crear el colaborador.</h2>
            <Campo 
            titulo = "Nombre" 
            placeholder="Ingresar nombre" 
            required 
            valor={nombre} 
            setValor={setNombre}
            />
            <Campo 
            titulo = "Puesto" 
            placeholder="Ingresar Puesta" 
            required
            valor={puesto} 
            setValor={setPuesto} 
            />
            <Campo 
            titulo = "Foto" 
            placeholder="Ingresar enlace de foto" 
            required
            valor={foto} 
            setValor={setFoto}
            />
            <ListaOpciones 
            valor = {equipo} 
            setEquipo = {setEquipo}
            equipos={props.equipos}
            />
            
            <Boton>
                Crear
            </Boton>
        </form>
        <form onSubmit={manejarNuevoEquipo}>
            <h2>Rellena el Formulario para crear el equipo.</h2>
            <Campo 
            titulo = "Titulo" 
            placeholder="Ingresar titulo..." 
            required 
            valor={titulo} 
            setValor={actualizartitulo}
            />
            <Campo 
            titulo = "Puesto" 
            placeholder="Ingresar el color en Hex" 
            required
            valor={color} 
            setValor={actualizarColor}
            type = "color"
            />
             <Boton>Registrar Equipo</Boton>
        </form>
    </section>
}
export default Formulario