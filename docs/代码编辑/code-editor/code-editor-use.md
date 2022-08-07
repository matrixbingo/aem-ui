# code-editor

`代码编辑`


## 代码演示

### 基础用法

<code src="./code-editor-use.tsx" />


## API

```jsx | pure
<CodeEditor value={value} />
```

#### Params

| 参数     | 说明                   | 类型                                             | 默认值                               |
| -------- | ---------------------- | ------------------------------------------------ | ------------------------------------ |
| value    | 内容                   | string                                           | -                                    |
| onChange | 输入框内容变化时的回调 | (value: string, event?: any) => void             | -                                    |
| mode     | 语言类型               | `javascript` \| `json` \| `java` \| 其他按需引入 | json                                 |
| toValue  | 类型转换               | (value: string                                   | ObjectType, mode: string) => string; |  defaultToValue
| theme    | 编辑框主题             | `monokai` \| 其他按需引入                        | monokai                              |

其他 Props https://github.com/securingsincity/react-ace/blob/main/docs/Ace.md

