'use client';
import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import 'swiper/css';

// 添加基础路径常量
const BASE_PATH = process.env.NODE_ENV === 'production' 
  ? '/3guys.github.io' 
  : '';

export default function Home() {
  const [language, setLanguage] = useState('zh');
  const [selectedImage, setSelectedImage] = useState(null);

  // 轮播图数据（添加基础路径）
  const banners = [
    `${BASE_PATH}/images/美瞳/banner1.jpg`,
    `${BASE_PATH}/images/美瞳/banner2.jpg`,
    `${BASE_PATH}/images/美瞳/banner3.jpg`,
  ];

  // 内容数据（添加基础路径）
  const contentData = {
    zh: {
      sections: [
        { 
          title: '热门美瞳推荐', 
          images: Array(8).fill(`${BASE_PATH}/images/美瞳/banner2.jpg`) 
        },
        { 
          title: '当季流行服饰',
          images: Array(8).fill(`${BASE_PATH}/images/美瞳/banner2.jpg`) 
        },
        { 
          title: '精选鞋款',
          images: Array(8).fill(`${BASE_PATH}/images/美瞳/banner3.jpg`) 
        }
      ]
    },
    en: {
      sections: [
        { 
          title: 'Top Contact Lenses',
          images: Array(8).fill(`${BASE_PATH}/images/美瞳/banner1.jpg`) 
        },
        { 
          title: 'Fashion Clothing',
          images: Array(8).fill(`${BASE_PATH}/images/美瞳/banner2.jpg`) 
        },
        { 
          title: 'Featured Shoes',
          images: Array(8).fill(`${BASE_PATH}/images/美瞳/banner3.jpg`) 
        }
      ]
    }
  };

  // 修改后的图片点击处理
  const handleImageClick = (imgPath) => {
    // 生产环境需要移除基础路径
    const actualPath = process.env.NODE_ENV === 'production'
      ? imgPath.replace(BASE_PATH, '')
      : imgPath;
    setSelectedImage(actualPath);
  };

  return (
    <>
      <Navbar language={language} setLanguage={setLanguage} />
      
      {/* 轮播图 */}
      <div className="w-full h-[800px]">
        <Swiper
          autoplay={{ delay: 2000 }}
          modules={[Autoplay]}
          className="h-full"
        >
          {banners.map((banner, index) => (
            <SwiperSlide key={index}>
              <img 
                src={banner}
                alt={`Banner ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* 内容区域 */}
      <main className="flex-1 container mx-auto px-4 py-12">
        {contentData[language].sections.map((section, index) => (
          <section key={index} className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-center">
              {section.title}
            </h2>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {section.images.map((img, imgIndex) => (
                <div 
                  key={imgIndex}
                  className="group relative cursor-zoom-in"
                  onClick={() => handleImageClick(img)}
                >
                  <div className="aspect-square overflow-hidden rounded-lg shadow-lg">
                    <img
                      src={img}
                      alt={`Product ${imgIndex + 1}`}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                  </div>
                </div>
              ))}
            </div>
          </section>
        ))}
      </main>

      {/* 图片查看模态框 */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black/90 flex items-center justify-center z-50"
             onClick={() => setSelectedImage(null)}>
          <img 
            src={selectedImage} 
            className="max-w-[90vw] max-h-[90vh] object-contain"
            alt="Enlarged view" 
          />
        </div>
      )}

      <Footer language={language} />
    </>
  )
}