import styled from "styled-components"
import { useSearchParams } from "react-router-dom"

import Filter from "./Filter"
import Product from "./Product"

const StyledProducts = styled.div`
  padding-inline: 3.2rem;
  padding-block: 3.2rem;
`

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 6.4rem;
  margin-top: 3.2rem;

  @media (min-width: 64em) {
    grid-template-columns: 1fr 1fr;
  }
  @media (min-width: 80em) {
    grid-template-columns: 1fr 1fr 1fr;
  }
`

export default function Products({ products }) {
  const [searchParams] = useSearchParams()

  // 1) filter by available type
  const filterValue = searchParams.get("type") || "all"

  let filteredProducts

  if (filterValue === "all") {
    filteredProducts = products
  }

  if (filterValue === "available") {
    filteredProducts = products.filter((product) => product.available)
  }
  return (
    <StyledProducts>
      <Filter
        filterField="type"
        options={[
          { value: "all", label: "All Products" },
          { value: "available", label: "Available Now" },
        ]}
      />
      <Grid>
        {filteredProducts.map((product) => (
          <Product key={product.id} product={product} />
        ))}
      </Grid>
    </StyledProducts>
  )
}
