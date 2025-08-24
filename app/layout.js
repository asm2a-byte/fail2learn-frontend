import './globals.css'

export const metadata = {
  title: 'Fail2LearnLab',
  description: 'Transform failed experiments into smarter strategies',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
