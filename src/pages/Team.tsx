import React from 'react';
import { motion } from 'framer-motion';
import { User, Brain, Code, Database,  BarChart } from 'lucide-react';

const Team = () => {
  const teamMembers = [
    {
      name: "Sidra Saleem",
      role: "CEO, Software Engineer & GenAI Researcher",
      emoji: "👩‍💼",
      department: "Leadership"
    },
    {
      name: "Kalsoom Tariq",
      role: "CTO, Computer Scientist & GenAI Researcher",
      emoji: "👩‍💻",
      department: "Leadership"
    },
    {
      name: "Sarah Taghreed",
      role: "Head Finance Department, CFO",
      emoji: "👩‍💼",
      department: "Finance"
    },
    {
      name: "Mohammad",
      role: "Electrical Engineer",
      emoji: "👨‍💻",
      department: "Engineering"
    },
    {
      name: "Sumaiya Ali",
      role: "Computer Scientist",
      emoji: "👩‍💻",
      department: "Engineering"
    },
    {
      name: "Zobia Asad",
      role: "Computer Scientist",
      emoji: "👩‍💻",
      department: "Engineering"
    },
    {
      name: "Tayyaba Hussain",
      role: "Computer Scientist",
      emoji: "👩‍💻",
      department: "Engineering"
    },
    {
      name: "Saira Batool",
      role: "Software Engineer",
      emoji: "👩‍💻",
      department: "Engineering"
    },
    {
      name: "Hira",
      role: "AI Engineer",
      emoji: "🤖",
      department: "AI"
    },
    {
      name: "Rajmeen Fatima",
      role: "Data Scientist",
      emoji: "📊",
      department: "Data Science"
    },
    {
      name: "Aqsa Afzal",
      role: "Data Scientist",
      emoji: "📊",
      department: "Data Science"
    },
    {
      name: "Sumrun Fatima",
      role: "Data Scientist",
      emoji: "📊",
      department: "Data Science"
    }
  ];

  const departments = [
    {
      name: "Leadership",
      icon: <Brain className="h-8 w-8 text-secondary" />,
      description: "Guiding our vision and strategy"
    },
    {
      name: "Engineering",
      icon: <Code className="h-8 w-8 text-secondary" />,
      description: "Building robust solutions"
    },
    {
      name: "AI",
      icon: <Brain className="h-8 w-8 text-secondary" />,
      description: "Advancing AI capabilities"
    },
    {
      name: "Data Science",
      icon: <Database className="h-8 w-8 text-secondary" />,
      description: "Unlocking data insights"
    },
    {
      name: "Finance",
      icon: < BarChart className="h-8 w-8 text-secondary" />,
      description: "Managing financial growth"
    }
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-primary py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Meet Our Team
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              A diverse group of experts dedicated to revolutionizing AI solutions
            </p>
          </motion.div>
        </div>
      </section>

      {/* Departments */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold text-primary mb-4">Our Departments</h2>
            <p className="text-neutral text-lg">
              Specialized teams working together to deliver excellence
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8">
            {departments.map((dept, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white p-6 rounded-lg shadow-lg text-center"
              >
                <div className="mb-4">{dept.icon}</div>
                <h3 className="text-lg font-semibold text-primary mb-2">{dept.name}</h3>
                <p className="text-neutral text-sm">{dept.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Members */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold text-primary mb-4">The People Behind Akss AI</h2>
            <p className="text-neutral text-lg">
              Meet the talented individuals driving innovation
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white p-6 rounded-lg shadow-lg text-center"
              >
                <div className="text-4xl mb-4">{member.emoji}</div>
                <h3 className="text-lg font-semibold text-primary mb-2">{member.name}</h3>
                <p className="text-neutral text-sm mb-2">{member.role}</p>
                <span className="inline-block bg-secondary/10 text-secondary px-3 py-1 rounded-full text-sm">
                  {member.department}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Join Us */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl font-bold text-primary mb-4">Join Our Team</h2>
            <p className="text-neutral text-lg mb-8 max-w-2xl mx-auto">
              We're always looking for talented individuals who are passionate about AI and innovation
            </p>
            <button className="bg-secondary hover:bg-gold text-white font-bold px-8 py-3 rounded-lg transition-colors duration-300">
              View Open Positions
            </button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Team;