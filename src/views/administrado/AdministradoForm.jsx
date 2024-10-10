import { data } from 'jquery';
import React from 'react'
import {Modal, ModalBody, ModalHeader} from 'reactstrap';

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
              Ingrese el nombre del administrado
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
              Ingrese el apellido del administrado
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
              Ingrese el numero telefonico del administrado
            </label>
            <input
              className="form-control"
              type="text"
              placeholder="Numero"
              {...register('numero')}
            />
            {errors.rubro && <span>Este campo es requerido</span>}
          </div>

          <div className='form-group my-2'>
            <label>
              Ingrese el DNI del administrado
            </label>
            <input
              className="form-control"
              type="text"
              placeholder="DNI"
              {...register('dni')}
            />
            {errors.rubro && <span>Este campo es requerido</span>}
          </div>

          <div className='form-group my-2'>
            <label>
              Ingrese el RUC del administrado
            </label>
            <input
              className="form-control"
              type="text"
              placeholder="RUC"
              {...register('ruc')}
            />
            {errors.rubro && <span>Este campo es requerido</span>}
          </div>

          <div className='form-group my-2'>
            <label>
              Ingrese el GMAIL del administrado
            </label>
            <input
              className="form-control"
              type="text"
              placeholder="Gmail"
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