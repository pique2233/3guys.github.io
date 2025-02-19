'use client';
import { GlobeAltIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';

export default function Navbar({ 
  language = 'zh', 
  setLanguage = () => {}, 
  basePath = '' 
}) {
  // 安全的导航配置
  const navConfig = {
    en: [
      { label: 'Contact Lenses', path: `${basePath}/` },
      { label: 'Clothing', path: `${basePath}/clothing` },
      { label: 'Shoes', path: `${basePath}/shoes` },
      { label: 'Bags', path: `${basePath}/bags` }
    ],
    zh: [
      { label: '美瞳', path: `${basePath}/` },
      { label: '服装', path: `${basePath}/clothing` },
      { label: '鞋', path: `${basePath}/shoes` },
      { label: '包', path: `${basePath}/bags` }
    ]
  };

  // 安全获取当前导航项
  const currentNavItems = navConfig[language] || navConfig.zh;

  return (
    <header className="bg-white shadow-sm sticky top-0 z-40">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex space-x-4 md:space-x-8">
            {currentNavItems.map((item) => (
              <Link
                key={item.path}
                href={item.path.replace(/\/+/g, '/')} // 处理多个斜杠
                className="text-gray-700 hover:text-purple-600 transition-colors font-medium text-sm md:text-base"
              >
                {item.label}
              </Link>
            ))}
          </div>
          <button 
            onClick={() => setLanguage(prev => prev === 'en' ? 'zh' : 'en')}
            className="flex items-center space-x-1 text-gray-600 hover:text-purple-600"
          >
            <GlobeAltIcon className="w-4 h-4 md:w-5 md:h-5" />
            <span className="text-sm md:text-base">
              {language === 'en' ? '中文' : 'EN'}
            </span>
          </button>
        </div>
      </nav>
    </header>
  )
}