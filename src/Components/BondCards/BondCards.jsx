import React from 'react'
import {Card, CardContent, Grid, Typography, Divider, Stack, Container, Button, Box} from '@mui/material'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'

const BondCards = () => {
  return (
    <Container sx={{py: 2}}>
        <Typography variant='h4' component='div' sx={{mb: 1}}>
            Bonds Calender
        </Typography>
        <Grid container spacing={3}>
        <Grid item md={6}>
            <Card variant='outlined'>
                <CardContent>
                    <Typography variant='h5' component='div' >
                        Title
                    </Typography>
                    <Typography color='text.secondary' sx={{mb: 1.5}}>
                    360 ONE PRIME LIMITED
                    </Typography>
                    <Divider />
                    <Typography variant='body2' sx={{my: 1}}>
                    Issue Size (in ₹ Cr) : 0
                    </Typography>
                    <Divider />
                    <Stack
                    direction='row'
                    justifyContent='space-evenly'
                    alignItems='center'
                    spacing={2}
                    sx={{py: 1}}
                    >
                        <div>
                        <Typography variant='body2' sx={{my: 1}}>
                        Allotment Date :
                    </Typography>
                        <Typography variant='body1' sx={{my: 1}} fontWeight='bold'>
                        16-01-2020
                    </Typography>
                        </div>
                        <Divider orientation='vertical' flexItem />
                        <div>
                        <Typography variant='body2' sx={{my: 1}}>
                        Allotment Date :
                    </Typography>
                        <Typography variant='body1' sx={{my: 1}} fontWeight='bold'>
                        16-01-2020
                    </Typography>
                        </div>
                    </Stack>
                </CardContent>
            </Card>
        </Grid>
        <Grid item md={6}>
            <Card variant='outlined'>
                <CardContent>
                    <Typography variant='h5' component='div' >
                        Title
                    </Typography>
                    <Typography color='text.secondary' sx={{mb: 1.5}}>
                    360 ONE PRIME LIMITED
                    </Typography>
                    <Divider />
                    <Typography variant='body2' sx={{my: 1}}>
                    Issue Size (in ₹ Cr) : 0
                    </Typography>
                    <Divider />
                    <Stack
                    direction='row'
                    justifyContent='space-evenly'
                    alignItems='center'
                    spacing={2}
                    sx={{py: 1}}
                    >
                        <div>
                        <Typography variant='body2' sx={{my: 1}}>
                        Allotment Date :
                    </Typography>
                        <Typography variant='body1' sx={{my: 1}} fontWeight='bold'>
                        16-01-2020
                    </Typography>
                        </div>
                        <Divider orientation='vertical' flexItem />
                        <div>
                        <Typography variant='body2' sx={{my: 1}}>
                        Allotment Date :
                    </Typography>
                        <Typography variant='body1' sx={{my: 1}} fontWeight='bold'>
                        16-01-2020
                    </Typography>
                        </div>
                    </Stack>
                </CardContent>
            </Card>
        </Grid>
        <Grid item md={6}>
            <Card variant='outlined'>
                <CardContent>
                    <Typography variant='h5' component='div' >
                        Title
                    </Typography>
                    <Typography color='text.secondary' sx={{mb: 1.5}}>
                    360 ONE PRIME LIMITED
                    </Typography>
                    <Divider />
                    <Typography variant='body2' sx={{my: 1}}>
                    Issue Size (in ₹ Cr) : 0
                    </Typography>
                    <Divider />
                    <Stack
                    direction='row'
                    justifyContent='space-evenly'
                    alignItems='center'
                    spacing={2}
                    sx={{py: 1}}
                    >
                        <div>
                        <Typography variant='body2' sx={{my: 1}}>
                        Allotment Date :
                    </Typography>
                        <Typography variant='body1' sx={{my: 1}} fontWeight='bold'>
                        16-01-2020
                    </Typography>
                        </div>
                        <Divider orientation='vertical' flexItem />
                        <div>
                        <Typography variant='body2' sx={{my: 1}}>
                        Allotment Date :
                    </Typography>
                        <Typography variant='body1' sx={{my: 1}} fontWeight='bold'>
                        16-01-2020
                    </Typography>
                        </div>
                    </Stack>
                </CardContent>
            </Card>
        </Grid>
        <Grid item md={6}>
            <Card variant='outlined'>
                <CardContent>
                    <Typography variant='h5' component='div' >
                        Title
                    </Typography>
                    <Typography color='text.secondary' sx={{mb: 1.5}}>
                    360 ONE PRIME LIMITED
                    </Typography>
                    <Divider />
                    <Typography variant='body2' sx={{my: 1}}>
                    Issue Size (in ₹ Cr) : 0
                    </Typography>
                    <Divider />
                    <Stack
                    direction='row'
                    justifyContent='space-evenly'
                    alignItems='center'
                    spacing={2}
                    sx={{py: 1}}
                    >
                        <div>
                        <Typography variant='body2' sx={{my: 1}}>
                        Allotment Date :
                    </Typography>
                        <Typography variant='body1' sx={{my: 1}} fontWeight='bold'>
                        16-01-2020
                    </Typography>
                        </div>
                        <Divider orientation='vertical' flexItem />
                        <div>
                        <Typography variant='body2' sx={{my: 1}}>
                        Allotment Date :
                    </Typography>
                        <Typography variant='body1' sx={{my: 1}} fontWeight='bold'>
                        16-01-2020
                    </Typography>
                        </div>
                    </Stack>
                </CardContent>
            </Card>
        </Grid>
        <Grid xs={12}>
            <Box display='flex' justifyContent='center' alignItems='center' marginTop={2}>
            <Button variant='outlined' endIcon={<KeyboardArrowDownIcon />}>
                Load More
            </Button>
            </Box>
        </Grid>
    </Grid>
    </Container>
  )
}

export default BondCards