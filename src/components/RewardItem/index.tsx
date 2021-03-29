import React from 'react'
import THEME from 'assets/theme'
import RewardItemWithStyles from './RewardItem.style'
import RewardBackground from './RewardBackground'

export interface RewardItemProps {
  reward: number
  isCurrent: boolean
  isPassed: boolean
}

const RewardItem: React.FC<RewardItemProps> = ({
  reward,
  isCurrent,
  isPassed,
}) => {
  let border = THEME.COLORS.inactiveColor
  const passed = isPassed ? 'passed' : ''
  const current = isCurrent ? 'current' : ''
  if (isCurrent) {
    border = THEME.COLORS.accentColor
  }
  return (
    <RewardItemWithStyles>
      <p className={`text ${passed} ${current}`}>$ {reward}</p>
      <RewardBackground border={border} />
    </RewardItemWithStyles>
  )
}

export default RewardItem
