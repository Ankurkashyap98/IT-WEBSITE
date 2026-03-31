import { motion } from "framer-motion";
import { Share2, Send, Link2, Mail, Phone, MapPin } from "lucide-react";
import BrandLogo from "./BrandLogo";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 md:py-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">

        {/* BRAND */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-3 mb-5">
            <BrandLogo size={48} className="rounded-2xl ring-2 ring-teal-500/30 shadow-lg shadow-teal-900/40" />
            <div>
              <h2 className="text-xl font-bold text-white tracking-tight">TechNova</h2>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white">IT Solutions</p>
            </div>
          </div>
          <p className="text-gray-400 leading-relaxed mb-6">
            Empowering businesses with innovative technology solutions that drive growth, efficiency, and long-term success in the digital world.
          </p>
          <div className="flex space-x-4">
            <motion.a
              whileHover={{ scale: 1.1, y: -2 }}
              href="#"
              aria-label="Facebook"
              className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-teal-600 transition-all duration-300 text-gray-300 hover:text-white"
            >
              <Share2 className="w-5 h-5" strokeWidth={2} aria-hidden />
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.1, y: -2 }}
              href="#"
              aria-label="Twitter"
              className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-teal-600 transition-all duration-300 text-gray-300 hover:text-white"
            >
              <Send className="w-5 h-5" strokeWidth={2} aria-hidden />
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.1, y: -2 }}
              href="#"
              aria-label="LinkedIn"
              className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-teal-600 transition-all duration-300 text-gray-300 hover:text-white"
            >
              <Link2 className="w-5 h-5" strokeWidth={2} aria-hidden />
            </motion.a>
          </div>
        </motion.div>

        {/* SERVICES */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <h3 className="text-white font-semibold mb-4">Services</h3>
          <ul className="space-y-3">
            <li>
              <a href="/services" className=" text-gray-400 hover:text-teal-400 transition-colors duration-300">
                Web Development
              </a>
            </li>
            <li>
              <a href="/services" className=" text-gray-400 hover:text-teal-400 transition-colors duration-300">
                UI/UX Design
              </a>
            </li>
            <li>
              <a href="/services" className=" text-gray-400 hover:text-teal-400 transition-colors duration-300">
                Cloud Solutions
              </a>
            </li>
            <li>
              <a href="/services" className=" text-gray-400 hover:text-teal-400 transition-colors duration-300">
                AI Solutions
              </a>
            </li>
          </ul>
        </motion.div>

        {/* COMPANY */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h3 className="text-white font-semibold mb-4">Company</h3>
          <ul className="space-y-3">
            <li>
              <a href="/about" className=" text-gray-400 hover:text-teal-400 transition-colors duration-300">
                About Us
              </a>
            </li>
            <li>
              <a href="/services" className=" text-gray-400 hover:text-teal-400 transition-colors duration-300">
                Our Services
              </a>
            </li>
            <li>
              <a href="/contact" className="text-gray-400 hover:text-teal-400 transition-colors duration-300">
                Contact
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-400 Fhover:text-teal-400 transition-colors duration-300">
                Careers
              </a>
            </li>
          </ul>
        </motion.div>

        {/* CONTACT */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <h3 className="text-white font-semibold mb-4">Contact Info</h3>
          <ul className="space-y-3 text-gray-400">
            <li className="flex items-center gap-3">
              <Mail className="w-4 h-4 text-teal-400 shrink-0" strokeWidth={2} aria-hidden />
              hello@technova.com
            </li>
            <li className="flex items-center gap-3">
              <Phone className="w-4 h-4 text-teal-400 shrink-0" strokeWidth={2} aria-hidden />
              +1 (555) 123-4567
            </li>
            <li className="flex items-center gap-3">
              <MapPin className="w-4 h-4 text-teal-400 shrink-0" strokeWidth={2} aria-hidden />
              San Francisco, CA
            </li>
          </ul>
        </motion.div>
      </div>

      {/* BOTTOM */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="border-t border-gray-800 text-center py-8"
      >
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © 2026 TechNova Solutions. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-gray-400 hover:text-teal-400 transition-colors duration-300 text-sm">
              Privacy Policy
            </a>
            <a href="#" className="text-gray-400 hover:text-teal-400 transition-colors duration-300 text-sm">
              Terms of Service
            </a>
          </div>
        </div>
      </motion.div>
    </footer>
  );
}