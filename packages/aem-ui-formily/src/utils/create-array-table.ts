import { assign, set } from 'lodash';
import { assembleProperties, configType, defaultConfig, transformProperties } from './common';

export interface ArrayTableProps {
  title?: any;
  [k: string]: any;
}

export interface ArrayTableColumnProps {
  columnProps: any;
  columnProperties: any;
  xComponentResp?: any;
}

const defaultArrayTableConfig = {
  type: 'array',
  'x-decorator': 'FormItem',
  'x-component': 'ArrayTable',
  'x-component-props': {
    pagination: { pageSize: 10 },
    scroll: { x: '100%' },
  },
};

const defaultAdditionConfig = (additionTitle: any, additionFormily = false) => {
  return {
    properties: {
      add: {
        type: 'void',
        'x-component': additionFormily ? 'ArrayTable.Addition' : 'ArrayTableAddition',
        title: additionTitle,
      },
    },
  };
};

const defaultOperationsConfig = (width: number) => {
  return {
    type: 'void',
    'x-component': 'ArrayTable.Column',
    'x-component-props': {
      title: '操作',
      dataIndex: 'operations',
      width,
      fixed: 'right',
    },
    properties: {
      item: {
        type: 'void',
        'x-component': 'FormItem',
        properties: {
        },
      },
    },
  };
};

const createOperations = (arrayTableProps: ArrayTableProps, config: any) => {
  const { remove, moveDown, moveUp, width } = config;
  const _defaultOperationsConfig = defaultOperationsConfig(width);
  if (remove || moveDown || moveUp) {
    if (remove) {
      set(_defaultOperationsConfig.properties.item.properties, 'remove', { type: 'void', 'x-component': 'ArrayTable.Remove' });
    }
    if (moveDown) {
      set(_defaultOperationsConfig.properties.item.properties, 'moveDown', { type: 'void', 'x-component': 'ArrayTable.MoveDown' });
    }
    if (moveUp) {
      set(_defaultOperationsConfig.properties.item.properties, 'moveUp', { type: 'void', 'x-component': 'ArrayTable.MoveUp' });
    }
    set(arrayTableProps.items.properties, 'operations', _defaultOperationsConfig);
  }
};

export const createArrayTable = (
  arrayTableProps: ArrayTableProps,
  arrayTableColumnProps: ArrayTableColumnProps[],
  config?: { addition?: boolean;
    additionTitle?: any;
    additionFormily?: boolean; // formilyjs 原生按钮
    remove?: boolean;
    moveDown?: boolean;
    moveUp?: false;
    width?: number;
    operate?: boolean;
    triggerNodeId?: string;
    itemConfig?: configType;
  },
) => {
  config = assign({ addition: true, additionTitle: '添加条目', additionFormily: false, remove: true, moveDown: false, moveUp: false, width: 80, operate: true, itemConfig: defaultConfig }, config);
  const { addition, additionTitle, additionFormily, operate, triggerNodeId, itemConfig } = config;
  const _itemConfig = assign(defaultConfig, itemConfig);
  arrayTableProps = { ...defaultArrayTableConfig, ...arrayTableProps };
  arrayTableProps = addition ? { ...arrayTableProps, ...defaultAdditionConfig(additionTitle, additionFormily) } : arrayTableProps;
  const items = { type: 'object', properties: {} };
  arrayTableColumnProps.forEach(({ columnProps, columnProperties, xComponentResp = {} }, i) => {
    set(items.properties, `column${i}`, {
      type: 'void',
      'x-component': 'ArrayTable.Column',
      'x-component-props': { ...columnProps },
      properties: { ...transformProperties(assembleProperties(columnProperties, { triggerNodeId }), _itemConfig), ...xComponentResp },
    });
  });
  set(arrayTableProps, 'items', items);
  operate && createOperations(arrayTableProps, config);
  return arrayTableProps;
};
