# collapsible-card

`折叠面版`


## ✨ 依赖

- "@ant-design/pro-card": "^1.20.16"

## 📦 安装

```bash
$ npm install --save aem-ui-code-editor
# or
$ yarn add aem-ui-code-editor -S
```

## 代码演示

### 基础用法

```tsx
import React from 'react';
import { CollapsibleCard } from 'aem-ui-pro';

const Demo: React.FC = () => {

  return (
    <>
      <CollapsibleCard title="cart title">do something...</CollapsibleCard>
    </>
  );
};

export default Demo;
```


## API

```jsx | pure
<CollapsibleCard title="cart title">do something...</CollapsibleCard>
```

#### Params

| 说明             | 参数                       | 类型                | 默认值               |
| ---------------- | -------------------------- | ------------------- | -------------------- |
| collapsible      | 配置是否可折叠，受控时无效 | boolean             | true                 |
| headerBordered   | 页头是否有分割线           | boolean             | true                 |
| defaultCollapsed | 默认折叠, 受控时无效       | boolean             | false                |
| style            | React.CSSProperties        | React.CSSProperties | { marginBottom: 16 } |

其他 ProCardProps https://procomponents.ant.design/components/card#api


