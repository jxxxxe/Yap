import styled from "styled-components"

export const SearchFilterSelectContainer = styled.div`
  position: relative;
  width: 10rem;
  max-width: 100%;
  font-size: 1.15rem;
  color: #000;
  margin-top: 3rem;

  &.active span:nth-child(2) {
    transform: rotate(180deg);
  }

  &.active ul {
    opacity: 1;
    visibility: visible;
    transform: scale(1);
  }
`

export const SearchFilterSelectButton = styled.button`
  width: 100%;
  font-size: 1.15rem;
  background-color: #fff;
  padding: 0.675em 1em;
  border: 1px solid #caced1;
  border-radius: 0.25rem;
  cursor: pointer;

  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const SearchFilterButtonSelectedValue = styled.span`
  text-align: left;
`

export const SearchFilterSelectButtonArrow = styled.span`
  border-left: 5px solid transparent;
  border-right: 5px solid transparent;
  border-top: 6px solid #000;
  transition: transform ease-in-out 0.3s;
`

export const SearchFilterDropdownList = styled.ul`
  position: absolute;
  list-style: none;
  width: 100%;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
  background-color: #fff;
  border: 1px solid #caced1;
  border-radius: 4px;
  padding: 10px;
  margin-top: 10px;
  max-height: 200px;
  overflow-y: auto;
  transition: 0.5s ease;

  transform: scaleY(0);
  opacity: 0;
  visibility: hidden;

  &:focus-within {
    box-shadow: 0 10px 25px black;
  }
  &::-webkit-scrollbar {
    width: 7px;
  }

  &::-webkit-scrollbar-track {
    background: #f1f1f1;
    border-radius: 25px;
  }

  &::-webkit-scrollbar-thumb {
    background: #ccc;
    border-radius: 25px;
  }

  li:hover,
  input:checked ~ label {
    background-color: #f2f2f2;
  }

  input:focus ~ label {
    background-color: #dfdfdf;
  }
`

export const SearchFilterDropdownOption = styled.li`
  position: relative;
  cursor: pointer;
  display: flex;
  gap: 1rem;
  align-items: center;
`

export const SearchFilterDropdownInput = styled.input`
  position: absolute;
  left: 0;
  opacity: 0;
`

export const SearchFilterDropdownLabel = styled.label`
  width: 100%;
  padding: 8px 10px;
  cursor: pointer;
`

// export const SearchSelectedFilterContainer = styled.select`
//   appearance: none;
//   /* safari */
//   -webkit-appearance: none;
//   /* other styles for aesthetics */
//   width: 10rem;
//   font-size: 1.15rem;
//   padding: 1rem;
//   background-color: #fff;
//   border: 1px solid #caced1;
//   border-radius: 0.25rem;
//   color: #000;
//   cursor: pointer;

//   position: relative;

//   &::before,
//   &::after {
//     --size: 0.3rem;
//     position: absolute;
//     content: "";
//     right: 1rem;
//     pointer-events: none;
//   }

//   &::before {
//     border-left: var(--size) solid transparent;
//     border-right: var(--size) solid transparent;
//     border-bottom: var(--size) solid black;
//     top: 40%;
//   }

//   &::after {
//     border-left: var(--size) solid transparent;
//     border-right: var(--size) solid transparent;
//     border-top: var(--size) solid black;
//     top: 55%;
//   }
// `

// export const SearchFilterOption = styled.option``
