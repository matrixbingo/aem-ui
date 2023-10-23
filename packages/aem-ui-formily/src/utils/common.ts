/* eslint-disable import/prefer-default-export */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { get, isArray, isBoolean, isEmpty, set } from 'lodash';

const selectList = ['Select', 'SelectMultiple', 'SelectSearchMultiple', 'SelectSearchSingle', 'SelectSingleArrayForm', 'SelectSingleDefaultValue', 'SelectTagsInputString', 'Cascader', 'DatePicker', 'DateSingleArrayForm'];

export interface configType { form?: { disabled?: boolean; exclude?: string[] }; item?: { disabled: string[] } }

export const defaultConfig = { form: { disabled: false, exclude: [] }, item: { disabled: [] } };

export const customizerTransformItem = (value: any) => {
  if (selectList.includes(value?.['x-component'])) {
    const props = get(value, 'x-component-props') ?? {};
    if(isEmpty(props.getPopupContainer)){
      set(props, 'getPopupContainer', (triggerNode: any) => {
        if (!isEmpty(props.triggerNodeId)) {
          return document.getElementById(props.triggerNodeId);
        }
        return triggerNode?.parentNode.parentNode.parentNode.parentNode;
      });
    }
    set(value, 'x-component-props', props);
  }
};

export const transformItem = (key: any, value: any, config: configType = defaultConfig, customizer: (item: any) => void = customizerTransformItem) => {
  if (isEmpty(value?.type)) {
    set(value, 'type', 'string');
  }
  if (value?.type !== 'void' && isEmpty(value?.['x-decorator'])) {
    set(value, 'x-decorator', 'FormItem');
  }
  if (isBoolean(config?.form?.disabled) && config?.form?.disabled) {
    if (!(config?.form?.exclude ?? []).includes(key)) {
      set(value, 'x-disabled', config?.form?.disabled);
    }
  }
  if (isArray(config?.item?.disabled) && !isEmpty(config?.item?.disabled)) {
    if (config?.item?.disabled.includes(key)) {
      set(value, 'x-disabled', true);
    }
  }
  customizer(value);
  return value;
};

export const transformProperties = (properties: Record<any, any>, config: configType = defaultConfig, customizer: (item: any) => void = customizerTransformItem) => {
  if (!isEmpty(properties)) {
    Object.entries(properties).forEach(([k, v]) => {
      transformItem(k, v, config, customizer);
    });
  }
  return properties;
};

const assembleItem = (value: any, triggerNodeId: string) => {
  if (selectList.includes(value?.['x-component'])) {
    const props = get(value, 'x-component-props') ?? {};
    set(value, 'x-component-props', set(props, 'triggerNodeId', triggerNodeId));
  }
};

export const assembleProperties = (properties: Record<any, any>, config: { triggerNodeId?: string }) => {
  const { triggerNodeId } = config;
  if (!isEmpty(properties) && !isEmpty(triggerNodeId)) {
    Object.values(properties).forEach((v) => {
      assembleItem(v, triggerNodeId ?? '');
    });
  }
  return properties;
};
