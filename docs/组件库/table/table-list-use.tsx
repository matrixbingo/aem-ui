
import React, { useRef } from 'react';
import { TableList } from 'aem-ui-pro';
import { ActionType, ProColumns } from '@ant-design/pro-table';

const columns: ProColumns[] = [
  {
    title: 'ID',
    dataIndex: 'id',
  },
  {
    title: '名称',
    dataIndex: 'name',
  },
];

const dataSource = [
  { id: 1, name: '张三'},
  { id: 2, name: '李四'},
  { id: 3, name: 'ton'},
  { id: 4, name: 'jerry'},
]


const Demo: React.FC = () => {

  const actionRef = useRef<ActionType>();

  return (
    <>
      <TableList
        columns={columns}
        actionRef={actionRef}
        pagination={false}
        dataSource={dataSource}
      />
    </>
  );
};

export default Demo;

