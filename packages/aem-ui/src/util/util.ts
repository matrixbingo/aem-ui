import { isBoolean, isNumber } from 'lodash';

export const assertError = (props: any, keys: string[]) => {
  keys.forEach((key) => {
    const value = props[key];
    if (!isNumber(value) && !isBoolean(value) && !value) {
      throw new Error(`${key} is not existed!`);
    }
  });
};
