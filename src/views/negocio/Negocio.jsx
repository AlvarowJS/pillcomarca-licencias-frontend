import React, { useEffect, useState } from 'react'
import bdLicencias from '../../api/bdLicencias';
import NegocioTable from './NegocioTable';
import { Button, Col, Input, Label, Row } from 'reactstrap'
import { useForm } from "react-hook-form";
import NegocioForm from './NegocioForm';
import withReactContent from 'sweetalert2-react-content';
import Swal from 'sweetalert2';

const MySwal = withReactContent(Swal);
const URL= '/v1/negocio'
const URLSUBCATEGORIA = '/v1/subCategoria'
const URLADMINISTRADO = '/v1/administrado'
const URLACTIVIDADECONOMICA='/v1/actividad-economica'

const Negocio = () => {

  const [data, setData] = useState()
  const [dataAdministrado, setDataAdministrado] = useState();
  const [dataSubCategoria,setDataSubCategoria] = useState();
  const [dataActividadEconomica, setDataActividadEconomica] = useState();
  const token = localStorage.getItem("token");
  const rol = localStorage.getItem("rol");
  const [search, setSearch] = useState();
  const [filter, setFilter] = useState();
  const [modal, setModal] = useState(false);
  const [actualizacion, setActualizacion] = useState(false);
  const { handleSubmit, register, reset, formState: { errors } } = useForm();
  const [refresh,setRefresh] = useState(false);
  const [imagen, setImagen] = useState();

  const defaultValuesForm = {
    nombrenegocio: "",
    ruc: "",
    direccion: "",
    metroscuadrados: "",
    monto: "",
    nLicencia: "",
    nExpediente: "",
    fecha: "",
    lugar: "",
    manzana:"",
    lote:"",
    razonsocial:"",
    imagen:"",
    redsocial:"",
    subcategoria_id: "",
    administrado_id: "",
    actividad_economica_id:"",
  };
  const getAuthHeaders = () => ({
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
    .then((res)=>{
        setData(res.data)
      })
      .catch((err) => {});
  }, [refresh]);

  useEffect(() => {
    bdLicencias
    .get(URLSUBCATEGORIA, getAuthHeaders())
    .then((res) => {
        setDataSubCategoria(res.data)
      })
      .catch((err) => {});
    
  }, [refresh]);
  
  useEffect(() => {
    bdLicencias
    .get(URLADMINISTRADO, getAuthHeaders())
    .then((res) => {
        setDataAdministrado(res.data)
        console.log(res.data)
      })
      .catch((err) => {
        console.log(err)
      });
    
  }, [refresh]);

  useEffect(() => {
    bdLicencias
    .get(URLACTIVIDADECONOMICA, getAuthHeaders())
    .then((res) => {
        setDataActividadEconomica(res.data)
        console.log(res.data)
      })
      .catch((err) => {
        console.log(err)
      });
    
  }, [refresh]);
  
  useEffect(() => {
    setFilter(
      data?.filter(
        (e) =>
          e?.nombrenegocio?.toLowerCase() 
            .indexOf(search?.toLowerCase())!== -1
      )
    );
  }, [search]);

  const handleFilter = (e) => {
    setSearch(e.target.value);
  };

  const exportarExcel = (id) =>{
    window.open(`http://127.0.0.1:8000/api/v1/exportar-excel/${id}`, '_blank')

  }

  //crear Negocios
  const creaNegocio = (data) => {
    const f = new FormData()
    f.append('nombrenegocio', data.nombrenegocio)
    f.append('ruc',data.ruc)
    f.append('direccion', data.direccion)
    f.append('metroscuadrados', data.metroscuadrados)
    f.append('monto', data.monto)
    f.append('nLicencia', data.nLicencia)
    f.append('nExpediente', data.nExpediente)
    f.append('fecha', data.fecha)
    f.append('lugar', data.lugar)
    f.append('manzana' , data.manzana)
    f.append('lote', data.lote)
    f.append('razonsocial', data.razonsocial)
    f.append('imagen', imagen)
    f.append('redsocial', data.redsocial)
    f.append('publico', data.publico)
    f.append('subcategoria_id', data.subcategoria_id)
    f.append('administrado_id', data.administrado_id)
    f.append('actividad_economica_id', data.actividad_economica_id)
    bdLicencias
      .post(URL, f, getAuthHeaders())
      .then((res) => {
        reset(defaultValuesForm);
        toggle.call();
        setRefresh(!refresh);
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Negocio creado",
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

  //actualizar negocio

  const actualizarNegocio = (id, data) => {
    const f = new FormData()
    f.append('id', id)
    f.append('nombrenegocio', data.nombrenegocio)
    f.append('ruc',data.ruc)
    f.append('direccion', data.direccion)
    f.append('metroscuadrados', data.metroscuadrados)
    f.append('monto', data.monto)
    f.append('nLicencia', data.nLicencia)
    f.append('nExpediente', data.nExpediente)
    f.append('fecha', data.fecha)
    f.append('lugar', data.lugar)
    f.append('manzana' , data.manzana)
    f.append('lote', data.lote)
    f.append('razonsocial', data.razonsocial)
    f.append('imagen', imagen)
    f.append('redsocial', data.redsocial)
    f.append('publico', data.publico)
    f.append('subcategoria_id', data.subcategoria_id)
    f.append('administrado_id', data.administrado_id)
    f.append('actividad_economica_id', data.actividad_economica_id)
    bdLicencias
      .put(`${URL}/${id}`, f, getAuthHeaders())
      .then((res) => {
        reset(defaultValuesForm);
        toggle.call();
        setRefresh(!refresh);
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Negocio Actualizado",
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

// Eliminar Negocio

  const eliminarNegocio = (id) => {
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
              title: "Negocio Eliminado",
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
      }
    });
  };

  // Tomara los datos que tiene un registro
  const actualizarNegocioId = (id) => {
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
      actualizarNegocio(data.id, data);
    } else {
      creaNegocio(data);
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
            placeholder="buscar por nombre"
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
      <NegocioTable
        data={data}
        filter={filter}
        search={search}
        actualizarNegocioId={actualizarNegocioId}
        rol={rol}
        eliminarNegocio={eliminarNegocio}
        exportarExcel = {exportarExcel}
      />
      <NegocioForm
        toggle={toggle}
        modal={modal}
        handleSubmit={handleSubmit}
        submit={submit}
        register={register}
        reset={reset}
        getAuthHeaders={getAuthHeaders}
        errors={errors}
        dataSubCategoria={dataSubCategoria}
        dataAdministrado={dataAdministrado}
        dataActividadEconomica={dataActividadEconomica}
        setImagen={setImagen}
      />

    </>
  )
}

export default Negocio 