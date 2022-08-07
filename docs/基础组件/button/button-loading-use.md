# button-loading

`加载按钮`


## 代码演示

### 基础用法
<code src="./button-loading-use.tsx" />


## API
```jsx | pure
  <ButtonLoading type="link" onClick={onClick} timeout={3000}>
    ButtonLoading
  </ButtonLoading>
```


### Params
| 参数       | 说明             | 类型                                | 默认值 |
| --------  | ---------------- | ----------------------------------- | ------ |
| timeout   | loading毫秒     | number                                | 2000  |
| onClick   | 点击按钮时的回调 | (event) => void                      | -      |

其他 ButtonProps https://ant.design/components/button-cn/#API
