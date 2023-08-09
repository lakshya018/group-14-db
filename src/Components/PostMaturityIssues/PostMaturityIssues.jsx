import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './PostMaturityIssues.css';


const PostMaturityIssues = () => {
  const [postMaturityIssuesData, setPostMaturityIssuesData] = useState([]);
  const [securityData, setSecurityData] = useState(false); // eslint-disable-line

 const handleStatusUpdate = async (securityId, newStatus) => {
  try {
    await axios.put(`https://mybond-production.up.railway.app/api/securities/${securityId}`, { Status: newStatus });

    // Update the data directly without making an additional API call
    const updatedData = postMaturityIssuesData.map((security) =>
      security.id === securityId ? { ...security, Status: newStatus } : security
    );
    setPostMaturityIssuesData(updatedData);
  } catch (error) {
    console.error('Error updating status:', error);
  }
};

  useEffect(() => {
    const fetchData = async () => {
      const securitiesResponse = await axios.get('https://mybond-production.up.railway.app/api/securities');
      const tradesResponse = await axios.get('https://mybond-production.up.railway.app/api/trades');
      const currentDate = new Date();

      const securitiesData = securitiesResponse.data;
      const tradesData = tradesResponse.data;

      const data = securitiesData.map(({ _id, MaturityDate, Status, ...rest }) => {
        const maturityDate = new Date(MaturityDate);
        const trade = tradesData.find((trade) => trade.SecurityId === _id);
        const reason = trade && trade.Status === 'Failed' ? 'Failed Trade' : ((maturityDate < currentDate && Status !== 'Inactive') ? 'Active after Maturity' : '');
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
      {/* Modal code can be added here */}
    </div>
  );
};

export default PostMaturityIssues;
