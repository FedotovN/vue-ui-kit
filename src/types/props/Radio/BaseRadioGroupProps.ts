import BaseRadioProps from './BaseRadioProps';

export default interface BaseRadioGroupProps {
  name: string;
  label?: string;
  items: Array<BaseRadioProps>;
  value?: BaseRadioProps;
  modelValue?: BaseRadioProps;
  showValue?: boolean;
  asColumn?: boolean;
  disabled?: boolean;
}
