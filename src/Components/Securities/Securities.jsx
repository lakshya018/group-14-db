import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import './Securities.css'

const Securities = () => {
    const [securitiesData, setSecuritiesData] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            const res = await axios.get('https://mybond-production.up.railway.app/api/securities')
            // console.log(res)
            const data = res.data.map(({_id,MaturityDate,...rest}) => ({
                id: _id,
                MaturityDate: new Date(MaturityDate).toLocaleDateString(),
                ...rest,
            }))
            // console.log(data)
            setSecuritiesData(data)
        }
        fetchData()
    }, [])
    

    const columns = [
        {
            field: 'ISIN',
            headerName: 'ISIN',
            width: 150
        },
        {
            field: 'Issuer',
            headerName: 'Issuer',
            width: 200
        },
        {
            field: 'MaturityDate',
            headerName: 'Maturity Date',
            width: 200
        },
        {
            field: 'FaceValue',
            headerName: 'Face Value',
            width: 100
        },
        {
            field: 'Status',
            headerName: 'Status',
            width: 100
        },
    ]
    

    return (
        <div>
            <h2 className='trade__title'>
                Securities
            </h2>
            <div className='trade__body'>
                <div className="trade__container">
                    <DataGrid
                        columns={columns}
                        rows={securitiesData}
                        slots={{ toolbar: GridToolbar }}
                        initialState={{
                            pagination: { paginationModel: { pageSize: 10 } }
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

export default Securities