import styled from 'styled-components'
import THEME from 'assets/theme'

const Style = styled.section`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 18px;
  font-weight: 600;
  @media only screen and (min-width: ${THEME.BREACKPOINTS.tablet}) {
    font-size: 30px;
    font-weight: 800;
  }
`

export default Style
