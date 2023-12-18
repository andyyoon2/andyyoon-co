import '../styles/globals.css'
import Layout from '../components/Layout'

export const metadata = {
  title: 'Andy Yoon - Calm and compassionate frontend engineer',
  description: '8 years of experience leading teams, solving problems, and creating responsive apps.'
}

export default function RootLayout ({ children }) {
  return (
    <html lang='en'>
      <body>
        <Layout>{children}</Layout>
      </body>
    </html>
  )
}
