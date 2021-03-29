import THEME from 'assets/theme'
import styled from 'styled-components'

const Style = styled.section`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  .question {
    text-align: center;
    font-size: 18px;
    font-weight: 600;
    line-height: 20px;
    padding: 136px 16px 0;
  }
  .answersHolder {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    padding: 24px 16px;
  }
  @media only screen and (min-width: ${THEME.BREACKPOINTS.tablet}) {
    .question {
      text-align: left;
      font-size: 32px;
      line-height: 37px;
      padding: 136px 80px 0;
    }
    .answersHolder {
      padding: 24px 80px;
    }
  }
`

export default Style
