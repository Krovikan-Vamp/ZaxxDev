'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { FadeInSpeed } from '@/lib/constants';

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.25, // Adjust this value for the delay between animations
        }
    }
};

const itemVariants = {
    hidden: { translateY: -20, opacity: 0 },
    visible: { translateY: 0, opacity: 1, transition: { duration: FadeInSpeed } }
};

const StepsSection = () => {
    return (
        <section className="body-font bg-base">
            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, margin: '-5% 0%' }}
                variants={containerVariants}
                className="flex flex-col text-center w-full mt-20"
            >
                <motion.h2 variants={itemVariants} className="text-xs tracking-widest font-medium title-font mb-1 text-primary">INTRODUCING...</motion.h2>
                <motion.h1 variants={itemVariants} className="sm:text-3xl text-2xl font-medium title-font">The Game Plan</motion.h1>
            </motion.div>
            <div className="container px-5 py-24 mx-auto flex flex-wrap">
                <div className="flex flex-wrap w-full">
                    <div className="lg:w-2/5 md:w-1/2 md:pr-10 md:py-6">
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: false, margin: '-10% 0%' }}
                            variants={itemVariants}
                            className="flex relative pb-12"
                        >
                            <div className="h-full w-10 absolute inset-0 flex items-center justify-center">
                                <div className="h-full w-1 bg-gray-800 pointer-events-none"></div>
                            </div>
                            <div className="flex-shrink-0 w-10 h-10 rounded-full bg-secondary inline-flex items-center justify-center relative z-10">
                                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                                </svg>
                            </div>
                            <div className="flex-grow pl-4">
                                <h2 className="font-medium title-font text-accent text-sm mb-1 tracking-wider">STEP 1</h2>
                                <p className="leading-relaxed">Initial Consultation: We start by understanding your unique challenges and identifying key workflows that need optimization.</p>
                            </div>
                        </motion.div>
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: false, margin: '-10% 0%' }}
                            variants={itemVariants}
                            className="flex relative pb-12"
                        >
                            <div className="h-full w-10 absolute inset-0 flex items-center justify-center">
                                <div className="h-full w-1 bg-gray-800 pointer-events-none"></div>
                            </div>
                            <div className="flex-shrink-0 w-10 h-10 rounded-full bg-secondary inline-flex items-center justify-center relative z-10">
                                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                                    <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                                </svg>
                            </div>
                            <div className="flex-grow pl-4">
                                <h2 className="font-medium title-font text-accent text-sm mb-1 tracking-wider">STEP 2</h2>
                                <p className="leading-relaxed">Process Analysis: Our team conducts a thorough analysis of your current workflows, identifying bottlenecks and inefficiencies.</p>
                            </div>
                        </motion.div>
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: false, margin: '-10% 0%' }}
                            variants={itemVariants}
                            className="flex relative pb-12"
                        >
                            <div className="h-full w-10 absolute inset-0 flex items-center justify-center">
                                <div className="h-full w-1 bg-gray-800 pointer-events-none"></div>
                            </div>
                            <div className="flex-shrink-0 w-10 h-10 rounded-full bg-secondary inline-flex items-center justify-center relative z-10">
                                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                                    <circle cx="12" cy="5" r="3"></circle>
                                    <path d="M12 22V8M5 12H2a10 10 0 0020 0h-3"></path>
                                </svg>
                            </div>
                            <div className="flex-grow pl-4">
                                <h2 className="font-medium title-font text-accent text-sm mb-1 tracking-wider">STEP 3</h2>
                                <p className="leading-relaxed">Solution Design: We create a detailed plan, including a synopsis, visual representations, AI-generated insights, and potential solutions.</p>
                            </div>
                        </motion.div>
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: false, margin: '-10% 0%' }}
                            variants={itemVariants}
                            className="flex relative pb-12"
                        >
                            <div className="h-full w-10 absolute inset-0 flex items-center justify-center">
                                <div className="h-full w-1 bg-gray-800 pointer-events-none"></div>
                            </div>
                            <div className="flex-shrink-0 w-10 h-10 rounded-full bg-secondary inline-flex items-center justify-center relative z-10">
                                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                                    <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
                                    <circle cx="12" cy="7" r="4"></circle>
                                </svg>
                            </div>
                            <div className="flex-grow pl-4">
                                <h2 className="font-medium title-font text-accent text-sm mb-1 tracking-wider">STEP 4</h2>
                                <p className="leading-relaxed">Implementation: We develop and implement the customized solution, ensuring seamless integration into your existing workflows.</p>
                            </div>
                        </motion.div>
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: false, margin: '-10% 0%' }}
                            variants={itemVariants}
                            className="flex relative"
                        >
                            <div className="flex-shrink-0 w-10 h-10 rounded-full bg-secondary inline-flex items-center justify-center relative z-10">
                                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                                    <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                                    <path d="M22 4L12 14.01l-3-3"></path>
                                </svg>
                            </div>
                            <div className="flex-grow pl-4">
                                <h2 className="font-medium title-font text-accent text-sm mb-1 tracking-wider">FINISH</h2>
                                <p className="leading-relaxed">Review and Support: Post-implementation, we review the solution’s performance and provide ongoing support to ensure continued success.</p>
                            </div>
                        </motion.div>
                    </div>
                    <motion.img
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        // transition={{ delay: .5 }}
                        className="lg:w-3/5 md:w-1/2 object-cover object-center rounded-lg md:mt-0 mt-12"
                        src="/dalle_cta4.webp"
                        alt="step"
                    />
                </div>
            </div>
        </section>
    );
};

export default StepsSection;
