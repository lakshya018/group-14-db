import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import './Trade.css'

const Trade = () => {
    const [tradesData, setTradesData] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            const res = await axios.get('https://mybond-production.up.railway.app/api/trades')
            // console.log(res)
            const data = res.data.map(({ _id, TradeDate,SettlementDate, ...rest }) => ({
                id: _id,
                TradeDate: new Date(TradeDate).toLocaleDateString(),
                SettlementDate: new Date(SettlementDate).toLocaleDateString(),
                ...rest,
            }))
            // console.log(data)
            setTradesData(data)
        }
        fetchData()
    }, [])

    const columns = [
        {
            field: 'CounterpartyId',
            headerName: 'Counterparty Id',
            width: 200,
        },
        {
            field: 'SecurityId',
            headerName: 'Security Id',
            width: 200,
        },
        {
            field: 'Quantity',
            headerName: 'Quantity',
            width: 80,
        },
        {
            field: 'Price',
            headerName: 'Price',
            width: 100,
        },
        {
            field: 'TradeDate',
            headerName: 'Trade Date',
            width: 100,
        },
        {
            field: 'SettlementDate',
            headerName: 'Settlement Date',
            width: 120,
        },
        {
            field: 'Status',
            headerName: 'Status',
            width: 100,
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
                        rows={tradesData}
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