"use client"

import { CheckCircle } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Image from 'next/image'
import ContactButtons from "./ui/contact-buttons"
import { motion, useInView } from "framer-motion"
import LearnMoreLink from "./ui/learn-more"
import { useRef } from 'react'

const listItems = [
    {
        title: "Collaborate to identify and prioritize your sustainability initiatives because what matters to you, matters to us",
    },
    {
        title: "Help execute on your ESG goals, measure progress and report meaningful advancements to your stakeholders",
    },
    {
        title: "Sustainably deliver products with the taste, texture and benefits consumers prefer",
    },
]

const springTransition = {
    type: "spring",
    stiffness: 100,
    damping: 30,
    mass: 0.6,
}

export default function FeaturedProducts() {
    const AnimatedCard = motion(Card)

    const createAnimationProps = (direction: 'left' | 'right') => ({
        initial: { opacity: 0, x: direction === 'left' ? -100 : 100 },
        whileInView: { opacity: 1, x: 0 },
        viewport: { once: false, amount: 0.3 },
        transition: springTransition
    })

    return (
        <div className="flex flex-col min-h-screen">
            <ContactButtons />

            {/* Our Approach Section */}
            <section className="py-16 bg-gray-50">
                <div className="container mx-auto px-4">
                    <motion.h2
                        {...createAnimationProps('left')}
                        className="text-3xl font-bold mb-8 text-center"
                    >
                        Our Approach
                    </motion.h2>

                    <AnimatedCard {...createAnimationProps('right')}>
                        <CardHeader>
                            <CardTitle>Unlock consumer-preferred sweet taste without artificial sweeteners</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="p-2 border rounded-lg shadow">
                                <Image
                                    src="/img/aimg.webp" alt="HVAC System"
                                    width={400}
                                    height={300}
                                    className="rounded-lg mb-4"
                                />
                            </div>
                            <p className='pt-4'>Discover our delightful range of fruit juices,
                                carefully crafted to satisfy your taste buds. From 100% natural,
                                Not From Concentrate (NFC) juices to refreshing 100% fruit juice blends, nectars, and fruit drinks.</p>
                            <div className="mt-1 items-start flex justify-start ">
                                <br />
                                <br />PureCircle™ by Freshmark is the undisputed
                                innovation leader in plant-based sugar reduction.
                                We recognize reducing sugar and artificial sweeteners in
                                products is not a one-size-fits-all approach for food and beverage brands. After mapping the stevia genome, PureCircle has identified the most powerful combinations of stevia molecules
                                (steviol glycosides) to help meet the needs of product developers.
                            </div>
                            <LearnMoreLink />
                        </CardContent>
                    </AnimatedCard>

                    <motion.div {...createAnimationProps('left')} className="px-[2rem] my-[4rem]">
                        <div>
                            <h3 className="text-xl font-semibold mb-4">Sustainable </h3>
                            <p className="mb-4">
                                Sustainability is at the core of our engineering
                                philosophy. We design with the future in mind,
                                incorporating eco-friendly practices and
                                energy-efficient solutions into all our projects.
                            </p>
                        </div>
                    </motion.div>

                    <AnimatedCard {...createAnimationProps('right')}>
                        <CardHeader>
                            <CardTitle>Measurably advance your ESG outcomes</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="relative h-[200px]">
                                <Image
                                    src="/images/fd1.png"
                                    alt="Freshmark Foods farm"
                                    width={200}
                                    height={200}
                                    className="rounded-lg w-[40vh]"
                                />
                            </div>

                            <div className="container mx-auto px-4">
                                <h2 className="text-4xl font-bold text-center mb-12 text-[#2c3e50]">
                                    How Ingredion can help:
                                </h2>
                                <ul className="grid gap-8 md:grid-cols-2">
                                    {listItems.map((item, index) => (
                                        <motion.li
                                            key={item.title}
                                            initial={{ opacity: 0, y: 50 }}
                                            whileInView={{ opacity: 1, y: 0 }}
                                            transition={{ ...springTransition, delay: index * 0.1 }}
                                            viewport={{ once: false, amount: 0.3 }}
                                            className="flex items-start space-x-4"
                                        >
                                            <div className="flex-shrink-0 mt-1">
                                                <CheckCircle className="w-6 h-6 text-green-500" />
                                            </div>
                                            <div>
                                                <h3 className="text-[17px] mb-2 text-[#34495e]">{item.title}</h3>
                                            </div>
                                        </motion.li>
                                    ))}
                                </ul>
                            </div>
                            <LearnMoreLink />
                        </CardContent>
                    </AnimatedCard>
                </div>
            </section>

            {/* Featured Projects Section */}
            <section className="py-16">
                <div className="container mx-auto px-4">
                    <motion.h2
                        {...createAnimationProps('left')}
                        className="text-3xl font-bold mb-8 text-center"
                    >
                        Featured Services
                    </motion.h2>
                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            { title: "Fruit Juices", image: "/img/img-heroj.png", description: "Discover our delightful range of fruit juices, carefully crafted to satisfy your taste buds. From 100% natural, Not From Concentrate (NFC) juices to refreshing 100% fruit juice blends, nectars, and fruit drinks." },
                            { title: "Nutrition, health and wellness", image: "/images/fd1.png", description: "Our portfolio of science-backed solutions for enhancing nutrition, delivering health benefits and enabling wellness lifestyle choices is designed to help brands and manufacturers deliver winning consumer products." },
                            { title: "Pulps", image: "/images/juicej.png", description: "High-quality fruit pulps for industrial applications, food service, and beverage manufacturing." },
                            { title: "Clean and simple ingredients", image: "/images/img5.png", description: "We combine pioneering solutions and proprietary market insights with formulation expertise—delivering the cleaner ingredients and simpler labels that consumers understand and prefer." },
                            { title: "Purees", image: "/images/jj1.png", description: "We combine pioneering solutions and proprietary market insights with formulation expertise—delivering the cleaner ingredients and simpler labels that consumers understand and prefer." },
                        ].map((item, index) => (
                            <AnimatedCard
                                key={item.title}
                                {...createAnimationProps(index % 2 === 0 ? 'left' : 'right')}
                            >
                                <CardHeader>
                                    <CardTitle>{item.title}</CardTitle>
                                </CardHeader>
                                <CardContent>

                                    
                                    <Image src={item.image} alt={item.title} width={400} height={200} className="w-full h-auto max-w-[400px] max-h-[200px] rounded-md object-cover" />
                                    <p className='pt-4'>{item.description}</p>
                                    <div className="mt-1 items-start flex justify-start ">
                                        <button className="bg-slate-300 text-green-600 px-4 py-1 rounded-md hover:bg-blue-700 transition duration-300 text-[15px]">
                                            Learn More
                                        </button>
                                    </div>
                                </CardContent>
                            </AnimatedCard>
                        ))}
                    </div>
                </div>
            </section>

            {/* Call to Action */}
            <section className="py-16 bg-yellow-600 text-white">
                <div className="container mx-auto px-4 text-center">
                    <motion.h2
                        {...createAnimationProps('left')}
                        className="text-3xl font-bold mb-4"
                    >
                        Ready to Engineer Your Success?
                    </motion.h2>
                    <motion.p
                        {...createAnimationProps('right')}
                        className="text-xl mb-8"
                    >
                        Contact MODERN RENOVATOR today for innovative electrical and mechanical solutions.
                    </motion.p>
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: false, amount: 0.3 }}
                        transition={springTransition}
                    >
                        <Button size="lg" variant="outline" className="bg-white text-blue-600 hover:bg-blue-100">
                            Get in Touch
                        </Button>
                    </motion.div>
                </div>
            </section>
        </div>
    )
}

