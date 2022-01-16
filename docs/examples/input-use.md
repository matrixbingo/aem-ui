---
title: input
nav:
  title: 组件
  order: 3
---

# Input

## InputAddonBefore 固定前缀

```jsx | pure
<InputAddonBefore value={value} addonBefore={addonBefore} onChange={onChange} />
```

<code src="./demo/input/input-addon-before-use.tsx" />


## InputDefaultClear

#### 简化 Input，返回 string, 如果 disabled 为 ture，则清空 Form 对应数据

```jsx | pure
<InputDefaultClear value={value} onChange={onChange} disabled={disabled} />
```
<code src="./demo/input/input-default-clear-use.tsx" />

## InputRange 区间

```jsx | pure
<InputRange value={value} onChange={onChange} />
```
<code src="./demo/input/input-range-use.tsx" />


## InputRenderCustomer

#### 自定义输入和返回值
```jsx | pure
<InputRenderCustomer value={value} onChange={onChange} render={(v) => v.trim()} />
```
<code src="./demo/input/input-render-customer-use.tsx" />


## InputSearch
```jsx | pure
<InputSearch onSearch={onSearch} />
```
<code src="./demo/input/input-search-use.tsx" />

## InputSelectValue 有值和无值

```jsx | pure
 <InputSelectValue value={value} onChange={onChange} />
```

<code src="./demo/input/input-select-value.tsx" />

## InputStringNumber 返回数据类型

```jsx | pure
 <InputStringNumber onChange={onChange1} dataType="string" />
```
<code src="./demo/input/input-string-number-use.tsx" />

## API

### InputAddonBefore

| 参数             | 说明                   | 类型        | 默认值 | 必填 |
| ---------------- | ---------------------- | ----------- | ------ | ---- |
| value            | 输入内容               | string      | ''     | 否   |
| onChange         | 输入框内容变化时的回调 | function(e) | ''     | 否   |
| addonBeforeValue | 前半部分               | string      | ''     | 否   |

### InputAddonBefore

| 参数     | 说明                   | 类型        | 默认值 | 必填 |
| -------- | ---------------------- | ----------- | ------ | ---- |
| value    | 输入内容               | string      | ''     | 否   |
| onChange | 输入框内容变化时的回调 | function(e) | ''     | 否   |
| disabled | 前半部分               | string      | ''     | 否   |

### InputRange

| 参数         | 说明                   | 类型                                        | 默认值   | 必填 |
| ------------ | ---------------------- | ------------------------------------------- | -------- | ---- |
| value        | 输入内容               | number[]  \|  string[]                      | [1, 2]   | 否   |
| onChange     | 输入框内容变化时的回调 | (value: number[]       \| string[]) => void | 否       |      |
| dataType     | 数据类型               | 'string' \| 'number'                        | 'number' | 否   |
| defaultValue | 默认值                 | 'string' \| 'number'                        | [1, 2]   | 否   |

InputNumberProps https://ant.design/components/input-number-cn/#API

### InputRenderCustomer

| 参数     | 说明                   | 类型     | 默认值             | 必填 |
| -------- | ---------------------- | -------- | ------------------ | ---- |
| value    | 输入内容               | string   | -                  | 否   |
| onChange | 输入框内容变化时的回调 | function | (value: T) => void | 否   |
| input    | 入参回调               | function | (v) => v           | 否   |
| render   | 出参回调               | function | (v) => v           | 否   |

其他 InputProps https://ant.design/components/input-cn/#Input


### InputSearch

| 参数       | 说明                                             | 类型                     | 默认值                  | 必填 |
| ---------- | ------------------------------------------------ | ------------------------ | ----------------------- | ---- |
| onChange   | 输入框内容变化时的回调                           | function                 | (value: string) => void | 否   |
| allowClear | 可以点击清除图标删除内容                         | boolean                  | false                   | 否   |
| size       | 控件大小。注：标准表单内的输入框大小限制为 large | large \| middle \| small | -                       | 否   |

SearchProps https://ant.design/components/input-cn/#Input.Search

### InputSelectValue

| 参数     | 说明                   | 类型                        | 默认值             | 必填 |
| -------- | ---------------------- | --------------------------- | ------------------ | ---- |
| value    | 输入内容               | string                      | ''                 | 是   |
| onChange | 输入框内容变化时的回调 | function                    | (value: T) => void | 是   |
| void     | 无值时的标志           | string \| undefined \| null | undefined          | 是   |

其他 InputProps https://ant.design/components/input-cn/#Input

### InputStringNumber

| 参数     | 说明                   | 类型                 | 默认值          | 必填 |
| -------- | ---------------------- | -------------------- | --------------- | ---- |
| value    | 输入内容               | 'string' \| 'number' | '1'             | 否   |
| onChange | 输入框内容变化时的回调 | (value: string       | number) => void | 否   |
| dataType | 返回数据类型           | 'string' \| 'number' | 'number'        | 否   |

InputNumberProps https://ant.design/components/input-number-cn/#API
