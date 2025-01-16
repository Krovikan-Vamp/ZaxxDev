'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { FadeInSpeed } from '@/lib/constants';
import { VscTerminalPowershell } from "react-icons/vsc";
import { SiInductiveautomation } from "react-icons/si";
import { PiWebhooksLogo } from "react-icons/pi";
import { GrSecure } from "react-icons/gr";
import { LuBrainCircuit } from "react-icons/lu";
import { IoCloudOutline } from "react-icons/io5";

const FeaturesSection = () => {
    const features = [
        {
            icon: (
                <VscTerminalPowershell />
            ),
            title: 'Custom Development',
            description: 'Tailored software solutions to meet your unique business needs, enhancing efficiency and productivity.',
            technologies: ['vs-code', 'go', 'python', 'typescript']
        },
        {
            icon: (
                <PiWebhooksLogo />
            ),
            title: 'API Integration',
            description: 'Seamlessly connect your favorite apps and tools with custom API integrations, enhancing functionality and data flow.',
            technologies: ['python', 'go', 'nginx', 'swagger', 'openapi']
        },
        {
            icon: (
                <SiInductiveautomation />
            ),
            title: 'Workflow Automation',
            description: 'Automate repetitive tasks and streamline operations to save time and reduce errors, boosting overall efficiency.',
            technologies: ['go', 'https', 'nginx', 'cloudflare']
        },
        {
            icon: (
                <GrSecure />
            ),
            title: 'Data Security',
            description: 'Ensure your data is protected with our advanced security solutions, providing peace of mind and compliance with industry standards.',
            technologies: ['supabase', 'postgres', 'AES-256', 'KDV']
        },
        {
            icon: (
                <LuBrainCircuit />
            ),
            title: 'AI-Powered Analytics',
            description: 'Leverage our AI-powered analytics to gain valuable insights from your data, driving informed decisions and strategic growth.',
            technologies: ['prometheus', 'grafana', 'siem', 'gpt-omni']
        },
        {
            icon: (
                <IoCloudOutline />
            ),
            title: 'Cloud Solutions',
            description: 'Move tasks to the cloud with our expert solutions, ensuring scalability, reliability, and cost efficiency for your business operations.',
            technologies: ['vercel', 'aws', 'supabase', 'firebase']
        }
    ];

    return (
        <section className="body-font">
            <div className="py-24 mx-auto flex flex-wrap">
                <div className="flex flex-col text-center w-full mb-16">
                    <h2 className="text-xs text-primary tracking-widest font-medium title-font mb-1">INNOVATIVE SOLUTIONS</h2>
                    <h1 className="sm:text-3xl text-2xl font-medium title-font">Our Key Features</h1>
                </div>
                <div
                    className="flex flex-wrap w-full justify-evenly gap-6">
                    {features.map((feature, index) => (
                        <motion.div
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -50 }}
                            transition={{ duration: FadeInSpeed, delay: index * 0.06125 }}
                            viewport={{ once: false, margin: '-10% 0%' }}
                            key={index}
                            className="border-2 card md:w-1/3 bg-base-200">
                            <div className="card-title flex rounded-lg h-full flex-col">
                                <div className="card-body">
                                    {/* Card Title */}
                                    <div className="flex items-center mb-3">
                                        <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-primary text-white flex-shrink-0">
                                            {feature.icon}
                                        </div>
                                        <h2 className="text-lg title-font text-secondary">{feature.title}</h2>
                                    </div>

                                    {/* Description */}
                                    <p className="leading-relaxed font-normal">{feature.description}</p>

                                    {/* Card actions */}
                                    <div className="card-actions justify-end">
                                        {feature.technologies.map((tech, index) => (<motion.div
                                            initial={{ opacity: 0, x: 50 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            exit={{ opacity: 0, x: -50 }}
                                            transition={{ duration: FadeInSpeed, delay: index * 0.07 }}
                                            viewport={{ once: false, margin: '-10% 0%' }}
                                            key={index}
                                            className="badge badge-outline badge-accent"
                                        >
                                            {tech}
                                        </motion.div>))}

                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};



export default FeaturesSection;
