import { data } from 'jquery';
import React from 'react'
import { Col, Modal, ModalBody, ModalHeader, Row } from 'reactstrap';

const AdministradoForm = ({
  modal, toggle, handleSubmit, register, submit, toggleActualizacion, errors, dataAdministrado
}) => {
  return (
    <Modal isOpen={modal} toggle={toggle || toggleActualizacion} size='lg'>
      <ModalHeader toggle={toggle || toggleActualizacion}>
        Registrar al Administrado
      </ModalHeader>
      <ModalBody>
        <form onSubmit={handleSubmit(submit)}>
          <div className='form-group my-2'>
            <label>
              Nombre
            </label>
            <input
              className="form-control"
              type="text"
              placeholder="Nombre"
              {...register('nombreadministrado')}
            />
            {errors.rubro && <span>Este campo es requerido</span>}
          </div>

          <div className='form-group my-2'>
            <label>
              Apellido
            </label>
            <input
              className="form-control"
              type="text"
              placeholder="Apellido"
              {...register('apellidoadministrado')}
            />
            {errors.rubro && <span>Este campo es requerido</span>}
          </div>

          <div className='form-group my-2'>
            <label>
              Numero de celular
            </label>
            <input
              className="form-control"
              type="text"
              placeholder="Numero"
              {...register('numero')}
            />
            {errors.rubro && <span>Este campo es requerido</span>}
          </div>

          <Row>
            <Col>
              <div className='form-group my-2'>
                <label>
                  DNI
                </label>
                <input
                  className="form-control"
                  type="text"
                  placeholder="DNI"
                  {...register('dni')}
                />
                {errors.rubro && <span>Este campo es requerido</span>}
              </div>
            </Col>
            <Col>
              <div className='form-group my-2'>
                <label>
                  RUC
                </label>
                <input
                  className="form-control"
                  type="text"
                  placeholder="RUC"
                  {...register('ruc')}
                />
                {errors.rubro && <span>Este campo es requerido</span>}
              </div>
            </Col>
          </Row>

          <div className='form-group my-2'>
            <label>
              Correo
            </label>
            <input
              className="form-control"
              type="text"
              placeholder="Email"
              {...register('gmail')}
            />
            {errors.rubro && <span>Este campo es requerido</span>}
          </div>

          <button className='btn btn-info' type="submit">Guardar</button>

        </form>


      </ModalBody>

    </Modal>

  );
}

export default AdministradoForm