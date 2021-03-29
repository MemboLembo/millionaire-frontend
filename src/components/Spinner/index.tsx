import React from 'react'
import SpinnerWithStyle from './Spinner.style'

const Spinner = () => {
  return (
    <SpinnerWithStyle className="lds-css">
      <div className="lds-double-ring">
        <div></div>
        <div></div>
      </div>
    </SpinnerWithStyle>
  )
}

export default Spinner
