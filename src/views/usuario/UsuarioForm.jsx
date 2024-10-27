import React from 'react';
import { Modal, ModalBody, ModalHeader } from 'reactstrap';

const UsuarioForm = ({
    modal, toggle, handleSubmit, register, submit, toggleActualizacion, errors
}) => {
    return (
        <Modal isOpen={modal} toggle={toggle || toggleActualizacion} size='lg'>
            <ModalHeader toggle={toggle || toggleActualizacion}>
                Registrar Usuario
            </ModalHeader>
            <ModalBody>
                <form onSubmit={handleSubmit(submit)}>
                    <div className='form-group my-2'>
                        <label htmlFor="name">Nombre completo</label>
                        <input
                            className="form-control"
                            type="text"
                            placeholder='ingrese nombre completo'
                            {...register('name', { required: true })}
                        />
                        {errors.name && <span>Este campo es requerido</span>}
                    </div>
                    <div className='form-group my-2'>
                        <label htmlFor="email">Su Email</label>
                        <input
                            className="form-control"
                            type="email"
                            placeholder='ingrese su correo electronico'
                            {...register('email', { required: true })}
                        />
                        {errors.email && <span>Este campo es requerido</span>}
                    </div>
                    <div className='form-group my-2'>
                        <label htmlFor="password">Su Contraseña</label>
                        <input
                            className="form-control"
                            type="password"
                            placeholder='ingrese su contraseña'
                            {...register('password', { required: true })}
                        />
                        {errors.password && <span>Este campo es requerido</span>}
                    </div>
                    <div className='form-group my-2'>
                        <label htmlFor="dni">Su DNI</label>
                        <input
                            className="form-control"
                            type="number"
                            placeholder='ingrese su DNI'
                            {...register('dni', { required: true })}
                        />
                        {errors.dni && <span>Este campo es requerido</span>}
                    </div>
                    <div className='form-group my-2'>
                        <label htmlFor="numero">Su Numero de telefono</label>
                        <input
                            className="form-control"
                            type="text"
                            placeholder='ingrese su N° de celular'
                            {...register('numero', { required: true })}
                        />
                        {errors.numero && <span>Este campo es requerido</span>}
                    </div>


                    <div className="form-group my-2">
                        <label htmlFor="role_id">Tipo de Rol </label>
                        <select className="form-select" id="role_id" {...register('role_id')}  >
                            <option value="1">Administrador</option>
                            <option value="2">Usuario</option>

                        </select>
                    </div>
                    
                    <div className='form-group my-2'>
                        <label className="form-check-label" htmlFor="status">Cual es su Status</label>
                        <div className="form-check form-switch">
                            <input
                                className="form-check-input"
                                type="checkbox"
                                id="status"
                                {...register('status')}
                            />
                            <label className="form-check-label" htmlFor="status">Inactivo / Activo</label>
                        </div>
                        {errors.status && <span>Este campo es requerido</span>}
                    </div>

                    


                    <div className='form-group my-2'>
                        <button type="submit" className="btn btn-primary">Guardar</button>
                    </div>
                </form>
            </ModalBody>
        </Modal>
    );
};

export default UsuarioForm;
