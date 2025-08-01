import { Twitter, Facebook, Instagram, Linkedin } from "lucide-react"

export function Footer() {
  return (
    <footer className="py-12 px-4 border-t border-gray-800/50">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Logo and tagline */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-3 mb-4 h-20">
              <a href="/" className="h-20 flex items-center">
                <img
                  src="/xcripter1.png"
                  alt="Xcripter Logo"
                  className="h-full w-auto object-contain"
                />
              </a>
            </div>
            <p className="text-gray-400 mb-4 max-w-md">
              AI Content Agent for WordPress. Automate your entire content lifecycle with intelligent generation,
              optimization, and publishing.
            </p>
            
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-white font-semibold mb-4">Navigation</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#pricing" className="text-gray-400 hover:text-white transition-colors">
                  Pricing
                </a>
              </li>
              <li>
                <a href="#demo" className="text-gray-400 hover:text-white transition-colors">
                  Demo
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-400 hover:text-white transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Connect</h4>
            <div className="flex space-x-4">
              <a href="https://facebook.com/xcripterr" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                <Facebook className="w-6 h-6" />
              </a>
              <a href="https://instagram.com/xcripterr" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                <Instagram className="w-6 h-6" />
              </a>
              <a
                href="https://linkedin.com/company/xcripter"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Linkedin className="w-6 h-6" />
              </a>
              <a href="https://x.com/Xcripterr" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                <Twitter className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-gray-800/50 text-center text-gray-400">
          <p>&copy; 2025 Xcripter. All rights reserved. <p className="text-blue-400 font-medium">Crafted with love, from blogger to bloggers.</p></p>
        </div>
      </div>
    </footer>
  )
}
