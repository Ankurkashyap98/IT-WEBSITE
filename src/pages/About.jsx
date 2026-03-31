import { motion } from "framer-motion";
import { Rocket, Handshake, BadgeCheck, BookOpen, Users, Star, Headphones } from "lucide-react";
import HeroGlow from "../components/HeroGlow";

export default function About() {
  const values = [
    {
      title: "Innovation First",
      desc: "We stay ahead of technology trends, constantly exploring new tools and methodologies to deliver cutting-edge solutions.",
      Icon: Rocket,
    },
    {
      title: "Client-Centric Approach",
      desc: "Your success is our success. We work closely with you throughout the entire development process.",
      Icon: Handshake,
    },
    {
      title: "Quality Assurance",
      desc: "Every project undergoes rigorous testing and quality checks to ensure flawless performance and user experience.",
      Icon: BadgeCheck,
    },
    {
      title: "Continuous Learning",
      desc: "Our team is committed to ongoing professional development and staying current with industry best practices.",
      Icon: BookOpen,
    },
  ];

  const stats = [
    { number: "500+", label: "Projects Completed", Icon: Rocket },
    { number: "150+", label: "Happy Clients", Icon: Users },
    { number: "98%", label: "Client Satisfaction", Icon: Star },
    { number: "24/7", label: "Support Available", Icon: Headphones },
  ];

  const team = [
    {
      name: "Sarah Chen",
      role: "Chief Technology Officer",
      desc: "15+ years in software architecture and team leadership.",
      image:
        "https://plus.unsplash.com/premium_photo-1677368598706-4fa4f345d579?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      name: "Marcus Rodriguez",
      role: "Lead Developer",
      desc: "Full-stack expert specializing in React and Node.js ecosystems.",
      image:
        "https://plus.unsplash.com/premium_photo-1661632733354-768d2c7f9839?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjV8fGVtcGxveWVlfGVufDB8fDB8fHww",
    },
    {
      name: "Emily Watson",
      role: "UX/UI Design Director",
      desc: "Award-winning designer with a passion for user-centered design.",
      image:
        "https://images.unsplash.com/photo-1648412868424-9bee5023a257?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
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
              About{" "}
              <span className="bg-gradient-to-r from-teal-600 to-cyan-600 bg-clip-text text-transparent">TechNova</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.12 }}
              className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed px-2"
            >
              We're technologists, designers, and strategists building digital products since 2016 — with clarity, craft, and measurable outcomes.
            </motion.p>
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
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 mb-5 sm:mb-6">Our Story</h2>
            <div className="space-y-4 text-gray-600 text-base sm:text-lg leading-relaxed">
              <p>
                TechNova Solutions was born from a simple belief: that technology should empower businesses to achieve more. Founded by a group of experienced developers and designers, we started with a mission to bridge the gap between complex technology and practical business solutions.
              </p>
              <p>
                Over the years, we've grown from a small team of 5 to a full-service digital agency serving clients across industries. Our journey has been marked by continuous learning, technological innovation, and an unwavering commitment to delivering exceptional results.
              </p>
              <p>
                Today, we're proud to be recognized as a leader in digital transformation, having successfully delivered over 500 projects and earned the trust of 150+ satisfied clients worldwide.
              </p>
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
                  "url('https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8ZW1wbG95ZWV8ZW58MHx8MHx8fDA%3D')",
              }}
            />
            <div className="absolute bottom-3 right-3 sm:bottom-4 sm:right-4 md:-bottom-6 md:-right-6 bg-teal-600 text-white rounded-2xl shadow-xl p-4 sm:p-5 max-w-[calc(100%-1.5rem)] sm:max-w-xs">
              <div className="flex items-center gap-2 mb-1">
                <Rocket className="w-6 h-6 opacity-90 shrink-0" aria-hidden />
                <span className="text-2xl sm:text-3xl font-bold">8+</span>
              </div>
              <div className="text-xs sm:text-sm opacity-90">Years of Excellence</div>
            </div>
          </motion.div>
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
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 mb-3">Our Values</h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-base sm:text-lg px-2">
            The principles that guide everything we do and shape our approach to delivering exceptional results.
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6">
          {values.map((value, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              whileHover={{ y: -4 }}
              className="bg-white rounded-2xl shadow-lg hover:shadow-xl p-6 sm:p-7 border border-gray-100 transition-all duration-300 group"
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-teal-50 text-teal-700 group-hover:bg-teal-100 transition-colors">
                <value.Icon className="w-6 h-6" strokeWidth={2} aria-hidden />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">{value.title}</h3>
              <p className="text-gray-600 text-sm sm:text-base leading-relaxed">{value.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="px-4 sm:px-6 md:px-12 lg:px-16 py-12 md:py-16 bg-white">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65 }}
          className="text-center mb-10 md:mb-12"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 mb-3">Meet Our Team</h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-base sm:text-lg px-2">
            The talented individuals behind our success, each bringing unique expertise and passion to every project.
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {team.map((member, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              whileHover={{ y: -6 }}
              className="bg-white rounded-2xl shadow-lg hover:shadow-2xl overflow-hidden border border-gray-100 transition-all duration-300 group"
            >
              <div
                className="h-56 sm:h-64 bg-cover bg-center group-hover:scale-105 transition-transform duration-500"
                style={{ backgroundImage: `url('${member.image}')` }}
              />
              <div className="p-5 sm:p-6">
                <h3 className="text-lg font-bold text-gray-800 mb-1">{member.name}</h3>
                <p className="text-teal-600 font-semibold text-sm sm:text-base mb-2">{member.role}</p>
                <p className="text-gray-600 text-sm leading-relaxed">{member.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="px-4 sm:px-6 md:px-12 lg:px-16 py-12 md:py-16 bg-gradient-to-r from-teal-600 to-cyan-600">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65 }}
            className="text-center mb-10 md:mb-12"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-3">By the Numbers</h2>
            <p className="text-teal-100 max-w-2xl mx-auto text-base sm:text-lg px-2">
              Our track record speaks for itself. Here's what we've achieved together.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 md:gap-6">
            {stats.map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: i * 0.06 }}
                whileHover={{ scale: 1.04 }}
                className="text-center bg-white/10 backdrop-blur-lg rounded-xl sm:rounded-2xl p-4 sm:p-5 md:p-6 border border-white/20"
              >
                <div className="flex justify-center mb-2 sm:mb-3 text-white">
                  <stat.Icon className="w-8 h-8 sm:w-9 sm:h-9" strokeWidth={1.75} aria-hidden />
                </div>
                <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-1">{stat.number}</h3>
                <p className="text-teal-100 text-xs sm:text-sm leading-tight px-1">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 sm:px-6 md:px-12 lg:px-16 py-12 md:py-16 bg-gray-50">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65 }}
          className="max-w-4xl mx-auto text-center px-2"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 mb-4">Ready to Work Together?</h2>
          <p className="text-gray-600 text-base sm:text-lg md:text-xl mb-6 max-w-2xl mx-auto">
            Let's discuss how we can help transform your business with innovative technology solutions.
          </p>
          <motion.button
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.98 }}
            className="px-8 py-3.5 sm:px-10 sm:py-4 bg-gradient-to-r from-teal-600 to-cyan-600 text-white rounded-xl font-bold hover:from-teal-500 hover:to-cyan-500 transition-all duration-300 shadow-lg shadow-teal-600/25"
            onClick={() => (window.location.href = "/contact")}
          >
            Start a Conversation
          </motion.button>
        </motion.div>
      </section>
    </div>
  );
}
