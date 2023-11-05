import React from 'react';
import { Button } from 'antd';
import { toJS } from '@formily/reactive';
import { ArrayItems } from '@formily/antd-v5';
import { observer, useForm } from '@formily/react';
import { DeleteOutlined } from '@ant-design/icons';
import { cloneDeep, delay, get, isEmpty } from 'lodash';

interface ArrayAddBtnProps {
  level: number;
  path: Record<string, string>;
  effects?: any;
  removeCallBack?: any;
}

const RemoveButton: React.FC<ArrayAddBtnProps> = observer(({ level, path, effects, removeCallBack }) => {
  const arrayObj = ArrayItems.useArray?.();
  const index = ArrayItems.useIndex?.() || 0;
  const form = useForm();

  const clearEmpty = () => {
    if (level === 2) {
      const _path = [path.root, path.rules];
      const rules = cloneDeep(toJS(form.getValuesIn(_path))) as any[];
      const _rules = [] as any[];
      if (!isEmpty(rules)) {
        rules.forEach((v, i) => {
          const arr = get(v, path.rules);
          if (!isEmpty(arr)) {
            _rules.push(v);
          }
        });
      }
      if (rules.length !== _rules.length) {
        form.deleteValuesIn(_path);
        if (isEmpty(_rules)) {
          form.setValuesIn(_path, []);
        } else {
          form.setValuesIn(_path, _rules);
        }
      }
    }
  };

  const onClick = () => {
    arrayObj?.field.remove(index);
    clearEmpty();
    delay(() => clearEmpty(), 500);
    const key = String(arrayObj?.field.address.entire);
    form.removeEffects(key);
    if (effects) {
      delay(() => form.addEffects(key, effects), 500);
    }
    removeCallBack && removeCallBack(form);
  };

  return (
    <Button danger type="link" shape="circle" onClick={onClick} icon={<DeleteOutlined />} style={{ marginLeft: 5 }} />
  );
});

export default RemoveButton;
