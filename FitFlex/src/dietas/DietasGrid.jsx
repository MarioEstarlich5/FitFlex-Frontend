import React, { useContext, useState, useEffect, useCallback } from 'react'
import { UserContext } from "../userContext";
import { DietaGrid } from './DietaGrid';
import { useDispatch, useSelector } from 'react-redux';
import { getDietas } from '../slices/dietas/thunks';

export const DietasGrid = () => {
  let { usuari, authToken } = useContext(UserContext)
  const { dietas, dieta, page, isLoading = true, } = useSelector((state) => state.dieta);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getDietas(authToken))
  }, [])


  return (
    <>

      {!isLoading ?

        <div>
          <img className='w-100' src="./public/Cabecera-dietas.png"></img>
          {dietas.map((dieta) => (
            (<DietaGrid key={dieta.id} dieta={dieta} />)
          ))}

        </div>
        :
        <div>Cargando...</div>
      }

    </>
  )
}