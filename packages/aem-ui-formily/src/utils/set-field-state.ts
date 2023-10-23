import { Field, Form, FormPath } from '@formily/core';

export type SetFieldStateProps = { [k in string]: (field: Field, path: FormPath) => void };

const setFieldState = (form: Form, config: SetFieldStateProps) => {
  const keys = Object.keys(config).join(',');
  form.query(`*(${keys})`).forEach((field, path) => {
    Object.entries(config).forEach(([k, v]) => {
      if (path.segments.includes(k) || path.segments.join('.').includes(k)) {
        v(field as Field, path);
      }
    });
  });
};

export default setFieldState;
