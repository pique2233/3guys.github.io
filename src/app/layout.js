import './globals.css'

export const metadata = {
  title: '美瞳商城',
  description: '专业美瞳销售平台',
}

export default function RootLayout({ children }) {
  return (
    <html lang="zh-CN">
      <body className="min-h-screen flex flex-col">
        {children}
      </body>
    </html>
  )
}