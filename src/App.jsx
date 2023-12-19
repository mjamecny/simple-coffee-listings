import styled from "styled-components"
import { useEffect, useState } from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom"

import Products from "./Products"

const StyledApp = styled.div`
  background: url("bg-cafe.jpg"), var(--color-black2);
  background-size: contain;
  background-repeat: no-repeat;
  display: flex;
  justify-content: center;
`

const Container = styled.div`
  width: 80%;
  margin: 0 auto;
  margin-block: 6.4rem;
  border-radius: 12px;
  background: url("vector.svg"), var(--color-black);
  background-repeat: no-repeat;
  background-position-x: right;
  background-position-y: 50px;
  padding-top: 6.4rem;
  padding-inline: 2.4rem;
`

const TextContainer = styled.div`
  max-width: 48rem;
  margin: 0 auto;
`

const Heading = styled.h1`
  text-align: center;
`

const Description = styled.p`
  text-align: center;
  color: var(--color-grey);
`

export default function App() {
  const [products, setProducts] = useState([])

  useEffect(() => {
    async function fetchData() {
      const res = await fetch(
        "https://raw.githubusercontent.com/devchallenges-io/web-project-ideas/main/front-end-projects/data/simple-coffee-listing-data.json"
      )
      const data = await res.json()
      setProducts(data)
    }

    fetchData()
  }, [])

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <StyledApp>
              <Container>
                <TextContainer>
                  <Heading>Our Collection</Heading>
                  <Description>
                    Introducing our Coffee Collection, a selection of unique
                    coffees from different roast types and origins, expertly
                    roasted in small batches and shipped fresh weekly.
                  </Description>
                </TextContainer>

                <Products products={products} />
              </Container>
            </StyledApp>
          }
        ></Route>
      </Routes>
    </BrowserRouter>
  )
}
