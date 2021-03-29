import React from 'react'
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { setGameStatus } from 'views/Game/gameSlice'
import MainBlockWithStyle from './MainBlock.style'
import { ReactComponent as HandImg } from '../../assets/img/hand.svg'
import CtaButton from 'components/CtaButton'

export interface MainBlockProps {
  buttonText: string
  title: string
  subtitle?: string
}

const MainBlock: React.FC<MainBlockProps> = ({
  buttonText,
  title,
  subtitle,
}) => {
  const dispatch = useDispatch()
  const history = useHistory()

  return (
    <MainBlockWithStyle>
      <HandImg className="handImg" />
      <div className="wrapper">
        {subtitle && <h2 className="subtitle">{subtitle}</h2>}
        <h1 className="title">{title}</h1>
        <CtaButton
          text={buttonText}
          onClick={() => {
            dispatch(setGameStatus('playing'))
            history.push('/game')
          }}
        />
      </div>
    </MainBlockWithStyle>
  )
}

export default MainBlock
