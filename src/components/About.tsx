import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Code, Database, Globe, Zap } from 'lucide-react';

const About: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const features = [
    {
      icon: <Code className="w-6 h-6" />,
      title: "Frontend Development",
      description: "Vue.js, Flutter, HTML, CSS and JavaScript"
    },
    {
      icon: <Database className="w-6 h-6" />,
      title: "Backend Development",
      description: "PHP, Laravel, Python, and database design"
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: "Full Stack Solutions",
      description: "End-to-end web applications, mobile applications and APIs"
    }
  ];

  return (
    <section id="about" className="section-padding bg-dark-800">
      <div className="max-w-7xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Passionate fullstack developer with expertise in modern web technologies. 
            I love creating innovative solutions that solve real-world problems.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h3 className="text-2xl font-bold mb-6 text-primary-400">
              My Journey
            </h3>
            <div className="space-y-4 text-gray-300">
              <p>
                With over 3+ years of experience in web development, I've worked on projects 
                ranging from small business websites to large-scale enterprise applications. 
                My passion lies in creating user-friendly, scalable solutions that make a difference.
              </p>
              <p>
                I specialize in PHP/Python ecosystems, with deep knowledge of 
                Laravel, Flutter, and modern development practices. I'm always learning new 
                technologies and staying up-to-date with industry best practices.
              </p>
              <p>
                When I'm not coding, you can find me contributing to open-source projects, 
                writing technical articles, or exploring new technologies to expand my skill set.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="glass-effect rounded-2xl p-8"
          >
            <h3 className="text-2xl font-bold mb-6 text-primary-400">
              Quick Facts
            </h3>
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-gray-300">Experience:</span>
                <span className="text-primary-400 font-semibold">3+ Years</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-300">Projects Completed:</span>
                <span className="text-primary-400 font-semibold">20+</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-300">Technologies:</span>
                <span className="text-primary-400 font-semibold">15+</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-300">Open Source:</span>
                <span className="text-primary-400 font-semibold">Active</span>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05, y: -5 }}
              className="glass-effect rounded-xl p-6 text-center card-hover"
            >
              <div className="text-primary-400 mb-4 flex justify-center">
                {feature.icon}
              </div>
              <h3 className="text-lg font-semibold mb-2 text-white">
                {feature.title}
              </h3>
              <p className="text-gray-400 text-sm">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default About; 