"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { HiAcademicCap, HiGlobeAlt } from "react-icons/hi";
import { Country } from "@/lib/data/destinations";

interface CountryContentProps {
    country: Country;
}

export default function CountryContent({ country }: CountryContentProps) {
    return (
        <div className="min-h-screen bg-gradient-to-b from-gray-50 via-white to-gray-50">
            {/* Hero Section */}
            <section className="relative pt-32 pb-20 overflow-hidden">
                {/* Background Image */}
                <div className="absolute inset-0">
                    <Image
                        src={country.image}
                        alt={country.name}
                        fill
                        className="object-cover"
                        priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/70" />
                </div>

                <div className="container mx-auto px-4 relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="max-w-4xl mx-auto text-center"
                    >
                        {/* Flag Badge */}
                        <motion.div
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            className="inline-block mb-6"
                        >
                            <div className="relative w-24 h-24 rounded-full overflow-hidden border-4 border-white shadow-2xl">
                                <Image
                                    src={country.flag}
                                    alt={`${country.name} flag`}
                                    fill
                                    className="object-cover"
                                />
                            </div>
                        </motion.div>

                        <h1 className="text-5xl md:text-6xl font-black text-white mb-6 drop-shadow-2xl">
                            Study in <span className="text-[#DC143C]">{country.name}</span>
                        </h1>
                        <p className="text-xl text-white/90 mb-8 drop-shadow-lg">
                            {country.description}
                        </p>

                        {/* Stats */}
                        <div className="flex flex-wrap justify-center gap-6 mb-8">
                            <div className="bg-white/10 backdrop-blur-md rounded-xl px-6 py-4 border border-white/20">
                                <div className="text-3xl font-black text-white">{country.universities.length}+</div>
                                <div className="text-sm text-white/80 font-semibold">Partner Universities</div>
                            </div>
                            <div className="bg-white/10 backdrop-blur-md rounded-xl px-6 py-4 border border-white/20">
                                <div className="text-3xl font-black text-white">1000+</div>
                                <div className="text-sm text-white/80 font-semibold">Students Placed</div>
                            </div>
                            <div className="bg-white/10 backdrop-blur-md rounded-xl px-6 py-4 border border-white/20">
                                <div className="text-3xl font-black text-white">95%</div>
                                <div className="text-sm text-white/80 font-semibold">Visa Success</div>
                            </div>
                        </div>

                        <a
                            href="#universities"
                            className="inline-block px-8 py-4 bg-[#DC143C] text-white font-bold rounded-lg hover:bg-[#B01030] transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:scale-105"
                        >
                            View Universities
                        </a>
                    </motion.div>
                </div>
            </section>

            {/* Partner Universities Section */}
            <section id="universities" className="py-20">
                <div className="container mx-auto px-4">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-12"
                    >
                        <div className="inline-block px-4 py-2 bg-blue-50 rounded-full text-sm font-bold mb-4 border border-blue-100">
                            <span className="text-[#003893]">Our Partners</span>
                        </div>
                        <h2 className="text-4xl font-black mb-4">
                            <span className="text-gray-900">Partner </span>
                            <span className="text-[#DC143C]">Universities</span>
                        </h2>
                        <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                            {country.hasUniversityData
                                ? `We have partnerships with ${country.universities.length} top universities in ${country.name}`
                                : `Contact us to learn about our partner universities in ${country.name}`}
                        </p>
                    </motion.div>

                    {country.hasUniversityData ? (
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
                            {country.universities.map((university, index) => (
                                <motion.div
                                    key={university.name}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: index * 0.05 }}
                                    whileHover={{ y: -5, scale: 1.02 }}
                                    className="bg-white rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100"
                                >
                                    <div className="flex items-start gap-4">
                                        <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-[#003893] to-[#DC143C] rounded-lg flex items-center justify-center">
                                            <HiAcademicCap className="text-2xl text-white" />
                                        </div>
                                        <div className="flex-grow">
                                            <h3 className="text-lg font-black text-gray-900 mb-2 leading-tight">
                                                {university.name}
                                            </h3>
                                            <div className="flex items-center gap-2 text-sm text-gray-600">
                                                <HiGlobeAlt className="text-[#003893]" />
                                                <span>{country.name}</span>
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    ) : (
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="max-w-2xl mx-auto bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-8 text-center border border-blue-100"
                        >
                            <HiAcademicCap className="text-6xl text-[#003893] mx-auto mb-4" />
                            <h3 className="text-2xl font-black text-gray-900 mb-4">Partner Universities Available</h3>
                            <p className="text-gray-600 mb-6">
                                We have partnerships with top universities in {country.name}. Contact us to learn more about available programs and admission requirements.
                            </p>
                            <a
                                href="/contact"
                                className="inline-block px-8 py-3 bg-[#DC143C] text-white font-bold rounded-lg hover:bg-[#B01030] transition-all duration-300 shadow-lg hover:shadow-xl"
                            >
                                Contact Us
                            </a>
                        </motion.div>
                    )}
                </div>
            </section>

            {/* Why Study Here Section */}
            <section className="py-20 bg-gradient-to-b from-white to-gray-50">
                <div className="container mx-auto px-4">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-12"
                    >
                        <h2 className="text-4xl font-black mb-4">
                            <span className="text-gray-900">Why Study in </span>
                            <span className="text-[#DC143C]">{country.name}</span>
                        </h2>
                    </motion.div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
                        {[
                            { icon: "🎓", title: "World-Class Education", desc: "Top-ranked universities with global recognition" },
                            { icon: "💼", title: "Career Opportunities", desc: "Excellent post-study work options" },
                            { icon: "🌍", title: "Cultural Experience", desc: "Diverse and welcoming environment" },
                            { icon: "💰", title: "Scholarships Available", desc: "Financial aid and scholarship opportunities" },
                            { icon: "✈️", title: "Easy Visa Process", desc: "Student-friendly visa policies" },
                            { icon: "🏆", title: "High Success Rate", desc: "95%+ visa approval rate" },
                        ].map((benefit, index) => (
                            <motion.div
                                key={benefit.title}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
                            >
                                <div className="text-5xl mb-4">{benefit.icon}</div>
                                <h3 className="text-xl font-black text-gray-900 mb-2">{benefit.title}</h3>
                                <p className="text-gray-600">{benefit.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Application Process Section */}
            <section className="py-20">
                <div className="container mx-auto px-4">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-12"
                    >
                        <h2 className="text-4xl font-black mb-4">
                            <span className="text-gray-900">Application </span>
                            <span className="text-[#DC143C]">Process</span>
                        </h2>
                        <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                            Simple steps to start your journey to {country.name}
                        </p>
                    </motion.div>

                    <div className="max-w-4xl mx-auto flow-root">
                        <div className="-mb-8">
                            {[
                                { step: 1, title: "Free Consultation", desc: "Discuss your goals with our expert counselors" },
                                { step: 2, title: "University Selection", desc: "Choose the best university for your profile" },
                                { step: 3, title: "Application Submission", desc: "We handle all application paperwork" },
                                { step: 4, title: "Visa Assistance", desc: "Complete visa guidance and documentation" },
                                { step: 5, title: "Pre-Departure Support", desc: "Accommodation, travel, and orientation help" },
                            ].map((item, index) => (
                                <div key={item.step} className="relative pb-8">
                                    {index !== 4 && (
                                        <span aria-hidden="true" className="absolute top-4 left-6 -ml-px h-full w-0.5 bg-gray-200" />
                                    )}
                                    <motion.div
                                        initial={{ opacity: 0, x: -30 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.5, delay: index * 0.1 }}
                                        className="relative flex space-x-6"
                                    >
                                        <div>
                                            <span className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-[#003893] to-[#DC143C] rounded-full flex items-center justify-center text-white font-black text-xl shadow-lg ring-8 ring-white">
                                                {item.step}
                                            </span>
                                        </div>
                                        <div className="min-w-0 flex-1 pt-1.5">
                                            <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 relative">
                                                {/* Arrow */}
                                                <div className="absolute top-4 -left-2 w-4 h-4 bg-white border-l border-b border-gray-100 transform rotate-45" />
                                                <h3 className="text-xl font-black text-gray-900 mb-2">{item.title}</h3>
                                                <p className="text-gray-600">{item.desc}</p>
                                            </div>
                                        </div>
                                    </motion.div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mt-12"
                    >
                        <a
                            href="/contact"
                            className="inline-block px-8 py-4 bg-[#DC143C] text-white font-bold rounded-lg hover:bg-[#B01030] transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:scale-105"
                        >
                            Start Your Application
                        </a>
                    </motion.div>
                </div>
            </section>
        </div>
    );
}
