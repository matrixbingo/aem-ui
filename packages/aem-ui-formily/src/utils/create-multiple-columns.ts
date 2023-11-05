/* eslint-disable import/prefer-default-export */
/* eslint-disable @typescript-eslint/no-unused-vars */

import { assign } from 'lodash';
import { configType, defaultConfig, transformProperties } from './common';

export interface MultipleRowProps{
  formLayoutProps?: Record<string, any>;
  before?: Record<string, any>;
  after?: Record<string, any>;
  columns?: number;
  key?: string;
  gridProps?: Record<string, any>;
  itemConfig?: configType;
  xComponentResp?: Record<string, any>;
}

export const createMultipleRow = (properties: any, props: MultipleRowProps) => {
  const { formLayoutProps = {}, before = {}, after = {}, columns = 2, key = 'layout', gridProps = {}, itemConfig = {}, xComponentResp = {} } = props;
  const _itemConfig = assign(defaultConfig, itemConfig);
  const rs = {
    ...before,
    [key]: {
      type: 'void',
      'x-component': 'FormLayout',
      'x-component-props': {
        labelCol: 4,
        wrapperCol: 20,
        ...formLayoutProps,
      },
      properties: {
        grid: {
          type: 'void',
          'x-component': 'FormGrid',
          'x-component-props': {
            minColumns: columns,
            maxColumns: columns,
            ...gridProps,
          },
          properties: transformProperties(properties, _itemConfig),
          ...xComponentResp,
        },
      },
    },
    ...after,
  };
  return rs;
};

export const createMultipleSchema = (properties: any, props: MultipleRowProps = {}) => {
  return {
    type: 'object',
    properties: createMultipleRow(properties, { formLayoutProps: { labelCol: 6, wrapperCol: 18 }, ...props }),
  };
};

