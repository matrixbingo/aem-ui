/* eslint-disable multiline-ternary */
import React from 'react';
import { createSchemaField, ISchema, observer, useField, useForm } from '@formily/react';
import { toJS } from '@formily/reactive';
import { assign, get, isEmpty, isNumber } from 'lodash';
import { FormItem, Input, Select, FormLayout, Cascader, FormGrid, ArrayItems, Editable, Checkbox, Radio, DatePicker, NumberPicker, Space, Form, Switch } from '@formily/antd';
import { InputTrim, SelectSearchSingle, SelectSearchMultiple, InputRenderCustomer, InputStringSingleArrayForm, InputRange, SelectSingleDefaultValue, RangeDatePickerFormat, RangeTimePickerFormat, DateSingleArrayForm, TimeSingleArrayForm, OmitTipLabel, SelectMultiple, SelectTagsInputString, Label, InputNumberSingleArrayForm, InputDefaultValue, LabelDetail, TitleDetail, SelectSingleArrayForm, InputTooltip, SelectTags } from 'aem-ui';
import { PlusOutlined } from '@ant-design/icons';
import RemoveButton from './remove-button';
import { SwitchCard } from '../switch/switch-card';
import './condition-rules.less';

declare global {
  interface Window {
    FormilyComponentsSchemaField: any;
  }
}

const SchemaField = createSchemaField({
  components: {
    FormItem,
    Input,
    Select,
    FormLayout,
    Cascader,
    FormGrid,
    ArrayItems,
    Editable,
    Checkbox,
    Radio,
    DatePicker,
    NumberPicker,
    Space,
    Switch,
    InputTrim,
    SelectSearchSingle,
    SelectSearchMultiple,
    InputRenderCustomer,
    InputStringSingleArrayForm,
    InputRange,
    SelectSingleDefaultValue,
    RangeDatePickerFormat,
    RangeTimePickerFormat,
    DateSingleArrayForm,
    TimeSingleArrayForm,
    OmitTipLabel,
    SelectMultiple,
    SelectTagsInputString,
    SelectTags,
    Label,
    InputNumberSingleArrayForm,
    InputDefaultValue,
    LabelDetail,
    TitleDetail,
    SelectSingleArrayForm,
    InputTooltip,
    RemoveButton,
  },
});

const createRight = (level: number, path = { root: 'root', rules: 'rules', relation: 'relation', type: 'type' }, effects: any, removeCallBack: any) => {
  return {
    type: 'void',
    'x-component': 'Space',
    'x-component-props': {
      style: {
        marginLeft: 10,
      },
    },
    properties: {
      // add: {
      //   type: 'void',
      //   'x-decorator': 'FormItem',
      //   'x-component': 'ArrayItems.Addition',
      //   'x-component-props': {
      //     type: 'primary',
      //     shape: 'circle',
      //     size: 'small',
      //     icon: <PlusOutlined />,
      //   },
      // },
      remove: {
        type: 'void',
        'x-component': 'RemoveButton',
        'x-component-props': { level, path, effects, removeCallBack },
      },
    },
  };
};

const addSpace = (customizer: any) => {
  return {
    spaceVoid: {
      type: 'void',
      'x-decorator': 'FormItem',
      'x-decorator-props': {
        asterisk: true,
        feedbackLayout: 'none',
        size: 100,
      },
      'x-component': 'Space',
      properties: {
        ...customizer,
      },
    },
  };
};

const createArray = (customizer: any, path = { root: 'root', rules: 'rules', relation: 'relation', type: 'type' }, hasAddition = true, level: number, effects: any, removeCallBack: any): ISchema => {
  const { rules } = path;
  const _customizer = customizer || {} as any;
  const addition = hasAddition ? {
    type: 'void',
    title: '添加条目',
    'x-component': 'ArrayItems.Addition',
    'x-decorator-props': {
      style: { width: '100%' },
    },
  } : {};
  const right = createRight(level, path, effects, removeCallBack);
  return {
    type: 'object',
    properties: {
      [rules]: {
        type: 'array',
        'x-component': 'ArrayItems',
        'x-decorator': 'FormItem',
        items: {
          type: 'object',
          'x-decorator': 'ArrayItems.Item',
          properties: {
            ...addSpace(_customizer),
            right,
          },
        },
        properties: {
          addition,
        },
      },
    },
  };
};

const createSchema = (
  customizer: ISchema,
  path = {
    root: 'root',
    rules: 'rules',
    relation: 'relation',
    type: 'type',
    typeValue: 'rule',
    doubleType: 'type',
    doubleTypeValue: 'rules_relation',
  },
  isSingle = true,
  hasAddition = true,
  level: number,
  effects: any,
  removeCallBack: any,
): ISchema => {
  const { root, type, typeValue, rules, relation, doubleType, doubleTypeValue } = path;
  const doubleTypeProps = isEmpty(doubleType) ? {} : {
    [doubleType]: {
      type: 'string',
      required: true,
      'x-decorator': 'FormItem',
      'x-component': 'InputDefaultValue',
      'x-component-props': { defaultValue: doubleTypeValue, style: { display: 'none' } },
      'x-decorator-props': { style: { display: 'none' } },
    },
  };
  const typeProps = isEmpty(type) ? {} : {
    [`${root}.${type}`]: {
      type: 'string',
      required: true,
      'x-decorator': 'FormItem',
      'x-component': 'InputDefaultValue',
      'x-component-props': { defaultValue: doubleTypeValue, style: { display: 'none' } },
      'x-decorator-props': { style: { display: 'none' } },
    },
  };
  const properties = !isSingle ? {
    ...doubleTypeProps,
    '': {
      ...createArray(customizer, path, hasAddition, level, effects, removeCallBack),
    },
  } : {
    ...typeProps,
    [root]: {
      ...createArray(customizer, path, hasAddition, level, effects, removeCallBack),
    },
  };

  return {
    type: 'object',
    properties: {
      space: {
        type: 'void',
        'x-decorator': 'FormItem',
        'x-decorator-props': {
          asterisk: true,
          feedbackLayout: 'none',
        },
        'x-component': 'Space',
        properties,
      },
    },
  };
};

export interface ConditionRulesProps {
  customizer: ISchema;
  path?: { root?: string; rules?: string; relation?: string; type?: string };
  isSingle?: boolean;
  hasAddition?: boolean;
  level?: number;
  effects?: any;
  removeCallBack?: any;
}

const ConditionRules: React.FC<ConditionRulesProps> = observer((props) => {
  const { path: pathBase = {}, isSingle = true, hasAddition = true, customizer, level = 1, effects, removeCallBack } = props;

  const path = assign({ root: 'root', rules: 'rules', relation: 'relation', type: 'type', typeValue: 'rule', doubleType: 'type', doubleTypeValue: 'rules_relation' }, pathBase);
  const field = useField();
  const form = useForm();
  const values = toJS(form.values);
  const { root, rules, relation } = path;
  const index = ArrayItems.useIndex?.();
  const valuePath = isNumber(index) ? [root, rules, index || 0, rules] : [root, rules];
  const basePath = isNumber(index) ? [root, rules, index || 0] : [root];
  const size = get(values, valuePath)?.length ?? 0;

  return (
    <Form form={form} labelCol={5} wrapperCol={16} className="condition-rules">
      <SwitchCard
        form={form}
        basePath={basePath.join('.')}
        name={relation}
        isShow={isSingle ? size > 0 : size > 1}
        disabled={false}
        key={1}
      >
        <SchemaField schema={createSchema(customizer, path, isSingle, hasAddition, level, effects, removeCallBack)} basePath={field.address} />
      </SwitchCard>
    </Form>
  );
});

export default ConditionRules;
