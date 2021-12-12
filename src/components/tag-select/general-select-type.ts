import { ChangeEventHandler } from 'react';

/**
 * Radio，select，tag 可通用
 */
declare namespace GeneralSelect {
  interface Item {
    id: number | string;
    name: string;
    value: string;
  }

  interface Props {
    list: Item[];
    defaultId?: number | string;
  }

  interface RadioProps extends Props {
    onChange?: (K: Item | undefined, checked?: boolean) => any;
  }

  interface TagSingleProps extends Props {
    isPick?: boolean;
    onChange?: (K: Item | undefined, checked?: boolean) => any;
  }

  interface TagMultipleProps extends Props {
    defaultIds?: (number | string)[];
    onChange?: (list: Item[], item: Item, checked?: boolean) => any;
  }

  /**
   * 自定义from 组件
   */
  interface Customer {
    list?: Item[];
    onChange?: Function;
    value?: any; // string | ReadonlyArray<string> | number;
  }
}

export default GeneralSelect;
