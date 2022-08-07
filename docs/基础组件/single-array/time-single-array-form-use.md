# time-single-array-form

`返回[format]数组格式化值，默认初始化onchage当前时间`


## 代码演示

### 基础用法
```tsx
import React, { useState } from 'react';
import { TimeSingleArrayForm } from 'aem-ui';

const Demo: React.FC = () => {
  const [value, setValue] = useState('');

  const onChange = (v) => {
    window.console.log('v---------------->', v);
    setValue(v);
  };

  return (
    <>
      <TimeSingleArrayForm value={value} onChange={onChange} />
    </>
  );
};

export default Demo;

```


## API

```jsx | pure
<TimeSingleArrayForm onChange={onChange} />
```


### Params
| 参数     | 说明                   | 类型        | 默认值 | 必填 |
| -------- | ---------------------- | ----------- | ------ | ---- |
| value    | 输入内容               | string      | ''     | 否   |
| onChange | 输入框内容变化时的回调 | function(e) | ''     | 否   |
| format   | 日期格式               | string      | 'HH:mm:ss'     | 否   |

Props https://ant.design/components/time-picker-cn/#API

