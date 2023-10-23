import setFieldState from "./set-field-state";
import { Form } from '@formily/core';
import { set } from 'lodash';

const setFieldDisabled = (form: Form, config: Record<string, boolean>) => {
  const param = {} as any;
  Object.entries(config).forEach(([k, v]) => set(param, k, (field) => { field.disabled = v; }));
  setFieldState(form, param);
};

export default setFieldDisabled;
