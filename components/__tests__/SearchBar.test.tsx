import { render, screen } from '@testing-library/react'
import SearchBar from '../SearchBar'

describe('SearchBar', () => {
  it('renders search input with placeholder', () => {
    render(<SearchBar placeholder="Search acts..." />)
    
    const searchInput = screen.getByPlaceholderText('Search acts...')
    expect(searchInput).toBeInTheDocument()
  })

  it('renders with default placeholder when none provided', () => {
    render(<SearchBar />)
    
    const searchInput = screen.getByPlaceholderText('Search acts and rules...')
    expect(searchInput).toBeInTheDocument()
  })

  it('has proper accessibility label', () => {
    render(<SearchBar />)
    
    const searchInput = screen.getByLabelText('Search acts and rules')
    expect(searchInput).toBeInTheDocument()
  })
})
