import React from 'react';
import { motion } from 'framer-motion';
import { Award, GraduationCap } from 'lucide-react';

const Certifications = () => {
    return (
        <section className="py-20 bg-white dark:bg-qa-card border-t border-slate-200 dark:border-slate-800">
            <div className="container mx-auto px-4 md:px-8">

                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold text-slate-900 dark:text-white">Credentials & Education</h2>
                </div>

                <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">

                    {/* Certifications (Right side logically, flipped for UI) */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="flex flex-col gap-4"
                    >
                        <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2 flex items-center gap-2">
                            <Award className="text-qa-blue" /> Certifications
                        </h3>

                        <div className="qa-card p-5 border-l-4 border-l-qa-blue">
                            <h4 className="font-bold text-slate-900 dark:text-white">Manual & Automation Testing</h4>
                            <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">SSquare IT, Pune</p>
                            <div className="mt-3 flex gap-2">
                                <span className="bg-slate-100 dark:bg-slate-800 px-2 py-1 rounded text-xs text-slate-600 dark:text-slate-300">Java</span>
                                <span className="bg-slate-100 dark:bg-slate-800 px-2 py-1 rounded text-xs text-slate-600 dark:text-slate-300">Selenium WebDriver</span>
                            </div>
                        </div>

                        <div className="qa-card p-5 border-l-4 border-l-qa-teal">
                            <h4 className="font-bold text-slate-900 dark:text-white">Full Stack Java Development</h4>
                            <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">DurgaSoft, Hyderabad</p>
                            <div className="mt-3 flex gap-2">
                                <span className="bg-slate-100 dark:bg-slate-800 px-2 py-1 rounded text-xs text-slate-600 dark:text-slate-300">Core Java</span>
                                <span className="bg-slate-100 dark:bg-slate-800 px-2 py-1 rounded text-xs text-slate-600 dark:text-slate-300">OOP Concepts</span>
                            </div>
                        </div>
                    </motion.div>

                    {/* Education */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="flex flex-col gap-4"
                    >
                        <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2 flex items-center gap-2">
                            <GraduationCap className="text-qa-blue" /> Academic
                        </h3>

                        <div className="qa-card p-5 border-l-4 border-l-indigo-500">
                            <h4 className="font-bold text-slate-900 dark:text-white">Master of Computer Science</h4>
                            <p className="text-sm text-slate-800 dark:text-slate-200 mt-1">Savitribai Phule Pune University</p>
                            <p className="text-xs text-slate-500 dark:text-slate-400 mt-2">2024 - 2026 | Score: 84.8%</p>
                        </div>

                        <div className="qa-card p-5 border-l-4 border-l-slate-400">
                            <h4 className="font-bold text-slate-900 dark:text-white">Bachelor of Computer Science</h4>
                            <p className="text-sm text-slate-800 dark:text-slate-200 mt-1">Savitribai Phule Pune University</p>
                            <p className="text-xs text-slate-500 dark:text-slate-400 mt-2">2021 - 2024 | CGPA: 8.27</p>
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
};

export default Certifications;
