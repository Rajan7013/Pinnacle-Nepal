"use client";

import HeroSection from "@/components/HeroSection";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ServicesSection from "@/components/ServicesSection";
import DestinationsSection from "@/components/DestinationsSection";
import StatsSection from "@/components/StatsSection";
import WhyChooseUsSection from "@/components/WhyChooseUsSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import CTASection from "@/components/CTASection";
import SectionWrapper, { SectionHeader } from "@/components/SectionWrapper";
import ContactForm from "@/components/ContactForm";
import { motion } from "framer-motion";

export default function HomePage() {
  return (
    <>
      <Header />

      {/* Hero Section */}
      <HeroSection />

      {/* Services Section */}
      <ServicesSection />

      {/* Optimized Countries Section */}
      <DestinationsSection />

      {/* Stats Section with Animated Counters */}
      <StatsSection />

      {/* Optimized Testimonials */}
      <TestimonialsSection />

      {/* Optimized CTA Section */}
      <CTASection />

      {/* Contact Section - Kept semi-inline for now as it uses complex sub-components */}
      <SectionWrapper id="contact" background="white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <SectionHeader
                title="Get In Touch"
                subtitle="Have questions? We're here to help!"
                centered={false}
              />

              <div className="space-y-6">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="glass rounded-xl p-6"
                >
                  <h3 className="text-xl font-bold mb-4">Office Hours</h3>
                  <p className="text-gray-600">Monday - Friday: 9:00 AM - 6:00 PM</p>
                  <p className="text-gray-600">Saturday: 10:00 AM - 4:00 PM</p>
                  <p className="text-gray-600">Sunday: Closed</p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 }}
                  className="glass rounded-xl p-6"
                >
                  <h3 className="text-xl font-bold mb-4">Visit Our Office</h3>
                  <p className="text-gray-600">Thamel, Kathmandu, Nepal</p>
                  <p className="text-gray-600 mt-2">Near Kathmandu Guest House</p>
                </motion.div>
              </div>
            </div>

            <ContactForm />
          </div>
        </div>
      </SectionWrapper>

      <Footer />
    </>
  );
}
