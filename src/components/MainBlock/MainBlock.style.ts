import styled from 'styled-components'
import THEME from 'assets/theme'

const Style = styled.div`
  width: 100%;
  min-height: 100vh;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  .handImg {
    max-width: 340px;
  }
  .wrapper {
    width: 288px;
    .title {
      text-align: center;
      font-size: 32px;
      font-weight: 600;
      margin: 0 0 102px;
    }
    .subtitle {
      text-align: center;
      font-size: 18px;
      font-weight: 600;
      color: ${THEME.COLORS.inactiveColor};
      margin: 0 0 8px;
    }
    button {
      width: 100%;
    }
  }
  @media only screen and (min-width: ${THEME.BREACKPOINTS.desktop}) {
    flex-direction: row;
    .handImg {
      max-width: 600px;
    }
    .wrapper {
      width: 624px;
      .title {
        text-align: left;
        font-size: 56px;
        margin-bottom: 64px;
      }
      .subtitle {
        text-align: left;
        font-size: 32px;
      }
      button {
        width: 296px;
      }
    }
  }
`

export default Style
