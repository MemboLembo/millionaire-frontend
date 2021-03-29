import React from 'react'
import ErrorWithStyle from './Error.style'

export interface ErrorProps {
  textError: string | null
}

const Error: React.FC<ErrorProps> = ({ textError }) => {
  return (
    <ErrorWithStyle>
      <p>Error: {textError}</p>
    </ErrorWithStyle>
  )
}

export default Error
