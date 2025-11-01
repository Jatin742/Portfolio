"use client";

import { ArrowRight, ExternalLink, Github } from "lucide-react";
import Image from "next/image";

const projects = [
    {
        id: 1,
        title: "My-Shop",
        description: "An Ecommerce Application made using Next.js",
        image: "/projects/My-Shop.png",
        tags: ["Next.js", "TailWind CSS"],
        demoUrl: "https://my-shop-jatin742.vercel.app/",
        gitHubUrl: "https://github.com/Jatin742/My-Shop"
    },
    {
        id: 2,
        title: "Kumo",
        description: "A web application made using React.js, Next.js, Express and MongoDB",
        image: "/projects/Kumo.png",
        tags: ["React.js", "Node.js", "Express", "MongoDB"],
        demoUrl: "https://kumo-ecommerce.vercel.app/",
        gitHubUrl: "https://github.com/Jatin742/Kumo-Ecommerce"
    },
]

export const ProjectsSection = () => {
    return (
        <section id="projects" className="py-24 px-4 relative">
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">Featured
                    <span className="text-primary">Projects</span>
                </h2>
                <p className="text-center mb-12 max-w-2xl mx-auto">
                    Here are some of my projects. Each project was carefully crafted with attention to detail, performance, and user experience.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {projects.map((project, key) => (
                        <div key={key} className="bg-card rounded-lg overflow-hidden shadow-xs card-hover">
                            <div className="relative w-full aspect-[16/9] flex items-center justify-center bg-black/5">
                                <Image src={project.image} fill alt={project.title} sizes="(max-width: 768px) 100vw, 50vw" className="object-contain transition-transform duration-500 group-hover:scale-110" />
                            </div>

                            <div className="p-6">
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {project.tags.map((tag, key) => (
                                        <span key={key} className="px-2 py-1 text-xs font-medium rounded-full border">{tag}</span>
                                    ))}
                                </div>
                                <h3 className="text-xl font-semibold mb-1">{project.title}</h3>
                                <p className="text-sm mb-4">{project.description}</p>

                                <div className="flex justify-between items-center">
                                    <div className="flex space-x-3">
                                        <a href={project.demoUrl} target="_blank" className="text-foreground/80 hover:text-primary transition-colors duration-300">
                                            <ExternalLink size={20} />
                                        </a>
                                        <a href={project.gitHubUrl} target="_blank" className="text-foreground/80 hover:text-primary transition-colors duration-300">
                                            <Github size={20} />
                                        </a>
                                    </div>
                                </div>
                            </div>

                        </div>
                    ))}
                </div>
                <div className="text-center mt-12">
                    <a href="https://github.com/Jatin742" target="_blank" className="cosmic-button w-fit flex items-center mx-auto gap-2">
                        Check My GitHub <ArrowRight size={16} />
                    </a>
                </div>
            </div>
        </section>
    );
};