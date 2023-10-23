# select-single-array-form

`返回[value]数组格式化值，默认初始化onchage值[value]`


## 代码演示

### 基础用法
```tsx

const options = [
  { value: 9, label: '北京' },
  { value: 2, label: 'v2 上海' },
  { value: '3', label: 'v3 广州' },
  { value: '4', label: 'v4 深圳' },
  { value: '5', label: '北凉' },
  { value: 6, label: '北大荒' },
];

import React, { useState } from 'react';
import { SelectSingleArrayForm } from 'aem-ui';

const Demo: React.FC = () => {
  const [value, setValue] = useState([]);

  const onChange = (v) => {
    window.console.log('v---------------->', v);
    setValue(v);
  };

  return (
    <>
      <SelectSingleArrayForm value={value} onChange={onChange} options={options} />
    </>
  );
};

export default Demo;

```


## API

```jsx | pure
<InputNumberSingleArrayForm onChange={onChange} options={options} />
```


### Params
| 参数     | 说明               | 类型                                        | 默认值 | 必填 |
| -------- | ------------------ | ------------------------------------------- | ------ | ---- |
| value    | 选择内容           | number[]  \|  string[]                      | 无     | 否   |
| onChange | 框内容变化时的回调 | (value: number[]       \| string[]) => void | 否     |      |

SelectProps https://ant.design/components/select-cn/#Select-props
