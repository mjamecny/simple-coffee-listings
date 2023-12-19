import { useSearchParams } from "react-router-dom"
import styled, { css } from "styled-components"

const StyledFilter = styled.div`
  display: flex;
  justify-content: center;
  gap: 1.2rem;
`

const FilterButton = styled.button`
  background-color: transparent;
  border: none;
  border-radius: 9px;
  padding-block: 0.8rem;
  padding-inline: 0.8rem;
  font-weight: 700;

  ${(props) =>
    props.active === "true" &&
    css`
      background-color: var(--color-grey);
    `}
`

export default function Filter({ filterField, options }) {
  const [searchParams, setSearchParams] = useSearchParams()
  const currentFilter = searchParams.get(filterField) || options.at(0).value

  function handleClick(value) {
    searchParams.set(filterField, value)
    setSearchParams(searchParams)
  }

  return (
    <StyledFilter>
      {options.map((option) => (
        <FilterButton
          key={option.value}
          onClick={() => handleClick(option.value)}
          active={`${(currentFilter === option.value).toString()}`}
          disabled={currentFilter === option.value}
        >
          {option.label}
        </FilterButton>
      ))}
    </StyledFilter>
  )
}
