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
                    <motion.div

                        animate={{
                            scale: 0.5,
                            transition: {
                                duration: 1,
                            },
                        }}>
                        <img src="https://th.bing.com/th/id/R.1b6e02d2c2d677f52d501f556f43bec3?rik=iRQegkfASuW0HA&riu=http%3a%2f%2fdreamicus.com%2fdata%2fvalley%2fvalley-01.jpg&ehk=Leg%2f6hDj%2bBLkAfFH910y6eCXtfvUEkqn13IG50OJ14E%3d&risl=&pid=ImgRaw&r=0" className="max-w-sm rounded-lg shadow-2xl" />
                    </motion.div> <div>
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