import React, { useState, useEffect } from 'react';
import { getLeadSourceList } from '../../../../services/leadSource.service';
import { Table } from 'antd';

const ViewLeadSource = (props) => {
  const [state, setState] = useState([]);
  useEffect(() => {
    const getLeadSource = async () => {
      const list = await getLeadSourceList();
      console.log(list);
      setState({
        columns: [
          {
            title: 'Action',
            render: (e) => 'actions here',
          },
          { title: 'Source Name', dataIndex: 'leadSourceName' },
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

export default ViewLeadSource;
