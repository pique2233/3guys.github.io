import { GlobeAltIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';

export default function Navbar({ language, setLanguage }) {
  // 修正后的路径映射
  const navConfig = {
    en: [
      { label: 'Contact Lenses', path: '/' },      // 首页
      { label: 'Clothing', path: '/clothing' },    // 服装页
      { label: 'Shoes', path: '/shoes' },          // 鞋类页
      { label: 'Bags', path: '/bags' }             // 箱包页
    ],
    zh: [
      { label: '美瞳', path: '/' },               // 首页
      { label: '服装', path: '/clothing' },
      { label: '鞋', path: '/shoes' },
      { label: '包', path: '/bags' }
    ]
  };

  return (
    <header className="bg-white shadow-sm sticky top-0 z-40">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex space-x-8">
            {navConfig[language].map((item) => (
              <Link
                key={item.path}
                href={item.path}
                className="text-gray-700 hover:text-purple-600 transition-colors font-medium"
              >
                {item.label}
              </Link>
            ))}
          </div>
          <button 
            onClick={() => setLanguage(language === 'en' ? 'zh' : 'en')}
            className="flex items-center space-x-1 text-gray-600 hover:text-purple-600"
          >
            <GlobeAltIcon className="w-5 h-5" />
            <span>{language === 'en' ? '中文' : 'EN'}</span>
          </button>
        </div>
      </nav>
    </header>
  )
}