"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { fadeInUp } from "@/lib/animations";
import { HiMail, HiUser, HiPhone, HiAnnotation } from "react-icons/hi";

interface FormField {
    label: string;
    type: string;
    name: string;
    icon: any;
    required?: boolean;
}

const formFields: FormField[] = [
    { label: "Full Name", type: "text", name: "name", icon: HiUser, required: true },
    { label: "Email Address", type: "email", name: "email", icon: HiMail, required: true },
    { label: "Phone Number", type: "tel", name: "phone", icon: HiPhone, required: true },
    { label: "Message", type: "textarea", name: "message", icon: HiAnnotation, required: true },
];

export default function ContactForm() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        message: "",
    });
    const [focusedField, setFocusedField] = useState<string | null>(null);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Simulate API call
        setTimeout(() => {
            setIsSubmitting(false);
            setSubmitStatus("success");
            setFormData({ name: "", email: "", phone: "", message: "" });

            setTimeout(() => setSubmitStatus("idle"), 3000);
        }, 2000);
    };

    return (
        <motion.form
            variants={fadeInUp}
            onSubmit={handleSubmit}
            className="glass-strong rounded-2xl p-8 space-y-6"
        >
            {formFields.map((field, index) => {
                const Icon = field.icon;
                const isFocused = focusedField === field.name;
                const hasValue = formData[field.name as keyof typeof formData];

                return (
                    <motion.div
                        key={field.name}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="relative"
                    >
                        <label
                            className={`absolute left-12 transition-all duration-300 pointer-events-none ${isFocused || hasValue
                                    ? "-top-3 text-xs bg-white px-2 text-blue-600 font-semibold"
                                    : "top-4 text-gray-500"
                                }`}
                        >
                            {field.label}
                        </label>

                        <div className="relative">
                            <Icon
                                className={`absolute left-4 top-4 text-xl transition-colors ${isFocused ? "text-blue-500" : "text-gray-400"
                                    }`}
                            />

                            {field.type === "textarea" ? (
                                <textarea
                                    name={field.name}
                                    value={formData[field.name as keyof typeof formData]}
                                    onChange={handleChange}
                                    onFocus={() => setFocusedField(field.name)}
                                    onBlur={() => setFocusedField(null)}
                                    required={field.required}
                                    rows={4}
                                    className="w-full pl-12 pr-4 py-4 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:ring-4 focus:ring-blue-100 outline-none transition-all resize-none"
                                />
                            ) : (
                                <input
                                    type={field.type}
                                    name={field.name}
                                    value={formData[field.name as keyof typeof formData]}
                                    onChange={handleChange}
                                    onFocus={() => setFocusedField(field.name)}
                                    onBlur={() => setFocusedField(null)}
                                    required={field.required}
                                    className="w-full pl-12 pr-4 py-4 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:ring-4 focus:ring-blue-100 outline-none transition-all"
                                />
                            )}
                        </div>
                    </motion.div>
                );
            })}

            <motion.button
                type="submit"
                disabled={isSubmitting}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={`w-full py-4 rounded-xl font-bold text-white relative overflow-hidden ${isSubmitting
                        ? "bg-gray-400 cursor-not-allowed"
                        : "bg-gradient-to-r from-blue-500 to-purple-500 hover:shadow-xl"
                    }`}
            >
                {isSubmitting ? (
                    <span className="flex items-center justify-center gap-2">
                        <motion.div
                            animate={{ rotate: 360 }}
                            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                            className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
                        />
                        Sending...
                    </span>
                ) : submitStatus === "success" ? (
                    "Message Sent! ✓"
                ) : (
                    "Send Message"
                )}
            </motion.button>

            {submitStatus === "success" && (
                <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="bg-green-100 text-green-700 px-4 py-3 rounded-lg text-center font-semibold"
                >
                    Thank you! We'll get back to you soon.
                </motion.div>
            )}
        </motion.form>
    );
}
