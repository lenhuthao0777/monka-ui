import { fireEvent, render } from '@testing-library/react'
import { Input } from '../src/components/input'

describe('Button', () => {
  it('renders the button with the correct placeholder', () => {
    const placeholder = 'typing'
    const { getByPlaceholderText } = render(<Input placeholder={placeholder} />)
    const button = getByPlaceholderText(placeholder)
    expect(button).toBeInTheDocument()
  })

  // it('calls the onClick function when clicked', () => {
  //   const onClick = jest.fn()
  //   const { getByText } = render(<Button onClick={onClick}>Click me</Button>)
  //   const button = getByText('Click me')
  //   fireEvent.click(button)
  //   expect(onClick).toHaveBeenCalled()
  // })

  // it('disables the button when loading', () => {
  //   const { container } = render(<Button loading>Click me</Button>)
  //   const button = container.querySelector('button')
  //   expect(button).toHaveClass('pointer-events-none')
  // })
})
