---
title: code-editor
nav:
  title: 组件
  order: 3
---

## CodeEditor

```jsx | pure
<CodeEditor value={value} />
```

<code src="./demo/code-editor/code-editor-use.tsx" />

## CodeEditorCard

```jsx | pure
 <CodeEditorCard defaultValue={value} onChange={console.log} />
```

<code src="./demo/code-editor/code-editor-card-use.tsx" />

## PopoverCode

```jsx | pure
<PopoverCode value={value} title="title" />
```

<code src="./demo/code-editor/popover-code-use.tsx" />


## API

### CodeEditor

| 参数     | 说明                   | 类型                                             | 默认值                               |
| -------- | ---------------------- | ------------------------------------------------ | ------------------------------------ |
| value    | 内容                   | string                                           | -                                    |
| onChange | 输入框内容变化时的回调 | (value: string, event?: any) => void             | -                                    |
| mode     | 语言类型               | `javascript` \| `json` \| `java` \| 其他按需引入 | json                                 |
| toValue  | 类型转换               | (value: string                                   | ObjectType, mode: string) => string; |  defaultToValue
| theme    | 编辑框主题             | `monokai` \| 其他按需引入                        | monokai                              |

其他 Props https://github.com/securingsincity/react-ace/blob/main/docs/Ace.md


### CodeEditorCard

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

### PopoverCode

| 参数  | 说明            | 类型   | 默认值 |
| ----- | --------------- | ------ | ------ |
| value | 内容            | string | -      |
| title | Popover的 title | string | -      |

其他 Props https://github.com/securingsincity/react-ace/blob/main/docs/Ace.md
