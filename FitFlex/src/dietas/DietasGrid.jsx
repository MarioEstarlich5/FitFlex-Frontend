import React, { useContext, useState, useEffect, useCallback } from 'react'
import { UserContext } from "../userContext";
import { DietaGrid } from './DietaGrid';
import { useDispatch, useSelector } from 'react-redux';
import { getDietas } from '../slices/dietas/thunks';
import Row from 'react-bootstrap/Row';

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
          <img className='w-75 mt-5 mb-5' src="./public/Cabecera-dietas.png"></img>
          <Row xs={1} md={3} className="g-4 d-flex justify-content-center">
            {dietas.map((dieta) => (
              (<DietaGrid key={dieta.id} dieta={dieta} />)
            ))}
          </Row>

        </div>
        :
        <div className='margen'><img width="100 vh" src="../public/loading-buffering.gif"/></div>
      }

    </>
  )
}