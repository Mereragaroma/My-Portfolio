import React from 'react';
import { Calendar, Clock, User, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const BlogPage: React.FC = () => {
  const blogPosts = [
    {
      id: 1,
      title: 'The Future of ERP Systems in Africa',
      excerpt: 'Exploring how modern ERP solutions are transforming businesses across the African continent and the opportunities they present for local developers.',
      content: 'Full article content would go here...',
      image: 'https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'ERP',
      author: 'Merera Garoma',
      date: '2024-01-15',
      readTime: '5 min read',
      tags: ['ERP', 'Africa', 'Technology', 'Business']
    },
    {
      id: 2,
      title: 'Building Custom Odoo Modules: Best Practices',
      excerpt: 'A comprehensive guide to developing robust and maintainable Odoo modules, based on real-world experience in enterprise environments.',
      content: 'Full article content would go here...',
      image: 'https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'Development',
      author: 'Merera Garoma',
      date: '2023-12-20',
      readTime: '8 min read',
      tags: ['Odoo', 'Python', 'Development', 'Best Practices']
    },
    {
      id: 3,
      title: 'Database Optimization for Odoo Performance',
      excerpt: 'Tips and techniques for optimizing PostgreSQL databases in Odoo environments, ensuring scalability and performance.',
      content: 'Full article content would go here...',
      image: 'https://images.pexels.com/photos/1181298/pexels-photo-1181298.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'Database',
      author: 'Merera Garoma',
      date: '2023-11-10',
      readTime: '6 min read',
      tags: ['PostgreSQL', 'Performance', 'Database', 'Optimization']
    },
    {
      id: 4,
      title: 'Open Source ERP: Why It Matters for Startups',
      excerpt: 'Understanding the benefits of open-source ERP solutions like Odoo for startups and small businesses in emerging markets.',
      content: 'Full article content would go here...',
      image: 'https://images.pexels.com/photos/3184431/pexels-photo-3184431.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'Business',
      author: 'Merera Garoma',
      date: '2023-10-25',
      readTime: '4 min read',
      tags: ['Open Source', 'Startups', 'ERP', 'Business Strategy']
    },
    {
      id: 5,
      title: 'My Journey from Student to ERP Developer',
      excerpt: 'A personal reflection on my transition from university student to professional ERP developer, including lessons learned and advice for others.',
      content: 'Full article content would go here...',
      image: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'Personal',
      author: 'Merera Garoma',
      date: '2023-09-15',
      readTime: '7 min read',
      tags: ['Career', 'Personal Growth', 'Education', 'Software Engineering']
    },
    {
      id: 6,
      title: 'System Integration Patterns in Modern ERP',
      excerpt: 'Exploring different approaches to integrating ERP systems with third-party applications and the challenges involved.',
      content: 'Full article content would go here...',
      image: 'https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'Integration',
      author: 'Merera Garoma',
      date: '2023-08-30',
      readTime: '9 min read',
      tags: ['Integration', 'APIs', 'ERP', 'System Architecture']
    }
  ];

  const categories = ['All', 'ERP', 'Development', 'Database', 'Business', 'Personal', 'Integration'];
  const [selectedCategory, setSelectedCategory] = React.useState('All');

  const filteredPosts = selectedCategory === 'All' 
    ? blogPosts 
    : blogPosts.filter(post => post.category === selectedCategory);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };

  return (
    <div className="min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Blog & Insights
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Sharing my thoughts on ERP development, technology trends in Africa, and lessons learned 
            from building enterprise software solutions.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-3 rounded-lg font-medium transition-colors duration-200 ${
                selectedCategory === category
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-blue-100 dark:hover:bg-gray-600'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Featured Post */}
        {filteredPosts.length > 0 && (
          <div className="mb-16">
            <div className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-xl">
              <div className="md:flex">
                <div className="md:w-1/2">
                  <img
                    src={filteredPosts[0].image}
                    alt={filteredPosts[0].title}
                    className="w-full h-64 md:h-full object-cover"
                  />
                </div>
                <div className="md:w-1/2 p-8">
                  <div className="flex items-center mb-4">
                    <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400 text-sm rounded-full">
                      Featured
                    </span>
                    <span className="ml-3 px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 text-sm rounded-full">
                      {filteredPosts[0].category}
                    </span>
                  </div>
                  <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                    {filteredPosts[0].title}
                  </h2>
                  <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                    {filteredPosts[0].excerpt}
                  </p>
                  <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mb-6">
                    <User size={16} className="mr-2" />
                    <span className="mr-4">{filteredPosts[0].author}</span>
                    <Calendar size={16} className="mr-2" />
                    <span className="mr-4">{formatDate(filteredPosts[0].date)}</span>
                    <Clock size={16} className="mr-2" />
                    <span>{filteredPosts[0].readTime}</span>
                  </div>
                  <Link
                    to={`/blog/${filteredPosts[0].id}`}
                    className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors duration-200"
                  >
                    Read Full Article
                    <ArrowRight className="ml-2" size={20} />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPosts.slice(1).map(post => (
            <article key={post.id} className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <div className="flex items-center mb-3">
                  <span className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 text-xs rounded-full">
                    {post.category}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 leading-tight">
                  {post.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
                  {post.excerpt}
                </p>
                <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mb-4">
                  <Calendar size={14} className="mr-1" />
                  <span className="mr-3">{formatDate(post.date)}</span>
                  <Clock size={14} className="mr-1" />
                  <span>{post.readTime}</span>
                </div>
                <div className="flex flex-wrap gap-2 mb-4">
                  {post.tags.slice(0, 3).map((tag, index) => (
                    <span
                      key={index}
                      className="px-2 py-1 bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 text-xs rounded"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
                <Link
                  to={`/blog/${post.id}`}
                  className="inline-flex items-center text-blue-600 dark:text-blue-400 font-medium hover:text-blue-700 dark:hover:text-blue-300 transition-colors duration-200"
                >
                  Read More
                  <ArrowRight className="ml-1" size={16} />
                </Link>
              </div>
            </article>
          ))}
        </div>

        {/* Newsletter Signup */}
        <section className="mt-20 bg-gradient-to-r from-blue-600 to-teal-600 rounded-xl p-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Stay Updated
          </h2>
          <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
            Subscribe to my newsletter to get the latest insights on ERP development, 
            technology trends, and career advice in software engineering.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg border-0 focus:ring-4 focus:ring-blue-300 focus:outline-none"
            />
            <button className="px-6 py-3 bg-white text-blue-600 font-medium rounded-lg hover:bg-gray-100 transition-colors duration-200">
              Subscribe
            </button>
          </div>
        </section>
      </div>
    </div>
  );
};

export default BlogPage;