import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { gameSelector } from 'views/Game/gameSlice'
import MainBlock from 'components/MainBlock'
import RetryWithStyles from './Retry.style'

const Retry: React.FC = () => {
  const { currentReward, gameStatus } = useSelector(gameSelector)
  const history = useHistory()
  useEffect(() => {
    if (gameStatus !== 'retrying') {
      history.push('/')
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  return (
    <RetryWithStyles>
      <MainBlock
        buttonText="Try again"
        title={`$ ${currentReward.toString()} earned`}
        subtitle="Total score:"
      />
    </RetryWithStyles>
  )
}

export default Retry
