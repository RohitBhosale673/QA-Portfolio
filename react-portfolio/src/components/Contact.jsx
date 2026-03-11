import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, CheckCircle, AlertCircle } from 'lucide-react';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });
    const [status, setStatus] = useState('idle'); // idle, loading, success, error

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('loading');

        try {
            const response = await fetch('https://formspree.io/f/rohitbhosale673@gmail.com', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });

            if (response.ok) {
                setStatus('success');
                setFormData({ name: '', email: '', subject: '', message: '' });
                setTimeout(() => setStatus('idle'), 5000);
            } else {
                setStatus('error');
            }
        } catch (error) {
            setStatus('error');
        }
    };

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

                    {/* Contact Form (Right Side) */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="lg:col-span-3 qa-card p-8 bg-white dark:bg-[#1a2333]"
                    >
                        <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">Send Me a Message</h3>
                        
                        {status === 'success' ? (
                            <motion.div 
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                className="flex flex-col items-center justify-center py-12 text-center"
                            >
                                <div className="w-16 h-16 bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 rounded-full flex items-center justify-center mb-4">
                                    <CheckCircle size={32} />
                                </div>
                                <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-2">Message Sent!</h4>
                                <p className="text-slate-600 dark:text-slate-400">Thank you for reaching out. I'll get back to you as soon as possible.</p>
                                <button 
                                    onClick={() => setStatus('idle')}
                                    className="mt-6 text-qa-blue font-medium hover:underline"
                                >
                                    Send another message
                                </button>
                            </motion.div>
                        ) : (
                            <form className="space-y-4" onSubmit={handleSubmit}>
                                {status === 'error' && (
                                    <div className="p-4 bg-red-100 dark:bg-red-900/20 text-red-600 dark:text-red-400 rounded-lg flex items-center gap-3 text-sm">
                                        <AlertCircle size={18} />
                                        <span>Oops! Something went wrong. Please try again or use the email link.</span>
                                    </div>
                                )}
                                
                                <div className="grid md:grid-cols-2 gap-4">
                                    <div className="space-y-1">
                                        <label className="text-sm font-medium text-slate-700 dark:text-slate-300">Name</label>
                                        <input 
                                            type="text" 
                                            name="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            className="w-full px-4 py-3 rounded-lg border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/50 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-qa-blue" 
                                            placeholder="John Doe" 
                                            required
                                        />
                                    </div>
                                    <div className="space-y-1">
                                        <label className="text-sm font-medium text-slate-700 dark:text-slate-300">Email</label>
                                        <input 
                                            type="email" 
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            className="w-full px-4 py-3 rounded-lg border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/50 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-qa-blue" 
                                            placeholder="john@example.com" 
                                            required
                                        />
                                    </div>
                                </div>
                                <div className="space-y-1">
                                    <label className="text-sm font-medium text-slate-700 dark:text-slate-300">Subject</label>
                                    <input 
                                        type="text" 
                                        name="subject"
                                        value={formData.subject}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 rounded-lg border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/50 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-qa-blue" 
                                        placeholder="Opportunity for QA Role" 
                                        required
                                    />
                                </div>
                                <div className="space-y-1">
                                    <label className="text-sm font-medium text-slate-700 dark:text-slate-300">Message</label>
                                    <textarea 
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        rows="4" 
                                        className="w-full px-4 py-3 rounded-lg border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/50 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-qa-blue resize-none" 
                                        placeholder="Hello Rohit, I'd like to talk about..." 
                                        required
                                    ></textarea>
                                </div>
                                <button 
                                    type="submit" 
                                    disabled={status === 'loading'}
                                    className={`qa-btn-primary w-full justify-center mt-2 ${status === 'loading' ? 'opacity-70 cursor-not-allowed' : ''}`}
                                >
                                    {status === 'loading' ? (
                                        <div className="flex items-center gap-2">
                                            <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                                            Sending...
                                        </div>
                                    ) : (
                                        <><Send size={18} /> Send Message</>
                                    )}
                                </button>
                            </form>
                        )}
                    </motion.div>

                </div>
            </div>
        </section>
    );
};

export default Contact;
