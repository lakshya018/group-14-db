import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './PostMaturityIssues.css';

const PostMaturityIssues = () => {
  const [postMaturityIssuesData, setPostMaturityIssuesData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get('https://mybond-production.up.railway.app/api/securities');
      const currentDate = new Date();

      const data = res.data.filter(({ MaturityDate, Status }) => {
        const maturityDate = new Date(MaturityDate);
        return Status === 'Active' && maturityDate < currentDate;
      }).map(({ _id, MaturityDate, ...rest }) => ({
        id: _id,
        MaturityDate: new Date(MaturityDate).toLocaleDateString(),
        ...rest,
      }));

      setPostMaturityIssuesData(data);
    };
    fetchData();
  }, []);

  const handleStatusUpdate = async (securityId, newStatus) => {
    try {
      await axios.put(`https://mybond-production.up.railway.app/api/securities/${securityId}`, { Status: newStatus });
      // Refresh the data after the update
      const updatedData = postMaturityIssuesData.map((security) =>
        security.id === securityId ? { ...security, Status: newStatus } : security
      );
      setPostMaturityIssuesData(updatedData);
    } catch (error) {
      console.error('Error updating status:', error);
    }
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
          />
        </div>
      </div>
    </div>
  );
};

export default PostMaturityIssues;
