import { assign, isEmpty, set } from 'lodash';
import { configType, defaultConfig, transformItem } from './common';

export interface ArrayItemsProps {
  title?: any;
  [k: string]: any;
}

export interface ArrayItemsColumnProps {
  [k: string]: any;
}

const defaultArrayItemsConfig = {
  type: 'array',
  'x-decorator': 'FormItem',
  'x-component': 'ArrayItems',
  'x-component-props': { style: { width: '91%' } },
};

const defaultAdditionConfig = (additionTitle: any, additionFormily = false) => {
  return {
    properties: {
      add: {
        type: 'void',
        'x-component': additionFormily ? 'ArrayItems.Addition' : 'ArrayItemsAddition',
        title: additionTitle,
      },
    },
  };
};

const buttonStyle = {};

const createOperations = (arrayItemsProps: ArrayItemsProps, config: any, isStringArray = true, buttonProps = {}) => {
  const { remove, moveDown, moveUp } = config;
  const path = isStringArray ? 'items.properties' : 'items.properties.space.properties';
  if (remove || moveDown || moveUp) {
    if (remove) {
      set(arrayItemsProps, `${path}.remove`, { type: 'void', 'x-component': 'ArrayItems.Remove', 'x-component-props': buttonProps });
    }
    if (moveDown) {
      set(arrayItemsProps, `${path}.moveDown`, { type: 'void', 'x-component': 'ArrayItems.MoveDown', 'x-component-props': buttonProps });
    }
    if (moveUp) {
      set(arrayItemsProps, `${path}.moveUp`, { type: 'void', 'x-component': 'ArrayItems.MoveUp', 'x-component-props': buttonProps });
    }
  }
};

const createProperties = (arrayTableColumnProps: ArrayItemsColumnProps, spaceProps = {}, isStringArray = true, itemConfig) => {
  const items = isStringArray ? { type: 'void', 'x-component': 'Space', 'x-component-props': spaceProps, properties: {} } : { type: 'object', 'x-decorator': 'ArrayItems.Item', 'x-decorator-props': { type: 'divide', style: { borderBottom: 0 } }, properties: { space: { type: 'void', 'x-component': 'Space', 'x-component-props': spaceProps, properties: {} } } } as any;
  Object.entries(arrayTableColumnProps).forEach(([k, v]) => {
    if (isStringArray) {
      set(items.properties, [k], transformItem(k, v, itemConfig));
    } else {
      set(items.properties?.space?.properties, [k], transformItem(k, v, itemConfig));
    }
  });
  return items;
};

const size = (arrayTableColumnProps: ArrayItemsColumnProps) => {
  let length = 0;
  Object.values(arrayTableColumnProps)?.forEach((i) => {
    if (isEmpty(i?.type) || (!isEmpty(i?.type) && i?.type !== 'void')) {
      length += 1;
    }
  });
  return length;
};

export const createArrayItems = (
  arrayItemsProps: ArrayItemsProps,
  arrayTableColumnProps: ArrayItemsColumnProps,
  config?: { addition?: boolean;
    additionTitle?: string;
    additionFormily?: boolean; // formilyjs 原生按钮
    remove?: boolean;
    moveDown?: boolean;
    moveUp?: boolean;
    width?: number;
    operate?: boolean;
    isStringArray?: boolean;
    spaceProps?: any;
    buttonProps?: any;
    itemConfig?: configType; },
) => {
  config = assign({ addition: true, additionTitle: '添加条目', additionFormily: false, remove: true, moveDown: false, moveUp: false, width: 80, operate: true, isStringArray: false, buttonProps: { style: buttonStyle }, itemConfig: defaultConfig }, config);
  const { addition, additionTitle, additionFormily, spaceProps, isStringArray, buttonProps, operate, itemConfig } = config;
  const _itemConfig = assign(defaultConfig, itemConfig);
  const _isStringArray = size(arrayTableColumnProps) === 1 && isStringArray;
  arrayItemsProps = { ...defaultArrayItemsConfig, ...arrayItemsProps };
  arrayItemsProps = addition ? { ...arrayItemsProps, ...defaultAdditionConfig(additionTitle, additionFormily) } : arrayItemsProps;
  const items = createProperties(arrayTableColumnProps, spaceProps, _isStringArray, _itemConfig);
  set(arrayItemsProps, 'items', items);
  operate && createOperations(arrayItemsProps, config, _isStringArray, buttonProps);
  return arrayItemsProps;
};
