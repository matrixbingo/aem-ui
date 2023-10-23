import { assign, isEmpty, isObject, set } from 'lodash';
import { configType, defaultConfig, transformItem } from './common';

export interface ArrayTabsProps {
  title?: any;
  [k: string]: any;
}

export interface ArrayTabsColumnProps {
  [k: string]: any;
}

const defaultArrayTabsConfig = {
  type: 'array',
  'x-decorator': 'FormItem',
  'x-component': 'ArrayTabs',
  'x-component-props': { style: { width: '91%' } },
};

const createProperties = (arrayTableColumnProps: ArrayTabsColumnProps, isStringArray = true, itemConfig) => {
  const items = isStringArray ? transformItem('_', arrayTableColumnProps) : { type: 'object', properties: {} } as any;
  if (!isStringArray) {
    Object.entries(arrayTableColumnProps).forEach(([k, v]) => {
      set(items.properties, [k], transformItem(k, v, itemConfig));
    });
  }
  return items;
};

const isObjectArray = (arrayTableColumnProps: ArrayTabsColumnProps) => Object.values(arrayTableColumnProps)?.every((i) => !isEmpty(i) && isObject(i));

export const createArrayTabs = (arrayItemsProps: ArrayTabsProps, arrayTableColumnProps: ArrayTabsColumnProps, config?: { width?: number; itemConfig?: configType }) => {
  config = assign({ itemConfig: defaultConfig }, config);
  const { itemConfig } = config;
  const isStringArray = !isObjectArray(arrayTableColumnProps);
  arrayItemsProps = { ...defaultArrayTabsConfig, ...arrayItemsProps };
  const items = createProperties(arrayTableColumnProps, isStringArray, itemConfig);
  set(arrayItemsProps, 'items', items);
  return arrayItemsProps;
};
