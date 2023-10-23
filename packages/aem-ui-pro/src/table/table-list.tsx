import React, { PropsWithChildren } from 'react';
import ProTable, { ProTableProps } from '@ant-design/pro-table';
import { Spin } from 'antd';
import { isBoolean } from 'lodash';
import './table-list.less';

export interface TableListProps extends ProTableProps<any, any> {
  loading?: boolean;
  cardBodyGap?: boolean;
}

type ParamsType = Record<string, any>;

const TableList: React.FC<PropsWithChildren<TableListProps>> = <DataType extends Record<string, any>, Params extends ParamsType = ParamsType, ValueType = 'text'>({ loading = false, cardBodyGap = true, search = {}, options = {}, ...rest }) => {
  const _searchConfig = isBoolean(search) ? search : { defaultCollapsed: false, optionRender: (searchConfig, formProps, dom) => [...dom.reverse()], ...search } as any;

  if (cardBodyGap) {
    return (
      <Spin spinning={loading}>
        <ProTable<DataType, Params, ValueType> search={_searchConfig} options={{ setting: { listsHeight: 400 }, ...options }} {...rest} />
      </Spin>
    );
  }
  return (
    <Spin spinning={loading}>
      <div className="aem-ui-table-list">
        <ProTable<DataType, Params, ValueType> search={_searchConfig} options={{ setting: { listsHeight: 400 }, ...options }} {...rest} />
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
