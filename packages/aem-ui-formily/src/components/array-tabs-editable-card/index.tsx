/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import { Tabs, Badge } from 'antd';
import { ArrayField } from '@formily/core';
import {
  useField,
  observer,
  useFieldSchema,
  RecursionField,
  ReactFC,
  useForm,
} from '@formily/react';
import { TabPaneProps, TabsProps } from 'antd/lib/tabs';
import { createRenderTabBar } from './create-render-tab-bar';
import './array-tabs-editable-card.less';

interface IFeedbackBadgeProps {
  index: number;
}

const FeedbackBadge: ReactFC<IFeedbackBadgeProps> = observer(
  (props) => {
    const field = useField<ArrayField>();
    const tab = `${field.title || 'Untitled'} ${props.index + 1}`;
    const errors = field.errors.filter((error) => error?.address?.includes(`${field.address}.${props.index}`));
    if (errors.length) {
      return (
        <Badge size="small" className="errors-badge" count={errors.length}>
          {tab}
        </Badge>
      );
    }
    return <>{tab}</>;
  },
  {
    scheduler(request) {
      requestAnimationFrame(request);
    },
  },
);

export interface ArrayTabsEditableCardProps extends Omit<TabsProps, 'tabPaneProps' | 'onEdit' | 'renderTabBarProps'> {
  tabPaneProps?: TabPaneProps;
  onEdit?: (...args) => void;
  onActive?: (...args) => void;
  getValueCategoryPath? : (index: any) => string;
  renderTabBarProps?: { title: any; getValue: any; onChangeTabTitle: any};
}

export const ArrayTabsEditableCard: React.FC<React.PropsWithChildren<ArrayTabsEditableCardProps>> = observer(
  (props) => {
    const form = useForm();
    const field = useField<ArrayField>();
    const { onEdit: onEditInput, onActive, tabPaneProps = {}, getValueCategoryPath = (index) => `${field.address.entire.toString()}.${index}.value`, ...rest } = props;
    const { renderTabBarProps = { title: '分类', onChangeTabTitle: (index, value) => form.setValuesIn(getValueCategoryPath(index), value), getValue: (index) => form.getValuesIn(getValueCategoryPath(index)) } } = props;
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

    useEffect(() => {
      onActive?.(activeKey);
    }, [activeKey]);

    return (
      <div className="array-tabs-editable-card">
        <Tabs
          renderTabBar={createRenderTabBar(renderTabBarProps)}
          {...rest}
          activeKey={activeKey}
          onChange={(key) => {
            setActiveKey(key);
          }}
          type="editable-card"
          onEdit={onEdit}
        >
          {dataSource?.map((item, index) => {
            const items = Array.isArray(schema.items)
              ? schema.items[index]
              : schema.items;
            const key = `tab-${index}`;
            return (
              <Tabs.TabPane
                {...tabPaneProps}
                key={key}
                forceRender
                closable={index !== 0}
                tab={<FeedbackBadge index={index} />}
              >
                <RecursionField schema={items as any} name={index} />
              </Tabs.TabPane>
            );
          })}
        </Tabs>
      </div>
    );
  },
  {
    scheduler(request) {
      requestAnimationFrame(request);
    },
  },
);

export default ArrayTabsEditableCard;
