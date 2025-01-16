'use client';
import Link from 'next/link';
import React from 'react';
import { motion } from 'framer-motion';

export const LogoButton = () => {
    return (
        <motion.div
            initial={{rotateX: 90, opacity: 0}}
            animate={{rotateX: 0, opacity: 1}}
            transition={{ duration: .65}}
            className='btn btn-ghost text-xl text-primary'
        ><Link href='/'>ZaxxDev</Link></motion.div>
    );
};
