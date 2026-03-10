import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Linkedin, Github, Send } from 'lucide-react';

const Contact = () => {
    return (
        <section id="contact" className="py-24 bg-slate-50 dark:bg-qa-dark relative overflow-hidden">
            <div className="container mx-auto px-4 md:px-8">

                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white">
                        Let's Ensure Quality Together
                    </h2>
                    <p className="mt-4 text-slate-600 dark:text-slate-400 max-w-xl mx-auto">
                        Currently actively seeking full-time QA Engineer or SDET roles. Feel free to reach out for opportunities or just to say hi!
                    </p>
                </div>

                <div className="max-w-5xl mx-auto grid lg:grid-cols-5 gap-12">

                    {/* Contact Info (Left Side) */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="lg:col-span-2 flex flex-col gap-6"
                    >
                        <a href="mailto:rohitbhosale673@gmail.com" className="qa-card p-6 flex flex-col items-center text-center hover:border-qa-blue transition-colors group">
                            <div className="w-12 h-12 rounded-full bg-qa-blue/10 flex items-center justify-center text-qa-blue mb-4 group-hover:scale-110 transition-transform">
                                <Mail size={24} />
                            </div>
                            <h3 className="font-bold text-slate-900 dark:text-white mb-1">Email</h3>
                            <p className="text-sm text-slate-600 dark:text-slate-400">rohitbhosale673@gmail.com</p>
                        </a>

                        <a href="tel:+919022849886" className="qa-card p-6 flex flex-col items-center text-center hover:border-qa-blue transition-colors group">
                            <div className="w-12 h-12 rounded-full bg-qa-blue/10 flex items-center justify-center text-qa-blue mb-4 group-hover:scale-110 transition-transform">
                                <Phone size={24} />
                            </div>
                            <h3 className="font-bold text-slate-900 dark:text-white mb-1">Phone</h3>
                            <p className="text-sm text-slate-600 dark:text-slate-400">+91 9022849886</p>
                        </a>

                        <div className="qa-card p-6 flex flex-col items-center text-center group">
                            <div className="w-12 h-12 rounded-full bg-qa-blue/10 flex items-center justify-center text-qa-blue mb-4">
                                <MapPin size={24} />
                            </div>
                            <h3 className="font-bold text-slate-900 dark:text-white mb-1">Location</h3>
                            <p className="text-sm text-slate-600 dark:text-slate-400">Pune, Maharashtra</p>
                        </div>
                    </motion.div>

                    {/* Contact Form Placeholder (Right Side) */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="lg:col-span-3 qa-card p-8 bg-white dark:bg-[#1a2333]"
                    >
                        <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">Send Me a Message</h3>
                        <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                            <div className="grid md:grid-cols-2 gap-4">
                                <div className="space-y-1">
                                    <label className="text-sm font-medium text-slate-700 dark:text-slate-300">Name</label>
                                    <input type="text" className="w-full px-4 py-3 rounded-lg border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/50 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-qa-blue disabled:opacity-50" placeholder="John Doe" disabled />
                                </div>
                                <div className="space-y-1">
                                    <label className="text-sm font-medium text-slate-700 dark:text-slate-300">Email</label>
                                    <input type="email" className="w-full px-4 py-3 rounded-lg border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/50 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-qa-blue disabled:opacity-50" placeholder="john@example.com" disabled />
                                </div>
                            </div>
                            <div className="space-y-1">
                                <label className="text-sm font-medium text-slate-700 dark:text-slate-300">Subject</label>
                                <input type="text" className="w-full px-4 py-3 rounded-lg border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/50 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-qa-blue disabled:opacity-50" placeholder="Opportunity for QA Role" disabled />
                            </div>
                            <div className="space-y-1">
                                <label className="text-sm font-medium text-slate-700 dark:text-slate-300">Message</label>
                                <textarea rows="4" className="w-full px-4 py-3 rounded-lg border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/50 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-qa-blue disabled:opacity-50 resize-none" placeholder="(Form functionality requires a backend. Please use the email link provided.)" disabled></textarea>
                            </div>
                            <button disabled type="button" className="qa-btn-primary w-full justify-center opacity-50 cursor-not-allowed mt-2">
                                <Send size={18} /> Send Message
                            </button>
                        </form>
                    </motion.div>

                </div>
            </div>
        </section>
    );
};

export default Contact;
