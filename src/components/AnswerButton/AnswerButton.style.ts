import styled from 'styled-components'
import THEME from 'assets/theme'

const Styles = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  position: relative;
  padding: 0;
  width: 100%;
  height: 56px;
  margin-bottom: 8px;
  outline: none;
  .text-wrapper {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    position: absolute;
    top: 50%;
    left: 12%;
    transform: translateY(-50%);
    width: 75%;
    text-align: left;
    .symbol {
      font-weight: 600;
      color: ${THEME.COLORS.accentColor};
      text-transform: capitalize;
      margin-right: 8px;
    }
    .text {
      font-size: 14px;
      font-weight: 400;
      line-height: 16px;
    }
  }
  svg {
    width: 100%;
    height: 56px;
  }
  &:hover svg {
    path {
      stroke: ${THEME.COLORS.accentColor};
    }
  }
  
  @media only screen and (min-width: ${THEME.BREACKPOINTS.tablet}) {
    width: 50%;
    height: 56px;
    margin-bottom: 32px;
    .text-wrapper {
      .text {
        font-size: 20px;
        line-height: 23px;
      }
    }
  }
`

export default Styles
