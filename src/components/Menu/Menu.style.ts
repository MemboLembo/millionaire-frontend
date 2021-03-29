import styled from 'styled-components'
import THEME from 'assets/theme'

const Style = styled.section`
  position: fixed;
  top: 0;
  bottom: 0;
  width: 100%;
  background-color: ${THEME.COLORS.secondBgColor};
  ul {
    display: flex;
    flex-direction: column-reverse;
    list-style: none;
    align-items: center;
    padding-top: 64px;
    padding-bottom: 32px;
    margin: 0;
    padding: 64px 0 32px 0;
    li {
      width: 100%;
      height: 32px;
      margin-bottom: 8px;
      &:hover svg {
        path {
          stroke: ${THEME.COLORS.hoverBgColor};
        }
      }
    }
  }
  @media only screen and (min-width: ${THEME.BREACKPOINTS.tablet}) {
    ul {
      li {
        height: 48px;
      }
    }
  }
`

export default Style
