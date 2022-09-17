import React, { PropsWithChildren } from 'react';
import ProTable, { ProTableProps } from '@ant-design/pro-table';
import { Spin } from 'antd';
import './table-list.less';

export interface TableListProps extends ProTableProps<any, any> {
  loading?: boolean;
  cardBodyGap?: boolean;
}

type ParamsType = Record<string, any>;

const TableList: React.FC<PropsWithChildren<TableListProps>> = <DataType extends Record<string, any>, Params extends ParamsType = ParamsType, ValueType = 'text'>({ loading = false, cardBodyGap = true, ...rest }) => {
  if (cardBodyGap) {
    return (
      <Spin spinning={loading}>
        <ProTable<DataType, Params, ValueType> {...rest} />
      </Spin>
    );
  }
  return (
    <Spin spinning={loading}>
      <div className="aem-ui-table-list">
        <ProTable<DataType, Params, ValueType> {...rest} />
      </div>
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
