/* eslint-disable prefer-template */
/* eslint-disable import/prefer-default-export */
/* eslint-disable no-undef */
import React from 'react';
import { isArray, isEmpty, split } from 'lodash';
import { EditableTabTitle } from './editable-tab-title';

const getNodeIndex = (node: any) => {
  const { key } = node;
  return split(key, '-')?.at(-1);
};

export const createRenderTabBar = ({ title, getValue, onChangeTabTitle }) => (_props: any, DefaultTabBar: any) => {
  return (
    <DefaultTabBar {..._props}>
      {(node) => {
        if (isArray(node?.props?.children)) {
          const index = Number(getNodeIndex(node));
          const tab = title + `-${index + 1}`;
          const value = getValue(index);
          const text = value ?? tab;
          const child1 = node?.props?.children?.[0];
          const children = [] as any;
          if (React.isValidElement(child1)) {
            if (isEmpty(value)) {
              onChangeTabTitle(index, tab);
            }
            children.push(React.cloneElement(child1, {}, <EditableTabTitle text={text} onChange={(v) => onChangeTabTitle(index, v)} />));
          }
          children.push(node?.props?.children?.[1]);
          return React.cloneElement(node, {}, children);
        }
        return React.cloneElement(node, {}, node?.props?.children);
      }}
    </DefaultTabBar>
  );
};
