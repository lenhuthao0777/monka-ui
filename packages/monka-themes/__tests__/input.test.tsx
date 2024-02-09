import { fireEvent, render } from '@testing-library/react'
import { Input } from '../src/components/input'

describe('Button', () => {
  it('renders the button with the correct placeholder', () => {
    const placeholder = 'typing'
    const { getByPlaceholderText } = render(<Input placeholder={placeholder} />)
    const button = getByPlaceholderText(placeholder)
    expect(button).toBeInTheDocument()
  })

  it('renders an input element', () => {
    const { container } = render(<Input />)
    const input = container.querySelector('input')
    expect(input).toBeInTheDocument()
  })

  it('applies the correct className', () => {
    const { container } = render(<Input className="test-class" />)
    const input = container.querySelector('input')
    expect(input).toHaveClass('test-class')
  })

  it('applies the disabled attribute', () => {
    const { container } = render(<Input disabled />)
    const input = container.querySelector('input')
    expect(input).toBeDisabled()
  })

  it('input full width', () => {
    const { container } = render(<Input widthFull />)
    const input = container.querySelector('input')
    expect(input).toHaveClass('w-full')
  })

  it('passes through any other props', () => {
    const { container } = render(<Input data-testid="test-input" />)
    const input = container.querySelector('input')
    expect(input).toHaveAttribute('data-testid', 'test-input')
  })
})
