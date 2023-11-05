import React from 'react';
import { createForm } from '@formily/core';
import { createSchemaField, FormConsumer, FormProvider } from '@formily/react';
import { FormItem, Input, NumberPicker, ArrayTabs, FormButtonGroup, Submit } from '@formily/antd-v5';
import { FormilyUtil } from 'aem-ui-formily';
import { Label } from 'aem-ui';
import { Button } from 'antd';

const form = createForm();

const SchemaField = createSchemaField({
  components: {
    FormItem,
    Input,
    NumberPicker,
    ArrayTabs,
  },
});

const string_array = FormilyUtil.createArrayTabs({ title: '字符串数组', maxItems: 3, },
{
  required: true,
  'x-component': 'Input',
});

const schemaStr = {  type: 'object', properties: { string_array } };

window.console.log('schemaStr ---->', schemaStr);

const onTabClick = (key: string, event: MouseEvent) => {
  window.console.log('key, event ------->', key);
}

const renderTabBar = (props: any, DefaultTabBar: React.ComponentClass) => {
  window.console.log('props ----------->', props, DefaultTabBar);
  return <DefaultTabBar {...props} />;
}

const array = FormilyUtil.createArrayTabs({ title: '对象数组', maxItems: 3,  'x-component-props': { style: { width: '91%' }, onTabClick, renderTabBar }, },
{
  aaa: {
    title: 'AAA',
    required: true,
    'x-component': 'Input',
  },
  bbb: {
    title: 'BBB',
    required: true,
    'x-component': 'Input',
  },
});

const schemaObj = {  type: 'object', properties: { array }  };

window.console.log('schemaObj ---->', schemaObj);


const onClick = (data) => {
  console.log(form);
}

export default () => (
  <>
    <Label title="字符串数组"  />
    <FormProvider form={form as any}>
    <SchemaField schema={schemaStr as any} />
    <FormButtonGroup>
      <Submit onSubmit={console.log}>提交</Submit>
    </FormButtonGroup>
  </FormProvider>

  <Label title="对象数组"  />
  <FormProvider form={form as any}>
    <SchemaField schema={schemaObj as any} />
    <FormButtonGroup>
      <Submit onSubmit={console.log}>提交</Submit>
      <Button onClick={onClick}>onClick</Button>
    </FormButtonGroup>
  </FormProvider>
      <code>
        <pre>{JSON.stringify(schemaStr, null, 2)}</pre>
      </code>
  </>
);
