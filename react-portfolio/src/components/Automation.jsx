import React from 'react';
import { motion } from 'framer-motion';
import { Code, GitBranch, PlayCircle, Globe } from 'lucide-react';

const Automation = () => {
    return (
        <section className="py-24 bg-white dark:bg-qa-card border-y border-slate-200 dark:border-slate-800">
            <div className="container mx-auto px-4 md:px-8">

                <div className="grid lg:grid-cols-2 gap-12 items-center">

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="flex flex-col h-full"
                    >
                        <div className="inline-block mb-4 px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-qa-blue text-sm font-semibold tracking-wider uppercase w-max">
                            Scalable Frameworks
                        </div>
                        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-6">
                            Test Automation Architecture
                        </h2>
                        <p className="text-lg text-slate-600 dark:text-slate-400 mb-8">
                            Manual testing ensures deep exploratory coverage, but test automation ensures speed and reliability at scale. I design maintainable frameworks using the <strong className="text-qa-blue">Page Object Model (POM)</strong> design pattern to isolate UI changes from test logic.
                        </p>

                        <div className="grid sm:grid-cols-2 gap-6 mb-8">
                            <div className="flex gap-4">
                                <div className="shrink-0 mt-1">
                                    <div className="w-10 h-10 rounded-lg bg-indigo-100 dark:bg-indigo-900/30 flex items-center justify-center text-indigo-600 dark:text-indigo-400">
                                        <Code size={20} />
                                    </div>
                                </div>
                                <div>
                                    <h4 className="font-bold text-slate-900 dark:text-white mb-1">Tech Stack</h4>
                                    <p className="text-sm text-slate-600 dark:text-slate-400">Java, Selenium WebDriver, TestNG, Maven.</p>
                                </div>
                            </div>

                            <div className="flex gap-4">
                                <div className="shrink-0 mt-1">
                                    <div className="w-10 h-10 rounded-lg bg-teal-100 dark:bg-teal-900/30 flex items-center justify-center text-teal-600 dark:text-teal-400">
                                        <Globe size={20} />
                                    </div>
                                </div>
                                <div>
                                    <h4 className="font-bold text-slate-900 dark:text-white mb-1">Cross-Browser</h4>
                                    <p className="text-sm text-slate-600 dark:text-slate-400">Configured to execute seamlessly on Chrome, Firefox, and Edge.</p>
                                </div>
                            </div>
                        </div>

                        <div className="mt-auto">
                            <a href="https://github.com" target="_blank" rel="noreferrer" className="qa-btn-outline inline-flex w-max">
                                <GitBranch size={18} /> View Framework Code on GitHub
                            </a>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="rounded-xl overflow-hidden bg-[#1e1e1e] shadow-2xl border border-slate-700 font-mono text-sm leading-relaxed"
                    >
                        <div className="flex items-center gap-2 bg-[#2d2d2d] px-4 py-3 border-b border-black/50">
                            <div className="flex gap-1.5">
                                <div className="w-3 h-3 rounded-full bg-rose-500"></div>
                                <div className="w-3 h-3 rounded-full bg-amber-500"></div>
                                <div className="w-3 h-3 rounded-full bg-emerald-500"></div>
                            </div>
                            <span className="ml-4 text-xs text-slate-400">LoginTest.java</span>
                        </div>
                        <div className="p-6 text-slate-300 overflow-x-auto">
                            <pre><code>
                                <span className="text-pink-400">import</span> org.testng.annotations.Test;<br />
                                <span className="text-pink-400">import</span> org.testng.Assert;<br /><br />
                                <span className="text-pink-400">public class</span> <span className="text-amber-200">LoginTest</span> <span className="text-pink-400">extends</span> BaseTest {'{'}<br /><br />
                                &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-yellow-300">@Test</span>(priority = <span className="text-blue-300">1</span>, groups = {'{'}<span className="text-green-300">"Smoke"</span>{'}'})<br />
                                &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-pink-400">public void</span> <span className="text-blue-200">verifyValidLogin</span>() {'{'}<br />
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;LoginPage loginPage = <span className="text-pink-400">new</span> LoginPage(driver);<br /><br />
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-slate-500">// POM hides element locators</span><br />
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;loginPage.<span className="text-blue-200">enterCredentials</span>(<span className="text-green-300">"testuser@qa.com"</span>, <span className="text-green-300">"Pass@123"</span>);<br />
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;DashboardPage dashboard = loginPage.<span className="text-blue-200">clickLogin</span>();<br /><br />
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-slate-500">// Verification</span><br />
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Assert.<span className="text-blue-200">assertTrue</span>(dashboard.<span className="text-blue-200">isDashboardLoaded</span>(), <br />
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-green-300">"Dashboard failed to load after login."</span>);<br />
                                &nbsp;&nbsp;&nbsp;&nbsp;{'}'}<br />
                                {'}'}
                            </code></pre>
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
};

export default Automation;
