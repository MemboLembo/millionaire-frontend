import THEME from 'assets/theme'
import styled from 'styled-components'

const Styles = styled.div`
  height: inherit;
  position: relative;
  svg {
    width: 100%;
    height: inherit;
  }
  .text {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 14px;
    font-weight: 400;
    text-align: center;
    margin: 0;
  }
  .passed {
    color: ${THEME.COLORS.inactiveColor};
  }
  .current {
    color: ${THEME.COLORS.accentColor};
  }
  @media only screen and (min-width: ${THEME.BREACKPOINTS.tablet}) {
    .text {
      font-size: 20px;
    }
  }
`

export default Styles
