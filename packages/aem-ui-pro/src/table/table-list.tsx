import ProTable, { ProTableProps } from '@ant-design/pro-table';
import { Spin } from 'antd';
import React, { FC, PropsWithChildren } from 'react';

export interface TableListProps extends ProTableProps<any, any> {
  loading?: boolean;
}

type ParamsType = Record<string, any>;

const TableList: FC<PropsWithChildren<TableListProps>> = <DataType extends Record<string, any>, Params extends ParamsType = ParamsType, ValueType = 'text'>({ loading = false, ...rest }) => {
  return (
    <Spin spinning={loading}>
      <ProTable<DataType, Params, ValueType> {...rest} />
    </Spin>
  );
};

TableList.defaultProps = {
  rowKey: 'id',
  dateFormatter: 'string',
  tableLayout: 'fixed',
  scroll: { x: 1300 },
  search: { defaultCollapsed: false, optionRender: (searchConfig, formProps, dom) => [...dom.reverse()] },
};

export default TableList;
