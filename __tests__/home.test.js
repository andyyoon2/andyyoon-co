import { render, screen } from '@testing-library/react'
import Home from '../app/page'

describe('Home', () => {
  it('should show contact button', () => {
    render(<Home />)
    const button = screen.getByRole('button', { name: /contact me/i })
    expect(button).toBeInTheDocument()
  })

  it('should link contact button to correct email', () => {
    render(<Home />)
    const link = screen.getByRole('link', { name: /contact me/i })
    expect(link).toHaveAttribute('href', 'mailto:insoo.yoon@proton.me')
  })

  it('should have link to view resume', () => {
    render(<Home />)
    const link = screen.getByRole('link', { name: /view resume/i })
    expect(link).toHaveAttribute('href', '/Andy-Yoon-resume.pdf')
  })

  it('should display valid contact links', () => {
    render(<Home />)
    const email = screen.getByRole('link', { name: /insoo\.yoon@proton\.me/i })
    expect(email).toHaveAttribute('href', 'mailto:insoo.yoon@proton.me')
    const linkedin = screen.getByRole('link', { name: /in\/andyyoon2/i })
    expect(linkedin).toHaveAttribute('href', 'https://linkedin.com/in/andyyoon2')
    const github = screen.getByRole('link', { name: /^andyyoon2/i })
    expect(github).toHaveAttribute('href', 'https://github.com/andyyoon2')
  })
})
