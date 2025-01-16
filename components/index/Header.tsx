'use client';
import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { StaggerDuration } from '@/lib/constants';

const containerVariants = {
    hidden: { opacity: 1 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: StaggerDuration,
        }
    }
};

const itemVariants = {
    hidden: { translateY: -50, opacity: 0 },
    visible: { translateY: 0, opacity: 1 }
};

const HeaderSection = () => (
    <section className="body-font bg-base-200">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
            <motion.img
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                src="/dalle_cta.webp"
                className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 rounded-lg shadow-2xl mask mask-hexagon-2"
            />
            <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
                <motion.h1
                    variants={itemVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false }}
                    className="text-4xl font-bold"
                >
                    Elevate Your Business with
                    <motion.span
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: false }}
                        transition={{ delay: 0.7 }}
                        className="text-primary block mb-2 md:mb-0"
                    >
                        Custom Solutions
                    </motion.span>
                </motion.h1>
                <motion.p
                    variants={itemVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false }}
                    transition={{ delay: 1 }}
                    className="mb-8 leading-relaxed"
                >
                    Transform your internal processes into simple automations and boost efficiency with ZaxxDev's software development services.
                </motion.p>
                <motion.div
                    variants={itemVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false }}
                    transition={{ delay: 1.15 }}
                    className="flex justify-center"
                >
                    {/* <Link className="inline-flex px-6 py-2 text-lg btn bg-base-300 btn-disabled" href="/services">
                        Learn More
                    </Link> */}
                    <Link className="ml-4 inline-flex px-6 py-2 text-lg btn btn-primary" href="/contact">
                        Contact Us
                    </Link>
                </motion.div>
            </div>
        </div>
    </section>
);

export default HeaderSection;
