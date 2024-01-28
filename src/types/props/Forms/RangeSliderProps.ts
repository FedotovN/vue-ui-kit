import SliderInputProps from './SliderInputProps';
export type RangeInputValue = {
  from: number;
  to: number;
};
export default interface RangeSliderProps
  extends Omit<SliderInputProps, 'modelValue' | 'value'> {
  minRange?: string | number;
  modelValue?: RangeInputValue;
  value?: RangeInputValue;
}
