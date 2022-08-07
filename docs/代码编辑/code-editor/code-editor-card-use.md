# code-editor

`代码编辑`

## ✨ 依赖

- "common-toolkits": "^2.0.1",
- "react-ace": "^10.1.0",
- "react-copy-to-clipboard": "^5.1.0"


## 📦 安装

```bash
$ npm install --save aem-ui-code-editor
# or
$ yarn add aem-ui-code-editor -S
```


## 代码演示

### 基础用法

<code src="./code-editor-use.tsx" />


## API

```jsx | pure
<CodeEditor value={value} />
```


| 参数     | 说明                   | 类型                                                                                     | 默认值         |
| -------- | ---------------------- | ---------------------------------------------------------------------------------------- | -------------- |
| value    | 内容                   | string                                                                                   | -              |
| onChange | 输入框内容变化时的回调 | (value: string, event?: any) => void                                                     | -              |
| mode     | 语言类型               | `javascript` \| `json` \| `java` \| 其他按需引入                                         | json           |
| toValue  | 类型转换               | (value: string                                   \| ObjectType, mode: string) => string; | defaultToValue |
| theme    | 编辑框主题             | `monokai` \| 其他按需引入                                                                | monokai        |

其他 Props https://github.com/securingsincity/react-ace/blob/main/docs/Ace.md

