import React from 'react';
import { motion } from 'framer-motion';
import { FileStack, CheckCircle, XCircle, AlertTriangle, BugOff } from 'lucide-react';

const QADashboard = () => {
    return (
        <section className="py-24 bg-slate-50 dark:bg-qa-dark relative">
            <div className="container mx-auto px-4 md:px-8">

                <div className="text-center mb-16">
                    <div className="inline-block mb-4 px-3 py-1 rounded-full bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 text-sm font-semibold tracking-wider uppercase">
                        Metrics
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white">
                        QA Execution Dashboard
                    </h2>
                    <p className="mt-4 text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
                        Example of how I track and report testing progress to stakeholders using quantifiable quality metrics.
                    </p>
                </div>

                {/* Dashboard Grid */}
                <div className="max-w-5xl mx-auto">
                    {/* Top KPI Cards */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                        <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="qa-card p-5 bg-white dark:bg-[#1a2333]">
                            <div className="flex justify-between items-start mb-4">
                                <span className="text-sm font-medium text-slate-500 dark:text-slate-400">Total Run</span>
                                <FileStack size={18} className="text-qa-blue" />
                            </div>
                            <h3 className="text-3xl font-bold text-slate-900 dark:text-white">120</h3>
                        </motion.div>

                        <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="qa-card p-5 bg-white dark:bg-[#1a2333]">
                            <div className="flex justify-between items-start mb-4">
                                <span className="text-sm font-medium text-slate-500 dark:text-slate-400">Passed</span>
                                <CheckCircle size={18} className="text-emerald-500" />
                            </div>
                            <h3 className="text-3xl font-bold text-slate-900 dark:text-white">110</h3>
                        </motion.div>

                        <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }} className="qa-card p-5 bg-white dark:bg-[#1a2333]">
                            <div className="flex justify-between items-start mb-4">
                                <span className="text-sm font-medium text-slate-500 dark:text-slate-400">Failed</span>
                                <XCircle size={18} className="text-rose-500" />
                            </div>
                            <h3 className="text-3xl font-bold text-slate-900 dark:text-white">10</h3>
                        </motion.div>

                        <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.3 }} className="qa-card p-5 bg-white dark:bg-[#1a2333]">
                            <div className="flex justify-between items-start mb-4">
                                <span className="text-sm font-medium text-slate-500 dark:text-slate-400">Pass Rate</span>
                                <Activity size={18} className="text-indigo-500" />
                            </div>
                            <h3 className="text-3xl font-bold text-slate-900 dark:text-white">91.6%</h3>
                        </motion.div>
                    </div>

                    {/* Bottom Row */}
                    <div className="grid md:grid-cols-2 gap-6">

                        {/* Progress Bar Chart */}
                        <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="qa-card p-6 bg-white dark:bg-[#1a2333]">
                            <h4 className="text-lg font-bold text-slate-900 dark:text-white mb-6">Test Execution Distribution</h4>

                            <div className="space-y-5">
                                <div>
                                    <div className="flex justify-between text-sm mb-2 text-slate-600 dark:text-slate-400">
                                        <span className="flex items-center gap-2"><CheckCircle size={14} className="text-emerald-500" /> Passed</span>
                                        <span className="font-bold text-slate-900 dark:text-white">110 / 120</span>
                                    </div>
                                    <div className="w-full bg-slate-100 dark:bg-slate-800 rounded-full h-2.5">
                                        <div className="bg-emerald-500 h-2.5 rounded-full" style={{ width: '91.6%' }}></div>
                                    </div>
                                </div>

                                <div>
                                    <div className="flex justify-between text-sm mb-2 text-slate-600 dark:text-slate-400">
                                        <span className="flex items-center gap-2"><XCircle size={14} className="text-rose-500" /> Failed</span>
                                        <span className="font-bold text-slate-900 dark:text-white">10 / 120</span>
                                    </div>
                                    <div className="w-full bg-slate-100 dark:bg-slate-800 rounded-full h-2.5">
                                        <div className="bg-rose-500 h-2.5 rounded-full" style={{ width: '8.4%' }}></div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>

                        {/* Defect Status */}
                        <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="qa-card p-6 bg-white dark:bg-[#1a2333] flex flex-col justify-center">
                            <h4 className="text-lg font-bold text-slate-900 dark:text-white mb-6">Defect Triage State</h4>

                            <div className="flex justify-around items-center">
                                <div className="text-center">
                                    <div className="w-16 h-16 mx-auto rounded-full bg-amber-100 dark:bg-amber-900/30 flex items-center justify-center mb-3">
                                        <AlertTriangle size={24} className="text-amber-600 dark:text-amber-400" />
                                    </div>
                                    <h5 className="text-2xl font-bold text-slate-900 dark:text-white">5</h5>
                                    <span className="text-sm text-slate-500 dark:text-slate-400">Open Bugs</span>
                                </div>

                                <div className="w-px h-16 bg-slate-200 dark:bg-slate-700"></div>

                                <div className="text-center">
                                    <div className="w-16 h-16 mx-auto rounded-full bg-teal-100 dark:bg-teal-900/30 flex items-center justify-center mb-3">
                                        <BugOff size={24} className="text-teal-600 dark:text-teal-400" />
                                    </div>
                                    <h5 className="text-2xl font-bold text-slate-900 dark:text-white">15</h5>
                                    <span className="text-sm text-slate-500 dark:text-slate-400">Fixed / Closed</span>
                                </div>
                            </div>
                        </motion.div>

                    </div>
                </div>

            </div>
        </section>
    );
};

// Activity icon helper
const Activity = ({ size, className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><polyline points="22 12 18 12 15 21 9 3 6 12 2 12" /></svg>
);

export default QADashboard;
