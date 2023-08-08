import { Box, Grid, Table, TableBody, TableCell, TableHead, TableRow } from '@mui/material'
import { BarChart, PieChart } from '@mui/x-charts'
import React from 'react'
import './Dashboard.css'

const Dashboard = () => {

    return (
        <Grid container spacing={4} sx={{ marginTop: 0.5 }}>
            <Grid item xs={12} lg={8}>
                <h2 className='dashboard__title'>
                    Trades
                </h2>
                <Box sx={{ overflow: "auto" }}>
                    <Box sx={{ width: "100%", display: "table", tableLayout: "fixed" }}>
                        <Table >
                            <TableHead>
                                <TableRow>
                                    <TableCell>Dessert (100g serving)</TableCell>
                                    <TableCell align="right">Calories</TableCell>
                                    <TableCell align="right">Fat&nbsp;(g)</TableCell>
                                    <TableCell align="right">Carbs&nbsp;(g)</TableCell>
                                    <TableCell align="right">Protein&nbsp;(g)</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                <TableRow>
                                    <TableCell component="th" scope="row">
                                        Hello
                                    </TableCell>
                                    <TableCell align="right">10</TableCell>
                                    <TableCell align="right">2</TableCell>
                                    <TableCell align="right">2</TableCell>
                                    <TableCell align="right">5</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell component="th" scope="row">
                                        Hello
                                    </TableCell>
                                    <TableCell align="right">10</TableCell>
                                    <TableCell align="right">2</TableCell>
                                    <TableCell align="right">2</TableCell>
                                    <TableCell align="right">5</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell component="th" scope="row">
                                        Hello
                                    </TableCell>
                                    <TableCell align="right">10</TableCell>
                                    <TableCell align="right">2</TableCell>
                                    <TableCell align="right">2</TableCell>
                                    <TableCell align="right">5</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell component="th" scope="row">
                                        Hello
                                    </TableCell>
                                    <TableCell align="right">10</TableCell>
                                    <TableCell align="right">2</TableCell>
                                    <TableCell align="right">2</TableCell>
                                    <TableCell align="right">5</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell component="th" scope="row">
                                        Hello
                                    </TableCell>
                                    <TableCell align="right">10</TableCell>
                                    <TableCell align="right">2</TableCell>
                                    <TableCell align="right">2</TableCell>
                                    <TableCell align="right">5</TableCell>
                                </TableRow>
                            </TableBody>
                        </Table>
                    </Box>
                </Box>

            </Grid>
            <Grid item xs={12} lg={4}>
                <h2 className='dashboard__title'>
                    Securities
                </h2>
                <br />
                <PieChart
                    height={250}
                    series={[
                        {
                            data: [
                                { id: 0, value: 10, label: 'series A' },
                                { id: 1, value: 15, label: 'series B' },
                                { id: 2, value: 20, label: 'series C' },
                            ],
                        },
                    ]}
                />
            </Grid>
            <Grid item lg={6}>
                <h2 className='dashboard__title'>
                    Books
                </h2>
                <BarChart
                    xAxis={[
                        {
                            id: 'barCategories',
                            data: ['Government', 'Corporate', 'bar C'],
                            scaleType: 'band',
                        },
                    ]}
                    series={[
                        {
                            data: [2, 5, 3],
                        },
                    ]}
                    height={400}
                />
            </Grid>
            <Grid item lg={6}>
                <h2 className='dashboard__title'>
                    Security
                </h2>
                <Box sx={{ overflow: "auto" }}>
                    <Box sx={{ width: "100%", display: "table", tableLayout: "fixed" }}>
                        <Table >
                            <TableHead>
                                <TableRow>
                                    <TableCell>Dessert (100g serving)</TableCell>
                                    <TableCell align="right">Calories</TableCell>
                                    <TableCell align="right">Fat&nbsp;(g)</TableCell>
                                    <TableCell align="right">Carbs&nbsp;(g)</TableCell>
                                    <TableCell align="right">Protein&nbsp;(g)</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                <TableRow>
                                    <TableCell component="th" scope="row">
                                        Hello
                                    </TableCell>
                                    <TableCell align="right">10</TableCell>
                                    <TableCell align="right">2</TableCell>
                                    <TableCell align="right">2</TableCell>
                                    <TableCell align="right">5</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell component="th" scope="row">
                                        Hello
                                    </TableCell>
                                    <TableCell align="right">10</TableCell>
                                    <TableCell align="right">2</TableCell>
                                    <TableCell align="right">2</TableCell>
                                    <TableCell align="right">5</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell component="th" scope="row">
                                        Hello
                                    </TableCell>
                                    <TableCell align="right">10</TableCell>
                                    <TableCell align="right">2</TableCell>
                                    <TableCell align="right">2</TableCell>
                                    <TableCell align="right">5</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell component="th" scope="row">
                                        Hello
                                    </TableCell>
                                    <TableCell align="right">10</TableCell>
                                    <TableCell align="right">2</TableCell>
                                    <TableCell align="right">2</TableCell>
                                    <TableCell align="right">5</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell component="th" scope="row">
                                        Hello
                                    </TableCell>
                                    <TableCell align="right">10</TableCell>
                                    <TableCell align="right">2</TableCell>
                                    <TableCell align="right">2</TableCell>
                                    <TableCell align="right">5</TableCell>
                                </TableRow>
                            </TableBody>
                        </Table>
                    </Box>
                </Box>
            </Grid>
        </Grid>
    )
}

export default Dashboard