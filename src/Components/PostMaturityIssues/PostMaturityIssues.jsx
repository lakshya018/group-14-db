import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './PostMaturityIssues.css';

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

const handleStatusUpdate = async (securityId, newStatus) => {
  try {
    await axios.put(`https://mybond-production.up.railway.app/api/securities/${securityId}`, { Status: newStatus });
    // Refresh the data after the update
  //   const updatedData = postMaturityIssuesData.map((security) =>
  //     security.id === securityId ? { ...security, Status: newStatus } : security
  //   );
  //   setPostMaturityIssuesData(updatedData);
  } catch (error) {
    console.error('Error updating status:', error);
  }
};

const PostMaturityIssues = () => {
  const [postMaturityIssuesData, setPostMaturityIssuesData] = useState([]);
  const [securityData, setSecurityData] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      const securitiesResponse = await axios.get('https://mybond-production.up.railway.app/api/securities');
      const tradesResponse = await axios.get('https://mybond-production.up.railway.app/api/trades');
      const currentDate = new Date();

      const securitiesData = securitiesResponse.data;
      const tradesData = tradesResponse.data;

      // Find securities with active status and maturity date in the past
      // const data = securitiesData.filter(({ MaturityDate, Status }) => {
      //   const maturityDate = new Date(MaturityDate);
      //   return Status === 'Active' && maturityDate < currentDate;
      // }).map(({ _id, MaturityDate, ...rest }) => {
      //   const trade = tradesData.find((trade) => trade.SecurityId === _id);
      //   const reason = trade && trade.Status === 'Failed' ? 'Failed Trade' : 'Active after Maturity';
      //   return {
      //     id: _id,
      //     MaturityDate: new Date(MaturityDate).toLocaleDateString(),
      //     ...rest,
      //     Issue: reason,
      //   };
      // });
      const data = securitiesData.map(({ _id, MaturityDate,Status, ...rest }) => {
        const maturityDate = new Date(MaturityDate);
        const trade = tradesData.find((trade) => trade.SecurityId === _id);
        const reason = trade && trade.Status === 'Failed' ? 'Failed Trade' : ((maturityDate < currentDate && Status!='Inactive' ) ? 'Active after Maturity' : '');
        return {
          id: _id,
          MaturityDate: new Date(MaturityDate).toLocaleDateString(),
          Status: Status,
          ...rest,
          Issue: reason,
        };
      }).filter((security) => security.Issue !== '');

      setPostMaturityIssuesData(data);
    };
    fetchData();
  }, []);

  const handleSecurityIdClick = async (securityId) => {
    const res = await axios.get(`https://mybond-production.up.railway.app/api/securities/${securityId}`);
    setSecurityData(res.data);
  };

  const columns = [
    {
      field: 'ISIN',
      headerName: 'ISIN',
      width: 150,
    },
    {
      field: 'Issuer',
      headerName: 'Issuer',
      width: 200,
    },
    {
      field: 'MaturityDate',
      headerName: 'Maturity Date',
      width: 200,
    },
    {
      field: 'FaceValue',
      headerName: 'Face Value',
      width: 100,
    },
    {
      field: 'Status',
      headerName: 'Status',
      width: 120,
      renderCell: (params) => {
        const { id, Status } = params.row;
        return (
          <select value={Status} onChange={(e) => handleStatusUpdate(id, e.target.value)}>
            <option value="Active">Active</option>
            <option value="Post Maturity Issue">Post Maturity Issue</option>
            <option value="Inactive">Inactive</option>
          </select>
        );
      },

    
    },
    {
      field: 'Issue',
      headerName: 'Issue',
      width: 180,
    },
  ];

  return (
    <div>
      <h2 className="trade__title">Post Maturity Issues</h2>
      <div className="trade__body">
        <div className="trade__container">
          <DataGrid
            columns={columns}
            rows={postMaturityIssuesData}
            slots={{ toolbar: GridToolbar }}
            initialState={{
              pagination: { paginationModel: { pageSize: 10 } },
            }}
            componentsProps={{
              toolbar: {
                csvOptions: { disableToolbarButton: true },
                printOptions: { disableToolbarButton: true },
              },
            }}
            onCellClick={(cell) => handleSecurityIdClick(cell.row.id)}
          />
        </div>
      </div>
      {/* <Modal
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
      </Modal> */}
    </div>
  );
};

export default PostMaturityIssues;
