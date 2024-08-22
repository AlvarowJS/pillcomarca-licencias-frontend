import React, { useEffect, useState } from 'react'
import bdLicencias from '../../api/bdLicencias';
import AdministradoTable from './AdministradoTable';
import AdministradoForm from './AdministradoForm';


const URL = '/v1/administrado'
const Administrado = () => {
  
  const [data, setData] = useState()
  const token = localStorage.getItem("token");

  const getAuthHeaders = () => ({
    headers :{
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
    <div>
      <AdministradoTable
        data={data}
      />
      <AdministradoForm/>
    </div>
  )
}

export default Administrado