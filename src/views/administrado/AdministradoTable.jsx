import React from 'react'
import DataTable from 'react-data-table-component'
import { Edit, Trash } from 'react-feather';
import { Card } from 'reactstrap'
import Sortable from 'sortablejs'

const AdministradoTable = ({
    data, filter, search,
    actualizarAdministradoId, eliminarAdministrado
}) => {
    const columns =[

        {
            sortable: true,
            name: "ID",
            minWidth: "150px",
            //maxWidth: "80px",
            selector: (row) => row?.id,
        },
        {
            sortable: true,
            name: "NOMBRE",
            minWidth: "150px",
            //maxWidth: "80px",
            selector: (row) => row?.nombreadministrado,
        },
        {
            sortable: true,
            name: "APELLIDO",
            minWidth: "150px",
            //maxWidth: "80px",
            selector: (row) => row?.apellidoadministrado,
        },
        {
            sortable: true,
            name: "NUMERO DE CELULAR",
            minWidth: "150px",
            //maxWidth: "80px",
            selector: (row) => row?.numero,
        },
        {
            sortable: true,
            name: "RUC DEL ADMINISTRADO",
            minWidth: "220px",
            //maxWidth: "80px",
            selector: (row) => row?.ruc,
        },
        {
            sortable: true,
            name: "GMAIL",
            minWidth: "150px",
            //maxWidth: "80px",
            selector: (row) => row?.gmail,
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
                            onClick={() => actualizarAdministradoId(row?.id)}
                        >
                            <Edit />
                        </button>
                        <button className='btn' style={{ backgroundColor: '#DC3545', color: 'white' }}
                            onClick={() => eliminarAdministrado(row?.id)}
                        >
                            <Trash />
                        </button>
                    </div>
                )
            }
        }



    ]

  return (
    <div>
        <Card>
            <DataTable
                noHeader
                pagination
                className='react-datatable'
                columns={columns}
                data={search ? filter : data}
            />
        </Card>
    </div>
  )
}

export default AdministradoTable