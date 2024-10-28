import React, { useEffect, useState } from 'react'
import bdLicencias from '../../api/bdLicencias';
import AdministradoTable from './AdministradoTable';
import AdministradoForm from './AdministradoForm';
import withReactContent from 'sweetalert2-react-content';
import { Button, Col, Input, Label, Row } from 'reactstrap'
import { useForm } from "react-hook-form";
import Swal from 'sweetalert2';


const MySwal = withReactContent(Swal);
const URL = '/v1/administrado'
const Administrado = () => {



  const [data, setData] = useState()
  const token = localStorage.getItem("token");
  const rol = localStorage.getItem("rol");
  const [search, setSearch] = useState();
  const [filter, setFilter] = useState();
  const [modal, setModal] = useState(false);
  const [actualizacion, setActualizacion] = useState(false);
  const { handleSubmit, register, reset, formState: { errors } } = useForm();
  const [refresh, setRefresh] = useState(false);
  const defaultValuesForm = {
    nombreadministrado: "",
    apellidoadministrado: "",
    numero: "",
    dni: "",
    ruc: "",
    gmail: "",
  };

  const getAuthHeaders = () => ({
    headers: {
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
      .catch((err) => { });
  }, [refresh]);

  useEffect(() => {
    setFilter(
      data?.filter(
        (e) =>
          e?.nombreadministrado?.toLowerCase()
            .indexOf(search?.toLowerCase()) !== -1
      )
    );
  }, [search]);

  const handleFilter = (e) => {
    setSearch(e.target.value);
  };

  //Crear ADMINISTRADO
  const creaAdministrado = (data) => {
    bdLicencias
      .post(URL, data, getAuthHeaders())
      .then((res) => {
        reset(defaultValuesForm);
        toggle.call();
        setRefresh(!refresh);
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Administrado creado",
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

  //Para Actualizar (PUT)

  const actualizarAdministrado = (id, data) => {
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

  //eliminar
  const eliminarAdministrado = (id) => {
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
              title: "Administrado Eliminada",
              showConfirmButton: false,
              timer: 1500,
            });
          })
          .catch((err) => {

            if (err.response.status == 409) {
              Swal.fire({
                position: "center",
                icon: "error",
                title: "Este administrado tiene negocios asociados",
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

  const actualizarAdministradoId = (id) => {
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
      actualizarAdministrado(data.id, data);
    } else {
      creaAdministrado(data);
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
      <AdministradoTable
        data={data}
        filter={filter}
        search={search}
        actualizarAdministradoId={actualizarAdministradoId}
        rol={rol}
        eliminarAdministrado={eliminarAdministrado}
      />
      <AdministradoForm
        toggle={toggle}
        modal={modal}
        handleSubmit={handleSubmit}
        submit={submit}
        register={register}
        reset={reset}
        getAuthHeaders={getAuthHeaders}
        errors={errors}
      />
    </>
  )
}

export default Administrado