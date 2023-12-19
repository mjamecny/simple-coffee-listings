import styled from "styled-components"

const StyledProduct = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
`

const ImageContainer = styled.div`
  position: relative;
`

const PopularTag = styled.p`
  position: absolute;
  top: 10px;
  left: 10px;
  background-color: var(--color-orange);
  color: var(--color-black);
  border-radius: 50px;
  padding-block: 0.4rem;
  padding-inline: 1.6rem;
`

const Image = styled.img`
  width: 100%;
  border-radius: 10px;
`

const FirstRow = styled.div`
  display: flex;
  justify-content: space-between;
`

const Name = styled.p`
  font-size: 2rem;
`

const SecondRow = styled.div`
  display: flex;
  align-items: center;
  gap: 0.8rem;
`

const Price = styled.p`
  background-color: var(--color-green);
  color: var(--color-black);
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 700;
  padding-inline: 0.8rem;
`

const Rating = styled.span``

const NumVotes = styled.span`
  color: var(--color-grey);
`

const Star = styled.img`
  width: 30px;
`

const ExpBox = styled.p`
  line-height: 1.1;
  font-weight: 700;
  font-size: 1.8rem;
`

export default function Product({ product }) {
  const { name, image, price, rating, votes, popular, available } = product

  return (
    <StyledProduct>
      <ImageContainer>
        {popular && <PopularTag>Popular</PopularTag>}
        <Image src={image} alt={`image of ${name}`} />
      </ImageContainer>

      <FirstRow>
        <Name>{name}</Name>
        <Price>{price}</Price>
      </FirstRow>
      <SecondRow>
        <Star src="star_fill.svg" alt="star" />
        <ExpBox>
          <Rating>{rating}</Rating>
          <NumVotes> ({votes} votes)</NumVotes>
        </ExpBox>
      </SecondRow>
    </StyledProduct>
  )
}
