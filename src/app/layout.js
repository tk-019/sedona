import './globals.css'

export const metadata = {
  title: '健康の店 セドナ',
  description:
    'セドナは、地域の皆さまの健康をサポートする心と体の癒しの場です。温熱指圧や電気療法で、日々の疲れや痛みを和らげ、健やかな暮らしをお手伝いします。',
}

export default function RootLayout({ children }) {
  return (
    <html lang='ja'>
      <head>
        <link
          href='https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css'
          rel='stylesheet'
        />
        <link
          href='https://fonts.googleapis.com/css2?family=Inter:wght@400;700&display=swap'
          rel='stylesheet'
        />
      </head>
      <body>{children}</body>
    </html>
  )
}
