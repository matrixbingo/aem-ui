import './aem-plus';

// card
export { default as CollapsibleCard } from './components/card/collapsible-Card';
// code-editor
export { default as CodeEditor } from './components/code-editor/code-editor';
export { default as PopoverCode } from './components/code-editor/popover-code/popover-code';

// date-picker
export { default as DatePickerFormat } from './components/date-picker/date-picker-format';
export { default as RangePickerFormat } from './components/date-picker/range-picker-format';

// descriptions
export { default as DescriptionsPlus } from './components/descriptions/descriptions-plus';

export { default as View } from './components/view/view';
export { default as TextAreaJson } from './components/textarea-json/textarea-json';
export { default as SelectSingle } from './components/select/select-single';
export { default as SelectMultiple } from './components/select/select-multiple';
export { default as StarLabel } from './components/label/star-label';
export { default as DescriptionsLabel } from './components/label/descriptions-label';

export { default as OmitTipLabel } from './components/label/omit-tip-label';
export { default as InputRange } from './components/input/input-range';

export { default as MaskCloseModal } from './components/modal/mask-close-modal';
// export { default as CodeEditor } from '@/components/aem-ui/CodeEditor/CodeEditor';

import {
  createBaseButtons,
  CreateButtonsProps,
  createBaseTabs,
  CreateBaseTabsProps,
  createStart,
  CreateStartProps,
} from './components/util/create-ant';

export { default as AjaxTabs } from './components/tabs/ajax-tabs';
export { default as BaseTabs } from './components/tabs/base-tabs';
export { default as InputForm } from './components/input/InputForm';
export { default as InputAddonBefore } from './components/input/input-addon-before';

export { createBaseButtons, createBaseTabs, createStart };
export type { CreateButtonsProps, CreateBaseTabsProps, CreateStartProps };
