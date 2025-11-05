import { Card, CardContent } from './ui/card';
import { Users, Target, Award, TrendingUp } from 'lucide-react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const stats = [
  { icon: Users, value: '200+', label: 'Happy Clients' },
  { icon: Target, value: '500+', label: 'Projects Completed' },
  { icon: Award, value: '50+', label: 'Industry Awards' },
  { icon: TrendingUp, value: '98%', label: 'Success Rate' },
];

export function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-20 px-4 bg-slate-900/30" ref={ref}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              About BrainCode 360
            </h2>
            <p className="text-slate-400 text-lg mb-6">
              We are a team of passionate innovators, designers, and developers dedicated to 
              creating exceptional digital experiences. With over a decade of expertise, we've 
              helped businesses across the globe transform their ideas into successful products.
            </p>
            <p className="text-slate-400 text-lg mb-6">
              Our mission is to bridge the gap between technology and business goals, delivering 
              solutions that not only meet but exceed expectations. We believe in the power of 
              collaboration, innovation, and continuous learning.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-2 gap-4"
          >
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ scale: 1.05, y: -5 }}
                >
                  <Card className="bg-gradient-to-br from-slate-900 to-slate-800 border-slate-700 text-center">
                    <CardContent className="p-6">
                      <motion.div 
                        className="flex justify-center mb-3"
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.6 }}
                      >
                        <div className="w-12 h-12 bg-purple-500/10 rounded-full flex items-center justify-center">
                          <Icon className="w-6 h-6 text-purple-400" />
                        </div>
                      </motion.div>
                      <motion.div 
                        className="text-3xl font-bold text-white mb-2"
                        initial={{ opacity: 0 }}
                        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                        transition={{ duration: 1, delay: 0.5 + index * 0.1 }}
                      >
                        {stat.value}
                      </motion.div>
                      <div className="text-sm text-slate-400">{stat.label}</div>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
