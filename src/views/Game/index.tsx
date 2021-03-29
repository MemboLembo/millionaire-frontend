import React, { useEffect, useState } from 'react'
import PlayZone from 'components/PlayZone'
import Menu from 'components/Menu'
import { ReactComponent as HambMenuIcon } from 'assets/img/hamburger_menu.svg'
import { ReactComponent as CloseButton } from 'assets/img/close_button.svg'
import GameWithStyles from './Game.style'
import useAsync from 'utils/useAsync'
import { ApiResponse } from 'types/gameData'
import { gameSelector, setMaxLevel, setGameData, setRewards } from './gameSlice'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import Spinner from 'components/Spinner'
import Error from 'components/Error'

const fetchGameData = async (): Promise<ApiResponse> => {
  try {
    const res = await fetch(
      'https://millionaire-api.herokuapp.com/api/questions'
    )
    const { success, data, error } = await res.json()
    if (!success || error) {
      return Promise.reject(error)
    }
    return Promise.resolve(data)
  } catch {
    return Promise.reject('Something went wrong')
  }
}
const fetchRewards = async (): Promise<number[]> => {
  try {
    const res = await fetch('https://millionaire-api.herokuapp.com/api/rewards')
    const { success, data, error } = await res.json()
    if (!success || error) {
      return Promise.reject(error)
    }
    return Promise.resolve(data)
  } catch {
    return Promise.reject('Something went wrong')
  }
}

const Game: React.FC = () => {
  const { currentLevel, gameData, gameStatus, rewards } = useSelector(
    gameSelector
  )
  const dispatch = useDispatch()
  const [mobileMenuShow, setMobileMenuShow] = useState(false)
  // TODO: use redux thunk
  const { status, value: apiResponse, error } = useAsync(fetchGameData)
  const {
    status: rewardsStatus,
    value: rewardsApiResponse,
    error: rewardsError,
  } = useAsync(fetchRewards)
  const history = useHistory()
  useEffect(() => {
    if (gameStatus !== 'playing') {
      history.push('/')
    }
  }, [])
  useEffect(() => {
    if (apiResponse && apiResponse.length) {
      dispatch(setGameData(apiResponse))
    }
  }, [apiResponse, dispatch])
  useEffect(() => {
    if (rewardsApiResponse && rewardsApiResponse.length) {
      dispatch(setRewards(rewardsApiResponse))
    }
  }, [rewardsApiResponse, dispatch])
  if (status === 'pending' || rewardsStatus === 'pending') {
    return <Spinner />
  }
  if (error || rewardsError) {
    return <Error textError={error} />
  }
  if (!gameData || !gameData.length || !rewards || !rewards.length) {
    return <Error textError="No game data" />
  }
  const maxLevelHolder = Math.min(rewards.length, gameData.length)
  console.log(rewards.length, gameData.length)
  dispatch(setMaxLevel(maxLevelHolder - 1))
  const onShowMenu = () => {
    setMobileMenuShow(!mobileMenuShow)
  }

  return (
    <GameWithStyles>
      <nav className="mobileMenu">
        {!mobileMenuShow && (
          <button
            type="submit"
            className="menuButton openMenuButton"
            onClick={onShowMenu}
          >
            <HambMenuIcon />
          </button>
        )}
        {mobileMenuShow && (
          <button
            className="menuButton closeMenuButton"
            type="submit"
            onClick={onShowMenu}
          >
            <CloseButton />
          </button>
        )}
      </nav>
      <PlayZone
        answers={gameData[currentLevel].answers}
        question={gameData[currentLevel].question}
      />
      <Menu isMenuShown={mobileMenuShow} />
    </GameWithStyles>
  )
}

export default Game
