import React, { useState } from 'react'
import { useLocation, useParams } from 'react-router-dom'
import { Container, Header, Loader, Title } from './Coins'

interface RouterParams {
  coinId: string
}

interface RoutesState {
  name: string
}

function Coin() {
  const [loading, setLoading] = useState(true)
  const { coinId } = useParams()
  const location = useLocation()
  const state = location.state as RoutesState //Link에서 보내준 state받아오기

  return (
    <Container>
      <Header>
        <Title>{state.name || 'loading...'}</Title>
      </Header>
      {loading ? <Loader>Loading...</Loader> : null}
    </Container>
  )
}

export default Coin
