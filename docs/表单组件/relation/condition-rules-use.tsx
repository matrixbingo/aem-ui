import React from 'react';
import { Space as AntdSpace, SpaceProps } from 'antd';
import {
  FormItem,
  Editable,
  Input,
  Select,
  Radio,
  DatePicker,
  ArrayItems,
  FormButtonGroup,
  Submit,
  Space,
  useFormLayout,
} from '@formily/antd';
import { createForm, Form } from '@formily/core';
import { FormProvider, createSchemaField, observer } from '@formily/react';
import { delay } from 'lodash';
import { ConditionRules } from 'aem-ui-formily';

const item = { name: '2323', position: 1, type: 3 };

const data = { condition: { array: [{ appKey: '11' }, { appKey: '22' }] } };

export const SpaceDea: React.FC<React.PropsWithChildren<SpaceProps>> = (props) => {
  const layout = useFormLayout();
  return React.createElement(AntdSpace, {
    size: props.size ?? layout?.spaceGap,
    ...props,
  });
};

const SchemaField = createSchemaField({
  components: {
    FormItem,
    Editable,
    DatePicker,
    Space,
    Radio,
    Input,
    Select,
    ArrayItems,
    ConditionRules,
    SpaceDea,
  },
});

const form = createForm();

const customizer = {
  id: {
    type: 'string',
    required: true,
    'x-decorator': 'FormItem',
    'x-component': 'Input',
  },
  name: {
    type: 'string',
    'x-decorator': 'FormItem',
    'x-component': 'Input',
  },
  value: {
    type: 'string',
    'x-decorator': 'FormItem',
    'x-component': 'Input',
  },
};

const schema = {
  type: 'object',
  properties: {
    container: {
      type: 'void',
      'x-component': 'ConditionRules',
      'x-component-props': { customizer, path: { root: 'root111', typeValue: 'rules_relation', type: '' } }
    },
  },
};

// delay(()=>{
//   // form.setValues({array: [item]});
//   // form.setValuesIn('array.0.container.array.0', item);
//   // form.setValuesIn('array.0.container.array.0.container.array.0', item);

//   form.setValues(data);
// }, 2000);

export default observer(() => {
  const onSubmit = (data) => {
    console.log(data, JSON.stringify(data));
  };

  return (
    <FormProvider form={form}>
      <SchemaField schema={schema} />
      <FormButtonGroup>
        <Submit onSubmit={onSubmit}>提交</Submit>
      </FormButtonGroup>
    </FormProvider>
  );
});
