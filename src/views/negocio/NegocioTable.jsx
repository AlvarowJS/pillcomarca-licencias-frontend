import React from 'react'
import DataTable from 'react-data-table-component';
import { Card } from 'reactstrap';

const NegocioTable = ({
    data
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

export default NegocioTable