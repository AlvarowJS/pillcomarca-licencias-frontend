import { data } from 'jquery';
import React from 'react'
import { Modal, ModalBody, ModalHeader } from 'reactstrap';

const CategoriaForm = ({
  modal, toggle, handleSubmit, register, submit, toggleActualizacion, errors,
}) => {
  return (
    <Modal isOpen={modal} toggle={toggle || toggleActualizacion} size='lg'>
      <ModalHeader toggle={toggle || toggleActualizacion}>
        Registrar Categoria
      </ModalHeader>
      <ModalBody>
        <form onSubmit={handleSubmit(submit)}>
          <div className='form-group my-2'>
            <label>
              Nombre de categoria
            </label>
            <input
              className="form-control"
              type="text"
              placeholder="Nombre"
              {...register('nombrecategoria')}
            />
            {errors.rubro && <span>Este campo es requerido</span>}
          </div>
          <div className='form-group my-2'>
            <button className='btn btn-primary' type="submit">Guardar</button>
          </div>
        </form>
      </ModalBody>
    </Modal>
  )
}

export default CategoriaForm