import {
  onSelectFilterProp,
  searchFilter,
} from "@/components/SearchModal/SearchModal.Types"
import * as S from "./SearchInputFilter.Styles"
import { MenuItem, Select } from "@mui/material"
import { useCallback, useEffect, useRef, useState } from "react"

const SearchInputFilter = ({ onSelectFilter }: onSelectFilterProp) => {
  const handleClickFilter = (filter: searchFilter) => {
    onSelectFilter(filter)
  }
  const [isLoading, setIsLoading] = useState(true)

  const customSelectRef = useRef<HTMLDivElement>(null)
  const selectButtonRef = useRef<HTMLButtonElement>(null)
  const selectedValueRef = useRef<HTMLSpanElement>(null)

  const selectCurrent = customSelectRef.current
  const buttonCurrent = selectButtonRef.current
  const selectedValueCurrent = selectedValueRef.current

  console.log(selectCurrent, buttonCurrent, selectedValueCurrent)

  const handleClickSelect = useCallback(() => {
    if (!selectCurrent || !buttonCurrent) {
      return
    }
    selectCurrent.classList.toggle("active")
    buttonCurrent.setAttribute(
      "aria-expanded",
      buttonCurrent.getAttribute("aria-expanded") === "true" ? "false" : "true",
    )
  }, [selectCurrent, buttonCurrent])

  const handleClickOption = useCallback(
    (e) => {
      if (!selectedValueCurrent || !selectCurrent) {
        return
      }
      const { target } = e
      if (target.targetclientX !== 0 && target.clientY !== 0) {
        selectedValueCurrent.textContent = target.textContent
        selectCurrent.classList.remove("active")
      }
    },
    [selectedValueCurrent, selectCurrent],
  )

  return (
    <S.SearchFilterSelectContainer
      ref={customSelectRef}
      onClick={() => {
        setIsLoading(false)
      }}
    >
      <S.SearchFilterSelectButton
        ref={selectButtonRef}
        onClick={handleClickSelect}
        role="combobox"
        aria-labelledby="select button"
        aria-haspopup="listbox"
        aria-expanded="false"
        aria-controls="select-dropdown"
      >
        <S.SearchFilterButtonSelectedValue ref={selectedValueRef}>
          전체
        </S.SearchFilterButtonSelectedValue>
        <S.SearchFilterSelectButtonArrow></S.SearchFilterSelectButtonArrow>
      </S.SearchFilterSelectButton>

      <S.SearchFilterDropdownList role="listbox">
        <S.SearchFilterDropdownOption
          role="option"
          onClick={handleClickOption}
        >
          <S.SearchFilterDropdownInput
            type="radio"
            id="all"
            name="search-filter"
          ></S.SearchFilterDropdownInput>
          <S.SearchFilterDropdownLabel>전체</S.SearchFilterDropdownLabel>
        </S.SearchFilterDropdownOption>

        <S.SearchFilterDropdownOption
          role="option"
          onClick={handleClickOption}
        >
          <S.SearchFilterDropdownInput
            type="radio"
            id="users"
            name="search-filter"
          ></S.SearchFilterDropdownInput>
          <S.SearchFilterDropdownLabel>사용자</S.SearchFilterDropdownLabel>
        </S.SearchFilterDropdownOption>

        <S.SearchFilterDropdownOption
          role="option"
          onClick={handleClickOption}
        >
          <S.SearchFilterDropdownInput
            type="radio"
            id="users"
            name="search-filter"
          ></S.SearchFilterDropdownInput>
          <S.SearchFilterDropdownLabel>포스트</S.SearchFilterDropdownLabel>
        </S.SearchFilterDropdownOption>
      </S.SearchFilterDropdownList>
    </S.SearchFilterSelectContainer>

    // <S.SearchSelectedFilterContainer
    //   onChange={(e) => onSelectFilter(e.target.value as searchFilter)}
    // >
    //   <S.SearchFilterOption onSelect={() => handleClickFilter("all")}>
    //     전체
    //   </S.SearchFilterOption>
    //   <S.SearchFilterOption onClick={() => handleClickFilter("users")}>
    //     사용자
    //   </S.SearchFilterOption>
    //   <S.SearchFilterOption onClick={() => handleClickFilter("posts")}>
    //     포스트
    //   </S.SearchFilterOption>
    // </S.SearchSelectedFilterContainer>
  )
}

export default SearchInputFilter
