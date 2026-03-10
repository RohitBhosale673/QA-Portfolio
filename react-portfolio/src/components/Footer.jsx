import React from 'react';
import { Linkedin, Mail, Github } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-white dark:bg-[#0f1522] border-t border-slate-200 dark:border-slate-800 py-12">
            <div className="container mx-auto px-4 md:px-8">
                <div className="flex flex-col md:flex-row justify-between items-center gap-6">

                    <div className="text-center md:text-left">
                        <span className="text-xl font-bold text-slate-900 dark:text-white">
                            Rohit<span className="text-qa-blue">Bhosale</span>
                        </span>
                        <p className="text-sm text-slate-500 dark:text-slate-400 mt-2">
                            Ensuring software quality, one automated script at a time.
                        </p>
                    </div>

                    <div className="flex items-center gap-4">
                        <a href="https://linkedin.com/in/rohit-bhosale-041157289" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-600 dark:text-slate-400 hover:bg-qa-blue hover:text-white dark:hover:bg-qa-blue transition-colors">
                            <Linkedin size={18} />
                        </a>
                        <a href="mailto:rohitbhosale673@gmail.com" className="w-10 h-10 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-600 dark:text-slate-400 hover:bg-qa-teal hover:text-white dark:hover:bg-qa-teal transition-colors">
                            <Mail size={18} />
                        </a>
                        <a href="https://github.com" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-600 dark:text-slate-400 hover:bg-slate-900 hover:text-white dark:hover:bg-white dark:hover:text-black transition-colors">
                            <Github size={18} />
                        </a>
                    </div>

                </div>

                <div className="mt-8 pt-8 border-t border-slate-200 dark:border-slate-800 text-center text-sm text-slate-500 dark:text-slate-500">
                    <p>&copy; {new Date().getFullYear()} Rohit Bhosale. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
