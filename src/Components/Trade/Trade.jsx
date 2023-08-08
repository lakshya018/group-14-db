import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import { Modal, Box, Typography, Divider } from "@mui/material";
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import './Trade.css'

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

const Trade = () => {
    const [tradesData, setTradesData] = useState([])
    const [securityData, setSecurityData] = useState(false)

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

    const handleSecurityIdClick = async (securityId) => {
        const res = await axios.get(`https://mybond-production.up.railway.app/api/securities/${securityId}`)
        console.log(res.data)
        setSecurityData(res.data)
    }

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
                <Modal
                        open={securityData !== false}
                        onClose={() => setSecurityData(false)}
                        aria-labelledby="modal-modal-title"
                        aria-describedby="modal-modal-description"
                    >
                        <Box sx={style}>
                            <Typography id="modal-modal-title" variant="h6" component="h2" fontWeight='bold'>
                                Security Details
                            </Typography>
                            <Divider />
                            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                                ISIN: {securityData.ISIN}
                                <br />
                                CUSIP: {securityData.CUSIP}
                                <br />
                                Issuer: {securityData.Issuer}
                                <br />
                                MaturityDate: {new Date(securityData.MaturityDate).toLocaleDateString()}
                                <br />
                                Coupon: {securityData.Coupon}
                                <br />
                                Type: {securityData.Type}
                                <br />
                                FaceValue: Rs {securityData.FaceValue}
                                <br />
                                Status: {securityData.Status}
                                <br />
                            </Typography>
                        </Box>
                    </Modal>
                    <DataGrid
                        columns={columns}
                        rows={tradesData}
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
                        onCellClick={(cell) => handleSecurityIdClick(cell.value)}
                    />
                </div>
            </div>
        </div>
    )
}

export default Trade