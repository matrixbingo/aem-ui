# mask-close-modal

`方便使用的modal，可自定义button`

## 代码演示

### 基础用法

<code src="./mask-close-modal-use.tsx" />


## API
```jsx | pure
<MaskCloseModal title="title" visible={visible} onCancel={() => setVisible(false)} />
```

### Params

| 参数           | 说明                                    | 类型                                                                | 默认值  | 必填 |
| -------------- | --------------------------------------- | ------------------------------------------------------------------- | ------- | ---- |
| title          | 标题                                    | ReactNode                                                           | ''      | 否   |
| size           | 尺寸                                    | 'small' \| 'normal' \| 'large'                                      | 'large' | 否   |
| loading        | loading,如果不传则内部维护              | boolean                                                             | false   |      |
| onCancel       | 取消的回调                              | () => void                                                          | number  | 否   |
| onSubmit       | 确定的回调,如果不传则默认不显示确定按钮 | (setLoading: React.Dispatch<React.SetStateAction<boolean>>) => void | number  | 否   |
| customerButton | 自定义按钮                              | (any, loading) => any                                               |         | 否   |

ModalProps https://ant.design/components/modal-cn/#API
