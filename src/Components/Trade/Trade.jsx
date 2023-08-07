import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import React from 'react'
import './Trade.css'

const Trade = () => {
    const columns = [
        {
            field: 'first_name',
            headerName: 'first name',
        },
        {
            field: 'first_name',
            headerName: 'first name',
        },
        {
            field: 'first_name',
            headerName: 'first name',
        },
        {
            field: 'first_name',
            headerName: 'first name',
        },
    ]
    const rows = [
        {
            first_name: 'Hello',
            id: 1,
        },
        {
            first_name: 'Hello',
            id: 2,
        },
        {
            first_name: 'Hello',
            id: 3,
        },
        {
            first_name: 'Hello',
            id: 4,
        },
        {
            first_name: 'Hello',
            id: 5,
        },
    ]

    return (
        <div>
            <h2 className='trade__title'>
                Trades
            </h2>
            <div className='trade__body'>
                <div className="trade__container">
                    <DataGrid
                        columns={columns}
                        rows={rows}
                        slots={{ toolbar: GridToolbar }}
                        initialState={{
                            pagination: { paginationModel: { pageSize: 25 } }
                        }}
                        componentsProps={{
                            toolbar: {
                                csvOptions: { disableToolbarButton: true },
                                printOptions: { disableToolbarButton: true }
                            }
                        }}
                    />
                </div>
            </div>
        </div>
    )
}

export default Trade