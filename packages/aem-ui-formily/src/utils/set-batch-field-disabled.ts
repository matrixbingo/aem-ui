import { Form } from '@formily/core';
import { set } from 'lodash';
import setFieldState from './set-field-state';

const setBatchFieldDisabled = (form: Form, config: string[], disabled: boolean) => {
  const param = {} as any;
  config.forEach((k) => set(param, k, (field) => { field.disabled = disabled; }));
  setFieldState(form, param);
};

export default setBatchFieldDisabled;
