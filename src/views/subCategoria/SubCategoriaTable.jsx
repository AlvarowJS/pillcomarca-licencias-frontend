import React from 'react';
import DataTable from 'react-data-table-component';
import { Card } from 'reactstrap';
import Sortable from 'sortablejs'



const SubCategoriaTable = ({
    data 
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
        


    ]


  return (
    <>
        <Card>
            <DataTable
                noHeader
                pagination
                className='react-datatable'
                columns={columns}
                data={data}
            />
        </Card>
    </>
  )
}

export default SubCategoriaTable