export default function Footer({ language }) {
    const content = {
      zh: {
        contact: '联系我们',
        details: '邮箱: contact@example.com\n电话: +86 123-4567-8901'
      },
      en: {
        contact: 'Contact Us',
        details: 'Email: contact@example.com\nPhone: +1 234-567-8901'
      }
    };
  
    return (
      <footer className="bg-gray-800 text-white py-8 mt-12">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h3 className="text-xl font-bold mb-4">
            {content[language].contact}
          </h3>
          <pre className="text-sm whitespace-pre-line">
            {content[language].details}
          </pre>
        </div>
      </footer>
    )
  }