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
                            I am a results-driven <strong className="text-qa-blue dark:text-qa-teal">QA Engineer</strong> with hands-on experience in both manual and automation testing across e-commerce and banking domains. My expertise lies in designing extensive test cases and automating critical user journeys using <strong className="text-slate-900 dark:text-slate-200">Selenium + Java (POM/TestNG)</strong>, while building BDD/Cucumber test suites integrated via Jenkins CI/CD pipelines.
                        </p>
                        <p>
                            Proficient in <strong className="text-slate-900 dark:text-slate-200">Postman REST API testing</strong> and <strong className="text-slate-900 dark:text-slate-200">SQL database validation</strong>, I consistently eliminate defect leakage to accelerate release velocity. I have successfully reduced regression time by up to 87% and bug-fix turnaround by 30% through precise Jira-driven defect tracking and comprehensive test coverage.
                        </p>
                    </div>

                </motion.div>
            </div>
        </section>
    );
};

export default About;
