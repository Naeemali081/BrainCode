import { motion } from 'framer-motion';
import { Github, Instagram, Linkedin, Mail } from 'lucide-react';

export function Footer() {
  const socialLinks = [
    { icon: Github, href: 'https://github.com/BrainCode360', label: 'GitHub' },
    { icon: Instagram, href: 'https://www.instagram.com/braincode360/', label: 'Instagram' },
    { icon: Linkedin, href: 'https://www.linkedin.com/company/braincode-360', label: 'LinkedIn' },
    { icon: Mail, href: 'mailto:contact@braincode360.com', label: 'Email' },
  ];

  return (
    <footer className="bg-slate-950 border-t border-slate-800 py-12 px-4">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-white font-bold text-xl mb-4">BrainCode 360</h3>
            <p className="text-slate-400 text-sm">
              Transforming ideas into innovative software solutions for the modern world.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h4 className="text-white font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-slate-400 text-sm">
              <li><a href="#" className="hover:text-purple-400 transition-colors">Web Development</a></li>
              <li><a href="#" className="hover:text-purple-400 transition-colors">Mobile Apps</a></li>
              <li><a href="#" className="hover:text-purple-400 transition-colors">Cloud Solutions</a></li>
              <li><a href="#" className="hover:text-purple-400 transition-colors">UI/UX Design</a></li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="text-white font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-slate-400 text-sm">
              <li><a href="#" className="hover:text-purple-400 transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-purple-400 transition-colors">Portfolio</a></li>
              <li><a href="#" className="hover:text-purple-400 transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-purple-400 transition-colors">Contact</a></li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h4 className="text-white font-semibold mb-4">Connect</h4>
            <div className="flex gap-4">
              {socialLinks.map((link, index) => (
                <motion.a
                  key={index}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.label}
                  whileHover={{ scale: 1.2, y: -3 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center text-slate-400 hover:text-purple-400 hover:bg-slate-700 transition-colors"
                >
                  <link.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="border-t border-slate-800 pt-8 text-center text-slate-400 text-sm"
        >
          <p>&copy; {new Date().getFullYear()} BrainCode 360. All rights reserved.</p>
        </motion.div>
      </div>
    </footer>
  );
}
