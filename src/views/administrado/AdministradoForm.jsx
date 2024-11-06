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
              Nombre del administrado
            </label>
            <input
              className="form-control"
              type="text"
              placeholder="Ingrese el nombre del administrado"
              {...register('nombreadministrado')}
            />
            {errors.rubro && <span>Este campo es requerido</span>}
          </div>

          <div className='form-group my-2'>
            <label>
              Apellido del administrado
            </label>
            <input
              className="form-control"
              type="text"
              placeholder="Ingrese el apellido del administrado"
              {...register('apellidoadministrado')}
            />
            {errors.rubro && <span>Este campo es requerido</span>}
          </div>

          <div className='form-group my-2'>
            <label>
              Teléfono administrado
            </label>
            <input
              className="form-control"
              type="text"
              placeholder="Ingrese el número telefonico del administrado"
              {...register('numero')}
            />
            {errors.rubro && <span>Este campo es requerido</span>}
          </div>

          <div className='form-group my-2'>
            <label>
              DNI 
            </label>
            <input
              className="form-control"
              type="text"
              placeholder="Ingrese el DNI del administrado"
              {...register('dni')}
            />
            {errors.rubro && <span>Este campo es requerido</span>}
          </div>

          <div className='form-group my-2'>
            <label>
              RUC 
            </label>
            <input
              className="form-control"
              type="text"
              placeholder="Ingrese el RUC del administrado"
              {...register('ruc')}
            />
            {errors.rubro && <span>Este campo es requerido</span>}
          </div>

          <div className='form-group my-2'>
            <label>
              Correo Electronico
            </label>
            <input
              className="form-control"
              type="text"
              placeholder="Ingrese el correo electronico del administrado"
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