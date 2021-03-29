import React, { useEffect, useState } from 'react'
import PlayZoneWithStyles from './PlayZone.style'
import AnswerButton from 'components/AnswerButton'
import getAlphabet from 'utils/getAlphabet'
import { Answer, Answers } from 'types/answers'
import THEME from 'assets/theme'
import { useDispatch, useSelector } from 'react-redux'
import {
  clearState,
  gameSelector,
  setCurrentReward,
  setGameStatus,
  setNextLevel,
} from 'views/Game/gameSlice'
import { useHistory } from 'react-router-dom'

const alphabet: string = getAlphabet()

export interface PlayzoneProps {
  answers: Answers
  question: string
}

interface AnsweredColorsMapValue {
  border: string
  background: string
}

const answeredColorsMap: Record<string, AnsweredColorsMapValue> = {
  true: {
    border: THEME.COLORS.correctColor,
    background: THEME.COLORS.correctBgColor,
  },
  false: {
    border: THEME.COLORS.wrongColor,
    background: THEME.COLORS.wrongBgColor,
  },
}

const PlayZone: React.FC<PlayzoneProps> = ({ answers, question }) => {
  const [isAnswered, setIsAnswered] = useState(false)
  const [isBtnDisabled, setIsBtnDisabled] = useState(false)
  const [choosenAnswerSymbol, setChoosenAnswerSymbol] = useState('')
  const { currentLevel, maxLevel } = useSelector(gameSelector)
  const history = useHistory()
  useEffect(() => {
    setIsAnswered(false)
    setChoosenAnswerSymbol('')
    setIsBtnDisabled(false)
  }, [currentLevel])
  const dispatch = useDispatch()
  const onAnswerButtonClick = (choosenAnswer: Answer, symbol: string) => {
    setIsBtnDisabled(true)
    setChoosenAnswerSymbol(symbol)
    setTimeout(() => {
      setIsAnswered(true)
      if (choosenAnswer.isCorrect) {
        if (currentLevel === maxLevel) {
          dispatch(setCurrentReward())
          dispatch(clearState())
          dispatch(setGameStatus('retrying'))
          history.push('/retry')
          return
        }
        return setTimeout(() => {
          dispatch(setCurrentReward())
          dispatch(setNextLevel())
        }, 1000)
      }
      if (!choosenAnswer.isCorrect) {
        dispatch(clearState())
        dispatch(setGameStatus('retrying'))
        history.push('/retry')
        return
      }
    }, 2000)
  }

  return (
    <PlayZoneWithStyles>
      <div className="question">{question}</div>
      <div className="answersHolder">
        {answers.map((answer, i) => {
          const symbol = alphabet[i]
          let additionalProps = {}
          if (isAnswered || choosenAnswerSymbol === symbol) {
            additionalProps = {
              ...additionalProps,
              ...answeredColorsMap[answer.isCorrect.toString()],
            }
          }
          return (
            <AnswerButton
              key={`${symbol}-variant`}
              onClick={onAnswerButtonClick}
              isDisabled={isBtnDisabled}
              answer={answer}
              symbol={symbol}
              {...additionalProps}
            />
          )
        })}
      </div>
    </PlayZoneWithStyles>
  )
}

export default PlayZone
