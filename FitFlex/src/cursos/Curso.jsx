import React, { useContext, useEffect } from 'react'
import { Link, useLocation, useNavigate, useParams } from 'react-router-dom';
import { UserContext } from '../userContext';
import { useDispatch, useSelector } from 'react-redux';
//import { startLoadingCursos,setCurso, setCursos, setMissatge,setInscribe,setPage ,setPages,setFiltre } from '../slices/cursos/thunks';
import { getCurso, inscribeCurso } from '../slices/cursos/thunks';
import { setInscribe } from '../slices/cursos/cursoSlice';
import { SesionsList } from './sesiones/SesionsList';

export const Curso = () => {

 ;

  const dispatch = useDispatch();

  const { curso , missatge = "", isLoading=true,inscribe=false,usuarioYaInscrito } = useSelector((state) => state.curso);
  
  const filePath = curso.filepath
  console.log(filePath)
  const trimmedPath = filePath.substring(filePath.indexOf('/'))
  const urlTrimmed = "http://127.0.0.1:8000/storage/"+trimmedPath


  const { pathname } = useLocation();

  let navigate = useNavigate();

  const { id } = useParams();

  let {usuari,authToken,roles } = useContext(UserContext)
console.log(roles);
  useEffect ( ()=>{
    dispatch(getCurso( id, authToken)); 
  
  },[])
  
  return (
    <>
    { !isLoading?
    <div>
      <img className='w-100' src= {urlTrimmed} ></img>
      {curso.titulo}
      {curso.descripcion}
      {curso.modalidad}
      {curso.duracion}
      {console.log( roles)}
      {console.log(usuarioYaInscrito)}
      {!inscribe  ?
        <button className="btn btn-outline-primary btn-p" type="submit"
          onClick={(e) => {
            e.preventDefault();
            dispatch(inscribeCurso(id,authToken))
          }}>Inscribete</button>
        :
        (usuarioYaInscrito == true && roles[0] == 'usuario') ?
        (<div>Si quieres inscribirte a más cursos, hazte premium</div>)
        : 
        (<button className="btn btn-outline-primary btn-p">Inscrito</button>) 
        
    }

    </div>
    :  <div><img width="100 vh" src="../public/loading-buffering.gif"/></div>}
        { !isLoading ? (<div className='reviewContainer'><SesionsList id={curso.id}/></div>): (<div><img width="100 vh" src="../public/loading-buffering.gif"/></div>) }

    </>
  )
}
