import { ArrayField } from '@formily/core';
import {
  observer,
  ReactFC,
  RecursionField,
  useField,
  useFieldSchema,
} from '@formily/react';
import { Badge, TabPaneProps, Tabs, TabsProps } from 'antd';
import React, { useState } from 'react';

interface IFeedbackBadgeProps {
  index: number;
}

const FeedbackBadge: ReactFC<IFeedbackBadgeProps> = observer((props) => {
  const field = useField<ArrayField>();
  const tab = `${field.title || 'Untitled'} ${props.index + 1}`;
  const errors = field.errors.filter((error) => error.address?.includes(`${field.address}.${props.index}`));
  if (errors.length) {
    return (
      <Badge size="small" className="errors-badge" count={errors.length}>
        {tab}
      </Badge>
    );
  }
  return <>{tab}</>;
});

export interface ArrayTabsProps extends Omit<TabsProps, 'tabPaneProps' | 'onEdit'> {
  tabPaneProps?: TabPaneProps;
  onEdit?: (...args) => void;
}

export const ArrayTabs: React.FC<React.PropsWithChildren<ArrayTabsProps>> = observer(
  (props) => {
    const { onEdit: onEditInput, tabPaneProps = {}, ...rest } = props;
    const field = useField<ArrayField>();
    const schema = useFieldSchema();
    const [activeKey, setActiveKey] = useState('tab-0');
    const value = Array.isArray(field.value) ? field.value : [];
    const dataSource = value?.length ? value : [{}];
    const onEdit = (targetKey: any, type: 'add' | 'remove') => {
      if (type == 'add') {
        const id = dataSource.length;
        if (field?.value?.length) {
          field.push(null);
        } else {
          field.push(null, null);
        }
        setActiveKey(`tab-${id}`);
        onEditInput?.(type, id, targetKey);
      } else if (type == 'remove') {
        const index = Number(targetKey.match(/-(\d+)/)?.[1]);
        if (index - 1 > -1) {
          setActiveKey(`tab-${index - 1}`);
        }
        onEditInput?.(type, index, targetKey);
        field.remove(index);
      }
    };

    return (
      <Tabs
        {...rest}
        activeKey={activeKey}
        onChange={(key) => {
          setActiveKey(key);
        }}
        type="editable-card"
        onEdit={onEdit}
        items={dataSource?.map((item, index) => {
          const items = Array.isArray(schema.items)
            ? schema.items[index]
            : schema.items;
          const key = `tab-${index}`;
          return {
            key,
            label: <FeedbackBadge index={index} />,
            forceRender: true,
            closable: index !== 0,
            children: items
              ? (
                <RecursionField schema={items} name={index} />
              )
              : null,
            ...tabPaneProps,
          };
        })}
      />
    );
  },
);

export default ArrayTabs;
