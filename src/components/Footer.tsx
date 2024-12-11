import { Instagram, Linkedin, Globe,Facebook } from 'lucide-react';
const links = {
  about: ['About Us', 'Past Events', 'Team'],
  support: ['FAQ', 'Contact'],
  social: [
    { name: 'Instagram', icon: Instagram, url: 'https://www.instagram.com/abv_iiitm_ieee' },
    { name: 'LinkedIn', icon: Linkedin, url: 'https://www.linkedin.com/company/abviiitmieee' },
    { name: 'Email', icon: Globe, url: 'https://ieee.iiitm.ac.in/' },
    {name: 'Facebook',icon:Facebook,url:'https://www.facebook.com/abviiitmieee'}
  ]
};
export function Footer() {
  return (
    <footer className="bg-black/40 pt-10 pb-6">
      <div className="container mx-auto px-4 md:px-6 text-center md:text-left">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {/* Logo and Description */}
          <div className="space-y-4">
            <div className="flex flex-col items-center md:items-start space-y-4">
              <div className="flex items-center space-x-2">
                <img className="w-6" src=".\Images\Hacksagon_white.png" alt="" />
                <span className="text-xl md:text-2xl font-bold">Hacksagon</span>
              </div>
              <p className="text-gray-400 text-sm md:text-base">
                The premier hardware + software hackathon bringing together innovators, creators, and problem solvers.
              </p>
            </div>
            {/* Social Links */}
            <div className="flex justify-center md:justify-start space-x-4">
              {links.social.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  className="text-gray-400 hover:text-purple-400 transition-colors"
                  aria-label={social.name}
                >
                  <social.icon className="w-6 h-6" />
                </a>
              ))}
            </div>
          </div>

          {/* About Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">About</h3>
            <ul className="space-y-2">
              {links.about.map((link, index) => (
                <li key={index}>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-purple-400 transition-colors text-sm md:text-base"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Support Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Support</h3>
            <ul className="space-y-2">
              {links.support.map((link, index) => (
                <li key={index}>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-purple-400 transition-colors text-sm md:text-base"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-gray-800 pt-6">
          <p className="text-gray-400 text-sm md:text-base">
            © 2025 Hacksagon. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}


