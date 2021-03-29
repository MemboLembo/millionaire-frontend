import styled from 'styled-components'
import THEME from 'assets/theme'

const Styles = styled.button`
  font-weight: 600;
  font-size: 14px;
  color: ${THEME.COLORS.lightColor};
  line-height: 48px;
  border: none;
  border-radius: 8px;
  background-color: ${THEME.COLORS.accentColor};
  padding: 0 30px;
  cursor: pointer;
  &:hover {
    background-color: ${THEME.COLORS.hoverBgColor};
  }
  &:active {
    background-color: ${THEME.COLORS.pressedBgColor};
  }

  @media only screen and (min-width: ${THEME.BREACKPOINTS.desktop}) {
    line-height: 64px;
    border-radius: 12px;
    font-size: 20px;
  }
`

export default Styles
