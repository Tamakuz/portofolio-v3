"use client";

import { motion } from "framer-motion";
import { ExternalLink, ArrowUpRight } from "lucide-react";
import Image from "next/image";

const projects = [
    {
        title: "VORTEX E-COMM",
        category: "Luxury E-commerce",
        year: "2025",
        image: "https://images.unsplash.com/photo-1547658719-da2b51169166?auto=format&fit=crop&q=80&w=1000",
        color: "#00f2ff",
        status: "coming-soon"
    },
    {
        title: "NEO BANK UI",
        category: "Fintech Platform",
        year: "2024",
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1000",
        color: "#7000ff",
        status: "coming-soon"
    },
    {
        title: "CRYPTO PULSE",
        category: "Real-time Tracker",
        year: "2025",
        image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&q=80&w=1000",
        color: "#a3e635",
        status: "coming-soon"
    },
    {
        title: "AI NEXUS",
        category: "Generative Platform",
        year: "2026",
        image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=1000",
        color: "#ff0055",
        status: "coming-soon"
    },
    {
        title: "META GALLERY",
        category: "Web3 Experience",
        year: "2026",
        image: "https://images.unsplash.com/photo-1614850523296-d8c1af93d400?auto=format&fit=crop&q=80&w=1000",
        color: "#fbbf24",
        status: "coming-soon"
    },
    {
        title: "QUANTUM DASH",
        category: "Data Visualization",
        year: "2026",
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1000",
        color: "#2dd4bf",
        status: "coming-soon"
    }
];

export function ProjectShowcase() {
    return (
        <section id="works" className="py-24 px-6 bg-black relative">
            <div className="max-w-[1400px] mx-auto">
                <div className="mb-20 flex justify-between items-end border-b border-border pb-8">
                    <h2 className="text-4xl md:text-6xl font-black italic uppercase">
                        SELECTED <br />
                        <span className="text-stroke">EXHIBITIONS</span>
                    </h2>
                    <div className="text-right hidden md:block">
                        <p className="text-muted-foreground uppercase text-xs font-bold tracking-[0.3em]">
                            Showing 06 Of 12
                        </p>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
                    {projects.map((project, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.6, delay: i * 0.05 }}
                            className={`group cursor-pointer will-change-transform ${project.status === 'coming-soon' ? 'pointer-events-none' : ''}`}
                        >
                            <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] mb-6">
                                <Image
                                    src={project.image}
                                    alt={project.title}
                                    fill
                                    className={`object-cover transition-transform duration-700 grayscale ${project.status === 'coming-soon' ? 'scale-105 opacity-40' : 'group-hover:scale-110 group-hover:grayscale-0'}`}
                                />

                                {project.status === 'coming-soon' && (
                                    <div className="absolute inset-0 flex items-center justify-center bg-black/60">
                                        <div className="px-6 py-2 border-2 border-white/20 bg-black/80 rounded-full">
                                            <span className="text-white text-xs font-black uppercase tracking-[0.3em]">Coming Soon</span>
                                        </div>
                                    </div>
                                )}

                                {/* Floating Badge */}
                                {project.status === 'completed' && (
                                    <div className="absolute top-6 right-6 p-4 bg-white text-black rounded-full scale-0 group-hover:scale-100 transition-transform duration-500">
                                        <ArrowUpRight className="w-6 h-6" />
                                    </div>
                                )}

                                {/* Hover Overlay */}
                                {project.status === 'completed' && (
                                    <div
                                        className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-500"
                                        style={{ backgroundColor: project.color }}
                                    />
                                )}
                            </div>

                            <div className="flex justify-between items-start">
                                <div>
                                    <h3 className={`text-2xl font-black tracking-tighter mb-1 uppercase italic transition-colors ${project.status === 'completed' ? 'group-hover:text-primary' : 'text-muted-foreground'}`}>
                                        {project.title}
                                    </h3>
                                    <p className="text-muted-foreground text-sm uppercase font-bold tracking-widest">{project.category}</p>
                                </div>
                                <span className="text-xs font-black border border-border px-3 py-1 rounded-full text-muted-foreground">
                                    {project.year}
                                </span>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <div className="mt-20 pt-10 border-t border-border flex justify-center">
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        className="text-xl font-black uppercase italic tracking-tighter hover:text-primary transition-colors flex items-center gap-4"
                    >
                        Explore Full Archive <ExternalLink className="w-6 h-6" />
                    </motion.button>
                </div>
            </div>
        </section>
    );
}
