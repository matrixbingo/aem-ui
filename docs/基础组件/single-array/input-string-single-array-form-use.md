# input-string-single-array-form

`返回['str']数组格式化值，默认初始化onchage值['str']`


## 代码演示

### 基础用法
```tsx
import React, { useState } from 'react';
import { InputStringSingleArrayForm } from 'aem-ui';

const Demo: React.FC = () => {
  const [value, setValue] = useState();

  const onChange = (v) => {
    window.console.log('v---------------->', v);
    setValue(v);
  };

  return (
    <>
      <InputStringSingleArrayForm value={value} onChange={onChange} />
    </>
  );
};

export default Demo;

```


## API

```jsx | pure
<InputNumberSingleArrayForm onChange={onChange} />
```


### Params
| 参数     | 说明                   | 类型                                        | 默认值   | 必填 |
| -------- | ---------------------- | ------------------------------------------- | -------- | ---- |
| value    | 输入内容               | number[]  \|  string[]                      | 无       | 否   |
| onChange | 输入框内容变化时的回调 | (value: number[]       \| string[]) => void | 否       |      |
| dataType | 数据类型               | 'string' \| 'number'                        | 'number' | 否   |

Props https://ant.design/components/input-cn/#API
