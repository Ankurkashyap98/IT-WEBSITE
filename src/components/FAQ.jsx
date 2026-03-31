import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

export default function FAQ() {
  const [open, setOpen] = useState(null);

  const faqs = [
    {
      q: "What services does TechNova Solutions offer?",
      a: "We provide comprehensive IT solutions including custom web development, UI/UX design, cloud infrastructure, DevOps, and AI/machine learning services. Our expertise spans the full spectrum of digital transformation.",
    },
    {
      q: "How much does a typical project cost?",
      a: "Project costs vary based on scope, complexity, and timeline. We provide detailed quotes after understanding your requirements. Our pricing is transparent, and we offer flexible payment terms for larger projects.",
    },
    {
      q: "How long does it take to complete a project?",
      a: "Timelines depend on project complexity. A simple website might take 2-4 weeks, while complex applications can take 3-6 months. We use agile methodologies to ensure efficient delivery and regular client updates.",
    },
    {
      q: "Do you provide ongoing support and maintenance?",
      a: "Yes, we offer comprehensive post-launch support including maintenance, updates, security monitoring, and performance optimization. We provide 24/7 support packages tailored to your needs.",
    },
    {
      q: "What technologies and frameworks do you use?",
      a: "We stay current with the latest technologies including React, Next.js, Node.js, Python, AWS, Azure, Docker, and various AI/ML frameworks. We choose the best tools for each project's specific requirements.",
    },
    {
      q: "How do you ensure project quality and security?",
      a: "We follow industry best practices with comprehensive testing, code reviews, security audits, and compliance standards. Every project undergoes multiple quality assurance phases before launch.",
    },
    {
      q: "Do you work with startups and small businesses?",
      a: "Absolutely! We work with businesses of all sizes, from startups to Fortune 500 companies. We understand the unique challenges of different business stages and tailor our approach accordingly.",
    },
    {
      q: "What is your typical response time for inquiries?",
      a: "We respond to all inquiries within 24 hours during business days. For urgent matters, we aim to respond within 4-6 hours. Our project managers are always available for client communication.",
    },
  ];

  return (
    <section className="px-4 sm:px-6 md:px-12 lg:px-16 py-12 md:py-16 bg-gradient-to-b from-slate-50 to-white relative overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-center mb-10 md:mb-12"
      >
        <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-4 tracking-tight">
          Frequently Asked{" "}
          <span className="bg-gradient-to-r from-teal-600 to-cyan-600 bg-clip-text text-transparent">Questions</span>
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto text-lg">
          Find answers to common questions about our services, process, and partnership approach.
        </p>
      </motion.div>

      {/* FAQ LIST */}
      <div className="max-w-4xl mx-auto">
        {faqs.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.05 }}
            className="mb-4"
          >
            <div className="bg-white rounded-2xl border border-teal-100/70 shadow-sm overflow-hidden hover:shadow-lg hover:shadow-teal-600/10 hover:border-teal-200/90 transition-all duration-300">
              {/* QUESTION */}
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex justify-between items-center p-6 md:p-8 text-left hover:bg-gray-50 transition-colors duration-300"
              >
                <span className="font-semibold text-gray-800 text-lg pr-4">
                  {item.q}
                </span>
                <motion.span
                  animate={{ rotate: open === i ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="text-teal-600 flex-shrink-0"
                  aria-hidden
                >
                  <ChevronDown className="w-6 h-6" strokeWidth={2.25} />
                </motion.span>
              </button>

              {/* ANSWER */}
              <AnimatePresence>
                {open === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 md:px-8 pb-6 md:pb-8">
                      <div className="border-t border-gray-100 pt-6">
                        <p className="text-gray-600 leading-relaxed text-base">
                          {item.a}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        ))}
      </div>

      {/* CTA */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="text-center mt-10 md:mt-12"
      >
        <h3 className="text-2xl font-bold text-gray-800 mb-4">
          Still Have Questions?
        </h3>
        <p className="text-gray-600 mb-8 max-w-xl mx-auto">
          Can't find the answer you're looking for? Our team is here to help with any questions you might have.
        </p>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="px-8 py-4 bg-gradient-to-r from-teal-600 to-cyan-600 text-white rounded-xl font-semibold hover:from-teal-500 hover:to-cyan-500 transition-all duration-300 shadow-lg shadow-teal-600/25"
          onClick={() => window.location.href = '/contact'}
        >
          Contact Our Team
        </motion.button>
      </motion.div>
    </section>
  );
}