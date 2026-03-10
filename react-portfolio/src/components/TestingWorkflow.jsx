import React from 'react';
import { motion } from 'framer-motion';
import { FileCode2, TestTube, Bug, RefreshCcw, FileText, BarChart3 } from 'lucide-react';

const TestingWorkflow = () => {
    const steps = [
        {
            id: "01",
            title: "Requirement Analysis",
            desc: "Analyze business PRD to understand expected application behavior.",
            icon: <FileText size={24} className="text-blue-500" />
        },
        {
            id: "02",
            title: "Test Planning",
            desc: "Identify testing scope, scenarios, and determine resources/tools.",
            icon: <BarChart3 size={24} className="text-indigo-500" />
        },
        {
            id: "03",
            title: "Test Case Design",
            desc: "Draft comprehensive manual and automated test script specifications.",
            icon: <FileCode2 size={24} className="text-purple-500" />
        },
        {
            id: "04",
            title: "Test Execution",
            desc: "Execute scripts across environments (UI, API, DB limits).",
            icon: <TestTube size={24} className="text-pink-500" />
        },
        {
            id: "05",
            title: "Bug Reporting",
            desc: "Log detailed defect reports in Jira with replication steps.",
            icon: <Bug size={24} className="text-red-500" />
        },
        {
            id: "06",
            title: "Retesting & Regression",
            desc: "Verify developer fixes and ensure no existing features broke.",
            icon: <RefreshCcw size={24} className="text-teal-500" />
        }
    ];

    return (
        <section id="workflow" className="py-24 bg-white dark:bg-qa-card border-y border-slate-200 dark:border-slate-800 overflow-hidden">
            <div className="container mx-auto px-4 md:px-8">

                <div className="text-center mb-16">
                    <div className="inline-block mb-4 px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-qa-blue text-sm font-semibold tracking-wider uppercase">
                        STLC Framework
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white">
                        Software Testing Life Cycle
                    </h2>
                    <p className="mt-4 text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
                        A structured workflow ensures no edge cases are missed and defects are caught early in the development pipeline.
                    </p>
                </div>

                <div className="relative max-w-5xl mx-auto">
                    {/* Connecting Line */}
                    <div className="hidden lg:block absolute top-[50%] left-[10%] right-[10%] h-0.5 bg-gradient-to-r from-blue-500 via-purple-500 to-teal-500 opacity-30 -translate-y-1/2" />

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-6 lg:gap-4 relative z-10">
                        {steps.map((step, idx) => (
                            <motion.div
                                key={step.id}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-50px" }}
                                transition={{ duration: 0.5, delay: idx * 0.1 }}
                                className="flex flex-col items-center text-center group"
                            >
                                {/* Icon Circle */}
                                <div className="w-16 h-16 rounded-full bg-white dark:bg-slate-800 border-2 border-slate-200 dark:border-slate-700 shadow-md flex items-center justify-center mb-4 transition-transform duration-300 group-hover:-translate-y-2 group-hover:shadow-lg relative z-10">
                                    {step.icon}
                                    <div className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-slate-800 dark:bg-slate-700 text-white text-xs flex items-center justify-center font-bold">
                                        {step.id}
                                    </div>
                                </div>

                                {/* Content */}
                                <h3 className="text-lg font-bold text-slate-800 dark:text-slate-100 mb-2 leading-tight">
                                    {step.title}
                                </h3>
                                <p className="text-sm text-slate-500 dark:text-slate-400 px-2 lg:px-0">
                                    {step.desc}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>

            </div>
        </section>
    );
};

export default TestingWorkflow;
