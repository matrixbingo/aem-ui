/* eslint-disable multiline-ternary */
/* eslint-disable react/react-in-jsx-scope */
import React from 'react';
import {
  FormItem,
  Editable,
  Input,
  Select,
  Radio,
  DatePicker,
  ArrayItems,
  Space,
  Form,
} from '@formily/antd';
import { createSchemaField, ISchema, observer, useField, useForm } from '@formily/react';
import { toJS } from '@formily/reactive';
import { assign, cloneDeep, get, isEmpty, split } from 'lodash';
import { Form as FormProps } from '@formily/core';
import { Button, ButtonProps } from 'antd';
import { SwitchCard } from '../switch/switch-card';
import ConditionRules from '../single/condition-rules';
import './condition-rules-double.less';
import InputDefaultValue from '../input/input-default-value';

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
    InputDefaultValue,
  },
});

const createArray = (
  path = { root: 'root', rules: 'rules', relation: 'relation', type: 'type' },
  customizer: any,
  effects: any,
  removeCallBack: any,
): ISchema => {
  const { rules } = path;
  const _customizer = customizer || {} as any;
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
            customizer: {
              type: 'void',
              'x-component': 'ConditionRules',
              'x-component-props': { customizer: _customizer, hasAddition: false, isSingle: false, level: 2, path, effects, removeCallBack },
            },
          },
        },
        // properties: {
        //   addition: {
        //     type: 'void',
        //     title: '添加条目',
        //     'x-component': 'ArrayItems.Addition',
        //   },
        // },
      },
    },
  };
};

const createSchema = (
  path = {
    root: 'root',
    rules: 'rules',
    relation: 'relation',
    type: 'type',
    typeValue: 'rule',
  },
  customizer: ISchema,
  effects: any,
  removeCallBack: any,
): ISchema => {
  const { root, type, relation, typeValue } = path;
  const typeProps = isEmpty(type) ? {} : {
    [`${root}.${type}`]: {
      type: 'string',
      'x-decorator': 'FormItem',
      'x-component': 'InputDefaultValue',
      'x-component-props': { defaultValue: typeValue, style: { display: 'none' } },
      'x-decorator-props': { style: { display: 'none' } },
      // 'x-display': 'hidden',
    },
  };
  return {
    type: 'object',
    properties: {
      ...typeProps,
      [root]: {
        ...createArray(path, customizer, effects, removeCallBack),
      },
    },
  };
};

interface Path { root?: string; rules?: string; relation?: string; type?: string }

export interface ConditionRulesDoubleProps {
  customizer: ISchema;
  defaultValue?: any;
  singlePath?: Path;
  doublePath?: Path;
  buttonProps?: ButtonProps;
  effects?: any;
  removeCallBack?: any;
  isArray?: boolean;
}

const addition = (form: FormProps, size: number, doublePath: Path, singlePath: Path, defaultValue: any) => {
  const { root: doubleRoot = 'root', rules: doubleRules = 'rules' } = doublePath;
  const { rules: singleRules = 'rules' } = singlePath;
  const path = split(doubleRoot, '.') as any[];
  const rootPath = path.concat([doubleRules, size, singleRules]);
  form.setValuesIn(rootPath, [cloneDeep(defaultValue)]);
};

const getPath = (path, isArray, root = 'root') => {
  return isArray ? { ...path, root } : path;
};

const ConditionRulesDouble: React.FC<ConditionRulesDoubleProps> = observer((props) => {
  const form = useForm();
  const field = useField();

  const { singlePath: pathBase = {}, doublePath: pathRoot = {}, defaultValue = {}, customizer, buttonProps = { style: { width: '91%' } }, effects = {}, removeCallBack = {}, isArray = false } = props;
  const rootPath = isArray ? field.address.entire.toString().replace(/\./g, '_') : 'root';

  const singlePath = assign(
    { root: rootPath, rules: 'rules', relation: 'relation', type: 'type', typeValue: 'rule' },
    getPath(pathBase, isArray, rootPath),
  );
  const doublePath = assign(
    { root: rootPath, rules: 'rules', relation: 'relation', type: 'type', typeValue: 'rule' },
    getPath(pathRoot, isArray, rootPath),
  );

  const values = toJS(form.values);
  const { root, rules, relation } = doublePath;
  const size = get(values, [root, rules])?.length ?? 0;

  return (
    <Form form={form} labelCol={5} wrapperCol={16} className="condition-rules-double">
      <SwitchCard
        form={form}
        basePath={root}
        name={relation}
        isShow={size > 0}
        disabled={false}
        key={1}
      >
        <SchemaField schema={createSchema(singlePath, customizer, effects, removeCallBack)} />
        <Button type="dashed" onClick={() => addition(form, size, doublePath, singlePath, defaultValue)} {...buttonProps}>+  添加条件</Button>
      </SwitchCard>
    </Form>
  );
});

export default ConditionRulesDouble;
