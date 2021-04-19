import React from 'react'
import { render, cleanup, fireEvent, screen, waitFor } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import Quiz


describe('ProductSelector', () => {
  test('renders correctly', () => {
    const { asFragment } = render(<ProductSelector {...Data}>

    </ProductSelector>
    )
    expect(asFragment()).toMatchSnapshot()
  })

  })