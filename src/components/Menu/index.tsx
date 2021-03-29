import RewardItem from 'components/RewardItem'
import React from 'react'
import { useSelector } from 'react-redux'
import { gameSelector } from 'views/Game/gameSlice'
import MenuWithStyles from './Menu.style'

export interface MenuProps {
  isMenuShown: boolean
}

const Menu: React.FC<MenuProps> = ({ isMenuShown }) => {
  const { currentLevel, maxLevel, rewards } = useSelector(gameSelector)
  return (
    <MenuWithStyles className={isMenuShown ? 'menu' : 'hidden menu'}>
      <ul>
        {rewards
          .slice(0, maxLevel + 1)
          .sort((a, b) => a - b)
          .map((reward, i) => (
            <li key={reward}>
              <RewardItem
                isCurrent={currentLevel === i}
                isPassed={i < currentLevel}
                reward={reward}
              />
            </li>
          ))}
      </ul>
    </MenuWithStyles>
  )
}

export default Menu
