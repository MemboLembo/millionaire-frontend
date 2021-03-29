import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import { render } from '@testing-library/react'
import { Provider } from 'react-redux'
import { store } from './app/store'
import App from './App'

test('renders learn react link', () => {
  const { getByText } = render(
    <Provider store={store}>
      <Router>
        <App />
      </Router>
    </Provider>
  )

  expect(getByText('Who wants to be a millionaire?')).toBeInTheDocument()
})
