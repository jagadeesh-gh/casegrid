import { render, screen } from '@testing-library/react'
import ActCard from '../ActCard'

const mockAct = {
  id: '1',
  slug: 'test-act',
  title: 'Test Act, 2024',
  state: 'Test State',
  year: 2024,
  category: 'Act' as const,
  pdfUrl: 'https://example.com/test.pdf',
  sizeBytes: 1024000,
  summary: 'This is a test act for testing purposes.',
  source: 'Test Department',
  createdAt: '2024-01-01',
  updatedAt: '2024-01-01'
}

describe('ActCard', () => {
  it('renders act title as a link', () => {
    render(<ActCard act={mockAct} />)
    
    const titleLink = screen.getByText('Test Act, 2024')
    expect(titleLink).toBeInTheDocument()
    expect(titleLink.closest('a')).toHaveAttribute('href', '/acts/test-act')
  })

  it('renders state badge', () => {
    render(<ActCard act={mockAct} />)
    
    const stateBadge = screen.getByText('Test State')
    expect(stateBadge).toBeInTheDocument()
  })

  it('renders year', () => {
    render(<ActCard act={mockAct} />)
    
    const year = screen.getByText('2024')
    expect(year).toBeInTheDocument()
  })

  it('renders category badge', () => {
    render(<ActCard act={mockAct} />)
    
    const categoryBadge = screen.getByText('Act')
    expect(categoryBadge).toBeInTheDocument()
  })

  it('renders summary', () => {
    render(<ActCard act={mockAct} />)
    
    const summary = screen.getByText('This is a test act for testing purposes.')
    expect(summary).toBeInTheDocument()
  })

  it('renders source', () => {
    render(<ActCard act={mockAct} />)
    
    const source = screen.getByText('Source: Test Department')
    expect(source).toBeInTheDocument()
  })

  it('renders download button', () => {
    render(<ActCard act={mockAct} />)
    
    const downloadButton = screen.getByText('Download PDF')
    expect(downloadButton).toBeInTheDocument()
  })
})
