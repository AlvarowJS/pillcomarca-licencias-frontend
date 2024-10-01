import { data } from 'jquery';
import React from 'react'
import { Modal, ModalBody, ModalHeader } from 'reactstrap';




const NegocioForm = ({
  modal, toggle, handleSubmit, register, submit, toggleActualizacion, errors, dataSubCategoria, dataAdministrado,dataActividadEconomica
}) => {
  return (
    <Modal isOpen={modal} toggle={toggle || toggleActualizacion} size='lg'>
      <ModalHeader toggle={toggle || toggleActualizacion}>
        Registrar Negocio
      </ModalHeader>

      <ModalBody>
      <form onSubmit={handleSubmit(submit)}>
        
          <div className='form-group my-2'>
            <label>
              INGRESE EL NOMBRE DEL NEGOCIO
            </label>
            <input
              className="form-control"
              type="text"
              placeholder="NOMBRE"
              {...register('nombrenegocio')}
            />
            {errors.rubro && <span>Este campo es requerido</span>}
          </div>

          <div className='form-group my-2'>
            <label>
              INGRESE EL RUC DEL NEGOCIO
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
              INGRESE LA DIRECCION DEL NEGOCIO
            </label>
            <input
              className="form-control"
              type="text"
              placeholder="DIRECCION"
              {...register('direccion')}
            />
            {errors.rubro && <span>Este campo es requerido</span>}
          </div>

          <div className='form-group my-2'>
            <label>
              INGRESE EL TAMAÑO DEL NEGOCIO EN M2
            </label>
            <input
              className="form-control"
              type="text"
              placeholder="TAMAÑO"
              {...register('metroscuadrados')}
            />
            {errors.rubro && <span>Este campo es requerido</span>}
          </div>

          <div className='form-group my-2'>
            <label>
              INGRESE EL MONTO A PAGAR DEL NEGOCIO
            </label>
            <input
              className="form-control"
              type="text"
              placeholder="MONTO EN SOLES"
              {...register('monto')}
            />
            {errors.rubro && <span>Este campo es requerido</span>}
          </div>

          <div className='form-group my-2'>
            <label>
              INGRESE EL NUMERO DE LICENCIA DEL NEGOCIO
            </label>
            <input
              className="form-control"
              type="text"
              placeholder="NUMERO DE LICENCIA"
              {...register('nLicencia')}
            />
            {errors.rubro && <span>Este campo es requerido</span>}
          </div>

          <div className='form-group my-2'>
            <label>
              INGRESE EL NUMERO DE EXPEDIENTE DEL NEGOCIO
            </label>
            <input
              className="form-control"
              type="text"
              placeholder="NUMERO DE EXPEDIENTE"
              {...register('nExpediente')}
            />
            {errors.rubro && <span>Este campo es requerido</span>}
          </div>

          <div className='form-group my-2'>
            <label>
              INGRESE EL LUGAR DEL NEGOCIO
            </label>
            <input
              className="form-control"
              type="text"
              placeholder="LUGAR DEL NEGOCIO"
              {...register('lugar')}
            />
            {errors.rubro && <span>Este campo es requerido</span>}
          </div>

          <div className='form-group my-2'>
            <label>
              INGRESE LA MZ DEL NEGOCIO
            </label>
            <input
              className="form-control"
              type="text"
              placeholder="MANZANA DEL NEGOCIO"
              {...register('manzana')}
            />
            {errors.rubro && <span>Este campo es requerido</span>}
          </div>

          <div className='form-group my-2'>
            <label>
              INGRESE EL LOTE DEL NEGOCIO
            </label>
            <input
              className="form-control"
              type="text"
              placeholder="LOTE DEL NEGOCIO"
              {...register('lote')}
            />
            {errors.rubro && <span>Este campo es requerido</span>}
          </div>

          <div className='form-group my-2'>
            <label>
              INGRESE LA FECHA DEL NEGOCIO
            </label>
            <input
              className="form-control"
              type="date"
              placeholder="FECHA"
              {...register('fecha')}
            />
            {errors.rubro && <span>Este campo es requerido</span>}
          </div>

          <div className='form-group my-2'>
            <label>
              INGRESE LA RAZON SOCIAL
            </label>
            <input
              className="form-control"
              type="text"
              placeholder="RAZONZOCIAL"
              {...register('razonsocial')}
            />
            {errors.rubro && <span>Este campo es requerido</span>}
          </div>

          <div className='form-group my-2'>
            <label>
              ELIJA LA SUBCATEGORIA A LA QUE PERTENEZCA
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

          <div className='form-group my-2'>
            <label>
              ELIJA EL ADMINISTRADO DEL NEGOCIO
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

          <div className='form-group my-2'>
            <label>
              ELIJA LA ACTIVIDAD ECONOMICA
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
          
          <button className='btn btn-info' type="submit">Guardar</button>



        </form>


      </ModalBody>
    
      </Modal>
  )
}

export default NegocioForm