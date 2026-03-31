import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin } from "lucide-react";
import HeroGlow from "../components/HeroGlow";

export default function Contact() {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      alert('Thank you for your message! We\'ll get back to you soon.');
      setFormData({ name: '', email: '', phone: '', message: '' });
    }, 1500);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      Icon: Mail,
      title: "Email Us",
      details: "hello@technova.com",
      desc: "Send us an email and we'll respond within 24 hours.",
    },
    {
      Icon: Phone,
      title: "Call Us",
      details: "+1 (555) 123-4567",
      desc: "Mon-Fri from 8am to 5pm.",
    },
    {
      Icon: MapPin,
      title: "Visit Us",
      details: "San Francisco, CA",
      desc: "123 Tech Street, Suite 100",
    },
  ];

  return (
    <div className="text-gray-900 bg-white min-h-screen min-w-0 overflow-x-clip">
      {/* HERO */}
      <section className="relative overflow-hidden bg-gradient-to-br from-teal-50 via-cyan-50 to-emerald-50">
        <HeroGlow />
        <div className="absolute inset-0 bg-white/65 backdrop-blur-[1px]"></div>
        <div className="relative px-4 sm:px-6 md:px-12 lg:px-16 py-14 md:py-16 lg:py-20">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h1
              initial={{ opacity: 0, y: 36 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65 }}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 mb-4 md:mb-5 tracking-tight px-2"
            >
              Get In{" "}
              <span className="bg-gradient-to-r from-teal-600 to-cyan-600 bg-clip-text text-transparent">Touch</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.12 }}
              className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed px-2"
            >
              Share your goals, timeline, and constraints — we'll respond with next steps, not a generic pitch.
            </motion.p>
          </div>
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section className="px-4 sm:px-6 md:px-12 lg:px-16 py-12 md:py-16 bg-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12">
          {/* LEFT INFO */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 mb-4 sm:mb-5">
              Let's Start a Conversation
            </h2>
            <p className="text-gray-600 text-base sm:text-lg leading-relaxed mb-6 sm:mb-8">
              Whether you have a specific project in mind or just want to explore possibilities, we're here to help. Our team maps scope, risks, and delivery options so you can decide with confidence.
            </p>

            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              whileHover={{ y: -4 }}
              className="mb-8 sm:mb-10 rounded-2xl overflow-hidden shadow-xl shadow-teal-900/10 ring-2 ring-teal-100 max-w-lg w-full"
            >
              <img
                src="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                alt="Modern office workspace"
                className="w-full h-56 object-cover"
              />
              <div className="bg-gradient-to-r from-teal-600 to-cyan-600 px-5 py-3 text-white text-sm font-semibold">
                San Francisco HQ · We reply within 24h
              </div>
            </motion.div>

            <div className="space-y-6 sm:space-y-7">
              {contactInfo.map((info, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.1 }}
                  className="flex items-start gap-3 sm:gap-4"
                >
                  <div className="w-14 h-14 sm:w-16 sm:h-16 bg-teal-100 rounded-2xl flex items-center justify-center flex-shrink-0 text-teal-700">
                    <info.Icon className="w-7 h-7 sm:w-8 sm:h-8" strokeWidth={2} aria-hidden />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-800 mb-2">{info.title}</h3>
                    <p className="text-teal-600 font-semibold text-lg mb-1">{info.details}</p>
                    <p className="text-gray-600">{info.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="mt-12 p-6 bg-gradient-to-r from-teal-50 to-emerald-50 rounded-2xl border border-teal-100"
            >
              <h3 className="text-xl font-bold text-gray-800 mb-3">Why Choose TechNova?</h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-teal-500 rounded-full mr-3"></span>
                  Free initial consultation
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-teal-500 rounded-full mr-3"></span>
                  Transparent pricing
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-teal-500 rounded-full mr-3"></span>
                  Dedicated project manager
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-teal-500 rounded-full mr-3"></span>
                  24/7 support after launch
                </li>
              </ul>
            </motion.div>
          </motion.div>

          {/* FORM */}
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-white rounded-2xl shadow-2xl shadow-teal-900/10 h-fit p-8 md:p-10 border border-teal-100/80 ring-1 ring-teal-50"
          >
            <h3 className="text-2xl font-bold text-gray-800 mb-8">Send Us a Message</h3>

            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition-all duration-300 outline-none"
                  placeholder="Your full name"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition-all duration-300 outline-none"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition-all duration-300 outline-none"
                  placeholder="+1 (555) 123-4567"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Message *
                </label>
                <textarea
                  rows="5"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition-all duration-300 outline-none resize-none"
                  placeholder="Tell us about your project..."
                ></textarea>
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                disabled={loading}
                className="w-full py-4 bg-gradient-to-r from-teal-600 to-cyan-600 text-white rounded-xl font-semibold hover:from-teal-700 hover:to-cyan-700 transition-all duration-300 shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading ? (
                  <div className="flex items-center justify-center">
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                    Sending...
                  </div>
                ) : (
                  'Send Message'
                )}
              </motion.button>
            </div>
          </motion.form>
        </div>
      </section>

      {/* MAP OR IMAGE SECTION */}
      <section className="px-4 sm:px-6 md:px-12 lg:px-16 py-12 md:py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">Visit Our Office</h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              Located in the heart of San Francisco's tech district, our office is designed to foster creativity and collaboration.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div
              className="h-96 md:h-[500px] rounded-2xl shadow-2xl bg-cover bg-center"
              style={{
                backgroundImage: "url('https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2069&q=80')",
              }}
            ></div>
            <div className="absolute bottom-[-50px] left-[-22px] bg-white rounded-2xl shadow-xl p-2 max-w-[19rem]">
              <h3 className="text-xl font-bold text-gray-800 mb-2 flex items-center gap-2">
                <MapPin className="h-5 w-5 text-teal-600 shrink-0" strokeWidth={2.25} aria-hidden />
                Our Location
              </h3>
              <p className="text-gray-600 mb-2">
                123 Tech Street, Suite 100<br />
                San Francisco, CA 94105
              </p>
              <p className="text-sm text-gray-500">
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
