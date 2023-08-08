import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import { Modal, Box, Typography, Divider } from "@mui/material";
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import './Securities.css'

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    boxShadow: 24,
    p: 4,
};

const Securities = () => {
    const [securitiesData, setSecuritiesData] = useState([])
    const [detailedView, setDetailedView] = useState(false)

    useEffect(() => {
        const fetchData = async () => {
            const res = await axios.get('https://mybond-production.up.railway.app/api/securities')
            // console.log(res)
            const data = res.data.map(({ _id, MaturityDate, ...rest }) => ({
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

    const handleRowClick = (id) => {
        console.log(securitiesData.find(data => data.id === id))
        setDetailedView(securitiesData.find(data => data.id === id))
    }


    return (
        <div>
            <h2 className='securities__title'>
                Securities
            </h2>
            <div className='securities__body'>
                <div className="securities__container">
                    <Modal
                        open={detailedView !== false}
                        onClose={() => setDetailedView(false)}
                        aria-labelledby="modal-modal-title"
                        aria-describedby="modal-modal-description"
                    >
                        <Box sx={style}>
                            <Typography id="modal-modal-title" variant="h6" component="h2" fontWeight='bold'>
                                Details
                            </Typography>
                            <Divider />
                            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                                ISIN: {detailedView.ISIN}
                                <br />
                                CUSIP: {detailedView.CUSIP}
                                <br />
                                Issuer: {detailedView.Issuer}
                                <br />
                                MaturityDate: {new Date(detailedView.MaturityDate).toLocaleDateString()}
                                <br />
                                Coupon: {detailedView.Coupon}
                                <br />
                                Type: {detailedView.Type}
                                <br />
                                FaceValue: Rs {detailedView.FaceValue}
                                <br />
                                Status: {detailedView.Status}
                                <br />
                            </Typography>
                        </Box>
                    </Modal>
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
                        onRowClick={rows => handleRowClick(rows.id)}
                    />
                </div>
            </div>
        </div>
    )
}

export default Securities