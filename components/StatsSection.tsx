"use client";

import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { HiAcademicCap, HiUserGroup, HiShieldCheck, HiCheckCircle } from "react-icons/hi";

const stats = [
    {
        icon: HiShieldCheck,
        number: 10,
        suffix: "+",
        label: "Years Experience",
        description: "Trusted by thousands of students since 2008.",
        color: "blue",
        gradient: "from-blue-500 to-blue-600"
    },
    {
        icon: HiUserGroup,
        number: 3,
        suffix: "K+",
        label: "Students Get Dreams",
        description: "Successful admissions in top global universities.",
        color: "purple",
        gradient: "from-purple-500 to-purple-600"
    },
    {
        icon: HiAcademicCap,
        number: 100,
        suffix: "+",
        label: "Partner Universities",
        description: "Direct partnerships with world-class institutions.",
        color: "pink",
        gradient: "from-pink-500 to-rose-600"
    },
    {
        icon: HiCheckCircle,
        number: 0,
        suffix: "",
        label: "Visa Success",
        description: "Expert documentation and interview preparation.",
        color: "green",
        gradient: "from-emerald-500 to-green-600",
        customText: "High"
    },
];

// Animated Counter Component
const AnimatedCounter = ({ target, suffix, inView }: { target: number; suffix: string; inView: boolean }) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        if (!inView) return;

        let start = 0;
        const duration = 2000; // 2 seconds
        const increment = target / (duration / 16); // 60fps

        const timer = setInterval(() => {
            start += increment;
            if (start >= target) {
                setCount(target);
                clearInterval(timer);
            } else {
                setCount(Math.floor(start));
            }
        }, 16);

        return () => clearInterval(timer);
    }, [target, inView]);

    return (
        <span className="font-black text-5xl md:text-6xl">
            {count.toLocaleString()}{suffix}
        </span>
    );
};

// Stat Card Component
const StatCard = ({ stat, index }: { stat: any; index: number }) => {
    const ref = useRef(null);
    const inView = useInView(ref, { once: true, margin: "-100px" });
    const Icon = stat.icon;

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="group relative"
        >
            <div className="relative bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-2xl transition-all duration-300 h-full">
                {/* Icon Badge */}
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-xl bg-gradient-to-br ${stat.gradient} mb-6 shadow-lg`}>
                    <Icon className="text-3xl text-white" />
                </div>

                {/* Animated Number or Custom Text */}
                <div className={`mb-2 bg-gradient-to-r ${stat.gradient} bg-clip-text text-transparent`}>
                    {stat.customText ? (
                        <span className="font-black text-5xl md:text-6xl">{stat.customText}</span>
                    ) : (
                        <AnimatedCounter target={stat.number} suffix={stat.suffix} inView={inView} />
                    )}
                </div>

                {/* Label - Smaller font to prevent wrapping */}
                <h3 className="text-lg font-black mb-2 text-gray-900 leading-tight">
                    {stat.label}
                </h3>

                {/* Description */}
                <p className="text-sm text-gray-600 leading-relaxed">
                    {stat.description}
                </p>

                {/* Hover Effect Border */}
                <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${stat.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300 pointer-events-none`} />
            </div>
        </motion.div>
    );
};

export default function StatsSection() {
    const [mounted, setMounted] = useState(false);
    useEffect(() => setMounted(true), []);
    if (!mounted) return null;

    return (
        <section className="py-24 bg-gradient-to-b from-white via-gray-50 to-white relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] opacity-30" />

            <div className="container mx-auto px-4 relative z-10">
                {/* Left Side - Heading */}
                <div className="grid lg:grid-cols-5 gap-12 items-center">
                    <div className="lg:col-span-2">
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                        >
                            <div className="inline-block px-4 py-1.5 bg-pink-50 rounded-full mb-4">
                                <span className="text-xs font-bold text-[#DC143C] uppercase tracking-wide">Why Us?</span>
                            </div>

                            <h2 className="text-4xl md:text-5xl font-black mb-6 leading-tight">
                                <span className="text-gray-900">We Don't Just Guide,</span>
                                <br />
                                <span className="text-[#003893]">We Build </span>
                                <span className="text-[#DC143C]">Careers.</span>
                            </h2>

                            <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                                At Pinnacle Nepal, we believe in a personalized approach. Your dreams are unique, and our strategy for you needs to be too.
                            </p>

                            <button className="px-8 py-3 bg-[#003893] text-white font-bold rounded-full shadow-lg hover:shadow-xl hover:bg-[#002266] transition-all duration-300 transform hover:-translate-y-0.5">
                                Meet Our Counselors
                            </button>
                        </motion.div>
                    </div>

                    {/* Right Side - Stats Grid */}
                    <div className="lg:col-span-3">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {stats.map((stat, index) => (
                                <StatCard key={stat.label} stat={stat} index={index} />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
