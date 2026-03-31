import { motion } from "framer-motion";
import { Bot, Cloud, Laptop, Palette, Zap, Lock, Handshake, Target } from "lucide-react";
import HeroGlow from "../components/HeroGlow";

export default function Services() {
  const services = [
    {
      title: "Custom Web Development",
      desc: "We create responsive, high-performance websites and web applications tailored to your business needs, using the latest technologies like React, Node.js, and cloud platforms.",
      features: ["Full-Stack Development", "E-Commerce Platforms", "API Integration", "Performance Optimization"],
      Icon: Laptop,
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2015&q=80",
    },
    {
      title: "UI/UX Design Excellence",
      desc: "Our design team crafts intuitive, user-centered interfaces that enhance user experience and drive engagement, from wireframes to polished prototypes.",
      features: ["User Research & Testing", "Figma & Adobe XD", "Mobile-First Design", "Accessibility Compliance"],
      Icon: Palette,
      image: "https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
    },
    {
      title: "Cloud Infrastructure & DevOps",
      desc: "Scale your applications seamlessly with secure cloud solutions. We handle deployment, monitoring, and maintenance to ensure 99.9% uptime.",
      features: ["AWS/Azure/GCP", "CI/CD Pipelines", "Containerization", "Security Audits"],
      Icon: Cloud,
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=2072&q=80",
    },
    {
      title: "AI & Machine Learning Solutions",
      desc: "Integrate intelligent automation and data-driven insights into your operations. From chatbots to predictive analytics, we harness AI to boost efficiency.",
      features: ["Natural Language Processing", "Computer Vision", "Data Analytics", "Custom AI Models"],
      Icon: Bot,
      image: "https://images.unsplash.com/photo-1555255707-c07966088b7b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2069&q=80",
    },
  ];

  const process = [
    {
      step: "01",
      title: "Discovery & Planning",
      desc: "We start by understanding your business goals, target audience, and technical requirements through detailed consultation.",
    },
    {
      step: "02",
      title: "Design & Prototyping",
      desc: "Our design team creates wireframes, mockups, and interactive prototypes to visualize the final product.",
    },
    {
      step: "03",
      title: "Development & Testing",
      desc: "Our developers build your solution using best practices, followed by comprehensive testing across all platforms.",
    },
    {
      step: "04",
      title: "Launch & Support",
      desc: "We deploy your solution and provide ongoing support to ensure optimal performance and user satisfaction.",
    },
  ];

  return (
    <div className="text-gray-900 bg-white min-h-screen min-w-0 overflow-x-clip">
      <section className="relative overflow-hidden bg-gradient-to-br from-teal-50 via-cyan-50 to-emerald-50">
        <HeroGlow />
        <div className="absolute inset-0 bg-white/65 backdrop-blur-[1px]" />
        <div className="relative px-4 sm:px-6 md:px-12 lg:px-16 py-14 md:py-16 lg:py-20">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h1
              initial={{ opacity: 0, y: 36 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65 }}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 mb-4 md:mb-5 tracking-tight px-2"
            >
              Our{" "}
              <span className="bg-gradient-to-r from-teal-600 to-cyan-600 bg-clip-text text-transparent">Services</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.12 }}
              className="text-base sm:text-lg md:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed px-2"
            >
              End-to-end delivery: product strategy, UX, engineering, cloud, and ML — aligned to your KPIs and compliance needs.
            </motion.p>
          </div>
        </div>
      </section>

      <section className="px-4 sm:px-6 md:px-12 lg:px-16 py-12 md:py-16 bg-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10">
          {services.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              whileHover={{ y: -6 }}
              className="bg-white rounded-2xl shadow-lg hover:shadow-2xl overflow-hidden border border-gray-100 transition-all duration-300 group"
            >
              <div className="relative h-48 sm:h-52 overflow-hidden">
                <img
                  src={s.image}
                  alt=""
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-teal-950/45 to-transparent pointer-events-none" />
                <div className="absolute bottom-3 left-3 flex h-11 w-11 items-center justify-center rounded-xl bg-white/25 backdrop-blur-md ring-1 ring-white/50">
                  <s.Icon className="h-6 w-6 text-white" strokeWidth={2.25} aria-hidden />
                </div>
              </div>
              <div className="p-6 sm:p-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-teal-50 text-teal-700">
                    <s.Icon className="h-6 w-6" strokeWidth={2} aria-hidden />
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-bold text-gray-800">{s.title}</h3>
                </div>
                <p className="text-gray-600 mb-5 leading-relaxed text-base sm:text-lg">{s.desc}</p>

                <ul className="space-y-2.5 mb-6">
                  {s.features.map((f, idx) => (
                    <li key={idx} className="text-sm text-gray-500 flex items-center">
                      <span className="w-2 h-2 bg-teal-500 rounded-full mr-3 shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full py-3.5 bg-gradient-to-r from-teal-600 to-cyan-600 text-white rounded-xl font-semibold hover:from-teal-500 hover:to-cyan-500 transition-all duration-300 shadow-md shadow-teal-600/20"
                  onClick={() => (window.location.href = "/contact")}
                >
                  Get Started
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="px-4 sm:px-6 md:px-12 lg:px-16 py-12 md:py-16 bg-gray-50">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65 }}
          className="text-center mb-10 md:mb-12"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 mb-3">Our Process</h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-base sm:text-lg px-2">
            A proven methodology that ensures successful project delivery from concept to completion.
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6">
            {process.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.06 }}
                className="relative"
              >
                <div className="bg-white rounded-2xl shadow-lg p-5 sm:p-6 border border-gray-100 hover:shadow-xl transition-all duration-300 h-full">
                  <div className="text-2xl sm:text-3xl font-bold text-teal-600 mb-3">{step.step}</div>
                  <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-2">{step.title}</h3>
                  <p className="text-gray-600 text-sm sm:text-base leading-relaxed">{step.desc}</p>
                </div>
                {i < process.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-3 transform -translate-y-1/2">
                    <div className="w-6 h-0.5 bg-teal-300" />
                    <div className="w-0 h-0 border-l-4 border-l-teal-300 border-y-2 border-y-transparent ml-6" />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 sm:px-6 md:px-12 lg:px-16 py-12 md:py-16 bg-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65 }}
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 mb-6">Why Choose TechNova?</h2>
            <div className="space-y-5">
              <div className="flex items-start gap-3 sm:gap-4">
                <div className="w-11 h-11 sm:w-12 sm:h-12 bg-teal-100 rounded-xl flex items-center justify-center flex-shrink-0 text-teal-700">
                  <Zap className="w-5 h-5 sm:w-6 sm:h-6" strokeWidth={2.25} aria-hidden />
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-1">Fast & Efficient Delivery</h3>
                  <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                    We use agile methodologies and modern tools to deliver high-quality solutions within agreed timelines.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 sm:gap-4">
                <div className="w-11 h-11 sm:w-12 sm:h-12 bg-emerald-100 rounded-xl flex items-center justify-center flex-shrink-0 text-emerald-800">
                  <Lock className="w-5 h-5 sm:w-6 sm:h-6" strokeWidth={2.25} aria-hidden />
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-1">Security & Reliability</h3>
                  <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                    Every solution is built with security best practices and undergoes rigorous testing for optimal performance.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 sm:gap-4">
                <div className="w-11 h-11 sm:w-12 sm:h-12 bg-cyan-100 rounded-xl flex items-center justify-center flex-shrink-0 text-cyan-800">
                  <Handshake className="w-5 h-5 sm:w-6 sm:h-6" strokeWidth={2.25} aria-hidden />
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-1">Dedicated Support</h3>
                  <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                    Our relationship doesn't end at launch. We provide ongoing support and maintenance to ensure your success.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65, delay: 0.1 }}
            className="relative"
          >
            <div
              className="h-72 sm:h-96 lg:h-[500px] rounded-2xl shadow-2xl bg-cover bg-center"
              style={{
                backgroundImage:
                  "url('https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')",
              }}
            />
            <div className="absolute bottom-3 left-3 right-3 sm:bottom-4 sm:left-4 md:-bottom-5 md:-left-5 md:right-auto bg-white rounded-2xl shadow-xl p-4 sm:p-5 max-w-full sm:max-w-xs border border-teal-100">
              <div className="flex items-center mb-2 sm:mb-3">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-teal-100 rounded-xl flex items-center justify-center mr-3 text-teal-700 shrink-0">
                  <Target className="w-5 h-5 sm:w-6 sm:h-6" strokeWidth={2.25} aria-hidden />
                </div>
                <div>
                  <h4 className="font-bold text-gray-800 text-sm sm:text-base">100% Success Rate</h4>
                  <p className="text-gray-600 text-xs sm:text-sm">On-Time Delivery</p>
                </div>
              </div>
              <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
                We pride ourselves on delivering projects on time and exceeding client expectations.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="px-4 sm:px-6 md:px-12 lg:px-16 py-12 md:py-16 bg-gradient-to-r from-teal-600 via-cyan-600 to-emerald-500 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/15" />
        <div className="relative z-10 max-w-4xl mx-auto text-center px-2">
          <motion.h2
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65 }}
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4"
          >
            Ready to Start Your Project?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65, delay: 0.1 }}
            className="text-teal-100 text-base sm:text-lg md:text-xl mb-7 max-w-2xl mx-auto"
          >
            Let's discuss your requirements and create a custom solution that drives your business forward.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65, delay: 0.18 }}
            className="flex flex-col sm:flex-row gap-3 justify-center"
          >
            <motion.button
              whileHover={{ scale: 1.04, boxShadow: "0 15px 35px rgba(0, 0, 0, 0.3)" }}
              whileTap={{ scale: 0.98 }}
              className="px-8 py-3.5 sm:px-10 sm:py-4 bg-white text-teal-600 rounded-xl font-bold hover:bg-gray-50 transition-all duration-300 shadow-xl"
              onClick={() => (window.location.href = "/contact")}
            >
              Get Free Consultation
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.98 }}
              className="px-8 py-3.5 sm:px-10 sm:py-4 border-2 border-white text-teal-700 rounded-xl font-bold hover:bg-white/10 transition-all duration-300"
              onClick={() => (window.location.href = "/about")}
            >
              Learn More About Us
            </motion.button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
