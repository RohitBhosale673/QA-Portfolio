import React from 'react';
import { motion } from 'framer-motion';
import { FileText, Github, Linkedin, Mail, ArrowRight, CheckCircle2 } from 'lucide-react';

const Hero = () => {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.1, delayChildren: 0.2 }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
    };

    return (
        <section className="relative min-h-screen flex items-center pt-24 pb-16 overflow-hidden">
            {/* Abstract Background Gradients */}
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-qa-blue/20 dark:bg-qa-blue/10 rounded-full blur-[100px] -z-10 animate-pulse" />
            <div className="absolute bottom-1/4 right-1/4 w-[30rem] h-[30rem] bg-qa-teal/20 dark:bg-qa-teal/10 rounded-full blur-[100px] -z-10 animate-pulse" style={{ animationDelay: '2s' }} />

            <div className="container mx-auto px-4 md:px-8">
                <div className="grid lg:grid-cols-2 gap-12 items-center">

                    {/* Text Content */}
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                        className="flex flex-col gap-6"
                    >
                        <motion.div variants={itemVariants} className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-qa-blue/10 text-qa-blue font-medium text-sm w-max border border-qa-blue/20">
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-qa-blue opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-qa-blue"></span>
                            </span>
                            Available for QA & SDET Roles
                        </motion.div>

                        <motion.h1 variants={itemVariants} className="text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-tight">
                            Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-qa-blue to-qa-teal">Rohit Bhosale</span>
                        </motion.h1>

                        <motion.h2 variants={itemVariants} className="text-2xl md:text-3xl font-medium text-slate-600 dark:text-slate-400">
                            QA Engineer | Software Tester
                        </motion.h2>

                        <motion.p variants={itemVariants} className="max-w-xl text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
                            Detail-oriented QA professional specializing in ensuring software quality through robust manual methodologies and scalable test automation.
                        </motion.p>

                        {/* Quick Skills */}
                        <motion.div variants={itemVariants} className="flex flex-wrap gap-2 mt-2">
                            {['Manual Testing', 'Automation Testing', 'Java + Selenium', 'API (Postman)', 'SQL'].map(skill => (
                                <span key={skill} className="qa-badge flex items-center gap-1.5">
                                    <CheckCircle2 size={14} className="text-qa-teal" /> {skill}
                                </span>
                            ))}
                        </motion.div>

                        {/* Action Buttons */}
                        <motion.div variants={itemVariants} className="flex flex-wrap items-center gap-4 mt-4">
                            <a href="#projects" className="qa-btn-primary px-6 py-3">
                                View Projects <ArrowRight size={18} />
                            </a>
                            <a
                                href="https://drive.google.com/file/d/1VshJ314czqhS6-dZP2ckdzmF8hkxZN6r/view?usp=drive_link"
                                target="_blank"
                                rel="noreferrer"
                                className="qa-btn-outline px-6 py-3 bg-white dark:bg-qa-card"
                            >
                                <FileText size={18} /> Resume
                            </a>

                            <div className="flex items-center gap-2 ml-2">
                                <a href="https://linkedin.com/in/rohit-bhosale-041157289" target="_blank" rel="noreferrer" className="p-3 bg-white dark:bg-qa-card border border-slate-200 dark:border-slate-800 rounded-lg text-slate-600 dark:text-slate-400 hover:text-qa-blue dark:hover:text-qa-blue hover:border-qa-blue/30 transition-all shadow-sm">
                                    <Linkedin size={20} />
                                </a>
                                <a href="mailto:rohitbhosale673@gmail.com" className="p-3 bg-white dark:bg-qa-card border border-slate-200 dark:border-slate-800 rounded-lg text-slate-600 dark:text-slate-400 hover:text-qa-teal dark:hover:text-qa-teal hover:border-qa-teal/30 transition-all shadow-sm">
                                    <Mail size={20} />
                                </a>
                                <a href="https://github.com" target="_blank" rel="noreferrer" className="p-3 bg-white dark:bg-qa-card border border-slate-200 dark:border-slate-800 rounded-lg text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:border-slate-400 transition-all shadow-sm">
                                    <Github size={20} />
                                </a>
                            </div>
                        </motion.div>
                    </motion.div>

                    {/* Image/Visual Content */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.7, delay: 0.4 }}
                        className="relative order-first lg:order-last mb-10 lg:mb-0"
                    >
                        {/* Main Image Container */}
                        <div className="relative z-10 w-full max-w-md mx-auto aspect-square rounded-[2rem] overflow-hidden border-4 border-white dark:border-qa-card shadow-2xl">
                            <img
                                src="profile.jpg"
                                alt="Rohit Bhosale Preview"
                                className="w-full h-full object-cover"
                                onError={(e) => {
                                    e.target.onerror = null;
                                    e.target.src = 'https://images.unsplash.com/photo-1542831371-29b0f74f9713?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80'; // Fallback code image
                                }}
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                        </div>

                        {/* Floating Elements showing tools */}
                        <motion.div
                            animate={{ y: [-10, 10, -10] }}
                            transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                            className="absolute -top-6 -right-6 qa-card p-4 flex items-center justify-center shadow-xl z-20"
                        >
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" alt="Java" className="w-10 h-10" />
                        </motion.div>

                        <motion.div
                            animate={{ y: [10, -10, 10] }}
                            transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 1 }}
                            className="absolute -bottom-8 -left-6 qa-card p-4 flex items-center justify-center shadow-xl z-20"
                        >
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/selenium/selenium-original.svg" alt="Selenium" className="w-10 h-10" />
                        </motion.div>

                        <motion.div
                            animate={{ y: [-8, 8, -8] }}
                            transition={{ repeat: Infinity, duration: 6, ease: "easeInOut", delay: 2 }}
                            className="absolute top-1/2 -right-10 qa-card p-3 flex items-center justify-center shadow-xl z-20 bg-white"
                        >
                            <img src="https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg" alt="Postman" className="w-8 h-8" />
                        </motion.div>

                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
