# code-editor-card

`代码编辑`


## 代码演示

### 基础用法

<code src="./code-editor-card-use.tsx" />


## API

```jsx | pure
 <CodeEditorCard defaultValue={value} onChange={console.log} />
```

#### Params

| 参数         | 说明                   | 类型                                 | 默认值                               |
| ------------ | ---------------------- | ------------------------------------ | ------------------------------------ |
| defaultValue | 初始默认值             | string                               | -                                    |
| onChange     | 输入框内容变化时的回调 | (value: string, event?: any) => void | -                                    |
| contStyle    | CodeEditor容器 样式    | React.CSSProperties                  | -                                    |
| toValue      | 类型转换               | (value: string                       | ObjectType, mode: string) => string; |  defaultToValue
| cardProps    | antd Card Props        | CardProps                            |                                      |
| selectProps    | antd select Props       | SelectProps                            |                                      |

其他 Props https://github.com/securingsincity/react-ace/blob/main/docs/Ace.md

CardProps https://ant.design/components/card-cn/#Card

SelectProps https://ant.design/components/select-cn/#Select-props
