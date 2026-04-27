import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, ShoppingCart, Landmark, CheckCircle2 } from 'lucide-react';

const Projects = () => {
    const projects = [
        {
            title: "E-Commerce Order Management System Testing",
            desc: "End-to-end quality assurance for critical e-commerce workflows ensuring seamless user journeys from cart to checkout.",
            icon: <ShoppingCart size={28} className="text-qa-blue" />,
            scope: "UI, Functional, API, Backend",
            tools: ["Selenium WebDriver", "Java", "POM", "TestNG", "Postman", "SQL", "Jenkins", "Cucumber (BDD)"],
            achievements: [
                "Eliminated 60% of post-UAT bugs by authoring 80+ manual test cases, catching 18 critical defects.",
                "Cut regression time from 3 hours to <25 mins (87% reduction) via Selenium + Java POM/TestNG automation.",
                "Achieved 100% edge-case coverage across 6 REST API endpoints using Postman assertions.",
                "Uncovered 3 silent data integrity issues writing 15+ complex SQL queries.",
                "Integrated test execution into Jenkins CI pipeline using Maven for automated code push runs.",
                "Implemented BDD Cucumber scenarios for order flows with Gherkin feature files."
            ]
        },
        {
            title: "Online Banking Application Testing",
            desc: "Rigorous security and functional testing for sensitive financial transactions and user authentication modules.",
            icon: <Landmark size={28} className="text-qa-blue" />,
            scope: "Security, UI, API, Database",
            tools: ["Selenium", "Java POM", "API Testing", "Postman", "SQL", "Git/GitHub"],
            achievements: [
                "Delivered zero-defect releases for high-stakes banking workflows across 2 testing cycles.",
                "Reduced regression cycle time to under 15 minutes per run by automating core flows.",
                "Validated 4 transaction service APIs via Postman (HTTP codes, JSON payloads, boundary inputs).",
                "Confirmed 100% front-end to back-end data consistency using targeted SQL queries.",
                "Maintained full version control of automation scripts on GitHub with structured branching."
            ]
        }
    ];

    return (
        <section id="projects" className="py-24 bg-slate-50 dark:bg-qa-dark">
            <div className="container mx-auto px-4 md:px-8">

                <div className="mb-16 md:flex justify-between items-end">
                    <div className="max-w-2xl">
                        <div className="inline-block mb-4 px-3 py-1 rounded-full bg-qa-blue/10 text-qa-blue text-sm font-semibold tracking-wider uppercase">
                            Portfolio
                        </div>
                        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white">
                            Featured QA Projects
                        </h2>
                    </div>
                </div>

                <div className="grid lg:grid-cols-2 gap-8">
                    {projects.map((project, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.5, delay: idx * 0.2 }}
                            className="qa-card p-8 flex flex-col h-full bg-white dark:bg-[#152033]"
                        >
                            <div className="flex justify-between items-start mb-6">
                                <div className="p-4 bg-slate-50 dark:bg-qa-dark rounded-xl border border-slate-100 dark:border-slate-800">
                                    {project.icon}
                                </div>
                                <span className="text-xs font-semibold px-3 py-1 bg-qa-blue/10 text-qa-blue rounded-full">
                                    Scope: {project.scope}
                                </span>
                            </div>

                            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-3">
                                {project.title}
                            </h3>

                            <p className="text-slate-600 dark:text-slate-400 mb-6">
                                {project.desc}
                            </p>

                            <div className="mb-6">
                                <h4 className="text-sm font-bold text-slate-900 dark:text-slate-300 uppercase tracking-wider mb-3">Key Achievements</h4>
                                <ul className="space-y-2">
                                    {project.achievements.map((item, i) => (
                                        <li key={i} className="flex items-start gap-2 text-sm text-slate-600 dark:text-slate-400">
                                            <CheckCircle2 size={16} className="text-qa-teal mt-0.5 shrink-0" />
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div className="mt-auto pt-6 border-t border-slate-100 dark:border-slate-800">
                                <div className="flex flex-wrap gap-2">
                                    {project.tools.map(tool => (
                                        <span key={tool} className="text-xs font-medium px-2 py-1 bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 rounded">
                                            {tool}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
