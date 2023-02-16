"use client";
import React from 'react'
import { motion } from "framer-motion"
const Hero = () => {
    return (
        <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
        >
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fpogd.es%2Fassets%2Fbg%2FMarvels-Spidey-and-His-Amazing-Friends.jpg&f=1&nofb=1&ipt=c41620af718cf8a0f744d8fc06bd8af1b13f13c67ae5fac51619d4b6e7b2adda&ipo=images" className="max-w-sm rounded-lg shadow-2xl" />
                    <div>
                        <h1 className="text-5xl font-bold text-secondary">Box Office News!</h1>
                        <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                        <button className="btn btn-primary">Get Started</button>
                    </div>
                </div>
            </div>
        </motion.div>

    )
}

export default Hero