import React from 'react'
import styled from 'styled-components'
import { Heading, Card, CardBody, Flex, ArrowForwardIcon } from '@orcinuslabs/uikit'
import { NavLink } from 'react-router-dom'


const StyledFarmStakingCard = styled(Card)`
  margin-left: auto;
  margin-right: auto;
  width: 100%;

  ${({ theme }) => theme.mediaQueries.lg} {
    margin: 0;
    max-width: none;
  }

  transition: opacity 200ms;
  &:hover {
    opacity: 0.65;
  }
`
const CardMidContent = styled(Heading).attrs({ size: 'xl' })`
  line-height: 44px;
`
const WinCard = () => {
  return (
    <StyledFarmStakingCard>
      <NavLink exact activeClassName="active" to="/buy" id="lottery-pot-cta">
        <CardBody>
          <CardMidContent color="contrast">Buy ORCA!</CardMidContent>
          <Flex justifyContent="space-between">
            <Heading color="contrast" size="lg" />
            <ArrowForwardIcon mt={30} color="contrast" />
          </Flex>
        </CardBody>
      </NavLink>
    </StyledFarmStakingCard>
  )
}

export default WinCard
