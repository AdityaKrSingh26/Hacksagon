import { CircuitBoard, Github, Twitter, Linkedin, Mail } from 'lucide-react';

const links = {
  about: ['About Us', 'Past Events', 'Team', 'Careers'],
  support: ['FAQ', 'Guidelines', 'Contact', 'Terms'],
  legal: ['Privacy Policy', 'Terms of Service', 'Code of Conduct'],
  social: [
    { name: 'GitHub', icon: Github, url: '#' },
    { name: 'Twitter', icon: Twitter, url: '#' },
    { name: 'LinkedIn', icon: Linkedin, url: '#' },
    { name: 'Email', icon: Mail, url: '#' }
  ]
};

export function Footer() {
  return (
    <footer className="bg-black/40 pt-20 pb-10">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-12 gap-8 mb-16">
          {/* Brand and Description */}
          <div className="col-span-2 md:col-span-4">
            <div className="flex items-center space-x-2 mb-4">
              <CircuitBoard className="w-8 h-8" />
              <span className="text-2xl font-bold">Hacksagon</span>
            </div>
            <p className="text-gray-400 mb-4">
              The premier hardware + software hackathon bringing together innovators, creators, and problem solvers.
            </p>
            <div className="flex space-x-4">
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

          {/* Quick Links */}
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-lg font-semibold mb-4">About</h3>
            <ul className="space-y-2">
              {links.about.map((link, index) => (
                <li key={index}>
                  <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="col-span-1 md:col-span-2">
            <h3 className="text-lg font-semibold mb-4">Support</h3>
            <ul className="space-y-2">
              {links.support.map((link, index) => (
                <li key={index}>
                  <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="col-span-1 md:col-span-2">
            <h3 className="text-lg font-semibold mb-4">Legal</h3>
            <ul className="space-y-2">
              {links.legal.map((link, index) => (
                <li key={index}>
                  <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 pt-8">
          <p className="text-center text-gray-400">
            © {new Date().getFullYear()} Hacksagon. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}