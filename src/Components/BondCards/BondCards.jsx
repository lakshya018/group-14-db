import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { Card, CardContent, Grid, Typography, Divider, Stack, Container, Button, Box } from '@mui/material';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import './BondCards.css'; // Import the custom CSS file


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
    <Container className="bond-cards-container">
      <Typography
        variant="h4"
        component="div"
        className="bond-cards-title"
        sx={{
          textAlign: "center",
          marginBottom: "30px",
          fontWeight: "bold",
          color: "white",
          textShadow: "-1px -1px 0 black, 1px -1px 0 black, -1px 1px 0 black, 1px 1px 0 black",
        }}
      >
        Bonds Calendar
      </Typography>

      <Grid container spacing={3}>
        {securities.map((security) => (
          <Grid item md={6} key={security._id}>
            <Card variant="outlined" className="bond-card">
              <CardContent>
                <Typography variant="h5" component="div" className="issuer">
                  {security.Issuer}
                </Typography>
                <Typography color="text.secondary" className="isin">
                  {security.ISIN}
                </Typography>
                <Divider />
                <Typography variant="body2" className="face-value">
                  Face Value (in ₹ Cr) : {security.FaceValue}
                </Typography>
                <Divider />
                <Stack direction="row" justifyContent="space-evenly" alignItems="center" spacing={2} className="details">
                  <div>
                    <Typography variant="body2" className="type-label">
                      Type:
                    </Typography>
                    <Typography variant="body1" className="type-value" fontWeight="bold">
                      {security.Type}
                    </Typography>
                  </div>
                  <Divider orientation="vertical" flexItem />
                  <div>
                    <Typography variant="body2" className="maturity-date-label">
                      Maturity Date:
                    </Typography>
                    <Typography variant="body1" className="maturity-date-value" fontWeight="bold">
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
            <Button
              variant="outlined"
              endIcon={<KeyboardArrowDownIcon />}
              className="load-more-button"
              component={Link}
              to="/securities"
              style={{ color: "white" }}
            >
              Load More
            </Button>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default BondCards;
