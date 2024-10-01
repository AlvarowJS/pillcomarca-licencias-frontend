import React from 'react';
import DataTable from 'react-data-table-component';
import { Edit, Trash } from 'react-feather';
import { Card } from 'reactstrap';
import Sortable from 'sortablejs'



const SubCategoriaTable = ({
    data, filter, search,
    actualizarSubCategoriaId, eliminarSubCategoria
}) => {
    const columns = [
        {
            Sortable: true,
            name: "ID",
            minWidth: "25px",
            //maxWidth: "80px",
            selector: (row) => row?.id,
        },
        {
            Sortable: true,
            name: "RUBRO",
            minWidth: "25px",
            //maxWidth: "95px",
            selector: (row) => row?.rubro,
            cell: (row) =>{
                return <>{row?.rubro}</>;
            },
        },
        {
            Sortable: true,
            name: "CATEGORIA",
            minWidth: "25px",
            //maxWidth: "100px",
            selector: (row) => row?.categoria?.nombrecategoria,
            cell: (row) =>{
                return <>{row?.categoria?.nombrecategoria}</>;
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
                            onClick={() => actualizarSubCategoriaId(row?.id)}
                        >
                            <Edit />
                        </button>
                        <button className='btn' style={{ backgroundColor: '#DC3545', color: 'white' }}
                            onClick={() => eliminarSubCategoria(row?.id)}
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

export default SubCategoriaTable