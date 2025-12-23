'use client';

import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useState } from 'react';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            className="sticky top-0 left-0 right-0 z-50 bg-white shadow-sm border-b border-gray-100"
        >
            <div className="container mx-auto px-4 h-20 md:h-24 lg:h-32 flex items-center justify-between transition-[height] duration-300 ease-in-out">
                {/* Logo Area - Hybrid Approach (Icon Image + Coded Text) */}
                <Link href="/" className="flex items-center gap-4">
                    <img
                        src="/logo.jpg"
                        alt="Pinnacle Nepal Logo"
                        className="h-14 md:h-20 lg:h-28 w-auto object-contain min-w-[140px] md:min-w-[180px] lg:min-w-[220px] max-w-[60vw] transition-all duration-300"
                    />
                </Link>

                {/* Desktop Navigation Links */}
                <div className="hidden md:flex items-center gap-10">
                    {['Home', 'About Us', 'Study Abroad', 'Services', 'Contact'].map((item) => (
                        <Link key={item} href="#" className="text-[15px] font-semibold font-heading text-slate-700 hover:text-pinnacle-orange transition-colors uppercase tracking-wide">
                            {item}
                        </Link>
                    ))}
                </div>

                {/* Actions & Mobile Menu Button */}
                <div className="flex items-center gap-5">
                    <button className="text-slate-600 hover:text-pinnacle-orange transition-colors">
                        <Search className="w-5 h-5" />
                    </button>

                    {/* Mobile Hamburger */}
                    <button
                        className="md:hidden text-slate-900 hover:text-pinnacle-orange transition-colors"
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        {isOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
                    </button>
                </div>
            </div>

            {/* Mobile Navigation Dropdown */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-white border-t border-gray-100 overflow-hidden"
                    >
                        <div className="flex flex-col p-6 gap-4">
                            {['Home', 'About Us', 'Study Abroad', 'Services', 'Contact'].map((item) => (
                                <Link
                                    key={item}
                                    href="#"
                                    className="text-lg font-semibold font-heading text-slate-800 hover:text-pinnacle-orange transition-colors border-b border-gray-50 pb-2"
                                    onClick={() => setIsOpen(false)}
                                >
                                    {item}
                                </Link>
                            ))}
                            <Button className="mt-4 w-full bg-pinnacle-orange text-white">
                                Apply Now
                            </Button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.nav>
    );
}
