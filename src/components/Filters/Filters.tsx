import { FC, useState } from "react";
import { SelectComponent } from "./Select";
import { FiltersContainer, ResetButton } from "./Filters.styled";
import { useDispatch, useSelector } from "react-redux";
import {
  selectSortedPrices,
  selectSortedLanguages,
  selectFiltered,
} from "../../redux/selectors";
import { levelsOptions } from "../../constants/levelsOptions";
import {
  setFiltersOff,
  setLanguageAction,
  setLevelAction,
  setPriceAction,
} from "../../redux/slices/teachers/teachersSlice";
import { LuFilterX } from "react-icons/lu";

export const Filters: FC = () => {
  const dispatch = useDispatch();
  const languages = useSelector(selectSortedLanguages);
  const prices = useSelector(selectSortedPrices);
  const isFiltered = useSelector(selectFiltered);

  const [language, setLanguage] = useState("choose");
  const [level, setLevel] = useState("choose");
  const [price, setPrice] = useState("choose");

  const onSelectLanguage = (value: string) => {
    setLanguage(value);
    dispatch(setLanguageAction(value));
  };
  const onSelectLevel = (value: string) => {
    setLevel(value);
    dispatch(setLevelAction(value));
  };
  const onSelectPrice = (value: string) => {
    setPrice(value);
    dispatch(setPriceAction(value));
  };

  const resetFilters = () => {
    dispatch(setFiltersOff());
    setLanguage("choose");
    setLevel("choose");
    setPrice("choose");
  };

  return (
    <FiltersContainer>
      <SelectComponent
        selected={language}
        onSelect={onSelectLanguage}
        selectName="Languages"
        options={languages}
      />
      <SelectComponent
        selected={level}
        onSelect={onSelectLevel}
        selectName="Level of knowledge"
        options={levelsOptions}
      />
      <SelectComponent
        selected={price}
        onSelect={onSelectPrice}
        selectName="Price"
        options={prices}
      />

      <ResetButton
        type="button"
        disabled={!isFiltered}
        aria-label="reset filters"
        onClick={resetFilters}
      >
        <LuFilterX size={28} />
        Reset filters
      </ResetButton>
    </FiltersContainer>
  );
};
