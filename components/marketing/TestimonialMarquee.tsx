'use client';

import { motion } from 'framer-motion';

const testimonials = [
    { text: "Rajan Consultancy got me into Oxford! Unbelievable speed.", author: "Sarah J." },
    { text: "The visa process was smooth and stress-free. Highly recommend.", author: "Michael C." },
    { text: "Professional, transparent, and trusted. Best agency I've found.", author: "Ananya P." },
    { text: "They helped me find a scholarship I didn't know existed.", author: "David K." },
    { text: "Excellent support team, available 24/7 during my application.", author: "Priya M." },
];

export default function TestimonialMarquee() {
    return (
        <section className="py-20 overflow-hidden bg-slate-50 border-y border-slate-200">
            <div className="container mx-auto px-6 mb-12 text-center">
                <h2 className="text-3xl font-bold text-slate-900">What Our Students Say</h2>
            </div>

            <div className="flex relative overflow-hidden">
                <motion.div
                    className="flex gap-8 whitespace-nowrap"
                    animate={{ x: ["0%", "-50%"] }}
                    transition={{
                        duration: 30,
                        ease: "linear",
                        repeat: Infinity,
                    }}
                >
                    {[...testimonials, ...testimonials].map((t, i) => (
                        <div
                            key={i}
                            className="inline-block w-[400px] p-8 rounded-xl bg-white border border-slate-200 shadow-sm whitespace-normal"
                        >
                            <p className="text-slate-700 italic mb-4">"{t.text}"</p>
                            <p className="text-slate-900 font-semibold">{t.author}</p>
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
