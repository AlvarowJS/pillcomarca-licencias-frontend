import { data } from 'jquery';
import React from 'react';
import { Modal, ModalBody, ModalHeader } from 'reactstrap';

const SubCategoriaForm = ({
  modal, toggle, handleSubmit, register, submit, toggleActualizacion, errors, dataCategoria
}) => {
  return (
    <Modal isOpen={modal} toggle={toggle || toggleActualizacion} size='lg'>
      <ModalHeader toggle={toggle || toggleActualizacion}>
        Registrar Sub Categoria
      </ModalHeader>
      <ModalBody>
        <form onSubmit={handleSubmit(submit)}>
          <div className='form-group my-2'>
            <label>
              Rubro de la sub categoria
            </label>
            <input
              className="form-control"
              type="text"
              placeholder="Rubro"
              {...register('rubro')}
            />
            {errors.rubro && <span>Este campo es requerido</span>}
          </div>

          <div className='form-group my-2'>
            <label>
              Elija a la categoria a que pertenesca
            </label>
            <select className="form-select" id="categoria_id" {...register("categoria_id")}>
              {
                dataCategoria?.map(categoria => (
                  <option key={categoria.id} value={categoria.id}>{categoria.nombrecategoria} </option>
                ))
              }
            </select>
            {errors.rubro && <span>Este campo es requerido</span>}
          </div>


          <button className='btn btn-info' type="submit">Guardar</button>
        </form>


      </ModalBody>
    </Modal>
  );
}

export default SubCategoriaForm;
