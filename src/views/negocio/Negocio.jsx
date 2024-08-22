import React, { useEffect, useState } from 'react'
import bdLicencias from '../../api/bdLicencias';
import NegocioTable from './NegocioTable';
import NegocioForm from './NegocioForm';


const URL= '/v1/negocio'

const Negocio = () => {

  const [data, setData] = useState()
  const token = localStorage.getItem("token");

  const getAuthHeaders = () => ({
    headers:{
      Authorization: "Bearer " + token,
    },
  });

  useEffect(() => {
    
    bdLicencias.get(URL, getAuthHeaders())
    .then(
      res => {
        setData(res.data)
      }
    )
  }, [])
  


  return (
    <>
      <NegocioTable
        data={data}
      />
      <NegocioForm/>

    </>
  )
}

export default Negocio 