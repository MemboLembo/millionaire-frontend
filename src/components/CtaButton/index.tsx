import React from 'react'
import CtaButtonWithStyles from './CtaButton.style'

export interface CtaButtonProps {
  text?: string
  onClick: () => void
}

const CtaButton: React.FC<CtaButtonProps> = ({ text, onClick }) => {
  return <CtaButtonWithStyles onClick={onClick}>{text}</CtaButtonWithStyles>
}

export default CtaButton
