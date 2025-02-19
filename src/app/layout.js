import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export const metadata = {
  title: '美瞳商城',
  description: '专业美瞳销售平台',
}

// 基础路径配置（与 next.config.js 保持一致）
const BASE_PATH = process.env.NODE_ENV === 'production' 
  ? '/3guys.github.io' 
  : ''

export default function RootLayout({ children }) {
  return (
    <html lang={process.env.NODE_ENV === 'production' ? 'zh-CN' : 'en'}>
      <head>
        {/* 修复 CSS 路径 */}
        <link rel="stylesheet" href={`${BASE_PATH}/globals.css`} />
      </head>
      <body className="min-h-screen flex flex-col">
        <Navbar basePath={BASE_PATH} />
        <main className="flex-1">{children}</main>
        <Footer basePath={BASE_PATH} />
      </body>
    </html>
  )
}