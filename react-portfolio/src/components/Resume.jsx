import React from 'react';
import { motion } from 'framer-motion';
import { Download, Calendar, MapPin, Briefcase, GraduationCap, Award, ExternalLink } from 'lucide-react';

const Resume = () => {
    const experiences = [
        {
            company: "Nexxora IT Technologies",
            role: "QA Tester (Intern)",
            duration: "Aug 2025 - Jan 2026",
            location: "Pune, India",
            description: "Achieved zero critical defects escaping to production across 60+ test cases. Accelerated API defect resolution by owning Postman test suites, catching 12+ response validation bugs. Cut bug-fix turnaround by 30% through precise Jira documentation. Adopted BDD/Cucumber framework for feature files."
        }
    ];

    const education = [
        {
            institution: "Savitribai Phule Pune University",
            degree: "Master of Computer Science",
            duration: "2024 - 2026",
            location: "Pune, India",
            score: "84.8%"
        },
        {
            institution: "Savitribai Phule Pune University",
            degree: "Bachelor of Computer Science",
            duration: "2021 - 2024",
            location: "Pune, India",
            score: "CGPA: 8.27"
        }
    ];

    const certifications = [
        { name: "Manual & Automation Testing (Java + Selenium + BDD)", issuer: "SSquare IT" },
        { name: "Full Stack Java Development", issuer: "Durga Soft" }
    ];

    return (
        <section id="resume" className="py-24 relative overflow-hidden bg-slate-50 dark:bg-qa-dark">
            {/* Background Decorative Elements */}
            <div className="absolute top-1/2 left-0 w-72 h-72 bg-qa-blue/10 rounded-full blur-[120px] -z-10" />
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-qa-teal/10 rounded-full blur-[150px] -z-10" />

            <div className="container mx-auto px-4 md:px-8">
                <div className="text-center mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-block mb-4 px-3 py-1 rounded-full bg-qa-blue/10 text-qa-blue text-sm font-semibold tracking-wider uppercase"
                    >
                        My Resume
                    </motion.div>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white"
                    >
                        Professional Experience
                    </motion.h2>
                </div>

                <div className="max-w-5xl mx-auto">
                    {/* Glass Resume Card */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="glass-surface rounded-[2rem] p-8 md:p-12 relative overflow-hidden"
                    >
                        {/* Header Section */}
                        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-12 border-b border-white/10 pb-8">
                            <div>
                                <h3 className="text-3xl font-bold text-slate-900 dark:text-white">Rohit Bhosale</h3>
                                <p className="text-xl text-qa-blue font-medium mt-1">QA Engineer | Software Tester</p>
                                <div className="flex flex-wrap gap-4 mt-4 text-sm text-slate-600 dark:text-slate-400">
                                    <span className="flex items-center gap-1.5"><MapPin size={16} /> Pune, India</span>
                                    <span className="flex items-center gap-1.5"><Calendar size={16} /> Available Immediately</span>
                                </div>
                            </div>
                            <a
                                href="https://drive.google.com/file/d/1VshJ314czqhS6-dZP2ckdzmF8hkxZN6r/view?usp=drive_link"
                                target="_blank"
                                rel="noreferrer"
                                className="qa-btn-primary px-6 py-3 shadow-xl hover:shadow-qa-blue/40"
                            >
                                <Download size={18} /> Download CV
                            </a>
                        </div>

                        <div className="grid lg:grid-cols-3 gap-12">
                            {/* Left Column: Experience */}
                            <div className="lg:col-span-2 space-y-10">
                                <div>
                                    <h4 className="flex items-center gap-2 text-xl font-bold text-slate-900 dark:text-white mb-6">
                                        <Briefcase size={20} className="text-qa-blue" /> Work Experience
                                    </h4>
                                    <div className="space-y-8">
                                        {experiences.map((exp, index) => (
                                            <div key={index} className="relative pl-8 before:absolute before:left-0 before:top-2 before:w-1 before:h-full before:bg-qa-blue/20">
                                                <div className="absolute left-[-5px] top-1.5 w-[11px] h-[11px] rounded-full bg-qa-blue shadow-[0_0_10px_rgba(37,99,235,0.5)]" />
                                                <div className="flex flex-wrap justify-between items-baseline mb-2">
                                                    <h5 className="text-lg font-bold text-slate-800 dark:text-slate-200">{exp.role}</h5>
                                                    <span className="text-sm font-medium text-qa-blue bg-qa-blue/10 px-3 py-1 rounded-full">{exp.duration}</span>
                                                </div>
                                                <p className="text-qa-teal text-sm font-semibold mb-3">{exp.company} • {exp.location}</p>
                                                <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-sm">
                                                    {exp.description}
                                                </p>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                <div>
                                    <h4 className="flex items-center gap-2 text-xl font-bold text-slate-900 dark:text-white mb-6">
                                        <GraduationCap size={20} className="text-qa-blue" /> Education
                                    </h4>
                                    <div className="space-y-6">
                                        {education.map((edu, index) => (
                                            <div key={index} className="p-4 rounded-2xl bg-white/5 border border-white/5">
                                                <div className="flex flex-wrap justify-between items-baseline mb-1">
                                                    <h5 className="font-bold text-slate-800 dark:text-slate-200">{edu.degree}</h5>
                                                    <span className="text-sm text-slate-500">{edu.duration}</span>
                                                </div>
                                                <p className="text-sm text-slate-600 dark:text-slate-400">{edu.institution} • {edu.location}</p>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            {/* Right Column: Skills & Certs */}
                            <div className="space-y-10">
                                <div>
                                    <h4 className="flex items-center gap-2 text-xl font-bold text-slate-900 dark:text-white mb-6">
                                        <Award size={20} className="text-qa-blue" /> Certifications
                                    </h4>
                                    <div className="space-y-4">
                                        {certifications.map((cert, index) => (
                                            <div key={index} className="flex gap-3 group translate-x-0 hover:translate-x-1 transition-transform">
                                                <div className="mt-1 p-1 rounded bg-qa-teal/10 text-qa-teal">
                                                    <ExternalLink size={14} />
                                                </div>
                                                <div>
                                                    <h5 className="text-sm font-bold text-slate-800 dark:text-slate-200 leading-tight">{cert.name}</h5>
                                                    <p className="text-xs text-slate-500 mt-1">{cert.issuer}</p>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* Summary Box */}
                                <div className="p-6 rounded-3xl bg-qa-blue/5 border border-qa-blue/10">
                                    <h4 className="text-sm font-bold text-qa-blue uppercase tracking-wider mb-3">Core Objective</h4>
                                    <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed italic">
                                        "To leverage my technical precision and analytical mindset to ensure the delivery of high-quality software, while continuously evolving my automation capabilities."
                                    </p>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Resume;
