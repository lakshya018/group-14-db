import React from 'react'
import {
  Card,
  CardContent,
  Grid,
  Typography,
  Divider,
  Stack,
  Container,
} from '@mui/material';

const FilterSearch = ({ data }) => {
  return (

    <Container sx={{ py: 2 }}>
      {
        data.length!==0?
        <>
        <Typography variant="h4" component="div" sx={{ mb: 1 }}>
        You Searched For
      </Typography>
      <Grid container spacing={3}>
        {data.map((security) => (
          <Grid item md={6} key={security._id}>
            <Card variant="outlined">
              <CardContent>
                <Typography variant="h5" component="div">
                  {security.Issuer}
                </Typography>
                <Typography color="text.secondary" sx={{ mb: 1.5 }}>
                  {security.ISIN}
                </Typography>
                <Divider />
                <Typography variant="body2" sx={{ my: 1 }}>
                  Face Value (in ₹ Cr) : {security.FaceValue}
                </Typography>
                <Divider />
                <Stack direction="row" justifyContent="space-evenly" alignItems="center" spacing={2} sx={{ py: 1 }}>
                  <div>
                    <Typography variant="body2" sx={{ my: 1 }}>
                      Type:
                    </Typography>
                    <Typography variant="body1" sx={{ my: 1 }} fontWeight="bold">
                      {security.Type}
                    </Typography>
                  </div>
                  <Divider orientation="vertical" flexItem />
                  <div>
                    <Typography variant="body2" sx={{ my: 1 }}>
                      Maturity Date:
                    </Typography>
                    <Typography variant="body1" sx={{ my: 1 }} fontWeight="bold">
                      {new Date(security.MaturityDate).toLocaleDateString()}
                    </Typography>
                  </div>
                </Stack>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
        </>
        :
        <></>
      }
      
    </Container>
  )
}

export default FilterSearch;