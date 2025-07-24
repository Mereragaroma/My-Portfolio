import React from 'react';
import { GraduationCap, Briefcase, Award, MapPin, Calendar } from 'lucide-react';

const AboutPage: React.FC = () => {
  const education = [
    {
      degree: 'Bachelor of Software Engineering',
      institution: 'Jigjiga University',
      location: 'Jigjiga, Ethiopia',
      period: '2019 - 2023',
      description: 'Focused on software development methodologies, algorithms, and system design.'
    }
  ];

  const experience = [
    {
      title: 'Software Engineer Intern',
      company: 'Purpose Black Ethiopia',
      department: 'Kegebrew Technology Solutions (KTS)',
      location: 'Addis Ababa, Ethiopia',
      period: '2023 - Present',
      description: 'Developing ERP systems and modules using Odoo framework, working on full-stack web applications, and contributing to various client projects.',
      achievements: [
        'Built comprehensive student registration system module',
        'Developed inventory management solutions',
        'Implemented HR management system features',
        'Collaborated with cross-functional teams on system integration'
      ]
    }
  ];

  const certifications = [
    {
      name: 'Odoo Development Fundamentals',
      issuer: 'Odoo SA',
      year: '2023'
    },
    {
      name: 'Python for Data Science',
      issuer: 'Coursera',
      year: '2022'
    },
    {
      name: 'Full Stack Web Development',
      issuer: 'FreeCodeCamp',
      year: '2022'
    }
  ];

  return (
    <div className="min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-900 dark:text-white mb-6">
            About Me
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
            I'm a passionate Software Engineer with expertise in ERP development, particularly using Odoo framework. 
            My journey combines academic excellence with practical experience in building solutions that drive business efficiency.
          </p>
        </div>

        {/* Personal Story */}
        <section className="mb-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src="https://images.pexels.com/photos/3184611/pexels-photo-3184611.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Working on projects"
                className="rounded-xl shadow-2xl"
              />
            </div>
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
                My Journey in Software Engineering
              </h2>
              <div className="space-y-4 text-gray-700 dark:text-gray-300 leading-relaxed">
                <p>
                  My passion for technology began during my studies at Jigjiga University, where I discovered 
                  the power of software to solve complex business problems. Specializing in Software Engineering, 
                  I developed a strong foundation in programming, system design, and project management.
                </p>
                <p>
                  Currently, I'm completing my internship at Purpose Black Ethiopia, specifically in the 
                  Kegebrew Technology Solutions (KTS) department. This experience has been transformative, 
                  allowing me to work on real-world ERP implementations and gain deep expertise in Odoo development.
                </p>
                <p>
                  I'm particularly passionate about how technology can drive business growth in Africa, 
                  and I believe that robust ERP systems are crucial for the continent's economic development. 
                  My goal is to contribute to this vision by building scalable, efficient solutions.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Education */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
            Education
          </h2>
          <div className="space-y-6">
            {education.map((edu, index) => (
              <div key={index} className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg">
                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-blue-100 dark:bg-blue-900 rounded-lg">
                    <GraduationCap className="text-blue-600 dark:text-blue-400" size={24} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                      {edu.degree}
                    </h3>
                    <div className="flex flex-wrap items-center gap-4 mb-3 text-gray-600 dark:text-gray-400">
                      <div className="flex items-center">
                        <GraduationCap size={16} className="mr-1" />
                        {edu.institution}
                      </div>
                      <div className="flex items-center">
                        <MapPin size={16} className="mr-1" />
                        {edu.location}
                      </div>
                      <div className="flex items-center">
                        <Calendar size={16} className="mr-1" />
                        {edu.period}
                      </div>
                    </div>
                    <p className="text-gray-700 dark:text-gray-300">{edu.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Experience */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
            Professional Experience
          </h2>
          <div className="space-y-6">
            {experience.map((exp, index) => (
              <div key={index} className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg">
                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-teal-100 dark:bg-teal-900 rounded-lg">
                    <Briefcase className="text-teal-600 dark:text-teal-400" size={24} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                      {exp.title}
                    </h3>
                    <div className="flex flex-wrap items-center gap-4 mb-3 text-gray-600 dark:text-gray-400">
                      <div className="flex items-center">
                        <Briefcase size={16} className="mr-1" />
                        {exp.company} - {exp.department}
                      </div>
                      <div className="flex items-center">
                        <MapPin size={16} className="mr-1" />
                        {exp.location}
                      </div>
                      <div className="flex items-center">
                        <Calendar size={16} className="mr-1" />
                        {exp.period}
                      </div>
                    </div>
                    <p className="text-gray-700 dark:text-gray-300 mb-4">{exp.description}</p>
                    <div>
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Key Achievements:</h4>
                      <ul className="list-disc list-inside space-y-1 text-gray-700 dark:text-gray-300">
                        {exp.achievements.map((achievement, achIndex) => (
                          <li key={achIndex}>{achievement}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Certifications */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
            Certifications & Training
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certifications.map((cert, index) => (
              <div key={index} className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg">
                <div className="flex items-start space-x-3">
                  <div className="p-2 bg-orange-100 dark:bg-orange-900 rounded-lg">
                    <Award className="text-orange-600 dark:text-orange-400" size={20} />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 dark:text-white mb-1">
                      {cert.name}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">
                      {cert.issuer} • {cert.year}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Skills Detail */}
        <section>
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
            Technical Skills
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg">
              <h3 className="font-bold text-gray-900 dark:text-white mb-4">Programming Languages</h3>
              <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                <li>• Python (Advanced)</li>
                <li>• JavaScript (Intermediate)</li>
                <li>• XML (Advanced)</li>
                <li>• SQL (Intermediate)</li>
              </ul>
            </div>
            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg">
              <h3 className="font-bold text-gray-900 dark:text-white mb-4">Frameworks & Tools</h3>
              <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                <li>• Odoo ERP Framework</li>
                <li>• React.js</li>
                <li>• PostgreSQL</li>
                <li>• Git & GitHub</li>
              </ul>
            </div>
            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg">
              <h3 className="font-bold text-gray-900 dark:text-white mb-4">Specializations</h3>
              <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                <li>• ERP Development</li>
                <li>• System Integration</li>
                <li>• Database Design</li>
                <li>• Full-Stack Development</li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default AboutPage;