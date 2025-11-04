import { Card, CardHeader, CardTitle, CardDescription, CardContent } from './ui/card';
import { ExternalLink } from 'lucide-react';
import { Button } from './ui/button';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const projects = [
  {
    title: 'DigiSign Pro',
    category: 'Web Development',
    description: 'A modern online shopping experience with real-time inventory and seamless checkout.',
    image: 'https://braincode360.netlify.app/DigiSign.png',
  },
  {
    title: 'Health Bridge Accounts',
    category: 'Mobile Development',
    description: 'Patient management system with telemedicine capabilities and health tracking.',
    image: 'https://braincode360.netlify.app/hba.png',
  },
  {
    title: 'Financial Dashboard',
    category: 'Data Analytics',
    description: 'Real-time financial analytics platform with advanced reporting and forecasting.',
    image: '/assets/images/default.svg',
  },
  {
    title: 'Smart City Solution',
    category: 'IoT & Cloud',
    description: 'Integrated urban management system connecting infrastructure and services.',
    image: '/assets/images/default.svg',
  },
];

export function Portfolio() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="portfolio" className="py-20 px-4" ref={ref}>
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Our Portfolio
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Showcasing our finest work and successful partnerships
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <motion.div
                whileHover={{ y: -10, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Card className="bg-slate-900/50 border-slate-800 overflow-hidden hover:border-purple-500/50 transition-all duration-300 group">
                  <motion.div 
                    className="relative h-48 bg-slate-800 overflow-hidden"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                  >
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent opacity-60" />
                  </motion.div>
                  <CardHeader>
                    <div className="text-sm text-purple-400 mb-2">{project.category}</div>
                    <CardTitle className="text-white">{project.title}</CardTitle>
                    <CardDescription className="text-slate-400">
                      {project.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <motion.div whileHover={{ x: 5 }} transition={{ type: "spring", stiffness: 300 }}>
                      <Button variant="ghost" className="text-purple-400 hover:text-purple-300">
                        View Project
                        <ExternalLink className="ml-2 w-4 h-4" />
                      </Button>
                    </motion.div>
                  </CardContent>
                </Card>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
