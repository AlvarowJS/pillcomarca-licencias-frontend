import React from 'react'
import DataTable from 'react-data-table-component'
import { Edit, Trash } from 'react-feather';
import { Card } from 'reactstrap'
import Sortable from 'sortablejs'

const CategoriaTable = ({
    data, filter, search,
    actualizarCategoriaId, eliminarCategoria 
}) => {

    const columns = [
        {
            sortable: true,
            name: "ID",
            minWidth: "25px",
            //maxWidth: "80px",
            selector: (row) => row?.id,
        },
        {
            sortable: true,
            name: "NOMBRE",
            minWidth: "25px",
            //maxWidth: "80px",
            selector: (row) => row?.nombrecategoria,
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
                            onClick={() => actualizarCategoriaId(row?.id)}
                        >
                            <Edit />
                        </button>
                        <button className='btn' style={{ backgroundColor: '#DC3545', color: 'white' }}
                            onClick={() => eliminarCategoria(row?.id)}
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
                className='reac-datatable'
                columns={columns}
                data={search ? filter : data}
            />
        </Card>
    </div>
  )
}

export default CategoriaTable