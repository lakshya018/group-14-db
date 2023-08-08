import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {
  Card,
  CardContent,
  Grid,
  Typography,
  Divider,
  Stack,
  Container,
  Button,
  Box,
} from '@mui/material';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

const BondCards = () => {
  const [securities, setSecurities] = useState([]);

  useEffect(() => {
    const fetchSecurities = async () => {
      try {
        const response = await axios.get('https://mybond-production.up.railway.app/api/securities');
        const data = response.data.slice(0, 4); // Limit to 4 recent records
        setSecurities(data);
      } catch (error) {
        console.error('Error fetching securities:', error);
      }
    };

    fetchSecurities();
  }, []);

  return (
    <Container sx={{ py: 2 }}>
      <Typography variant="h4" component="div" sx={{ mb: 1 }}>
        Bonds Calendar
      </Typography>
      <Grid container spacing={3}>
        {securities.map((security) => (
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
        <Grid xs={12}>
          <Box display="flex" justifyContent="center" alignItems="center" marginTop={2}>
            <Button variant="outlined" endIcon={<KeyboardArrowDownIcon />}>
              Load More
            </Button>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default BondCards;
