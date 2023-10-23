import { assign, set } from 'lodash';

export interface ArrayCardsProps {
  title?: any;
  [k: string]: any;
}

export interface ArrayCardsColumnProps {
  [k: string]: any;
}

const defaultArrayTableConfig = {
  type: 'array',
  'x-decorator': 'FormItem',
  'x-component': 'ArrayCards',
  'x-component-props': {
  },
};

const defaultAdditionConfig = (additionTitle: any) => {
  return {
    properties: {
      add: {
        type: 'void',
        'x-component': 'ArrayTable.Addition',
        title: additionTitle,
      },
    },
  };
};

const createOperations = (arrayItemsProps: ArrayCardsProps, config: any, buttonProps = {}) => {
  const { index, remove, moveDown, moveUp } = config;
  const path = 'items.properties';
  if (index || remove || moveDown || moveUp) {
    if (index) {
      set(arrayItemsProps, `${path}.index`, { type: 'void', 'x-component': 'ArrayCards.Index', 'x-component-props': buttonProps });
    }
    if (remove) {
      set(arrayItemsProps, `${path}.remove`, { type: 'void', 'x-component': 'ArrayCards.Remove', 'x-component-props': buttonProps });
    }
    if (moveDown) {
      set(arrayItemsProps, `${path}.moveDown`, { type: 'void', 'x-component': 'ArrayCards.MoveDown', 'x-component-props': buttonProps });
    }
    if (moveUp) {
      set(arrayItemsProps, `${path}.moveUp`, { type: 'void', 'x-component': 'ArrayCards.MoveUp', 'x-component-props': buttonProps });
    }
  }
};

const createProperties = (arrayTableColumnProps: ArrayCardsColumnProps[]) => {
  const items = { type: 'object', properties: {} };
  arrayTableColumnProps.forEach((i) => {
    Object.entries(i).forEach(([k, v]) => {
      set(items.properties, [k], v);
    });
  });
  return items;
};

export const createArrayCards = (arrayItemsProps: ArrayCardsProps, arrayTableColumnProps: ArrayCardsColumnProps[], config?: { addition?: boolean; additionTitle?: any; index?: boolean; remove?: boolean; moveDown?: boolean; moveUp?: boolean; width?: number; operate?: boolean; buttonProps?: any }) => {
  config = assign({ addition: true, index: true, additionTitle: '添加条目', remove: true, moveDown: false, moveUp: false, width: 80, operate: true, buttonProps: {} }, config);
  const { addition, additionTitle, operate, buttonProps } = config;
  arrayItemsProps = { ...defaultArrayTableConfig, ...arrayItemsProps };
  arrayItemsProps = addition ? { ...arrayItemsProps, ...defaultAdditionConfig(additionTitle) } : arrayItemsProps;
  const items = createProperties(arrayTableColumnProps);
  set(arrayItemsProps, 'items', items);
  operate && createOperations(arrayItemsProps, config, buttonProps);
  return arrayItemsProps;
};
