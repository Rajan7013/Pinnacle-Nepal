"use client";

import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SectionWrapper, { SectionHeader } from "@/components/SectionWrapper";
import CTASection from "@/components/CTASection";
import WhyChooseUsSection from "@/components/WhyChooseUsSection";
import Image from "next/image";
import { useState } from "react";
import {
    HiAcademicCap,
    HiDocumentText,
    HiGlobeAlt,
    HiBriefcase,
    HiBookOpen,
    HiLightBulb,
    HiCurrencyDollar,
    HiSupport,
    HiSparkles,
    HiChevronRight
} from "react-icons/hi";

const services = [
    {
        id: "admissions",
        icon: HiAcademicCap,
        title: "University Selection",
        desc: "AI-powered matching with 500+ top-tier universities.",
        details: "We analyze your academic profile, interests, and budget to find the perfect university match using our proprietary AI database.",
        features: ["Profile Evaluation", "Course Matching", "Scholarship Alignment", "Application Roadmap"],
        gradient: "from-blue-500 via-cyan-500 to-teal-500",
        particles: ["🎓", "📚", "🏛️"],
    },
    {
        id: "visa",
        icon: HiDocumentText,
        title: "Visa Processing",
        desc: "98% success rate with expert documentation guidance.",
        details: "Our visa experts guide you through every step, from financial documentation to interview preparation, ensuring a hassle-free process.",
        features: ["Document Checklist", "SOP Review", "Mock Interviews", "Financial Planning"],
        gradient: "from-purple-500 via-pink-500 to-rose-500",
        particles: ["✈️", "🛂", "📋"],
    },
    {
        id: "travel",
        icon: HiGlobeAlt,
        title: "Travel Support",
        desc: "End-to-end departure and arrival assistance.",
        details: "We don't just stop at the visa. We help with flight bookings, packing lists, and airport pickups up to your dorm.",
        features: ["Flight Booking", "Pre-departure Briefing", "Accommodation Search", "Airport Pickup"],
        gradient: "from-orange-500 via-amber-500 to-yellow-500",
        particles: ["🌍", "✈️", "🧳"],
    },
    {
        id: "counseling",
        icon: HiBriefcase,
        title: "Career Counseling",
        desc: "Strategic planning for global career opportunities.",
        details: "Focus on your long-term goals. We align your course selection with global market trends to ensure high employability.",
        features: ["Skill Assessment", "Market Analysis", "Internship Guide", "Post-Study Work Pathways"],
        gradient: "from-emerald-500 via-green-500 to-teal-500",
        particles: ["💼", "📊", "🎯"],
    },
    {
        id: "test-prep",
        icon: HiBookOpen,
        title: "Test Preparation",
        desc: "IELTS, TOEFL, PTE, GRE mastery programs.",
        details: "Get coached by certified trainers with proven track records. Regular mock tests and personalized feedback sessions.",
        features: ["Certified Trainers", "Mock Tests", "Study Materials", "Flexible Batches"],
        gradient: "from-indigo-500 via-purple-500 to-pink-500",
        particles: ["📖", "✍️", "🏆"],
    },
    {
        id: "scholarships",
        icon: HiCurrencyDollar,
        title: "Scholarship Aid",
        desc: "$2M+ secured for students annually.",
        details: "We vigorously hunt for scholarships, grants, and bursaries to minimize your financial burden.",
        features: ["Merit-based Search", "Application Support", "Essay Editing", "Financial Aid Negotiation"],
        gradient: "from-yellow-500 via-orange-500 to-red-500",
        particles: ["💰", "🎓", "💎"],
    },
    {
        id: "destinations",
        icon: HiLightBulb,
        title: "Destination Guide",
        desc: "Data-driven destination recommendations.",
        details: "Deep dive into country specific lifestyles, costs, and opportunities to choose your new home wisely.",
        features: ["Cost of Living Analysis", "Safety Index", "Cultural Orientation", "City Guides"],
        gradient: "from-cyan-500 via-blue-500 to-indigo-500",
        particles: ["🗺️", "📍", "🌟"],
    },
    {
        id: "support",
        icon: HiSupport,
        title: "Post-Arrival Help",
        desc: "24/7 assistance even after you land.",
        details: "Our relationship continues abroad. We help with bank accounts, SIM cards, and local community networking.",
        features: ["Bank Account Setup", "Sim Card Assistance", "Local Networking", "Emergency Support"],
        gradient: "from-pink-500 via-rose-500 to-red-500",
        particles: ["🤝", "💬", "🌐"],
    },
];

// Reusing the Optimized CSS Particle
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

// Hybrid Icon Component (Same as ServicesSection)
const ServiceIconLarge = ({ service }: { service: any }) => {
    const Icon = service.icon;
    const [imageError, setImageError] = useState(false);

    return (
        <div className={`w-20 h-20 md:w-24 md:h-24 rounded-2xl bg-gradient-to-br ${service.gradient} flex items-center justify-center shadow-lg relative overflow-hidden group-hover:scale-105 transition-transform duration-500`}>
            {/* Pulse Ring */}
            <div className={`absolute inset-0 bg-white/20 animate-pulse`} />

            {/* Try loading Image first */}
            {!imageError ? (
                <div className="relative w-16 h-16 md:w-20 md:h-20 z-10 transition-transform duration-300">
                    <Image
                        src={`/images/services/${service.id}.png`}
                        alt={service.title}
                        fill
                        className="object-contain drop-shadow-md"
                        onError={() => setImageError(true)}
                        sizes="100px" // Slightly larger for detail view
                    />
                </div>
            ) : (
                /* Fallback to Icon */
                <Icon className="text-4xl md:text-5xl text-white relative z-10 drop-shadow-md" />
            )}
        </div>
    );
};

// Detailed Service Card
const ServiceCardDetailed = ({ service, index }: { service: any; index: number }) => {
    const isEven = index % 2 === 0;

    return (
        <motion.div
            initial={{ opacity: 0, y: 50, x: isEven ? -50 : 50 }}
            whileInView={{ opacity: 1, y: 0, x: 0 }}
            viewport={{ once: false, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
            className="group relative bg-white/95 backdrop-blur-md rounded-3xl p-8 lg:p-12 shadow-xl border border-gray-100 overflow-hidden hover:shadow-2xl transition-all duration-500 mb-8 transform-gpu"
        >
            {/* Animated Background Gradient */}
            <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />

            {/* Floating Particles */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                {service.particles.map((emoji: string, i: number) => (
                    <FloatingParticle key={i} emoji={emoji} delay={i * 0.5} />
                ))}
            </div>

            <div className="relative z-10 flex flex-col md:flex-row gap-8 items-start">

                {/* Icon Block with Hybrid Logic */}
                <div className="flex-shrink-0">
                    <ServiceIconLarge service={service} />
                </div>

                {/* Content Block */}
                <div className="flex-grow">
                    <h3 className="text-2xl md:text-3xl font-black mb-3 text-gray-900 group-hover:text-blue-700 transition-colors">
                        {service.title}
                    </h3>
                    <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                        {service.details}
                    </p>

                    {/* Features List */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
                        {service.features.map((feature: string, i: number) => (
                            <div key={i} className="flex items-center gap-2 text-sm font-medium text-gray-700">
                                <span className={`w-2 h-2 rounded-full bg-gradient-to-r ${service.gradient}`} />
                                {feature}
                            </div>
                        ))}
                    </div>

                    {/* Action Link */}
                    <button className="inline-flex items-center gap-2 text-[#DC143C] font-bold text-sm uppercase tracking-wide group-hover:gap-3 transition-all duration-300">
                        Get Started <HiChevronRight className="text-lg" />
                    </button>
                </div>
            </div>
        </motion.div>
    );
};

export default function ServicesPage() {
    return (
        <>
            <Header />

            <main className="bg-gray-50 pt-32 pb-20 overflow-hidden">
                {/* Page Header */}
                <section className="container mx-auto px-4 text-center mb-20 relative z-10">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6 }}
                        className="inline-flex items-center gap-2 px-5 py-2 bg-blue-100 rounded-full mb-6"
                    >
                        <HiSparkles className="text-blue-600" />
                        <span className="text-blue-800 font-bold text-sm uppercase">Comprehensive Solutions</span>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2, duration: 0.8 }}
                        className="text-5xl md:text-7xl font-black mb-6 tracking-tight text-gray-900"
                    >
                        Start Your Journey <br className="hidden md:block" />
                        <span className="bg-gradient-to-r from-[#003893] to-[#DC143C] bg-clip-text text-transparent">With Confidence</span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.4 }}
                        className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
                    >
                        From your first consultation to your first day on campus, we provide end-to-end support tailored to your unique aspirations.
                    </motion.p>
                </section>

                {/* Services List */}
                <section className="container mx-auto px-4 md:px-8 max-w-6xl relative z-10">
                    {services.map((service, index) => (
                        <ServiceCardDetailed key={service.title} service={service} index={index} />
                    ))}
                </section>

                {/* Reusing Optimized Sections */}
                <WhyChooseUsSection />
                <CTASection />
            </main>

            <Footer />
        </>
    );
}
