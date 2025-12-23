"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { FiMenu, FiX } from "react-icons/fi";
import {
    HiHome,
    HiGlobeAlt,
    HiBriefcase,
    HiAcademicCap,
    HiPhotograph,
    HiStar,
    HiMail
} from "react-icons/hi";

// Clean 7-tab navigation with professional icons
const navLinks = [
    { name: "Home", href: "/", icon: HiHome },
    { name: "Destinations", href: "/study-abroad", icon: HiGlobeAlt },
    { name: "Services", href: "/services", icon: HiBriefcase },
    { name: "Programs", href: "/study-programs", icon: HiAcademicCap },
    { name: "Gallery", href: "/gallery", icon: HiPhotograph },
    { name: "Reviews", href: "/reviews", icon: HiStar },
    { name: "Contact", href: "/contact", icon: HiMail },
];

export default function Header() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <>
            <motion.header
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md"
            >
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-20">
                        {/* Logo */}
                        <Link href="/" className="flex items-center">
                            <motion.div
                                whileHover={{ scale: 1.05 }}
                                transition={{ duration: 0.3 }}
                                className="relative w-24 h-16"
                            >
                                <Image
                                    src="/logo.jpg"
                                    alt="Pinnacle Nepal"
                                    fill
                                    className="object-contain"
                                    priority
                                    quality={100}
                                />
                            </motion.div>
                        </Link>

                        {/* Desktop Navigation - 7 Tabs with Icons */}
                        <nav className="hidden lg:flex items-center space-x-1">
                            {navLinks.map((link) => {
                                const isActive = pathname === link.href;
                                const Icon = link.icon;

                                return (
                                    <Link
                                        key={link.name}
                                        href={link.href}
                                        className={`px-3 py-2 rounded-lg text-sm font-bold whitespace-nowrap transition-all duration-300 flex items-center gap-2 ${isActive
                                                ? "text-[#DC143C]"
                                                : "text-[#003893] hover:text-[#DC143C]"
                                            }`}
                                    >
                                        <Icon className="text-lg" />
                                        {link.name}
                                    </Link>
                                );
                            })}
                        </nav>

                        {/* CTA Button - Desktop */}
                        <div className="hidden lg:block">
                            <Link
                                href="/contact"
                                className="px-6 py-2.5 bg-[#DC143C] text-white text-sm font-bold rounded hover:bg-[#B01030] transition-colors shadow-md hover:shadow-lg"
                            >
                                Get Started
                            </Link>
                        </div>

                        {/* Mobile Menu Button */}
                        <button
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            className="lg:hidden w-10 h-10 rounded bg-[#DC143C] text-white flex items-center justify-center hover:bg-[#B01030] transition-colors"
                            aria-label="Toggle menu"
                        >
                            {isMobileMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
                        </button>
                    </div>
                </div>
            </motion.header>

            {/* Mobile Menu */}
            <motion.div
                initial={{ x: "100%" }}
                animate={{ x: isMobileMenuOpen ? 0 : "100%" }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
                className="fixed top-0 right-0 bottom-0 w-80 max-w-[85vw] bg-white shadow-2xl z-50 lg:hidden"
            >
                <div className="flex flex-col h-full">
                    {/* Mobile Header */}
                    <div className="flex items-center justify-between p-6 border-b border-gray-200 bg-[#003893]">
                        <span className="text-xl font-bold text-white">Menu</span>
                        <button
                            onClick={() => setIsMobileMenuOpen(false)}
                            className="w-10 h-10 rounded bg-[#DC143C] text-white flex items-center justify-center hover:bg-[#B01030] transition-colors"
                            aria-label="Close menu"
                        >
                            <FiX size={24} />
                        </button>
                    </div>

                    {/* Mobile Nav Links */}
                    <nav className="flex-1 overflow-y-auto py-6 px-4">
                        {navLinks.map((link) => {
                            const isActive = pathname === link.href;
                            const Icon = link.icon;

                            return (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    onClick={() => setIsMobileMenuOpen(false)}
                                    className={`flex items-center gap-3 px-4 py-3 mb-2 rounded-lg font-bold transition-all duration-300 ${isActive
                                            ? "bg-[#DC143C] text-white"
                                            : "text-[#003893] hover:bg-[#DC143C] hover:text-white"
                                        }`}
                                >
                                    <Icon className="text-xl" />
                                    {link.name}
                                </Link>
                            );
                        })}
                    </nav>

                    {/* Mobile CTA */}
                    <div className="p-6 border-t border-gray-200">
                        <Link
                            href="/contact"
                            onClick={() => setIsMobileMenuOpen(false)}
                            className="block text-center px-6 py-4 bg-[#DC143C] text-white font-bold rounded hover:bg-[#B01030] transition-colors shadow-md"
                        >
                            Get Started
                        </Link>
                    </div>
                </div>
            </motion.div>

            {/* Mobile Menu Backdrop */}
            {isMobileMenuOpen && (
                <div
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="fixed inset-0 bg-black/50 z-40 lg:hidden"
                />
            )}
        </>
    );
}
