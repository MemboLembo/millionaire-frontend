import React from 'react'
import THEME from 'assets/theme'
import AnswerButtonWithStyles from './AnswerButton.style'
import ButtonBackground from './ButtonBackground'
import { Answer } from 'types/answers'

export interface AnswerButtonProps {
  symbol: string
  answer: Answer
  onClick: (answer: Answer, symbol: string) => void
  border?: string
  background?: string
}

const AnswerButton: React.FC<AnswerButtonProps> = ({
  symbol,
  answer,
  onClick,
  border = THEME.COLORS.inactiveColor,
  background = THEME.COLORS.lightColor,
}) => {
  const onAnswerButtonClick = () => {
    onClick(answer, symbol)
  }

  return (
    <AnswerButtonWithStyles onClick={onAnswerButtonClick}>
      <div className="text-wrapper">
        <span className="symbol">{symbol}</span>
        <span className="text">{answer.label}</span>
      </div>
      <ButtonBackground border={border} background={background} />
    </AnswerButtonWithStyles>
  )
}

export default AnswerButton
