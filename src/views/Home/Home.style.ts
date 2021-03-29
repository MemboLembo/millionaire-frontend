import styled from 'styled-components'
import THEME from 'assets/theme'

const Style = styled.section`
  width: 100%;
  min-height: 100vh;
  background: linear-gradient(
    to bottom right,
    ${THEME.COLORS.lightColor} 50%,
    ${THEME.COLORS.selectedBgColor} 50%
  );
`

export default Style
