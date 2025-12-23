"use client";

import HeroSection from "@/components/HeroSection";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AnimatedCard from "@/components/AnimatedCard";
import SectionWrapper, { SectionHeader } from "@/components/SectionWrapper";
import ContactForm from "@/components/ContactForm";
import { motion } from "framer-motion";
import { FaGraduationCap, FaGlobe, FaFileAlt, FaUserTie, FaPlane, FaAward } from "react-icons/fa";
import { HiCheckCircle } from "react-icons/hi";

const services = [
  {
    icon: FaGraduationCap,
    title: "University Selection",
    description: "Expert guidance to choose the perfect university that matches your goals, budget, and career aspirations.",
    color: "from-blue-500 to-blue-600",
  },
  {
    icon: FaFileAlt,
    title: "Application Support",
    description: "Complete assistance with applications, essays, SOPs, and all required documentation for admission.",
    color: "from-purple-500 to-purple-600",
  },
  {
    icon: FaUserTie,
    title: "Visa Assistance",
    description: "End-to-end visa processing support with high success rates and interview preparation.",
    color: "from-pink-500 to-pink-600",
  },
  {
    icon: FaGlobe,
    title: "Country Counseling",
    description: "Detailed information about studying in USA, UK, Canada, Australia, and other top destinations.",
    color: "from-cyan-500 to-cyan-600",
  },
  {
    icon: FaPlane,
    title: "Pre-Departure Guidance",
    description: "Complete support for accommodation, travel arrangements, and settling in your new country.",
    color: "from-orange-500 to-orange-600",
  },
  {
    icon: FaAward,
    title: "Scholarship Assistance",
    description: "Help you identify and apply for scholarships and financial aid opportunities.",
    color: "from-indigo-500 to-indigo-600",
  },
];

const countries = [
  { name: "USA", flag: "🇺🇸", universities: "200+", students: "150+" },
  { name: "UK", flag: "🇬🇧", universities: "150+", students: "120+" },
  { name: "Canada", flag: "🇨🇦", universities: "100+", students: "90+" },
  { name: "Australia", flag: "🇦🇺", universities: "80+", students: "70+" },
  { name: "Germany", flag: "🇩🇪", universities: "60+", students: "40+" },
  { name: "Japan", flag: "🇯🇵", universities: "50+", students: "30+" },
];

const testimonials = [
  {
    name: "Rajesh Sharma",
    course: "MS in Computer Science",
    university: "Stanford University, USA",
    rating: 5,
    text: "Pinnacle Nepal made my dream come true! Their expert guidance helped me get into Stanford. The team was supportive throughout the entire process.",
    image: "/images/testimonials/student1.jpg",
  },
  {
    name: "Priya Thapa",
    course: "MBA",
    university: "Oxford University, UK",
    rating: 5,
    text: "Professional, dedicated, and result-oriented. Got my visa on the first attempt thanks to their excellent preparation and guidance.",
    image: "/images/testimonials/student2.jpg",
  },
  {
    name: "Amir Khan",
    course: "Engineering",
    university: "University of Toronto, Canada",
    rating: 5,
    text: "Best consultancy in Nepal! They helped me with everything from university selection to visa processing. Highly recommended!",
    image: "/images/testimonials/student3.jpg",
  },
];

const whyChooseUs = [
  "15+ Years of Experience",
  "500+ Students Placed",
  "50+ Partner Universities",
  "98% Visa Success Rate",
  "Expert Counselors",
  "Free Initial Consultation",
  "Scholarship Assistance",
  "Post-Landing Support",
];

export default function HomePage() {
  return (
    <>
      <Header />

      {/* Hero Section */}
      <HeroSection />

      {/* Services Section */}
      <SectionWrapper id="services" background="gradient">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            title="Our Services"
            subtitle="Comprehensive support for your study abroad journey"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <AnimatedCard
                key={service.title}
                animation="dance"
                variant="default"
                className="hover:shadow-2xl"
              >
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, type: "spring" }}
                  className={`inline-flex w-16 h-16 rounded-full bg-gradient-to-r ${service.color} items-center justify-center mb-6`}
                >
                  <service.icon className="text-3xl text-white" />
                </motion.div>

                <h3 className="text-2xl font-bold mb-3">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed">{service.description}</p>
              </AnimatedCard>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* Countries Section */}
      <SectionWrapper id="countries" background="white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            title="Study Destinations"
            subtitle="Explore top countries for your higher education"
          />

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {countries.map((country, index) => (
              <AnimatedCard
                key={country.name}
                animation="float"
                variant="glass"
                className="text-center"
              >
                <motion.div
                  initial={{ rotate: -180, opacity: 0 }}
                  whileInView={{ rotate: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="text-6xl mb-4"
                >
                  {country.flag}
                </motion.div>
                <h3 className="text-xl font-bold mb-2">{country.name}</h3>
                <div className="text-sm text-gray-600 space-y-1">
                  <p>{country.universities} Universities</p>
                  <p>{country.students} Students Placed</p>
                </div>
              </AnimatedCard>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* Why Choose Us */}
      <SectionWrapper id="why-us" background="pattern">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            title="Why Choose Pinnacle Nepal"
            subtitle="We are committed to your success"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyChooseUs.map((reason, index) => (
              <motion.div
                key={reason}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="flex items-center gap-3 bg-white p-4 rounded-xl shadow-md hover:shadow-xl transition-smooth"
              >
                <HiCheckCircle className="text-3xl text-green-500 flex-shrink-0" />
                <span className="font-semibold text-gray-800">{reason}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* Testimonials */}
      <SectionWrapper id="testimonials" background="gradient">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            title="Success Stories"
            subtitle="Hear from our successful students"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <AnimatedCard
                key={testimonial.name}
                animation="hover"
                variant="default"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center text-white font-bold text-2xl">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <h4 className="font-bold text-lg">{testimonial.name}</h4>
                    <p className="text-sm text-gray-600">{testimonial.course}</p>
                  </div>
                </div>

                <div className="flex gap-1 mb-3">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <span key={i} className="text-yellow-400 text-xl">★</span>
                  ))}
                </div>

                <p className="text-gray-700 italic mb-4">"{testimonial.text}"</p>
                <p className="text-sm font-semibold text-blue-600">{testimonial.university}</p>
              </AnimatedCard>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* CTA Section */}
      <SectionWrapper id="cta" background="animated" className="text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-4xl md:text-5xl font-black mb-6">
              Ready to Start Your Journey?
            </h2>
            <p className="text-xl mb-8 text-white/90">
              Book a free consultation with our expert counselors today and take the first step towards your dream education.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-10 py-5 bg-white text-blue-600 rounded-full font-bold text-lg hover:shadow-2xl hover:scale-105 transition-smooth">
                Book Free Consultation
              </button>
              <button className="px-10 py-5 bg-transparent border-2 border-white text-white rounded-full font-bold text-lg hover:bg-white hover:text-blue-600 transition-smooth">
                Download Brochure
              </button>
            </div>
          </motion.div>
        </div>
      </SectionWrapper>

      {/* Contact Section */}
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
