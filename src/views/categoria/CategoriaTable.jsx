import React from 'react'
import DataTable from 'react-data-table-component'
import { Card } from 'reactstrap'

const CategoriaTable = ({
    data 
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

    ]

  return (
    <div>
        <Card>
            <DataTable
                noHeader
                pagination
                className='reac-datatable'
                columns={columns}
                data={data}
            />
        </Card>
    </div>
  )
}

export default CategoriaTable