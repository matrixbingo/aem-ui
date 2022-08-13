# common-steps

`步骤`


## 代码演示

### 基础用法
<code src="./common-steps-use" />


## API
```jsx | pure
  <CommonSteps step={step} steps={steps} onSubmit={onSubmit} onCancel={onCancel} goStep={goStep} loading={false} colProps={{ span: 24, offset: 0 }}>
  <View visible={step === 0}>
    step 1
  </View>
  <View visible={step === 1}>
    step 2
  </View>
</CommonSteps>
```


### Params
| 参数     | 说明     | 类型     | 默认值 |
| -------- | -------- | -------- | ------ |
| onSubmit | 提交回调 | function | 无     |
| onCancel | 取消回调 | function | 无     |
| goStep   | 步骤回调 | function | 无     |
| loading  | 最大区间 | boolean  | 无     |

