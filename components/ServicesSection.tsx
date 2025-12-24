"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import {
    HiAcademicCap,
    HiDocumentText,
    HiGlobeAlt,
    HiClipboardCheck,
    HiSparkles
} from "react-icons/hi";

// Specific 4 Services requested by user - using existing simple product images
const services = [
    {
        id: "university",
        icon: HiAcademicCap,
        title: "Universities",
        description: "Expert guidance for top-tier institutions worldwide.",
        gradient: "from-blue-500 via-cyan-500 to-teal-500",
        particles: ["🎓", "📚", "🏛️"],
    },
    {
        id: "application",
        icon: HiClipboardCheck,
        title: "Applications",
        description: "Seamless documentation and fast track submission.",
        gradient: "from-purple-500 via-pink-500 to-rose-500",
        particles: ["📝", "✅", "📨"],
    },
    {
        id: "visa",
        icon: HiDocumentText,
        title: "Visa Support",
        description: "Comprehensive support for successful approvals.",
        gradient: "from-orange-500 via-amber-500 to-yellow-500",
        particles: ["✈️", "🛂", "📋"],
    },
    {
        id: "predeparture",
        icon: HiGlobeAlt,
        title: "Pre-Departure",
        description: "Complete assistance with travel and settling in.",
        gradient: "from-emerald-500 via-green-500 to-teal-500",
        particles: ["🌍", "🧳", "👋"],
    },
];

const FloatingParticle = ({ emoji, delay }: { emoji: string; delay: number }) => (
    <div
        className="absolute text-xl pointer-events-none animate-float-particle opacity-0"
        style={{
            left: `${(delay * 300) % 80 + 10}%`,
            top: `${(delay * 700) % 80 + 10}%`,
            animationDelay: `${delay}s`,
            willChange: "transform, opacity"
        }}
    >
        {emoji}
    </div>
);

// Coded Full-Background Card with Simple Product Images
const ServiceCard = ({ service, index }: { service: any; index: number }) => {
    const directions = [
        { x: -50, y: -50 }, { x: 0, y: -50 }, { x: 50, y: -50 },
        { x: -50, y: 0 }, { x: 50, y: 0 },
        { x: -50, y: 50 }, { x: 0, y: 50 }, { x: 50, y: 50 },
    ];
    const dir = directions[index % directions.length];
    const [imageError, setImageError] = useState(false);
    const Icon = service.icon;

    return (
        <motion.div
            initial={{ opacity: 0, x: dir.x, y: dir.y }}
            whileInView={{ opacity: 1, x: 0, y: 0 }}
            viewport={{ once: false, margin: "-50px" }}
            transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
            className="group relative cursor-pointer touch-manipulation transform-gpu transition-all duration-300 hover:scale-105 hover:-translate-y-2 tap-highlight-transparent"
            style={{ perspective: 1000 }}
        >
            {/* Full Card with White Background and Product Image */}
            <div className="relative aspect-[3/4] rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 bg-white">
                {/* Light gradient background */}
                <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-5`} />

                {/* Product Image - Centered in upper portion */}
                <div className="absolute inset-0 flex items-center justify-center pt-8 pb-32">
                    {!imageError ? (
                        <div className="relative w-3/4 h-3/5 transition-transform duration-500 group-hover:scale-110">
                            <Image
                                src={`/images/services/${service.id}.png`}
                                alt={service.title}
                                fill
                                className="object-contain drop-shadow-xl"
                                onError={() => setImageError(true)}
                                sizes="(max-width: 768px) 100vw, 300px"
                            />
                        </div>
                    ) : (
                        <div className={`w-24 h-24 rounded-2xl bg-gradient-to-br ${service.gradient} flex items-center justify-center shadow-lg`}>
                            <Icon className="text-5xl text-white" />
                        </div>
                    )}
                </div>

                {/* Particles */}
                <div className="absolute inset-0 overflow-hidden pointer-events-none group-hover:block hidden z-20">
                    {service.particles.map((emoji: string, i: number) => (
                        <FloatingParticle key={i} emoji={emoji} delay={i * 0.8} />
                    ))}
                </div>

                {/* Text Content Overlay (Bottom) - Coded */}
                <div className="absolute bottom-0 left-0 right-0 p-6 z-10 bg-white">
                    <h3 className="text-lg font-black mb-2 leading-tight text-[#003893] group-hover:text-[#DC143C] transition-colors duration-300">
                        {service.title}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed mb-4">
                        {service.description}
                    </p>
                    <div className="flex items-center gap-1 text-[#DC143C] font-bold text-xs opacity-70 group-hover:opacity-100 transition-all duration-300">
                        <HiSparkles className="text-xs" />
                        <span>Explore</span>
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

export default function ServicesSection() {
    const [mounted, setMounted] = useState(false);
    useEffect(() => setMounted(true), []);
    if (!mounted) return null;

    return (
        <section className="py-20 bg-gradient-to-b from-white via-gray-50 to-white relative overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] opacity-30 mask-image:linear-gradient(to_bottom,transparent,black,transparent)" />

            <div className="container mx-auto px-4 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-12"
                >
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-blue-50/80 backdrop-blur-sm rounded-full mb-4 border border-blue-100/50">
                        <HiSparkles className="text-[#DC143C] text-sm" />
                        <span className="text-xs font-bold text-[#003893] tracking-wide uppercase">Premium Services</span>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-black mb-3 tracking-tight">
                        <span className="text-[#003893]">Our </span>
                        <span className="text-[#DC143C]">Services</span>
                    </h2>
                    <p className="text-base text-gray-500 font-medium max-w-2xl mx-auto">
                        Your gateway to global education.
                    </p>
                </motion.div>

                {/* Grid - Centered 4 items */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto mb-12">
                    {services.map((service, index) => (
                        <ServiceCard key={service.title} service={service} index={index} />
                    ))}
                </div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: false }}
                    transition={{ delay: 0.3 }}
                    className="text-center"
                >
                    <Link href="/services">
                        <button className="group relative px-8 py-3 bg-[#DC143C] text-white font-bold text-base rounded-full shadow-lg hover:shadow-xl hover:bg-[#b01030] transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0">
                            <span className="relative z-10 flex items-center gap-2">
                                View All Services
                                <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                            </span>
                        </button>
                    </Link>
                </motion.div>
            </div>
        </section>
    );
}
