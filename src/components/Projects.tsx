import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ExternalLink, Github, ArrowRight } from 'lucide-react';

const Projects: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const projects = [
    {
      title: "E-Commerce Platform",
      description: "A full-stack e-commerce platform built with React, Node.js, and PostgreSQL. Features include user authentication, payment processing, and admin dashboard.",
      technologies: ["React", "Node.js", "PostgreSQL", "Stripe", "Redux"],
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=500&h=300&fit=crop",
      github: "https://github.com",
      live: "https://example.com",
      featured: true
    },
    {
      title: "Task Management App",
      description: "A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.",
      technologies: ["React", "Socket.io", "MongoDB", "Express", "TypeScript"],
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=500&h=300&fit=crop",
      github: "https://github.com",
      live: "https://example.com",
      featured: true
    },
    {
      title: "Weather Dashboard",
      description: "A weather application that displays current weather conditions and forecasts using OpenWeatherMap API with beautiful visualizations.",
      technologies: ["React", "Chart.js", "OpenWeatherMap API", "Tailwind CSS"],
      image: "https://images.unsplash.com/photo-1592210454359-9043f067919b?w=500&h=300&fit=crop",
      github: "https://github.com",
      live: "https://example.com",
      featured: false
    },
    {
      title: "Portfolio Website",
      description: "A modern, responsive portfolio website built with React and Framer Motion for smooth animations and interactions.",
      technologies: ["React", "TypeScript", "Framer Motion", "Tailwind CSS"],
      image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=500&h=300&fit=crop",
      github: "https://github.com",
      live: "https://example.com",
      featured: false
    },
    {
      title: "Chat Application",
      description: "Real-time chat application with user authentication, message history, and file sharing capabilities.",
      technologies: ["React", "Socket.io", "Node.js", "MongoDB", "JWT"],
      image: "https://images.unsplash.com/photo-1526378722484-bd91ca387e72?w=500&h=300&fit=crop",
      github: "https://github.com",
      live: "https://example.com",
      featured: false
    },
    {
      title: "Blog Platform",
      description: "A content management system for blogs with markdown support, SEO optimization, and analytics dashboard.",
      technologies: ["Next.js", "Prisma", "PostgreSQL", "Vercel", "MDX"],
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=500&h=300&fit=crop",
      github: "https://github.com",
      live: "https://example.com",
      featured: false
    }
  ];

  return (
    <section id="projects" className="section-padding bg-dark-800">
      <div className="max-w-7xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            A showcase of my recent work, demonstrating my skills in full-stack development, 
            UI/UX design, and problem-solving abilities.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className={`glass-effect rounded-2xl overflow-hidden card-hover ${
                project.featured ? 'ring-2 ring-primary-500/50' : ''
              }`}
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                />
                {project.featured && (
                  <div className="absolute top-4 left-4 bg-primary-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                    Featured
                  </div>
                )}
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3 text-white">
                  {project.title}
                </h3>
                <p className="text-gray-400 mb-4 text-sm leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 bg-primary-600/20 text-primary-400 text-xs rounded-md"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex justify-between items-center">
                  <div className="flex space-x-3">
                    <motion.a
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-primary-400 transition-colors duration-200"
                    >
                      <Github size={20} />
                    </motion.a>
                    <motion.a
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-primary-400 transition-colors duration-200"
                    >
                      <ExternalLink size={20} />
                    </motion.a>
                  </div>
                  <motion.button
                    whileHover={{ x: 5 }}
                    className="text-primary-400 hover:text-primary-300 transition-colors duration-200"
                  >
                    <ArrowRight size={20} />
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-16"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-primary-600 hover:bg-primary-700 text-white font-semibold rounded-lg transition-all duration-200 shadow-lg hover:shadow-primary-500/25"
          >
            View All Projects
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects; 