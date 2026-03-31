import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import BrandLogo from "./BrandLogo";

function navLinkLabel(path) {
  if (path === "/") return "Home";
  return path.replace("/", "").charAt(0).toUpperCase() + path.slice(2);
}

export default function MobileNavDrawer({ open, onClose, pathname, links }) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  if (!mounted) return null;

  return createPortal(
    <AnimatePresence>
      {open && (
        <>
          <motion.button
            key="mobile-nav-backdrop"
            type="button"
            aria-label="Close menu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-[100] bg-slate-900/45 backdrop-blur-sm md:hidden"
            onClick={onClose}
          />

          <motion.aside
            id="mobile-navigation"
            key="mobile-nav-panel"
            role="dialog"
            aria-modal="true"
            aria-label="Main navigation"
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ type: "tween", ease: [0.22, 1, 0.36, 1], duration: 0.32 }}
            className="fixed left-0 top-0 z-[101] flex h-[100dvh] w-[min(88vw,20rem)] max-w-full flex-col border-r border-teal-100/80 bg-white shadow-2xl shadow-teal-900/10 md:hidden"
          >
            <div className="flex shrink-0 items-center justify-between gap-2 border-b border-teal-100/70 bg-gradient-to-r from-teal-50/60 via-white to-white px-3 py-3.5">
              <Link
                to="/"
                onClick={onClose}
                className="group flex min-w-0 flex-1 items-center gap-2.5 rounded-xl py-0.5 pr-1 -ml-0.5"
              >
                <span className="relative shrink-0 rounded-2xl ring-2 ring-teal-200/60 shadow-md shadow-teal-600/15">
                  <BrandLogo size={40} className="rounded-2xl" />
                  <span className="absolute -bottom-0.5 -right-0.5 h-2.5 w-2.5 rounded-full bg-emerald-400 ring-2 ring-white" />
                </span>
                <span className="min-w-0 flex flex-col leading-tight">
                  <span className="truncate text-base font-extrabold tracking-tight bg-gradient-to-r from-teal-700 via-teal-600 to-cyan-600 bg-clip-text text-transparent">
                    TechNova
                  </span>
                  <span className="text-[9px] font-semibold uppercase tracking-[0.2em] text-teal-600/80">
                    IT Solutions
                  </span>
                </span>
              </Link>
              
            </div>

            <nav className="min-h-0 flex-1 overflow-y-auto overscroll-contain px-3 py-4">
              <ul className="flex flex-col gap-1">
                {links.map((path) => {
                  const active = pathname === path;
                  return (
                    <li key={path}>
                      <Link
                        to={path}
                        onClick={onClose}
                        className={`block rounded-xl px-4 py-3.5 text-base font-semibold transition-colors ${
                          active
                            ? "bg-teal-100 text-teal-900"
                            : "text-slate-700 hover:bg-teal-50/80 hover:text-teal-700"
                        }`}
                      >
                        {navLinkLabel(path)}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </nav>

            <div className="shrink-0 border-t border-teal-100/80 bg-teal-50/40 p-4">
              <Link
                to="/contact"
                onClick={onClose}
                className="block w-full rounded-xl bg-gradient-to-r from-teal-600 to-cyan-600 py-3.5 text-center text-sm font-bold text-white shadow-md shadow-teal-600/25 transition-opacity hover:opacity-95 active:opacity-90"
              >
                Get Quote
              </Link>
            </div>
          </motion.aside>
        </>
      )}
    </AnimatePresence>,
    document.body
  );
}
