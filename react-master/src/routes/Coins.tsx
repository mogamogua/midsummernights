import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

interface CoinInterface {
  id: string
  name: string
  symbol: string
  rank: number
  is_new: boolean
  is_active: boolean
  type: string
}
function Coins() {
  const [coins, setCoins] = useState<CoinInterface[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    //첫 렌더링시에만 실행되도록.
    ;(async () => {
      const response = await fetch('https://api.coinpaprika.com/v1/coins')
      const json = await response.json()
      setCoins(json.slice(0, 100))
      setLoading(false)
    })() // 즉시실행함수를 만들어서 오직 첫 렌더링에만 실행되도록한다.
  }, [])
  return (
    <Container>
      <Header>
        <Title>코인</Title>
      </Header>
      {loading ? (
        <Loader>Loading . . .</Loader>
      ) : (
        <CoinsList>
          {coins.map((coin) => (
            <Coin key={coin.id}>
              <Link to={`/${coin.id}`} state={{ name: coin.name }}>
                <Img
                  src={`https://coinicons-api.vercel.app/api/icon/${coin.symbol.toLowerCase()}`}
                />
                {coin.name} &rarr;
              </Link>
            </Coin>
          ))}
        </CoinsList>
      )}
    </Container>
  )
}

export default Coins

export const Container = styled.div`
  max-width: 480px;
  margin: 0 auto;
  padding: 0px 20px;
`

export const Header = styled.header`
  height: 15vh;
  display: flex;
  justify-content: center;
  align-items: center;
`

const CoinsList = styled.ul``

const Coin = styled.li`
  background-color: white;
  color: ${(props) => props.theme.bgColor};
  border-radius: 15px;
  margin-bottom: 10px;
  a {
    padding: 20px;
    transition: color 0.2s ease-in;
    display: block;
    display: flex;
    align-items: center;
  }
  &:hover {
    a {
      color: ${(props) => props.theme.accentColor};
    }
  }
`

const Img = styled.img`
  width: 35px;
  height: 35px;
  margin-right: 10px;
`
export const Loader = styled.span`
  text-align: center;
  display: block;
`

export const Title = styled.h1`
  font-size: 48px;
  color: ${(props) => props.theme.accentColor};
`
