import cn from "classnames";
import Select, { StylesConfig, GroupBase } from "react-select";
import { SelectOption } from "../controls.types";
import { isMultiType } from "../Controls/Controls";
import { ActionMeta } from "react-select";

import styles from './CustomSelect.module.scss';


interface CustomSelectProps {
  className?: string;
  options: SelectOption[];
  isMulti: isMultiType;
  styles?: StylesConfig<  SelectOption, isMultiType, GroupBase<SelectOption>>
  placeholder: string;
  isClearable: boolean;
  isSearchable: boolean;
  value: SelectOption;
  onChange: ((newValue: unknown, actionMeta: ActionMeta<unknown>) => void) | undefined
}

export const CustomSelect: React.FC<CustomSelectProps> = ({
  className,
  options,
  isMulti,
  styles: selectStyles,
  placeholder,
  isClearable,
  isSearchable,
  value,
  onChange
  }) => {
  return (
    <Select
      className={cn(styles['select'], className)}
      styles={selectStyles}
      isMulti={isMulti}
      options={options}
      placeholder={placeholder}
      isClearable={isClearable}
      isSearchable={isSearchable}
      value={value}
      onChange={onChange}
    />
  )
}

