import type { Metadata } from 'next'
import { Noto_Sans_KR, Black_Han_Sans } from 'next/font/google'
import './globals.css'
import { ModalProvider } from '../layers/app'

const noto_sans_kr = Noto_Sans_KR({
  subsets: ['latin'],
  display: 'swap',
  fallback: ['sans-serif'],
  variable: '--font-sans-kr'
})

const black_han_sans = Black_Han_Sans({
  subsets: ['latin'],
  weight: '400',
  fallback: ['sans-serif'],
  variable: '--font-black-han-sans'
})

export const metadata: Metadata = {
  title: '김태수의 포트폴리오',
  description: '안녕하세요. 프론트엔드 개발자 김태수의 포트폴리오입니다.'
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="ko"
      className={`${noto_sans_kr.variable} ${black_han_sans.variable}`}
    >
      <body>
        <ModalProvider />
        {children}
      </body>
    </html>
  )
}
