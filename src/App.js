import { useState } from 'react';
import { v4 as uuid } from 'uuid';
import './App.css';
import Header from './componentes/Header/Header';
import Formulario from './componentes/Formulario/Formulario';
import MiOrg from './componentes/MiOrg';
import Equipo from './componentes/Equipo';
import Footer from './componentes/Footer';

function App() {
  const [mostrarFormulario, actualizarMostrar] = useState(false)
  const [colaboradores, actualizarColaboradores] = useState([{ 
      id: uuid(),
      equipo: "Front End",
      foto: "https://github.com/harlandlohora.png",
      nombre: "Harland Lohora",
      puesto: "Instructor",
      fav: true
    },
    {
      id: uuid(),
      equipo: "Programación",
      foto: "https://github.com/genesysaluralatam.png",
      nombre: "Genesys Rondón",
      puesto: "Desarrolladora de software e instructora",
      fav: true
    },
    {
      id: uuid(),
      equipo: "UX y Diseño",
      foto: "https://github.com/JeanmarieAluraLatam.png",
      nombre: "Jeanmarie Quijada",
      puesto: "Instructora en Alura Latam",
      fav: true
    },
    {
      id: uuid(),
      equipo: "Programación",
      foto: "https://github.com/christianpva.png",
      nombre: "Christian Velasco",
      puesto: "Head de Alura e Instructor",
      fav: true
    },
    {
      id: uuid(),
      equipo: "Innovación y Gestión",
      foto: "https://github.com/JoseDarioGonzalezCha.png",
      nombre: "Jose Gonzalez",
      puesto: "Dev FullStack",
      fav: false 
  }])

  const [equipos, actualizarEquipos] = useState([
      {
        id: uuid(),
        titulo: "Programación",
        colorPrimario:"#D9F7E9",
        colorSecundario: "#57C278"
      },
      {
        id: uuid(),
        titulo: "Front End",
        colorPrimario:"#E8F8FF",
        colorSecundario: "#82CFFA"
      },
      {
        id: uuid(),
        titulo: "Data Science",
        colorPrimario:"##F0F8E2",
        colorSecundario: "#A6D157"
      },
      {
        id: uuid(),
        titulo: "Devops",
        colorPrimario:"#FDE7E8",
        colorSecundario: "#E06B69"
      },
      {
        id: uuid(),
        titulo: "UX y Diseño",
        colorPrimario:"##FAE9F5",
        colorSecundario: "#DB6EBF"
      },
      {
        id: uuid(),
        titulo: "Móvil",
        colorPrimario:"#FFF5D9",
        colorSecundario: "#FFBA05"
      },
      {
        id: uuid(),
        titulo: "Innovación y Gestión",
        colorPrimario:"#FFEEDF",
        colorSecundario: "#FF8A29"
      }
  
  ])

  
  //Ternario --> condicion ? seMuestra : noSeMuestra
  // condicion && seMuestra

  const cambiarMostrar = () =>{
    actualizarMostrar(!mostrarFormulario)
  }

  //Registrar colaborador
  const registrarColaborador = (colaborador) => {
    console.log("nuevo colaborador", colaborador)

    //spread Operator
    actualizarColaboradores([...colaboradores, colaborador])
  }
  
  //Eliminar Colaboeador
  const eliminarColaborador = (id) => {
    console.log("Eliminar Colaborador", id)
    const nuevosColaboradores= colaboradores.filter((colaborador) => colaborador.id != id)
    actualizarColaboradores(nuevosColaboradores)
  }

  //Actualizar color de equipo
  const actualizarColor = (color, id) => {
    console.log("Actualizar: ", color, id)
    const equiposActulizados = equipos.map((equipo) => {
      if(equipo.id === id){
        equipo.colorSecundario = color
      }

      return equipo
    })

    actualizarEquipos(equiposActulizados)
  }

    //Crear equipo
    const crearEquipo = (nuevoEquipo) => {
      console.log(nuevoEquipo)
      actualizarEquipos([...equipos, {...nuevoEquipo, id: uuid()}])
    }

    const like = (id) => {
      console.log("like", id)
      const colaboradoresActualizados = colaboradores.map((colaborador) => {
        if(colaborador.id === id){
          colaborador.fav = !colaborador.fav
        }
        return colaborador
      })
      actualizarColaboradores(colaboradoresActualizados)
    }

  return (
    <div>
      <Header />
      {/*mostrarFormulario === true ? <Formulario /> : <></>*/}
      {
        mostrarFormulario && <Formulario 
          equipos={equipos.map((equipo) => equipo.titulo)}
          registrarColaborador={registrarColaborador}
          crearEquipo={crearEquipo} 
        />   
      }

      <MiOrg cambiarMostrar = {cambiarMostrar}/>

      {
        equipos.map((equipo) => <Equipo 
            datos={equipo} 
            key={equipo.titulo}
            colaboradores = {colaboradores.filter( colaborador => colaborador.equipo === equipo.titulo)}
            eliminarColaborador = {eliminarColaborador}
            actualizarColor = {actualizarColor}
            like={like}
          /> 
        )
      }

      <Footer />
    </div>
  );
}

export default App;
