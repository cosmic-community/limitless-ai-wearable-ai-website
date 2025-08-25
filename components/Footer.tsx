import Link from 'next/link'

export default function Footer() {
  const footerSections = [
    {
      title: 'Product',
      links: [
        { name: 'Home', href: '/' },
        { name: 'Pricing', href: '/pricing' },
        { name: 'Changelog', href: '#' },
      ]
    },
    {
      title: 'Company',
      links: [
        { name: 'About', href: '/about' },
        { name: 'Careers', href: '#' },
        { name: 'Privacy', href: '/privacy' },
      ]
    },
    {
      title: 'Resources & Support',
      links: [
        { name: 'Help Center', href: '#' },
        { name: 'Support', href: '#' },
        { name: 'Roadmap', href: '#' },
        { name: 'Feature Request Board', href: '#' },
        { name: 'Community', href: '#' },
      ]
    },
    {
      title: 'Compare',
      links: [
        { name: 'Pendant vs Bee', href: '#' },
        { name: 'Pendant vs Plaud', href: '#' },
        { name: 'Pendant vs Omi', href: '#' },
      ]
    },
    {
      title: 'Social',
      links: [
        { name: 'X / Twitter', href: '#' },
        { name: 'YouTube', href: '#' },
        { name: 'LinkedIn', href: '#' },
        { name: 'TikTok', href: '#' },
        { name: 'Instagram', href: '#' },
      ]
    }
  ]

  return (
    <footer className="bg-gray-50 pt-16 pb-8">
      <div className="container">
        {/* Load More Button */}
        <div className="text-center mb-12">
          <button className="bg-white text-gray-700 px-6 py-2 rounded-lg border border-gray-300 hover:bg-gray-50 transition-colors duration-200">
            Load more
          </button>
        </div>

        {/* Footer Content */}
        <div className="grid md:grid-cols-5 gap-8 mb-12">
          {/* Logo */}
          <div className="md:col-span-1">
            <Link href="/" className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">L</span>
              </div>
              <span className="text-xl font-bold text-gray-900">
                Limitless
              </span>
            </Link>
            <p className="text-gray-500 text-sm mb-4">Go Beyond</p>
            <Link 
              href="#" 
              className="text-gray-500 text-sm hover:text-primary transition-colors duration-200"
            >
              Sign in
            </Link>
          </div>

          {/* Footer Links */}
          {footerSections.map((section) => (
            <div key={section.title}>
              <h3 className="font-semibold text-gray-900 mb-4">
                {section.title}
              </h3>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-gray-600 hover:text-primary transition-colors duration-200 text-sm"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-gray-200">
          <div className="flex items-center space-x-4 text-sm text-gray-500 mb-4 md:mb-0">
            <Link href="/privacy" className="hover:text-primary transition-colors duration-200">
              Privacy Policy
            </Link>
            <Link href="#" className="hover:text-primary transition-colors duration-200">
              Terms
            </Link>
          </div>
          <p className="text-sm text-gray-500">
            © {new Date().getFullYear()} Limitless AI
          </p>
        </div>
      </div>
    </footer>
  )
}