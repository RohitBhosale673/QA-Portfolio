import React, { useState, useEffect } from 'react';
import { Menu, X, Moon, Sun, Download, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = ({ darkMode, toggleTheme }) => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'About', href: '#about' },
        { name: 'Skills', href: '#skills' },
        { name: 'Workflow', href: '#workflow' },
        { name: 'Projects', href: '#projects' },
        { name: 'Contact', href: '#contact' },
    ];

    return (
        <header
            className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled
                    ? 'bg-white/80 dark:bg-qa-dark/80 backdrop-blur-md border-b border-slate-200 dark:border-slate-800 py-3 shadow-sm'
                    : 'bg-transparent py-5'
                }`}
        >
            <div className="container mx-auto px-4 md:px-8 flex items-center justify-between">

                {/* Logo */}
                <a href="#" className="flex items-center gap-2 group">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-qa-blue to-qa-teal flex items-center justify-center text-white font-bold text-xl shadow-lg group-hover:shadow-qa-blue/50 transition-all">
                        RB
                    </div>
                    <span className="font-bold text-xl tracking-tight hidden sm:block">
                        Rohit<span className="text-qa-blue">Bhosale</span>
                    </span>
                </a>

                {/* Desktop Nav */}
                <nav className="hidden md:flex items-center gap-8">
                    <ul className="flex items-center gap-6">
                        {navLinks.map((link) => (
                            <li key={link.name}>
                                <a
                                    href={link.href}
                                    className="text-sm font-medium text-slate-600 hover:text-qa-blue dark:text-slate-300 dark:hover:text-white transition-colors"
                                >
                                    {link.name}
                                </a>
                            </li>
                        ))}
                    </ul>

                    <div className="flex items-center gap-4 border-l border-slate-200 dark:border-slate-700 pl-4">
                        <button
                            onClick={toggleTheme}
                            className="p-2 rounded-full bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 transition-colors"
                            aria-label="Toggle Dark Mode"
                        >
                            {darkMode ? <Sun size={18} /> : <Moon size={18} />}
                        </button>
                        <a href="#contact" className="qa-btn-primary py-2 text-sm">
                            Hire Me
                        </a>
                    </div>
                </nav>

                {/* Mobile Menu Toggle */}
                <div className="flex items-center gap-4 md:hidden">
                    <button
                        onClick={toggleTheme}
                        className="p-2 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300"
                    >
                        {darkMode ? <Sun size={18} /> : <Moon size={18} />}
                    </button>
                    <button
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        className="text-slate-700 dark:text-slate-300"
                    >
                        {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </div>

            {/* Mobile Nav Dropdown */}
            <AnimatePresence>
                {mobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="absolute top-full left-0 w-full bg-white dark:bg-qa-card border-b border-slate-200 dark:border-slate-800 shadow-xl md:hidden overflow-hidden"
                    >
                        <ul className="flex flex-col py-4 px-6 gap-4">
                            {navLinks.map((link) => (
                                <li key={link.name}>
                                    <a
                                        href={link.href}
                                        onClick={() => setMobileMenuOpen(false)}
                                        className="block text-base font-medium text-slate-700 dark:text-slate-300 hover:text-qa-blue"
                                    >
                                        {link.name}
                                    </a>
                                </li>
                            ))}
                            <li className="pt-4 border-t border-slate-100 dark:border-slate-800">
                                <a href="#contact" onClick={() => setMobileMenuOpen(false)} className="qa-btn-primary w-full justify-center">
                                    Hire Me <ChevronRight size={16} />
                                </a>
                            </li>
                        </ul>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
};

export default Navbar;
