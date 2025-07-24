import React, { useState } from 'react';
import { Github, ExternalLink, Calendar, Users, Code } from 'lucide-react';

const ProjectsPage: React.FC = () => {
  const [filter, setFilter] = useState('all');

  const projects = [
    {
      id: 1,
      title: 'Student Registration System',
      description: 'A comprehensive ERP module built with Odoo for managing student enrollment, course registration, and academic records. Features include automated fee calculation, grade management, and parent portal access.',
      image: 'https://images.pexels.com/photos/159711/books-bookstore-book-reading-159711.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'erp',
      technologies: ['Python', 'Odoo', 'PostgreSQL', 'XML', 'JavaScript'],
      features: [
        'Student enrollment automation',
        'Course management system',
        'Grade tracking and reporting',
        'Parent-student portal',
        'Fee management integration'
      ],
      github: 'https://github.com/merera/student-registration',
      demo: 'https://demo.student-system.com',
      status: 'Completed',
      duration: '3 months',
      team: '4 developers',
      date: '2023'
    },
    {
      id: 2,
      title: 'Inventory Management Module',
      description: 'Advanced inventory tracking system with real-time stock updates, automated reorder points, and comprehensive reporting. Integrates seamlessly with Odoo\'s existing modules.',
      image: 'https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'erp',
      technologies: ['Odoo', 'Python', 'JavaScript', 'XML', 'PostgreSQL'],
      features: [
        'Real-time inventory tracking',
        'Automated reorder alerts',
        'Multi-warehouse support',
        'Barcode integration',
        'Advanced reporting dashboard'
      ],
      github: 'https://github.com/merera/inventory-module',
      demo: 'https://demo.inventory-system.com',
      status: 'Completed',
      duration: '2 months',
      team: '3 developers',
      date: '2023'
    },
    {
      id: 3,
      title: 'HR Management System',
      description: 'Complete HR solution for employee lifecycle management, including recruitment, onboarding, performance evaluation, and payroll integration.',
      image: 'https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'erp',
      technologies: ['Python', 'Odoo', 'PostgreSQL', 'XML', 'JavaScript'],
      features: [
        'Employee onboarding workflow',
        'Performance evaluation system',
        'Leave management',
        'Payroll integration',
        'Employee self-service portal'
      ],
      github: 'https://github.com/merera/hr-system',
      demo: 'https://demo.hr-system.com',
      status: 'In Progress',
      duration: '4 months',
      team: '5 developers',
      date: '2024'
    },
    {
      id: 4,
      title: 'E-Commerce Integration',
      description: 'Custom Odoo module for seamless integration with multiple e-commerce platforms, enabling synchronized product catalogs, orders, and customer data.',
      image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'integration',
      technologies: ['Python', 'Odoo', 'REST APIs', 'JSON', 'OAuth'],
      features: [
        'Multi-platform integration',
        'Real-time data synchronization',
        'Order management automation',
        'Customer data unification',
        'Analytics dashboard'
      ],
      github: 'https://github.com/merera/ecommerce-integration',
      demo: 'https://demo.ecommerce-integration.com',
      status: 'Completed',
      duration: '2.5 months',
      team: '2 developers',
      date: '2023'
    },
    {
      id: 5,
      title: 'Financial Reporting Dashboard',
      description: 'Interactive dashboard for financial reporting and analytics, built as a web application with real-time data visualization and export capabilities.',
      image: 'https://images.pexels.com/photos/590016/pexels-photo-590016.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'web',
      technologies: ['React', 'Node.js', 'PostgreSQL', 'Chart.js', 'Express'],
      features: [
        'Real-time financial metrics',
        'Interactive charts and graphs',
        'Custom report generation',
        'Data export functionality',
        'Role-based access control'
      ],
      github: 'https://github.com/merera/financial-dashboard',
      demo: 'https://demo.financial-dashboard.com',
      status: 'Completed',
      duration: '1.5 months',
      team: '2 developers',
      date: '2023'
    },
    {
      id: 6,
      title: 'Mobile ERP Client',
      description: 'Mobile application for accessing Odoo ERP functionality on-the-go, featuring offline capabilities and real-time synchronization.',
      image: 'https://images.pexels.com/photos/147413/twitter-facebook-together-exchange-of-information-147413.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'mobile',
      technologies: ['React Native', 'TypeScript', 'Redux', 'SQLite', 'REST APIs'],
      features: [
        'Offline data access',
        'Real-time synchronization',
        'Mobile-optimized UI',
        'Push notifications',
        'Cross-platform compatibility'
      ],
      github: 'https://github.com/merera/mobile-erp',
      demo: 'https://demo.mobile-erp.com',
      status: 'In Progress',
      duration: '3 months',
      team: '3 developers',
      date: '2024'
    }
  ];

  const categories = [
    { value: 'all', label: 'All Projects' },
    { value: 'erp', label: 'ERP Systems' },
    { value: 'web', label: 'Web Applications' },
    { value: 'integration', label: 'Integrations' },
    { value: 'mobile', label: 'Mobile Apps' }
  ];

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter);

  return (
    <div className="min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-900 dark:text-white mb-6">
            My Projects
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
            A collection of ERP modules, web applications, and system integrations I've built 
            during my internship and personal development journey.
          </p>
        </div>

        {/* Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map(category => (
            <button
              key={category.value}
              onClick={() => setFilter(category.value)}
              className={`px-6 py-3 rounded-lg font-medium transition-colors duration-200 ${
                filter === category.value
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-blue-100 dark:hover:bg-gray-600'
              }`}
            >
              {category.label}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {filteredProjects.map(project => (
            <div key={project.id} className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-64 object-cover"
              />
              
              <div className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                    {project.title}
                  </h3>
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                    project.status === 'Completed' 
                      ? 'bg-green-100 text-green-600 dark:bg-green-900 dark:text-green-400'
                      : 'bg-yellow-100 text-yellow-600 dark:bg-yellow-900 dark:text-yellow-400'
                  }`}>
                    {project.status}
                  </span>
                </div>

                <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                  {project.description}
                </p>

                {/* Project Details */}
                <div className="grid grid-cols-3 gap-4 mb-6 text-sm text-gray-600 dark:text-gray-400">
                  <div className="flex items-center">
                    <Calendar size={16} className="mr-1" />
                    {project.duration}
                  </div>
                  <div className="flex items-center">
                    <Users size={16} className="mr-1" />
                    {project.team}
                  </div>
                  <div className="flex items-center">
                    <Code size={16} className="mr-1" />
                    {project.date}
                  </div>
                </div>

                {/* Technologies */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">
                    Technologies Used:
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400 text-sm rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Key Features */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">
                    Key Features:
                  </h4>
                  <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-1">
                    {project.features.slice(0, 3).map((feature, index) => (
                      <li key={index} className="flex items-start">
                        <span className="text-blue-600 dark:text-blue-400 mr-2">•</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Action Buttons */}
                <div className="flex space-x-4">
                  <a
                    href={project.github}
                    className="flex items-center px-4 py-2 bg-gray-900 dark:bg-gray-700 text-white rounded-lg hover:bg-gray-800 dark:hover:bg-gray-600 transition-colors duration-200"
                  >
                    <Github size={16} className="mr-2" />
                    Code
                  </a>
                  <a
                    href={project.demo}
                    className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200"
                  >
                    <ExternalLink size={16} className="mr-2" />
                    Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectsPage;