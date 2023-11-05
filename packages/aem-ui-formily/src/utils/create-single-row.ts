import { assign } from 'lodash';
import { configType, defaultConfig, transformProperties } from './common';

export const createSingleRow = (properties, props: { formLayoutProps?: any; key?: string; itemConfig?: configType } = { formLayoutProps: {}, key: 'layout', itemConfig: defaultConfig }) => {
  const { formLayoutProps = {}, key = 'layout', itemConfig = {} } = props;
  const _itemConfig = assign(defaultConfig, itemConfig);
  return {
    type: 'object',
    properties: {
      [String(key)]: {
        type: 'void',
        'x-component': 'FormLayout',
        'x-component-props': {
          labelCol: 3,
          wrapperCol: 21,
          ...formLayoutProps,
        },
        properties: {
          ...transformProperties(properties, _itemConfig),
        },
      },
    },
  };
};

export default createSingleRow;
