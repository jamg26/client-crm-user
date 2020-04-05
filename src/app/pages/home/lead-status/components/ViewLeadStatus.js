import React, { useState, useEffect } from 'react';
import { getLeadStatus } from '../../../../services/leadStatus.service';
import { Table } from 'antd';

const ViewLeadStatus = (props) => {
  const [state, setState] = useState([]);
  useEffect(() => {
    const getLeadSource = async () => {
      const list = await getLeadStatus('R2PPfBhpaLA.');
      console.log(list);
      setState({
        columns: [
          {
            title: 'Action',
            render: (e) => 'actions here',
          },
          { title: 'Lead Status Name', dataIndex: 'leadStatusName' },
          {
            title: 'Is Active?',
            render: (row) => (row.active ? 'true' : 'false'),
          },
          {
            title: 'Assigned',
            render: (row) => `${list.data.length}`,
          },
        ],
        data: list.data,
      });
    };
    getLeadSource();
  }, []);

  return (
    <Table
      columns={state.columns}
      dataSource={state.data}
      rowKey={(row) => row.id}
    />
  );
};

export default ViewLeadStatus;
