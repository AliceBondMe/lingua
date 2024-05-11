import { FC, useState } from "react";
import {
  Option,
  Options,
  Select,
  SelectContainer,
  SelectName,
  SelectWrapper,
} from "./Filters.styled";
import { IoIosArrowDown } from "react-icons/io";
import { nanoid } from "@reduxjs/toolkit";

interface SelectProps {
  selected: string;
  onSelect: (value: string) => void;
  selectName: string;
  options: string[];
}

export const SelectComponent: FC<SelectProps> = ({
  selected,
  onSelect,
  selectName,
  options,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const onSelectChange = (value: string) => {
    onSelect(value);
    toggleDropdown();
  };

  const toggleDropdown = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <SelectWrapper>
      <SelectName>{selectName}</SelectName>
      <SelectContainer>
        <Select onClick={toggleDropdown}>
          {selected} <IoIosArrowDown size={20} />
        </Select>

        {isOpen && (
          <Options>
            {options.map((item) => (
              <Option
                key={nanoid()}
                data-value={item}
                onClick={() => onSelectChange(item)}
              >
                {item}
              </Option>
            ))}
          </Options>
        )}
      </SelectContainer>
    </SelectWrapper>
  );
};
