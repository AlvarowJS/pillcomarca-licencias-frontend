import { data } from 'jquery';
import React from 'react'
import { Col, Modal, ModalBody, ModalHeader, Row } from 'reactstrap';




const NegocioForm = ({
  modal, toggle, handleSubmit, register, submit, toggleActualizacion, errors, dataSubCategoria, dataAdministrado, dataActividadEconomica, setImagen
}) => {
  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setImagen(file)
  }

  return (
    <Modal isOpen={modal} toggle={toggle || toggleActualizacion} size='lg'>
      <ModalHeader toggle={toggle || toggleActualizacion}>
        Registrar Negocio
      </ModalHeader>

      <ModalBody>
        <form onSubmit={handleSubmit(submit)}>
          <Row>
            <Col>
              <div className='form-group my-2'>
                <label>
                  Nombre del negocio
                </label>
                <input
                  className="form-control"
                  type="text"
                  placeholder="Ingrese el nombre"
                  {...register('nombrenegocio')}
                />
                {errors.rubro && <span>Este campo es requerido</span>}
              </div>
            </Col>
            <Col>
              <div className='form-group my-2'>
                <label>
                  RUC del negocio
                </label>
                <input
                  className="form-control"
                  type="number"
                  placeholder="RUC"
                  {...register('ruc')}
                />
                {errors.rubro && <span>Este campo es requerido</span>}
              </div>
            </Col>
            <Col>
              <div className='form-group my-2'>
                <label>
                  Direccion del negocio
                </label>
                <input
                  className="form-control"
                  type="text"
                  placeholder="Ingrese dirección"
                  {...register('direccion')}
                />
                {errors.rubro && <span>Este campo es requerido</span>}
              </div>
            </Col>
          </Row>

          <Row>
            <Col>
              <div className='form-group my-2'>
                <label>
                  Tamaño del negocio en M2
                </label>
                <input
                  className="form-control"
                  type="number"
                  placeholder="En metros cuadrados"
                  {...register('metroscuadrados')}
                />
                {errors.rubro && <span>Este campo es requerido</span>}
              </div>
            </Col>
            <Col>
              <div className='form-group my-2'>
                <label>
                  Monto a pagar del negocio
                </label>
                <input
                  className="form-control"
                  type="number"
                  placeholder="Precio en soles"
                  {...register('monto')}
                />
                {errors.rubro && <span>Este campo es requerido</span>}
              </div>
            </Col>
            <Col>
              <div className='form-group my-2'>
                <label>
                  Numero de licencia del negocio
                </label>
                <input
                  className="form-control"
                  type="number"
                  placeholder="Ingrese numero de licencia"
                  {...register('nLicencia')}
                />
                {errors.rubro && <span>Este campo es requerido</span>}
              </div>
            </Col>

          </Row>

          <Row>
            <Col>
              <div className='form-group my-2'>
                <label>
                  Numero de expediente
                </label>
                <input
                  className="form-control"
                  type="number"
                  placeholder="Ingrese número de expediente"
                  {...register('nExpediente')}
                />
                {errors.rubro && <span>Este campo es requerido</span>}
              </div>
            </Col>
            <Col>
              <div className='form-group my-2'>
                <label>
                  Lugar del negocio
                </label>
                <input
                  className="form-control"
                  type="text"
                  placeholder="Ingrese el lugar del negocio"
                  {...register('lugar')}
                />
                {errors.rubro && <span>Este campo es requerido</span>}
              </div>
            </Col>
            <Col>
              <div className='form-group my-2'>
                <label>
                  Manzana del negocio
                </label>
                <input
                  className="form-control"
                  type="text"
                  placeholder="Ingrese la manzana"
                  {...register('manzana')}
                />
                {errors.rubro && <span>Este campo es requerido</span>}
              </div>
            </Col>

          </Row>

          <Row>
            <Col>
              <div className='form-group my-2'>
                <label>
                  Lote del negocio
                </label>
                <input
                  className="form-control"
                  type="text"
                  placeholder="Ingrese el Lote"
                  {...register('lote')}
                />
                {errors.rubro && <span>Este campo es requerido</span>}
              </div>
            </Col>
            <Col>
              <div className='form-group my-2'>
                <label>
                  Fecha de negocio
                </label>
                <input
                  className="form-control"
                  type="date"
                  placeholder="Ingrese la fecha"
                  {...register('fecha')}
                />
                {errors.rubro && <span>Este campo es requerido</span>}
              </div>
            </Col>
            <Col>
              <div className='form-group my-2'>
                <label>
                  Razon social
                </label>
                <input
                  className="form-control"
                  type="text"
                  placeholder="Ingrese Razon Social"
                  {...register('razonsocial')}
                />
                {errors.rubro && <span>Este campo es requerido</span>}
              </div>
            </Col>

          </Row>
          <Row>
            <Col>
              <div className='form-group my-2'>
                <label>
                  Administrado del negocio
                </label>
                <select className="form-select" id="administrado_id" {...register("administrado_id")}>
                  {
                    dataAdministrado?.map(administrado => (
                      <option key={administrado.id} value={administrado.id}>{administrado.nombreadministrado} </option>
                    ))
                  }
                </select>
                {errors.rubro && <span>Este campo es requerido</span>}
              </div>
            </Col>
            <Col>
              <div className='form-group my-2'>
                <label>
                  Actividad economica
                </label>
                <select className="form-select" id="actividad_economica_id" {...register("actividad_economica_id")}>
                  {
                    dataActividadEconomica?.map(actividadeconomica => (
                      <option key={actividadeconomica.id} value={actividadeconomica.id}>{actividadeconomica.nombre} </option>
                    ))
                  }
                </select>
                {errors.rubro && <span>Este campo es requerido</span>}
              </div>
            </Col>
            <Col>
              <div className='form-group my-2'>
                <label>
                  Sub Categoria
                </label>
                <select className="form-select" id="subcategoria_id" {...register("subcategoria_id")}>
                  {
                    dataSubCategoria?.map(subcategoria => (
                      <option key={subcategoria.id} value={subcategoria.id}>
                        {subcategoria.rubro} - {subcategoria.categoria.nombrecategoria}
                      </option>
                    ))
                  }
                </select>
                {errors.rubro && <span>Este campo es requerido</span>}
              </div>
            </Col>
          </Row>
          <Row>
            <Col>
              <div className='form-group my-2'>
                <label>
                  Red social del negocio
                </label>
                <input
                  className="form-control"
                  type="text"
                  placeholder="Ingrese Red Social"
                  {...register('redsocial')}
                />
                {errors.rubro && <span>Este campo es requerido</span>}
              </div>
            </Col>
            <Col>
              <div className='form-group my-2'>
                <label className="form-check-label" htmlFor="publico">
                  ¿Negocio público?
                </label>
                <div className="form-check form-switch">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id="publico"
                    {...register('publico')}
                    onChange={(e) => {
                      e.target.checked ? e.target.value = 0 : e.target.value = 1;
                    }}
                  />
                  <label className="form-check-label" htmlFor="publico">
                    Activar / Desactivar
                  </label>
                </div>
                {errors.publico && <span>Este campo es requerido</span>}
              </div>
            </Col>
          </Row>
          <Row>
            <Col>
              <div className='form-group my-2'>
                <label htmlFor='IMAGEN'> Imagen del negocio </label>
                <input
                  type="file"
                  className="form-control"
                  placeholder="IMAGEN"
                  {...register('imagen')}
                  onChange={handleFileChange}
                />
                {errors.rubro && <span>Este campo es requerido</span>}
              </div>
            </Col>
          </Row>


          <button className='btn btn-info' type="submit">Guardar</button>

        </form>


      </ModalBody>

    </Modal>
  )
}

export default NegocioForm