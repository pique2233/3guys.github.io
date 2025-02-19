import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export const metadata = {
  title: '美瞳商城',
  description: '专业美瞳销售平台',
}

export default function RootLayout({ children }) {
  // 生产环境基础路径配置
  const basePath = process.env.NODE_ENV === 'production' 
    ? '/3guys.github.io' 
    : ''

  return (
    <html lang="zh-CN">
      <head>
        {/* 确保 CSS 路径正确 */}
        <link rel="stylesheet" href={`${basePath}/globals.css`} />
      </head>
      <body className="min-h-screen flex flex-col">
        <Navbar basePath={basePath} />
        <main className="flex-1">{children}</main>
        <Footer basePath={basePath} />
      </body>
    </html>
  )
}