import React, { useEffect, useState } from 'react'
import SubCategoriaForm from './SubCategoriaForm'
import bdLicencias from '../../api/bdLicencias'
import SubCategoriaTable from './SubCategoriaTable'


const URL = '/v1/subCategoria' //
const SubCategoria = () => {

  const [data, setData] = useState()  //
  const token = localStorage.getItem("token"); //

  const getAuthHeaders = () =>({
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
      <SubCategoriaTable
        data={data}
      />
      <SubCategoriaForm/>
    </>
  )
}

export default SubCategoria