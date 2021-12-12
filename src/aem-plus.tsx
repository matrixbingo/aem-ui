import React from 'react';
import { YForm } from 'aem-ui-forms';
import { YFormItemsType } from 'aem-ui-forms/lib/YForm/ItemsType';
import TextArea from 'antd/lib/input/TextArea';
import TreeSelectSingle, { TreeSelectSingleProps } from './components/tree-select/tree-select-single';
import GeneralSelect from './components/tag-select/general-select-type';
import { TagsSingleFrom } from './components/tag-select/tags-single';
import SelectMultiple from './components/select/select-multiple';
import TreeSelectSingleAjax, { TreeSelectSingleAjaxProps } from './components/tree-select/tree-select-single-ajax';
import DatePickerFormat, { DatePickerFormatProps } from './components/date-picker/date-picker-format';
import RangePickerFormat, { RangePickerFormatProps } from './components/date-picker/range-picker-format';
import InputForm, { InputFormProps } from './components/input/Input-form';
import InputStringNumber, { InputStringNumberProps } from './components/input/input-number';
import InputRange, { InputRangeProps } from './components/input/input-range';
// import TextAreaJson from '@/components/TextAreaJson/TextAreaJson';
// import GeneralSelect from '@/customTypes/GeneralSelectType';
// import { TagsSingleFrom } from '@/components/FromsIndex';

declare module 'aem-ui-forms/lib/YForm/ItemsType' {
  export interface YFormItemsTypeDefine {
    treeSelectSingle: { componentProps?: TreeSelectSingleProps};
    treeSelectSingleAjax: { componentProps?: TreeSelectSingleAjaxProps};
    tagsSingle: { componentProps?: {list: GeneralSelect.Item[]}};
    selectMultiple: { componentProps?: {list: GeneralSelect.Item[]}};
    datePickerFormat: { componentProps?: DatePickerFormatProps };
    rangePickerFormat: { componentProps?: RangePickerFormatProps };
    inputForm: { componentProps?: InputFormProps };
    inputStringNumber: { componentProps?: InputStringNumberProps };
    inputRange: { componentProps?: InputRangeProps };
  }
}

export const itemsType: YFormItemsType = {
  treeSelectSingle: { component: <TreeSelectSingle /> },
  treeSelectSingleAjax: { component: <TreeSelectSingleAjax /> },
  tagsSingle: { component: <TagsSingleFrom /> },
  selectMultiple: { component: <SelectMultiple /> },
  datePickerFormat: { component: <DatePickerFormat /> },
  rangePickerFormat: { component: <RangePickerFormat /> },
  inputForm: { component: <InputForm /> },
  inputStringNumber: { component: <InputStringNumber /> },
  inputRange: { component: <InputRange /> },
};

YForm.Config({ itemsType });
