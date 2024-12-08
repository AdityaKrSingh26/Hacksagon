import { CircuitBoard, Instagram, Linkedin, Globe,Facebook } from 'lucide-react';
const links = {
  about: ['About Us', 'Past Events', 'Team'],
  support: ['FAQ', 'Contact'],
  social: [
    { name: 'Twitter', icon: Instagram, url: 'https://www.instagram.com/abv_iiitm_ieee' },
    { name: 'LinkedIn', icon: Linkedin, url: 'https://www.linkedin.com/company/abviiitmieee' },
    { name: 'Email', icon: Globe, url: 'https://ieee.iiitm.ac.in/' },
    {name: 'Facebook',icon:Facebook,url:'https://www.facebook.com/abviiitmieee'}
  ]
};
export function Footer() {
  return (
    <footer className="bg-black/40 pt-20 pb-10">
      <div className="container mx-auto px-6 text-center">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-16 justify-center">
          <div className="col-span-12 md:col-span-4">
            <div className="flex flex-col items-center space-y-4 mb-4">
              <div className="flex items-center space-x-2">
                <CircuitBoard className="w-8 h-8" />
                <span className="text-2xl font-bold">Hacksagon</span>
              </div>
              <p className="text-gray-400">
                The premier hardware + software hackathon bringing together innovators, creators, and problem solvers.
              </p>
            </div>
            <div className="flex justify-center space-x-4">
              {links.social.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  className="text-gray-400 hover:text-purple-400 transition-colors"
                  aria-label={social.name}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>
          <div className="col-span-6 md:col-span-4">
            <h3 className="text-lg font-semibold mb-4 text-center md:text-left">About</h3>
            <ul className="space-y-2 pl-0">
              {links.about.map((link, index) => (
                <li key={index} className="text-left">
                  <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="col-span-6 md:col-span-4">
            <h3 className="text-lg font-semibold mb-4 text-center md:text-left">Support</h3>
            <ul className="space-y-2 pl-0">
              {links.support.map((link, index) => (
                <li key={index} className="text-left">
                  <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 pt-8">
          <p className="text-gray-400">
            © 2025 Hacksagon. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
