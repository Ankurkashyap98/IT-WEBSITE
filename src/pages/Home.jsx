import { motion, useReducedMotion } from "framer-motion";
import {
  Bot,
  Cloud,
  Laptop,
  Palette,
  Zap,
  TrendingUp,
  Rocket,
  Users,
  Clock,
  Headphones,
  Wrench,
  Lock,
  Handshake,
  Trophy,
} from "lucide-react";
import FAQ from "../components/FAQ";
import HeroGlow from "../components/HeroGlow";

const tealShadow = "0 12px 40px rgba(13, 148, 136, 0.28)";
const tealShadowLg = "0 18px 50px rgba(13, 148, 136, 0.22)";

export default function Home() {
  const reduceMotion = useReducedMotion();
  const text = "Empowering Businesses with Cutting-Edge IT Solutions".split(" ");
  const services = [
    {
      title: "Custom Web Development",
      desc: "Responsive, high-performance web apps tailored to your business — React, Node, and cloud-native delivery.",
      features: ["Full-Stack Development", "E-Commerce Platforms", "API Integration", "Performance Tuning"],
      Icon: Laptop,
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    },
    {
      title: "UI/UX Design Excellence",
      desc: "Research-led interfaces and design systems that improve clarity, conversion, and accessibility.",
      features: ["User Research & Testing", "Figma & Prototypes", "Mobile-First UI", "Accessibility"],
      Icon: Palette,
      image:
        "https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    },
    {
      title: "Cloud Infrastructure & DevOps",
      desc: "Secure scaling on AWS, Azure, or GCP — CI/CD, observability, and uptime you can trust.",
      features: ["AWS/Azure/GCP", "CI/CD Pipelines", "Containers & IaC", "Security Reviews"],
      Icon: Cloud,
      image:
        "https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    },
    {
      title: "AI & Machine Learning Solutions",
      desc: "Practical AI: automation, analytics, and assistants integrated into your existing workflows.",
      features: ["NLP & Chatbots", "Computer Vision", "Data Pipelines", "Model Integration"],
      Icon: Bot,
      image:
        "https://images.unsplash.com/photo-1555255707-c07966088b7b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    },
  ];

  const stats = [
    { number: "500+", label: "Projects Completed", Icon: Rocket },
    { number: "150+", label: "Happy Clients", Icon: Users },
    { number: "8+", label: "Years Experience", Icon: Clock },
    { number: "24/7", label: "Support Available", Icon: Headphones },
  ];

  const partnerReasons = [
    { title: "Agile Development", desc: "Fast, iterative development with regular client feedback and transparent communication.", Icon: Zap },
    { title: "Cutting-Edge Tech", desc: "We stay ahead of technology trends, using the latest tools and frameworks for optimal performance.", Icon: Wrench },
    { title: "Scalable Solutions", desc: "Build for growth with architectures that can handle increased traffic and complex features.", Icon: TrendingUp },
    { title: "Security First", desc: "Implement robust security measures and best practices to protect your data and users.", Icon: Lock },
    { title: "Dedicated Support", desc: "Ongoing maintenance, updates, and support to ensure your solution evolves with your needs.", Icon: Handshake },
    { title: "Proven Results", desc: "Track record of successful projects with measurable ROI and client satisfaction.", Icon: Trophy },
  ];

  const brands = ["Nexus", "Orbit", "Volt", "Apex", "Scale"];

  const floatCard = reduceMotion ? {} : { y: [0, -8, 0] };

  return (
    <div className="text-gray-900 bg-white min-h-screen min-w-0 overflow-x-clip">
      {/* HERO */}
      <section className="min-h-[100dvh] min-h-screen flex flex-col justify-center relative overflow-hidden pt-20 pb-10 md:pb-14 lg:pt-24">
        <div
          className="absolute inset-0 bg-cover bg-center scale-105"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')",
          }}
        />
        <div className="absolute inset-0 bg-slate-900/45 backdrop-blur-md" />
        <HeroGlow />
        <div className="absolute inset-0 bg-gradient-to-br from-white/88 via-teal-50/82 to-cyan-50/78 backdrop-blur-[8px]" />
        <div className="absolute inset-0 bg-gradient-to-t from-white/30 via-transparent to-white/20 pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 w-full grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 xl:gap-14 items-center py-6 md:py-10">
          <div className="text-center lg:text-left order-1">
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45 }}
              className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-teal-100/95 text-teal-900 text-xs sm:text-sm font-semibold border border-teal-200/70 shadow-sm mb-3 sm:mb-4"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-teal-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-teal-500" />
              </span>
              Now onboarding Q2 projects
            </motion.p>

            <h1 className="text-[1.65rem] leading-tight sm:text-4xl md:text-5xl lg:text-[2.65rem] xl:text-5xl font-extrabold max-w-3xl mx-auto lg:mx-0 flex flex-wrap justify-center lg:justify-start text-white px-0.5 break-words tracking-tight [text-shadow:0_1px_2px_rgba(255,255,255,0.85)]">
              {text.map((word, i) => (
                <motion.span
                  key={i}
                  initial={{ opacity: 0, y: 28 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    delay: i * 0.1,
                    duration: 0.5,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  whileHover={{ y: -2, color: "#0d9488" }}
                  className="mr-2 sm:mr-3 transition-colors duration-300"
                >
                  {word}
                </motion.span>
              ))}
            </h1>

            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: text.length * 0.1 + 0.15, duration: 0.5 }}
              className="mt-3 sm:mt-4 text-white max-w-xl mx-auto lg:mx-0 text-base sm:text-lg leading-relaxed font-medium"
            >
              Transform your business with{" "}
              <span className="tn-shimmer-text font-semibold">innovative technology</span> — from web
              platforms to AI, we ship secure, scalable products that look sharp and perform.
            </motion.p>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: text.length * 0.1 + 0.35, duration: 0.5 }}
              className="mt-2 text-white max-w-xl mx-auto lg:mx-0 text-sm sm:text-base leading-relaxed"
            >
              Discovery workshops, solution architecture, and dedicated squads — scoped to your roadmap and budget.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: text.length * 0.1 + 0.45, duration: 0.5 }}
              className="mt-5 sm:mt-6 flex flex-col sm:flex-row gap-3 sm:gap-3.5 justify-center lg:justify-start"
            >
              <motion.button
                whileHover={{ scale: 1.03, boxShadow: tealShadowLg }}
                whileTap={{ scale: 0.98 }}
                className="px-7 py-3 sm:py-3.5 bg-gradient-to-r from-teal-600 to-cyan-600 text-white rounded-xl font-semibold hover:from-teal-500 hover:to-cyan-500 transition-all duration-300 shadow-lg shadow-teal-600/30 text-sm sm:text-base"
                onClick={() => (window.location.href = "/contact")}
              >
                Start Your Project
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.03, boxShadow: tealShadow }}
                whileTap={{ scale: 0.98 }}
                className="px-7 py-3 sm:py-3.5 bg-gradient-to-r from-teal-600 to-cyan-600 text-white rounded-xl font-semibold border-2 border-teal-600 text-teal-800 bg-white/95 hover:bg-teal-50 transition-all duration-300 shadow-md text-sm sm:text-base"
                onClick={() => (window.location.href = "/services")}
              >
                Explore Services
              </motion.button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: text.length * 0.1 + 0.65, duration: 0.5 }}
              className="mt-8 sm:mt-9 pt-6 sm:pt-7 border-t border-teal-200/60 max-w-xl mx-auto lg:mx-0"
            >
              <p className="text-[10px] sm:text-xs font-bold uppercase tracking-[0.2em] text-white mb-3 sm:mb-4">
                Trusted by teams shipping worldwide
              </p>
              <div className="flex flex-wrap justify-center lg:justify-start gap-2">
                {brands.map((name, i) => (
                  <motion.span
                    key={name}
                    initial={{ opacity: 0, scale: 0.92 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.85 + i * 0.05 }}
                    whileHover={{
                      scale: 1.05,
                      borderColor: "rgba(13, 148, 136, 0.55)",
                      color: "#0f766e",
                    }}
                    className="px-3 py-1.5 sm:px-3.5 sm:py-2 rounded-lg text-xs sm:text-sm font-bold text-slate-600 bg-white/90 border border-teal-100/90 shadow-sm backdrop-blur-sm cursor-default"
                  >
                    {name}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25, duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
            className="relative order-2 w-full max-w-lg mx-auto lg:max-w-none"
          >
            <motion.div
              animate={floatCard}
              transition={{ duration: 5.5, repeat: reduceMotion ? 0 : Infinity, ease: "easeInOut" }}
              className="relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl shadow-teal-900/25 ring-2 ring-teal-200/60"
            >
              <img
                src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
                alt="Developers building software"
                className="w-full h-56 sm:h-72 md:h-80 lg:h-[400px] xl:h-[420px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-teal-950/75 via-teal-900/15 to-transparent" />
              <motion.div
                initial={{ y: 16, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.85, duration: 0.45 }}
                className="absolute bottom-3 left-3 right-3 sm:bottom-5 sm:left-5 sm:right-5 rounded-xl sm:rounded-2xl bg-white/95 backdrop-blur-md p-3 sm:p-4 border border-teal-100 shadow-xl"
              >
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 sm:h-12 sm:w-12 shrink-0 rounded-xl bg-gradient-to-br from-teal-500 to-cyan-500 flex items-center justify-center shadow-lg text-white">
                    <Zap className="w-5 h-5 sm:w-6 sm:h-6" strokeWidth={2.25} aria-hidden />
                  </div>
                  <div className="min-w-0 text-left">
                    <p className="font-bold text-slate-800 text-sm sm:text-base">Ship faster</p>
                    <p className="text-xs sm:text-sm text-slate-600 leading-snug">
                      Design systems · CI/CD · Cloud-native
                    </p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
            <motion.div
              aria-hidden
              className="absolute -z-10 -right-4 lg:-right-8 top-8 lg:top-12 h-32 w-32 lg:h-40 lg:w-40 rounded-full bg-cyan-400/30 blur-3xl"
              animate={reduceMotion ? {} : { scale: [1, 1.12, 1], opacity: [0.35, 0.6, 0.35] }}
              transition={{ duration: 6, repeat: Infinity }}
            />
          </motion.div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="px-4 sm:px-6 md:px-12 lg:px-16 py-12 md:py-16 bg-gradient-to-b from-slate-100/90 via-slate-50 to-white relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[min(100%,80rem)] h-px bg-gradient-to-r from-transparent via-teal-300/50 to-transparent" />
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65 }}
          className="text-center mb-10 md:mb-12"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 mb-3 tracking-tight">
            Our Core Services
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto text-base sm:text-lg px-2">
            Strategy, design, engineering, and DevOps under one roof — so you launch faster without sacrificing quality or security.
          </p>
        </motion.div>

        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6 lg:gap-6 items-stretch">
          {services.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              whileHover={{ y: -8 }}
              className="h-full"
            >
              <div className="flex h-full min-h-0 flex-col overflow-hidden rounded-2xl border border-teal-100/50 bg-white shadow-lg shadow-slate-200/40 ring-1 ring-slate-200/60 transition-shadow duration-300 hover:shadow-xl hover:shadow-teal-600/10 group">
                <div className="relative h-40 sm:h-44 shrink-0 overflow-hidden">
                  <img src={s.image} alt="" className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-teal-950/55 to-transparent opacity-90" />
                  <div className="absolute bottom-2.5 left-2.5 flex h-10 w-10 items-center justify-center rounded-xl bg-white/25 backdrop-blur-md ring-1 ring-white/50">
                    <s.Icon className="h-5 w-5 text-white" strokeWidth={2.25} aria-hidden />
                  </div>
                </div>
                <div className="flex min-h-0 flex-1 flex-col p-5 sm:p-6">
                  <h3 className="mb-2 text-lg font-bold text-slate-900 sm:text-xl">{s.title}</h3>
                  <p className="mb-4 text-sm leading-relaxed text-slate-600">{s.desc}</p>

                  <ul className="min-h-0 flex-1 space-y-2">
                    {s.features.map((f, idx) => (
                      <li key={idx} className="flex items-center text-xs text-slate-500 sm:text-sm">
                        <span className="mr-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gradient-to-br from-teal-400 to-cyan-500" />
                        {f}
                      </li>
                    ))}
                  </ul>

                  <motion.button
                    type="button"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="mt-4 w-full shrink-0 rounded-xl bg-gradient-to-r from-teal-600 to-cyan-600 py-2.5 text-sm font-semibold text-white shadow-md shadow-teal-600/20 transition-all duration-300 hover:from-teal-500 hover:to-cyan-500 sm:py-3"
                    onClick={() => (window.location.href = "/services")}
                  >
                    Learn More
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ABOUT */}
      <section className="px-4 sm:px-6 md:px-12 lg:px-16 py-12 md:py-16 bg-white relative">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65 }}
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 mb-4 tracking-tight">
              Why Choose TechNova Solutions?
            </h2>
            <p className="text-slate-600 text-base sm:text-lg leading-relaxed mb-4">
              With over 8 years in IT, we've helped hundreds of businesses modernize stacks, launch products, and scale teams — with clear communication and measurable outcomes.
            </p>
            <p className="text-slate-600 text-base sm:text-lg leading-relaxed mb-6">
              We focus on long-term partnerships: code reviews, observability, and playbooks so your product stays fast, secure, and easy to evolve.
            </p>
            <motion.button
              whileHover={{ scale: 1.03, boxShadow: tealShadow }}
              whileTap={{ scale: 0.98 }}
              className="px-7 py-3 sm:px-8 sm:py-3.5 bg-gradient-to-r from-teal-600 to-cyan-600 text-white rounded-xl font-semibold hover:from-teal-500 hover:to-cyan-500 transition-all duration-300 shadow-lg shadow-teal-600/25 text-sm sm:text-base"
              onClick={() => (window.location.href = "/about")}
            >
              Learn More About Us
            </motion.button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65, delay: 0.1 }}
            className="relative"
          >
            <motion.div
              whileHover={{ scale: 1.01 }}
              transition={{ duration: 0.3 }}
              className="rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl shadow-teal-900/15 ring-2 ring-teal-100"
            >
              <img
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
                alt="Team collaboration"
                className="w-full h-64 sm:h-80 md:h-96 lg:h-[460px] object-cover"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="relative sm:absolute bottom-0 left-0 sm:bottom-4 sm:left-4 md:-bottom-5 md:-left-5 mt-4 sm:mt-0 bg-white rounded-2xl shadow-xl p-4 sm:p-5 max-w-full sm:max-w-xs border border-teal-100"
            >
              <div className="flex items-center mb-2 sm:mb-3">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-teal-100 to-cyan-100 rounded-xl flex items-center justify-center mr-3 text-teal-700 shrink-0">
                  <TrendingUp className="w-5 h-5 sm:w-6 sm:h-6" strokeWidth={2.25} aria-hidden />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 text-sm sm:text-base">500+ Projects</h4>
                  <p className="text-slate-600 text-xs sm:text-sm">Successfully Delivered</p>
                </div>
              </div>
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                From startups to enterprise teams — shipping on schedule with QA, docs, and handover you can trust.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* STATS */}
      <section className="relative px-4 sm:px-6 md:px-12 lg:px-16 py-12 md:py-16 overflow-hidden bg-gradient-to-br from-teal-600 via-teal-700 to-cyan-700">
        <HeroGlow className="opacity-25" />
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.06%22%3E%3Cpath%20d%3D%22M36%2034v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6%2034v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6%204V0H4v4H0v2h4v4h2V6h4V4H6z%22%2F%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E')] opacity-90" />
        <div className="relative z-10 max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65 }}
            className="text-center mb-10 md:mb-12"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white mb-2 sm:mb-3">Our Impact in Numbers</h2>
            <p className="text-teal-100 max-w-2xl mx-auto text-base sm:text-lg px-2">
              Outcomes we track with you: delivery velocity, uptime, and satisfaction — not vanity metrics.
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
                whileHover={{ scale: 1.04, y: -3 }}
                className="text-center bg-white/15 backdrop-blur-md rounded-xl sm:rounded-2xl p-4 sm:p-5 md:p-6 border border-white/25 shadow-lg shadow-teal-950/20"
              >
                <div className="flex justify-center mb-2 sm:mb-3 text-white">
                  <stat.Icon className="w-8 h-8 sm:w-9 sm:h-9" strokeWidth={1.75} aria-hidden />
                </div>
                <h3 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white mb-1">{stat.number}</h3>
                <p className="text-teal-100 text-xs sm:text-sm font-medium leading-tight px-1">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="px-4 sm:px-6 md:px-12 lg:px-16 py-12 md:py-16 bg-slate-50">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65 }}
          className="text-center mb-10 md:mb-12"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 mb-3 tracking-tight">Why Partner With Us?</h2>
          <p className="text-slate-600 max-w-2xl mx-auto text-base sm:text-lg px-2">
            One partner for product, platform, and people — so you spend less time coordinating vendors and more time growing revenue.
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6">
          {partnerReasons.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: i * 0.05 }}
              whileHover={{ y: -6 }}
              className="bg-white rounded-2xl shadow-md hover:shadow-xl hover:shadow-teal-600/10 p-5 sm:p-6 border border-transparent hover:border-teal-200/80 transition-all duration-300 group"
            >
              <div className="mb-3 flex h-11 w-11 items-center justify-center rounded-xl bg-teal-50 text-teal-700 group-hover:bg-teal-100 transition-colors">
                <item.Icon className="w-6 h-6" strokeWidth={2} aria-hidden />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">{item.title}</h3>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <FAQ />

      {/* CTA */}
      <section className="relative px-4 sm:px-6 md:px-12 lg:px-16 py-14 md:py-16 overflow-hidden bg-gradient-to-r from-teal-600 via-cyan-600 to-emerald-600">
        <HeroGlow className="opacity-30" />
        <div className="absolute inset-0 bg-gradient-to-t from-teal-950/40 to-transparent" />
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65 }}
            className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mb-4 tracking-tight px-2"
          >
            Ready to Transform Your Business?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65, delay: 0.1 }}
            className="text-teal-50 text-base sm:text-lg md:text-xl mb-8 max-w-2xl mx-auto leading-relaxed px-2"
          >
            Book a free discovery call — we'll map scope, risks, and a practical timeline before you commit.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65, delay: 0.18 }}
            className="flex flex-col sm:flex-row gap-3 justify-center"
          >
            <motion.button
              whileHover={{ scale: 1.04, boxShadow: "0 20px 50px rgba(0,0,0,0.25)" }}
              whileTap={{ scale: 0.98 }}
              className="px-8 py-3.5 sm:px-10 sm:py-4 bg-white text-teal-700 rounded-xl font-bold hover:bg-teal-50 transition-all duration-300 shadow-xl text-sm sm:text-base"
              onClick={() => (window.location.href = "/contact")}
            >
              Get Started Today
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.04, boxShadow: "0 20px 50px rgba(0,0,0,0.25)" }}
              whileTap={{ scale: 0.98 }}
              className="px-8 py-3.5 sm:px-10 sm:py-4 border-2 border-white text-teal-700 rounded-xl font-bold hover:bg-white/10 transition-all duration-300 text-sm sm:text-base"
              onClick={() => (window.location.href = "/about")}
            >
              Learn More
            </motion.button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
