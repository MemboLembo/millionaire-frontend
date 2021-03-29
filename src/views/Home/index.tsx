import React from 'react'
import MainBlock from 'components/MainBlock'
import HomeWithStyles from './Home.style'

const Home: React.FC = () => {
  return (
    <HomeWithStyles>
      <MainBlock
        buttonText="Start"
        title="Who wants to be a millionaire?"
        subtitle=""
      />
    </HomeWithStyles>
  )
}

export default Home
