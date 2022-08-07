# modal-editor

`默认设置`

## 代码演示

### 基础用法

<code src="./modal-editor-use.tsx" />


## API

```jsx | pure
  <ModalEditor button={{ children:"编辑1" }}  title="ModalEditor" onSubmit={onSubmit} onClick={() => window.console.log('onClick')} onCancel={() => window.console.log('onCancel')}>
    do something...
</ModalEditor>
```

```jsx | pure
  <ModalEditor button={{ children:"编辑2" }}  title="ModalEditor" onOk={()=>{}}>
    do something...
</ModalEditor>
```


### Params

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
