import React from 'react';
import { motion } from 'framer-motion';
import { Bug, AlertTriangle, AlertCircle, Maximize2 } from 'lucide-react';

const BugReport = () => {
    return (
        <section className="py-20 bg-slate-50 dark:bg-qa-dark relative overflow-hidden">
            <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-rose-500/5 to-transparent pointer-events-none" />

            <div className="container mx-auto px-4 md:px-8">
                <div className="grid lg:grid-cols-2 gap-12 items-center">

                    <div>
                        <div className="inline-block mb-4 px-3 py-1 rounded-full bg-rose-500/10 text-rose-600 dark:text-rose-400 text-sm font-semibold tracking-wider uppercase">
                            Defect Lifecycle
                        </div>
                        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-6">
                            Professional Bug Reporting
                        </h2>
                        <p className="text-lg text-slate-600 dark:text-slate-400 mb-6">
                            A good QA Engineer doesn't just find bugs; they communicate them effectively. My bug reports are structured to provide developers with complete context, expediting the resolution process.
                        </p>
                        <ul className="space-y-4 mb-8">
                            {['Clear, concise titles outlining the exact issue', 'Step-by-step reproduction instructions', 'Environment and configuration details', 'Expected vs Actual behavior separation'].map((item, i) => (
                                <li key={i} className="flex items-start gap-3 text-slate-700 dark:text-slate-300">
                                    <div className="mt-1 p-1 bg-rose-100 dark:bg-rose-900/30 rounded text-rose-600 dark:text-rose-400">
                                        <CheckCircle2 size={14} />
                                    </div>
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>

                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="qa-card bg-white dark:bg-[#1a2333] shadow-xl overflow-hidden"
                    >
                        {/* Jira-style Header */}
                        <div className="bg-slate-100 dark:bg-slate-800 p-4 border-b border-slate-200 dark:border-slate-700 flex justify-between items-center">
                            <div className="flex items-center gap-3">
                                <div className="p-1.5 bg-rose-500 rounded flex items-center justify-center text-white">
                                    <Bug size={16} />
                                </div>
                                <span className="font-mono text-sm text-slate-500 dark:text-slate-400">#BUG-4092</span>
                            </div>
                            <div className="flex gap-2">
                                <span className="flex items-center gap-1 text-xs font-semibold px-2 py-1 bg-rose-100 dark:bg-rose-900/30 text-rose-700 dark:text-rose-400 rounded">
                                    <AlertTriangle size={12} /> High Severity
                                </span>
                                <span className="flex items-center gap-1 text-xs font-semibold px-2 py-1 bg-amber-100 dark:bg-amber-900/30 text-amber-700 dark:text-amber-400 rounded">
                                    <AlertCircle size={12} /> P2 Priority
                                </span>
                            </div>
                        </div>

                        {/* Content */}
                        <div className="p-6">
                            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-6">
                                Payment gateway times out when using expired test cards instead of showing validation error
                            </h3>

                            <div className="grid grid-cols-2 gap-4 mb-6 text-sm">
                                <div>
                                    <span className="block text-slate-500 dark:text-slate-400 mb-1">Environment</span>
                                    <span className="font-medium text-slate-800 dark:text-slate-200">Staging v2.4.1</span>
                                </div>
                                <div>
                                    <span className="block text-slate-500 dark:text-slate-400 mb-1">Browser</span>
                                    <span className="font-medium text-slate-800 dark:text-slate-200">Chrome 114 (Windows 11)</span>
                                </div>
                            </div>

                            <div className="space-y-4 text-sm">
                                <div>
                                    <h4 className="font-bold text-slate-800 dark:text-slate-200 mb-2 border-b border-slate-100 dark:border-slate-800 pb-1">Steps to Reproduce:</h4>
                                    <ol className="list-decimal pl-4 space-y-1 text-slate-600 dark:text-slate-400">
                                        <li>Navigate to checkout pipeline.</li>
                                        <li>Enter shipping details and proceed to payment.</li>
                                        <li>Select 'Credit Card' and input test mastercard ending in 0004.</li>
                                        <li>Set expiration date to past date (e.g., 01/22).</li>
                                        <li>Click 'Pay Now'.</li>
                                    </ol>
                                </div>

                                <div className="grid sm:grid-cols-2 gap-4 mt-4">
                                    <div className="bg-emerald-50 dark:bg-emerald-900/10 p-3 rounded-lg border border-emerald-100 dark:border-emerald-900/30">
                                        <span className="block font-bold text-emerald-700 dark:text-emerald-400 mb-1">Expected Result:</span>
                                        <p className="text-slate-600 dark:text-slate-400">Instant client-side validation error stating "Card Expired" preventing submission.</p>
                                    </div>
                                    <div className="bg-rose-50 dark:bg-rose-900/10 p-3 rounded-lg border border-rose-100 dark:border-rose-900/30">
                                        <span className="block font-bold text-rose-700 dark:text-rose-400 mb-1">Actual Result:</span>
                                        <p className="text-slate-600 dark:text-slate-400">Request is sent to API, UI hangs with infinite spinner, DevTools shows 504 Gateway Timeout.</p>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
};

// Quick helper to avoid missing import
const CheckCircle2 = ({ size, className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" /><polyline points="22 4 12 14.01 9 11.01" /></svg>
);

export default BugReport;
