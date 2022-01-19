---
title: modal
nav:
  title: 组件
  order: 3
---

## MaskCloseModal

```jsx | pure
<MaskCloseModal title="title" visible={visible} onCancel={() => setVisible(false)} />
```

<code src="./demo/modal/mask-close-modal-use.tsx" />

## ModalEditor

#### 默认设置

<code src="./demo/modal/modal-editor-use.tsx" />


## API

### MaskCloseModal

| 参数     | 说明                                    | 类型                                                                | 默认值  | 必填 |
| -------- | --------------------------------------- | ------------------------------------------------------------------- | ------- | ---- |
| title    | 标题                                    | ReactNode                                                           | ''      | 否   |
| size     | 尺寸                                    | 'small' \| 'normal' \| 'large'                                      | 'large' | 否   |
| loading  | loading,如果不传则内部维护              | boolean                                                             | false   |      |
| width    | 尺寸                                    | 如果需要自定义宽度则使用                                            | number  | 否   |
| onCancel | 取消的回调                              | () => void                                                          | number  | 否   |
| onSubmit | 确定的回调,如果不传则默认不显示确定按钮 | (setLoading: React.Dispatch<React.SetStateAction<boolean>>) => void | number  | 否   |

ModalProps https://ant.design/components/modal-cn/#API

### ModalEditor

| 参数     | 说明                            | 类型        | 默认值                                                                                                                          | 必填 |
| -------- | ------------------------------- | ----------- | ------------------------------------------------------------------------------------------------------------------------------- | ---- |
| button   | 组件属性                        | ButtonProps | { children: '' }                                                                                                                | 否   |
| title    | 标题                            | ReactNode   | ''                                                                                                                              | 是   |
| visible  | 对话框是否可见                  | boolean     | false                                                                                                                           | 是   |
| onClick  | 点击按钮回调                    | function    | () => void;                                                                                                                     | 否   |
| loading  | loading,如果不传则内部维护      | boolean     | false                                                                                                                           |      |
| onCancel | 点击对话框取消回调              | function    | () => void;                                                                                                                     | 否   |
| onSubmit | 点击对话框确定回调，开启loading | function    | (setVisible: React.Dispatch<React.SetStateAction<boolean>>, setLoading: React.Dispatch<React.SetStateAction<boolean>>) => void; | 否   |

ButtonProps https://ant.design/components/button-cn/#API

ModalProps https://ant.design/components/modal-cn/#API
