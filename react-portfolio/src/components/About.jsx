import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
    return (
        <section id="about" className="section bg-white dark:bg-qa-card/50 py-20 border-t border-slate-200 dark:border-slate-800">
            <div className="container mx-auto px-4 md:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="max-w-4xl mx-auto text-center"
                >
                    <div className="inline-block mb-4 px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-qa-blue text-sm font-semibold tracking-wider uppercase">
                        About Me
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold mb-8 text-slate-900 dark:text-white">
                        Driven by Quality & Precision
                    </h2>

                    <div className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed space-y-6 text-left md:text-center">
                        <p>
                            I am a dedicated <strong className="text-qa-blue dark:text-qa-teal">QA Engineer</strong> with a passion for delivering flawless software experiences. My expertise bridges the gap between manual exploratory testing and robust automated frameworks, ensuring comprehensive test coverage across modern applications.
                        </p>
                        <p>
                            Proficient in designing intelligent test cases and tracking defects through their complete lifecycle, I leverage <strong className="text-slate-900 dark:text-slate-200">Java and Selenium WebDriver</strong> to automate critical user journeys. Beyond the UI, I validate business logic via rigorous <strong className="text-slate-900 dark:text-slate-200">REST API testing using Postman</strong> and ensure data integrity through complex <strong className="text-slate-900 dark:text-slate-200">SQL queries</strong>.
                        </p>
                    </div>

                </motion.div>
            </div>
        </section>
    );
};

export default About;
