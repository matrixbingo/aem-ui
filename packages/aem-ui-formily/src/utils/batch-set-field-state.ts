/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/consistent-type-assertions */
import { Field, Form, FormPath } from '@formily/core';
import { isArray, isEmpty } from 'lodash';

export type BatchSetFieldStateProps = (field: Field, path: FormPath) => void;

const batchSetFieldState = (form: Form, pathName: string[], customizer: BatchSetFieldStateProps) => {
  if (!isArray(pathName) || isEmpty(pathName)) {
    return;
  }
  const keys = pathName.join(',');
  form.query(`*(${keys})`).forEach((field, path) => {
    customizer(field as Field, path);
  });
};

export default batchSetFieldState;
