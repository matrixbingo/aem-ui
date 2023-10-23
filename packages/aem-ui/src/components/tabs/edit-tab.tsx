/* eslint-disable no-plusplus */
/* eslint-disable multiline-ternary */
import { DeleteOutlined, FormOutlined } from '@ant-design/icons';
import { Input, Tabs } from 'antd';
import React, { useRef, useState } from 'react';

const { TabPane } = Tabs;

/**
 * 未使用
 * @param param0
 * @returns
 */
const EditableTabTitle = ({ text, onChange }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [value, setValue] = useState(text);

  const handleDoubleClick = () => {
    setIsEditing(true);
  };

  const handleBlur = () => {
    setIsEditing(false);
    onChange(value);
  };

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <div>
      {isEditing ? (
        <Input style={{ width: 150 }} value={value} onChange={handleChange} onBlur={handleBlur} />
      ) : (
        <span style={{ width: 150, display: 'inline-block' }}>{text}</span>
      )}
      <FormOutlined
        onClick={handleDoubleClick}
        style={{ marginLeft: 10, color: '#000', marginRight: 0, padding: 0 }}
      />
    </div>
  );
};

const EditTab = () => {
  const initialItems = [
    { label: 'Tab 1', children: 'Content of Tab 1', key: '1' },
    { label: 'Tab 2', children: 'Content of Tab 2', key: '2' },
    {
      label: 'Tab 3',
      children: 'Content of Tab 3',
      key: '3',
    },
  ];
  const [activeKey, setActiveKey] = useState(initialItems[0].key);
  const [items, setItems] = useState(initialItems);
  const newTabIndex = useRef(0);

  const onChange = (newActiveKey: string) => {
    setActiveKey(newActiveKey);
  };

  const add = () => {
    const newActiveKey = `newTab${newTabIndex.current++}`;
    const newPanes = [...items];
    newPanes.push({ label: 'New Tab', children: 'Content of new Tab', key: newActiveKey });
    setItems(newPanes);
    setActiveKey(newActiveKey);
  };

  const remove = (targetKey: string) => {
    console.log(
      '%c [ targetKey ]-184',
      'font-size:13px; background:#cfe91b; color:#ffff5f;',
      targetKey,
    );
    let newActiveKey = activeKey;
    let lastIndex = -1;
    items.forEach((item, i) => {
      if (item.key === targetKey) {
        lastIndex = i - 1;
      }
    });
    const newPanes = items.filter((item) => item.key !== targetKey);
    if (newPanes.length && newActiveKey === targetKey) {
      if (lastIndex >= 0) {
        newActiveKey = newPanes[lastIndex].key;
      } else {
        newActiveKey = newPanes[0].key;
      }
    }
    setItems(newPanes);
    setActiveKey(newActiveKey);
  };
  const handleRemove = (e: any, targetKey: string) => {
    e.preventDefault();
    e.stopPropagation();
    let newActiveKey = activeKey;
    let lastIndex = -1;
    items.forEach((item, i) => {
      if (item.key === targetKey) {
        lastIndex = i - 1;
      }
    });
    const newPanes = items.filter((item) => item.key !== targetKey);
    if (newPanes.length && newActiveKey === targetKey) {
      if (lastIndex >= 0) {
        newActiveKey = newPanes[lastIndex].key;
      } else {
        newActiveKey = newPanes[0].key;
      }
    }
    setItems(newPanes);
    setActiveKey(newActiveKey);
  };
  const handleTitleChange = (key, newTitle) => {
    const newTabs = [...items];
    const index = newTabs.findIndex((tab) => tab.key === key);
    newTabs[index].label = newTitle;
    setItems(newTabs);
  };

  const onEdit = (
    targetKey: React.MouseEvent | React.KeyboardEvent | string,
    action: 'add' | 'remove',
  ) => {
    if (action === 'add') {
      add();
    } else {
      remove(targetKey as any);
    }
  };
  return (
    <Tabs
      type="editable-card"
      onChange={onChange}
      activeKey={activeKey}
      onEdit={onEdit}
      // addIcon={<div>添加分类</div>}
    >
      {items.map((tab) => (
        <TabPane
          tab={(
            <EditableTabTitle
              text={tab.label}
              onChange={(newTitle) => handleTitleChange(tab.key, newTitle)}
            />
          )}
          key={tab.key}
          closeIcon={(
            <>
              <DeleteOutlined
                style={{ fontSize: 16, color: '#000', padding: 0 }}
                onClick={(e) => handleRemove(e, tab.key)}
              />
            </>
          )}
        >
          Content of Tab Pane {tab.key}
        </TabPane>
      ))}
    </Tabs>
  );
};

export default EditTab;
