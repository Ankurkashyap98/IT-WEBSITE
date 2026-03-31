import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import BrandLogo from "./BrandLogo";
import MobileNavDrawer from "./MobileNavDrawer";

export default function Navbar() {
  const { pathname } = useLocation();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  const links = ["/", "/about", "/services", "/contact"];

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 w-full max-w-[100%] min-w-0 border-b backdrop-blur-xl transition-all duration-500 ${
          scrolled
            ? "bg-white/90 border-teal-100/80 shadow-lg shadow-teal-900/5"
            : "bg-white/80 border-gray-200/70 shadow-md"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-10 py-3.5 flex justify-between items-center">
          <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
            <Link to="/" className="flex items-center gap-3 group rounded-xl pr-2 -ml-1">
              <motion.span
                className="relative flex rounded-2xl ring-2 ring-teal-200/60 shadow-lg shadow-teal-600/15"
                whileHover={{ rotate: [0, -4, 4, 0] }}
                transition={{ duration: 0.45 }}
              >
                <BrandLogo size={44} className="rounded-2xl" />
                <span className="absolute -bottom-0.5 -right-0.5 h-3 w-3 rounded-full bg-emerald-400 ring-2 ring-white" />
              </motion.span>
              <span className="flex flex-col leading-tight">
                <span className="text-xl font-extrabold tracking-tight bg-gradient-to-r from-teal-700 via-teal-600 to-cyan-600 bg-clip-text text-transparent group-hover:from-teal-600 group-hover:to-cyan-500 transition-all duration-300">
                  TechNova
                </span>
                <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-teal-600/80">
                  IT Solutions
                </span>
              </span>
            </Link>
          </motion.div>

          <div className="hidden md:flex space-x-2">
            {links.map((path) => (
              <motion.div key={path} whileHover={{ y: -2 }} transition={{ duration: 0.2 }}>
                <Link
                  to={path}
                  className={`relative px-4 py-2 rounded-xl font-medium transition-all duration-300 ${
                    pathname === path
                      ? "text-teal-800 shadow-sm"
                      : "text-gray-700 hover:text-teal-600 hover:bg-teal-50/60"
                  }`}
                >
                  {path === "/" ? "Home" : path.replace("/", "").charAt(0).toUpperCase() + path.slice(2)}
                  {pathname === path && (
                    <motion.div
                      layoutId="navbar-indicator"
                      className="absolute inset-0 bg-gradient-to-r from-teal-100/80 to-cyan-100/60 rounded-xl -z-10 border border-teal-200/40"
                      transition={{ type: "spring", stiffness: 380, damping: 32 }}
                    />
                  )}
                </Link>
              </motion.div>
            ))}
          </div>

          <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.96 }} className="hidden md:block">
            <Link
              to="/contact"
              className="px-6 py-2.5 rounded-xl font-semibold text-white bg-gradient-to-r from-teal-600 to-cyan-600 shadow-md shadow-teal-600/25 hover:shadow-lg hover:shadow-teal-600/35 hover:from-teal-500 hover:to-cyan-500 transition-all duration-300"
            >
              Get Quote
            </Link>
          </motion.div>

          <motion.button
            whileTap={{ scale: 0.95 }}
            type="button"
            aria-expanded={open}
            aria-controls="mobile-navigation"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
            className="md:hidden rounded-xl bg-gradient-to-br from-teal-600 to-cyan-600 text-white p-2.5 shadow-md shadow-teal-600/25"
          >
            {open ? <X className="h-6 w-6" strokeWidth={2.25} /> : <Menu className="h-6 w-6" strokeWidth={2.25} />}
          </motion.button>
        </div>
      </motion.nav>

      <MobileNavDrawer open={open} onClose={() => setOpen(false)} pathname={pathname} links={links} />
    </>
  );
}
