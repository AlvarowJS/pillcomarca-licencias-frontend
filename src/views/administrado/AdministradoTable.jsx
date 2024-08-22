import React from 'react'
import DataTable from 'react-data-table-component'
import { Card } from 'reactstrap'

const AdministradoTable = ({
    data
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


    ]

  return (
    <div>
        <Card>
            <DataTable
                noHeader
                pagination
                className='react-datatable'
                columns={columns}
                data={data}
            />
        </Card>
    </div>
  )
}

export default AdministradoTable