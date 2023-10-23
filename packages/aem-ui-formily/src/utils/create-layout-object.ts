const createLayoutObject = (properties, props: { formLayoutProps?: any; key?: string } = { formLayoutProps: {}, key: 'layoutObject' }) => {
  const { formLayoutProps = {}, key = 'layoutObject' } = props;
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
          ...properties,
        },
      },
    },
  };
};

export default createLayoutObject;
