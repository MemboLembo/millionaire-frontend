import styled from 'styled-components'
import THEME from 'assets/theme'

const Style = styled.section`
  width: 100%;
  min-height: 100vh;
  background-color: ${THEME.COLORS.secondBgColor};
  margin: 0;
  position: relative;
  .mobileMenu {
    position: absolute;
    top: 20px;
    right: 20px;
    z-index: 5;
    button {
      border: none;
      background-color: transparent;
    }
  }
  .hidden {
    display: none;
  }
  @media only screen and (min-width: ${THEME.BREACKPOINTS.desktop}) {
    width: 75%;
    .mobileMenu {
      display: none;
    }
    .menu {
      display: block;
      width: 25%;
      right: 0;
      background-color: ${THEME.COLORS.lightColor};
    }
  }
`

export default Style
