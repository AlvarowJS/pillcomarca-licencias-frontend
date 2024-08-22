import React, { useEffect, useState } from 'react'
import bdLicencias from '../../api/bdLicencias';
import CategoriaTable from './CategoriaTable';
import CategoriaForm from './CategoriaForm';


const URL = '/v1/categoria'

const Categoria = () => {

  const [data, setData] = useState()
  const token = localStorage.getItem("token");

  const getAuthHeaders = () => ({
    headers: {
      Authorization: "Bearer " + token,
    },
  });


  useEffect(() => {

    bdLicencias.get(URL,getAuthHeaders())
    .then(
      res => {
        setData(res.data)
      }
    )
  }, [])
  

  return (
    <div>
      <CategoriaTable
        data={data}
      />
      <CategoriaForm/>
    </div>
  )
}

export default Categoria