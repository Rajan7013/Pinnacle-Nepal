import type { Variant, Transition } from "framer-motion";

/**
 * Animation Utilities for Pinnacle Nepal
 * High-performance, reusable animation variants using Framer Motion
 */

// Transitions
export const smoothTransition: Transition = {
    duration: 0.6,
    ease: [0.4, 0, 0.2, 1], // cubic-bezier
};

export const bounceTransition: Transition = {
    type: "spring",
    stiffness: 300,
    damping: 20,
};

export const slowTransition: Transition = {
    duration: 1.2,
    ease: "easeInOut",
};

// Fade Animations
export const fadeIn = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: smoothTransition,
    },
};

export const fadeInUp = {
    hidden: { opacity: 0, y: 50 },
    visible: {
        opacity: 1,
        y: 0,
        transition: smoothTransition,
    },
};

export const fadeInDown = {
    hidden: { opacity: 0, y: -50 },
    visible: {
        opacity: 1,
        y: 0,
        transition: smoothTransition,
    },
};

export const fadeInLeft = {
    hidden: { opacity: 0, x: -50 },
    visible: {
        opacity: 1,
        x: 0,
        transition: smoothTransition,
    },
};

export const fadeInRight = {
    hidden: { opacity: 0, x: 50 },
    visible: {
        opacity: 1,
        x: 0,
        transition: smoothTransition,
    },
};

// Scale Animations
export const scaleIn = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
        opacity: 1,
        scale: 1,
        transition: bounceTransition,
    },
};

export const scaleUp = {
    rest: { scale: 1 },
    hover: {
        scale: 1.05,
        transition: { duration: 0.3 },
    },
    tap: {
        scale: 0.95,
    },
};

// Rotate Animations
export const rotateIn = {
    hidden: { opacity: 0, rotate: -10, scale: 0.9 },
    visible: {
        opacity: 1,
        rotate: 0,
        scale: 1,
        transition: smoothTransition,
    },
};

// Slide Animations
export const slideInLeft = {
    hidden: { x: "-100%", opacity: 0 },
    visible: {
        x: 0,
        opacity: 1,
        transition: smoothTransition,
    },
};

export const slideInRight = {
    hidden: { x: "100%", opacity: 0 },
    visible: {
        x: 0,
        opacity: 1,
        transition: smoothTransition,
    },
};

export const slideInUp = {
    hidden: { y: "100%", opacity: 0 },
    visible: {
        y: 0,
        opacity: 1,
        transition: smoothTransition,
    },
};

export const slideInDown = {
    hidden: { y: "-100%", opacity: 0 },
    visible: {
        y: 0,
        opacity: 1,
        transition: smoothTransition,
    },
};

// Stagger Container for Children
export const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2,
            delayChildren: 0.1,
        },
    },
};

export const staggerContainerFast = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
            delayChildren: 0,
        },
    },
};

// Card Hover Effects
export const cardHover = {
    rest: {
        scale: 1,
        y: 0,
        boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
    },
    hover: {
        scale: 1.03,
        y: -10,
        boxShadow: "0 20px 40px rgba(102, 126, 234, 0.3)",
        transition: {
            duration: 0.4,
            ease: "easeOut",
        },
    },
    tap: {
        scale: 0.98,
    },
};

// Dancing Card Effect
export const danceEffect = {
    initial: { y: 0, rotate: 0 },
    animate: {
        y: [-10, 10, -5, 5, 0],
        rotate: [0, 2, -2, 1, 0],
        transition: {
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
        },
    },
};

// Floating Effect
export const floatEffect = {
    initial: { y: 0 },
    animate: {
        y: [-15, 15, -15],
        transition: {
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
        },
    },
};

// Pulse Effect
export const pulseEffect = {
    initial: { scale: 1 },
    animate: {
        scale: [1, 1.05, 1],
        transition: {
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
        },
    },
};

// Scroll-triggered Animations
export const scrollReveal = {
    hidden: {
        opacity: 0,
        y: 75,
    },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.8,
            ease: [0.4, 0, 0.2, 1],
        },
    },
};

export const scrollRevealLeft = {
    hidden: {
        opacity: 0,
        x: -100,
    },
    visible: {
        opacity: 1,
        x: 0,
        transition: slowTransition,
    },
};

export const scrollRevealRight = {
    hidden: {
        opacity: 0,
        x: 100,
    },
    visible: {
        opacity: 1,
        x: 0,
        transition: slowTransition,
    },
};

// Page Transitions
export const pageTransition = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 },
    transition: smoothTransition,
};

// Button Click Ripple
export const buttonRipple = {
    rest: { scale: 1 },
    hover: { scale: 1.05 },
    tap: { scale: 0.95 },
};

// Modal Animations
export const modalBackdrop = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
    exit: { opacity: 0 },
};

export const modalContent = {
    hidden: { opacity: 0, scale: 0.8, y: 50 },
    visible: {
        opacity: 1,
        scale: 1,
        y: 0,
        transition: bounceTransition,
    },
    exit: {
        opacity: 0,
        scale: 0.8,
        y: 50,
        transition: { duration: 0.3 },
    },
};

// Navbar Animation
export const navbarSlide = {
    hidden: { y: -100, opacity: 0 },
    visible: {
        y: 0,
        opacity: 1,
        transition: { duration: 0.5, ease: "easeOut" },
    },
};

// Hero Text Animations
export const heroTextReveal = {
    hidden: { opacity: 0, y: 30 },
    visible: (custom: number) => ({
        opacity: 1,
        y: 0,
        transition: {
            delay: custom * 0.2,
            duration: 0.8,
            ease: [0.4, 0, 0.2, 1],
        },
    }),
};

// Counter Animation
export const counterAnimation = {
    hidden: { opacity: 0, scale: 0.5 },
    visible: {
        opacity: 1,
        scale: 1,
        transition: bounceTransition,
    },
};

// Image Reveal
export const imageReveal = {
    hidden: {
        opacity: 0,
        scale: 1.2,
    },
    visible: {
        opacity: 1,
        scale: 1,
        transition: {
            duration: 1,
            ease: "easeOut",
        },
    },
};

// Gradient Animation for Backgrounds
export const gradientAnimation = {
    animate: {
        backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
        transition: {
            duration: 15,
            repeat: Infinity,
            ease: "linear",
        },
    },
};
