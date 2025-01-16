'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { StaggerDuration } from '@/lib/constants';

const containerVariants = {
    hidden: { opacity: 1 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: StaggerDuration, // Adjust this value for the delay between animations
        }
    }
};

const itemVariants = {
    hidden: { translateY: -60, opacity: 0 },
    visible: { translateY: 0, opacity: 1 }
};

const HeroSection = () => (
    <section className="body-font bg-base-300">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, margin: '-10% 0%' }}
                variants={containerVariants}
                className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 md:mb-0 mb-10"
            >
                <motion.img
                    variants={itemVariants}
                    className="object-cover object-center rounded mask mask-hexagon-2"
                    alt="hero"
                    src="/dalle_cta3.webp"
                />
            </motion.div>

            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, margin: '-10% 0%' }}
                variants={containerVariants}
                className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center"
            >
                <motion.h1 variants={itemVariants} className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
                    Transform Time-Consuming Tasks into <br /> Seamless Workflows
                    <br className="hidden lg:inline-block" />
                </motion.h1>
                <motion.p variants={itemVariants} className="mb-8 leading-relaxed">
                    Discover how ZaxxDev can revolutionize your internal processes by analyzing critical workflows and optimizing efficiency.
                    We help you leverage the power of built-in APIs from your favorite apps to extend their functionality and tailor solutions
                    that fit your specific needs.
                </motion.p>
                <motion.div variants={itemVariants} className="flex justify-center">
                    <button className="btn btn-primary text-lg">
                        Get Started
                    </button>
                    <button className="ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg">
                        Learn More
                    </button>
                </motion.div>
            </motion.div>
        </div>
    </section>
);

export default HeroSection;
