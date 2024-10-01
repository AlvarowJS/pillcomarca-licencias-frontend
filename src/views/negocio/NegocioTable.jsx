import React from 'react'
import DataTable from 'react-data-table-component';
import { Edit, Trash } from 'react-feather';
import { Card } from 'reactstrap';
import Sortable from 'sortablejs'

const NegocioTable = ({
    data, filter, search, 
    actualizarNegocioId, eliminarNegocio
}) => {
    const columns = [
        {
            sortable: true,
            name: "ID",
            minWidth: "150px",
            //maxWidth: "80px",
            selector: (row) => row?.id,
        },
        {
            Sortable: true,
            name: "NOMBRE DEL NEGOCIO",
            minWidth: "200px",
            //maxWidth: "95px",
            selector: (row) => row?.nombrenegocio,
            cell: (row) =>{
                return <>{row?.nombrenegocio}</>;
            },
        },
        {
            Sortable: true,
            name: "RUC DEL NEGOCIO",
            minWidth: "25px",
            //maxWidth: "95px",
            selector: (row) => row?.ruc,
            cell: (row) =>{
                return <>{row?.ruc}</>;
            },
        },
        {
            Sortable: true,
            name: "DIRECCION DEL NEGOCIO",
            minWidth: "200px",
            //maxWidth: "95px",
            selector: (row) => row?.direccion,
            cell: (row) =>{
                return <>{row?.direccion}</>;
            },
        },
        {
            Sortable: true,
            name: "TAMAÑO DEL NEGOCIO EN M2",
            minWidth: "240px",
            //maxWidth: "95px",
            selector: (row) => row?.metroscuadrados,
            cell: (row) =>{
                return <>{row?.metroscuadrados}</>;
            },
        },
        {
            Sortable: true,
            name: "MONTO PAGADO",
            minWidth: "25px",
            //maxWidth: "95px",
            selector: (row) => row?.monto,
            cell: (row) =>{
                return <>{row?.monto}</>;
            },
        },
        {
            Sortable: true,
            name: "NUMERO DE LICENCIA",
            minWidth: "180px",
            //maxWidth: "95px",
            selector: (row) => row?.nLicencia,
            cell: (row) =>{
                return <>{row?.nLicencia}</>;
            },
        },
        {
            Sortable: true,
            name: "NUMERO DE EXPEDIENTE",
            minWidth: "200px",
            //maxWidth: "95px",
            selector: (row) => row?.nExpediente,
            cell: (row) =>{
                return <>{row?.nExpediente}</>;
            },
        },
        {
            Sortable: true,
            name: "FECHA",
            minWidth: "25px",
            //maxWidth: "95px",
            selector: (row) => row?.fecha,
            cell: (row) =>{
                return <>{row?.fecha}</>;
            },
        },
        {
            Sortable: true,
            name: "LUGAR",
            minWidth: "25px",
            //maxWidth: "95px",
            selector: (row) => row?.lugar,
            cell: (row) =>{
                return <>{row?.lugar}</>;
            },
        },
        {
            Sortable: true,
            name: "MANZANA",
            minWidth: "25px",
            //maxWidth: "95px",
            selector: (row) => row?.manzana,
            cell: (row) =>{
                return <>{row?.manzana}</>;
            },
        },
        {
            Sortable: true,
            name: "LOTE",
            minWidth: "25px",
            //maxWidth: "95px",
            selector: (row) => row?.lote,
            cell: (row) =>{
                return <>{row?.lote}</>;
            },
        },

        {
            Sortable: true,
            name: "SUBCATEGORIA(RUBRO)",
            minWidth: "220px",
            //maxWidth: "100px",
            selector: (row) => row?.subcategoria?.rubro,
            cell: (row) =>{
                return <>{row?.subcategoria?.rubro}</>;
            },
        },
        {
            Sortable: true,
            name: "ADMINISTRADO",
            minWidth: "150px",
            //maxWidth: "100px",
            selector: (row) => row?.administrado?.nombreadministrado,
            cell: (row) =>{
                return <>
                <span style={{marginRight: '8px'}}>
                    {row?.administrado?.nombreadministrado} </span>
                {row?.administrado?.apellidoadministrado}
                </>;
            },
        },
        {
            Sortable: true,
            name: "ACTIVIDAD ECONOMICA",
            minWidth: "150px",
            //maxWidth: "100px",
            selector: (row) => row?.actividad_economica?.nombre,
            cell: (row) =>{
                return <>
                <span style={{marginRight: '8px'}}>
                    {row?.actividad_economica?.nombre} </span>
                
                </>;
            },
        },

        {
            Sortable: true,
            name: "RAZON",
            minWidth: "25px",
            //maxWidth: "95px",
            selector: (row) => row?.razonsocial,
            cell: (row) =>{
                return <>{row?.razonsocial}</>;
            },
        },
        
        
        {
            name: 'Acciones',
            sortable: true,
            allowOverflow: true,
            minWidth: '200px',
            maxWidth: '400px',
            cell: row => {
                return (
                    <div className='d-flex gap-1 my-1'>

                        <button className='btn btn-warning'
                            onClick={() => actualizarNegocioId(row?.id)}
                        >
                            <Edit />
                        </button>
                        <button className='btn' style={{ backgroundColor: '#DC3545', color: 'white' }}
                            onClick={() => eliminarNegocio(row?.id)}
                        >
                            <Trash />
                        </button>
                    </div>
                )
            }
        }



    ]



  return (
    <>
        <Card>
            <DataTable
                noHeader
                pagination
                className='react-datatable'
                columns={columns}
                data={search ? filter : data}
            />
        </Card>
    </>
  )
}

export default NegocioTable