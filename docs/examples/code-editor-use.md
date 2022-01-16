---
title: code-editor
nav:
  title: 组件
  order: 3
---

## CodeEditor

```jsx | pure
<CodeEditor
    style={{ width: 800, height: 400 }}
    contStyle={{ width: 800, height: 400 }}
    value={value}
  />
```

<code src="./demo/code-editor/code-editor-use.tsx" />

## PopoverCode

```jsx | pure
<PopoverCode value={value} title="title" />
```

<code src="./demo/code-editor/popover-code-use.tsx" />


## API

### CodeEditor

| 参数     | 说明                   | 类型                                             | 默认值  |
| -------- | ---------------------- | ------------------------------------------------ | ------- |
| value    | 内容                   | string                                           | -       |
| onChange | 输入框内容变化时的回调 | function(e)                                      | -       |
| mode     | 语言类型               | `javascript` \| `json` \| `java` \| 其他按需引入 | json    |
| theme    | 编辑框主题             | `monokai` \| 其他按需引入                        | monokai |

其他 Props https://github.com/securingsincity/react-ace/blob/main/docs/Ace.md

### PopoverCode

| 参数  | 说明            | 类型   | 默认值 |
| ----- | --------------- | ------ | ------ |
| value | 内容            | string | -      |
| title | Popover的 title | string | -      |

其他 Props https://github.com/securingsincity/react-ace/blob/main/docs/Ace.md
