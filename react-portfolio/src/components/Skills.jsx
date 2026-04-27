import React from 'react';
import { motion } from 'framer-motion';
import { FileSearch, Settings, Database, Activity, Wrench } from 'lucide-react';

const Skills = () => {
    const skillCategories = [
        {
            title: "Manual Testing",
            icon: <FileSearch size={24} className="text-qa-blue" />,
            skills: ["SDLC/STLC", "Test Case Design", "Smoke/Sanity", "Regression", "BVA & ECP", "Bug Lifecycle", "RTM"]
        },
        {
            title: "Test Automation",
            icon: <Settings size={24} className="text-qa-blue" />,
            skills: ["Selenium WebDriver", "TestNG", "Cucumber (BDD)", "POM", "Maven", "XPath/CSS", "Java"]
        },
        {
            title: "API Testing",
            icon: <Activity size={24} className="text-qa-blue" />,
            skills: ["Postman", "REST APIs", "HTTP Methods", "Status Codes", "JSON/XML Validation"]
        },
        {
            title: "Database",
            icon: <Database size={24} className="text-qa-blue" />,
            skills: ["SQL", "Joins", "Subqueries", "DDL/DML", "Data Validation"]
        },
        {
            title: "Programming",
            icon: <Activity size={24} className="text-qa-blue" />, // Same icon is fine, or we could add a new one if available
            skills: ["Core Java", "OOP", "Exception Handling", "Collections Framework"]
        },
        {
            title: "Tools & DevOps",
            icon: <Wrench size={24} className="text-qa-blue" />,
            skills: ["Jira", "Jenkins", "Git/GitHub", "Eclipse", "VS Code"]
        }
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.1 }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
    };

    return (
        <section id="skills" className="py-24 bg-slate-50 dark:bg-qa-dark relative">
            <div className="container mx-auto px-4 md:px-8">

                <div className="text-center mb-16">
                    <div className="inline-block mb-4 px-3 py-1 rounded-full bg-qa-blue/10 text-qa-blue text-sm font-semibold tracking-wider uppercase">
                        Expertise
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white">
                        Technical Arsenal
                    </h2>
                    <p className="mt-4 text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
                        A comprehensive toolkit designed for end-to-end software quality assurance, from frontend automation to backend database validation.
                    </p>
                </div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 max-w-7xl mx-auto"
                >
                    {skillCategories.map((category, idx) => (
                        <motion.div
                            key={idx}
                            variants={itemVariants}
                            className="qa-card p-6 flex flex-col h-full bg-white dark:bg-[#152033]"
                        >
                            <div className="flex items-center gap-4 mb-6 pb-4 border-b border-slate-100 dark:border-slate-800">
                                <div className="p-3 bg-slate-50 dark:bg-qa-dark rounded-lg border border-slate-100 dark:border-slate-700">
                                    {category.icon}
                                </div>
                                <h3 className="text-xl font-semibold text-slate-800 dark:text-slate-100">
                                    {category.title}
                                </h3>
                            </div>

                            <div className="flex flex-wrap gap-2 mt-auto">
                                {category.skills.map(skill => (
                                    <span key={skill} className="px-3 py-1.5 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 rounded-md text-sm font-medium border border-slate-200 dark:border-slate-700 hover:border-qa-blue dark:hover:border-qa-blue transition-colors cursor-default">
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

            </div>
        </section>
    );
};

export default Skills;
