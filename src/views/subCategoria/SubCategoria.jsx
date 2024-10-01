import React, { useEffect, useState } from 'react'
import SubCategoriaForm from './SubCategoriaForm'
import bdLicencias from '../../api/bdLicencias'
import SubCategoriaTable from './SubCategoriaTable'
import { Button, Col, Input, Label, Row } from 'reactstrap'
import { useForm } from "react-hook-form";
import withReactContent from 'sweetalert2-react-content'
import Swal from 'sweetalert2'

const MySwal = withReactContent(Swal);
const URL = '/v1/subCategoria' //
const URLCATEGORIA= 'v1/categoria'
const SubCategoria = () => {

  const [data, setData] = useState()  //
  const [dataCategoria,setDataCategoria] = useState()
  const token = localStorage.getItem("token"); //
  const [search, setSearch] = useState();
  const [filter, setFilter] = useState();
  const [modal, setModal] = useState(false);
  const [actualizacion, setActualizacion] = useState(false);
  const { handleSubmit, register, reset, formState: { errors } } = useForm();
  const [refresh, setRefresh] = useState(false);
  const defaultValuesForm = {
    rubro: "",
    categoria_id:"",

  };

  const getAuthHeaders = () =>({
    headers:{
      Authorization: "Bearer " + token,
    },
  });

  const toggle = () => {
    setActualizacion(false);
    reset(defaultValuesForm);
    setModal(!modal);
  };

  const toggleActualizacion = () => {
    setModal(!modal);
  };


  useEffect(() => {
    bdLicencias
    .get(URL, getAuthHeaders())
    .then((res) => {
        setData(res.data)
      })
      .catch((err) => {});
    
  }, [refresh]);

  useEffect(() => {
    bdLicencias
    .get(URLCATEGORIA, getAuthHeaders())
    .then((res) => {
        setDataCategoria(res.data)
      })
      .catch((err) => {});
    
  }, [refresh]);

  useEffect(() => {
    setFilter(
      data?.filter(
        (e) =>
          e?.rubro?.toLowerCase() 
            .indexOf(search?.toLowerCase())!== -1
      )
    );
  }, [search]);
  
  const handleFilter = (e) => {
    setSearch(e.target.value);
  };
  
  //crear SubCategoria
  const creaSubCategoria = (data) => {
    bdLicencias
      .post(URL, data, getAuthHeaders())
      .then((res) => {
        reset(defaultValuesForm);
        toggle.call();
        setRefresh(!refresh);
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Sub Categoria creado",
          showConfirmButton: false,
          timer: 1500,
        });
      })
      .catch((err) => {
        console.log(err)
          Swal.fire({
            position: "center",
            icon: "error",
            title: "Contacte con soporte",
            showConfirmButton: false,
          });
        
      });
  };


  //Para actualizar (PUT)

  const actualizarSubCategoria = (id, data) => {
    bdLicencias
      .put(`${URL}/${id}`, data, getAuthHeaders())
      .then((res) => {
        reset(defaultValuesForm);
        toggle.call();
        setRefresh(!refresh);
        Swal.fire({
          position: "center",
          icon: "success",
          title: "SubCategoria Actualizado",
          showConfirmButton: false,
          timer: 1500,
        });
      })
      .catch((err) => {
        Swal.fire({
          position: "center",
          icon: "error",
          title: "Contacte con soporte",
          showConfirmButton: false,
        });
      });
  };

  const eliminarSubCategoria = (id) => {
    return MySwal.fire({
      title: "¿Estás seguro de eliminar?",
      text: "¡No podrás revertir esto!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Si",
      customClass: {
        confirmButton: "btn btn-primary",
        cancelButton: "btn btn-outline-danger ms-1",
      },
      buttonsStyling: false,
    }).then(function (result) {
      if (result.value) {
        bdLicencias
          .delete(`${URL}/${id}`, getAuthHeaders())
          .then((res) => {
            setRefresh(!refresh);
            Swal.fire({
              position: "center",
              icon: "success",
              title: "SubCategoria Eliminada",
              showConfirmButton: false,
              timer: 1500,
            });
          })
          
          .catch((err) => {

            if (err.response.status == 409) {
              Swal.fire({
                position: "center",
                icon: "error",
                title: "Esta Sub Categoria tiene negocios asociados",
                text: "Debe eliminar los negocios asociados",
                showConfirmButton: false,
              });
            }
            else {
              Swal.fire({
                position: "center",
                icon: "error",
                title: "Contacte con soporte",
                showConfirmButton: false,
              });
            }
          });
      }
    });
  };

   // Tomara los datos que tiene un registro
   const actualizarSubCategoriaId = (id) => {
    toggleActualizacion.call();
    setActualizacion(true);
    bdLicencias
      .get(`${URL}/${id}`, getAuthHeaders())
      .then((res) => {
        reset(res.data);
      })
      .catch((err) => null);
  };

  const submit = (data) => {
    if (actualizacion) {
      actualizarSubCategoria(data.id, data);
    } else {
      creaSubCategoria(data);
    }
  };



  return (
    <>
      <Row>
        <Col sm="6">
          <Label className="me-1" for="search-input">
            Buscar
          </Label>
          <Input
            className="dataTable-filter"
            type="text"
            bsSize="sm"
            id="search-input"
            placeholder="buscar por rubro"
            onChange={handleFilter}
          />
        </Col>
        <Col sm="4"></Col>

        <Col sm="2" className="mt-2">
          <Button onClick={toggle} color="primary">
            + Agregar
          </Button>
        </Col>
      </Row>
      <SubCategoriaTable
        data={data}
        filter={filter}
        search={search}
        actualizarSubCategoriaId={actualizarSubCategoriaId}
        eliminarSubCategoria={eliminarSubCategoria}
      />
      <SubCategoriaForm
        toggle={toggle}
        modal={modal}
        handleSubmit={handleSubmit}
        submit={submit}
        register={register}
        reset={reset}
        getAuthHeaders={getAuthHeaders}
        errors={errors}
        dataCategoria={dataCategoria}
      />
      
    </>
  )
}

export default SubCategoria