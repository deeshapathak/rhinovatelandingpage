import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Calendar, Clock, ArrowRight, Tag } from 'lucide-react';

const Blog = () => {
  const blogPosts = [
    {
      id: 1,
      title: "The Future of Rhinoplasty: How AI is Transforming Patient Consultations",
      excerpt: "Explore how artificial intelligence is revolutionizing the way surgeons and patients approach rhinoplasty procedures, leading to better outcomes and higher satisfaction.",
      author: "Dr. Sarah Chen",
      date: "2024-01-15",
      readTime: "5 min read",
      category: "Technology",
      image: "/realistic.png",
      featured: true
    },
    {
      id: 2,
      title: "3D Visualization in Plastic Surgery: A Complete Guide",
      excerpt: "Learn about the latest advances in 3D visualization technology and how it's being used to improve surgical planning and patient communication.",
      author: "Michael Rodriguez",
      date: "2024-01-10",
      readTime: "7 min read",
      category: "Education",
      image: "/capture-step.png",
      featured: false
    },
    {
      id: 3,
      title: "Patient Satisfaction: The Key to Building a Successful Practice",
      excerpt: "Discover strategies for improving patient satisfaction in plastic surgery practices through better communication and realistic expectations.",
      author: "Dr. Jennifer Walsh",
      date: "2024-01-05",
      readTime: "6 min read",
      category: "Practice Management",
      image: "/healing.png",
      featured: false
    },
    {
      id: 4,
      title: "Understanding the Healing Process: What Patients Need to Know",
      excerpt: "A comprehensive guide to the rhinoplasty healing timeline, helping patients understand what to expect during their recovery journey.",
      author: "Dr. Robert Kim",
      date: "2023-12-28",
      readTime: "8 min read",
      category: "Patient Care",
      image: "/dashboard-preview.png",
      featured: false
    },
    {
      id: 5,
      title: "The Science Behind AI-Powered Facial Analysis",
      excerpt: "Dive deep into the technical aspects of how our AI algorithms analyze facial features and predict surgical outcomes with remarkable accuracy.",
      author: "Alex Thompson",
      date: "2023-12-20",
      readTime: "10 min read",
      category: "Technology",
      image: "/realistic.png",
      featured: false
    },
    {
      id: 6,
      title: "Building Trust with Patients: The Role of Technology",
      excerpt: "How modern technology tools can help surgeons build stronger relationships with patients through transparency and clear communication.",
      author: "Dr. Maria Garcia",
      date: "2023-12-15",
      readTime: "5 min read",
      category: "Practice Management",
      image: "/capture-step.png",
      featured: false
    }
  ];

  const categories = ["All", "Technology", "Education", "Practice Management", "Patient Care"];

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-white to-rhinovate-50 pt-32 pb-16 md:pt-40 md:pb-32">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-rhinovate-100 opacity-50 blur-3xl"></div>
          <div className="absolute top-1/2 -left-40 w-80 h-80 rounded-full bg-blue-100 opacity-40 blur-3xl"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <span className="inline-flex items-center rounded-full bg-rhinovate-100 px-4 py-1.5 text-sm font-medium text-rhinovate-800 mb-8">
              <span className="mr-1.5 flex h-2 w-2 rounded-full bg-rhinovate-500"></span>
              Insights & Updates
            </span>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold tracking-tight text-gray-900 mb-6 text-balance">
              The <span className="text-rhinovate-600">Rhinovate</span> Blog
            </h1>
            
            <p className="mt-6 text-lg md:text-xl leading-8 text-gray-600 max-w-3xl mx-auto text-balance">
              Stay updated with the latest insights on AI-powered plastic surgery, patient care, and industry trends.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="bg-gradient-to-r from-rhinovate-600 to-rhinovate-700 rounded-3xl overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
              <div className="p-12 text-white">
                <div className="flex items-center mb-4">
                  <Tag className="h-4 w-4 mr-2" />
                  <span className="text-sm font-medium text-rhinovate-100">Featured Article</span>
                </div>
                <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
                  {blogPosts[0].title}
                </h2>
                <p className="text-lg text-rhinovate-100 mb-6">
                  {blogPosts[0].excerpt}
                </p>
                <div className="flex items-center text-sm text-rhinovate-200 mb-6">
                  <span className="mr-4">By {blogPosts[0].author}</span>
                  <div className="flex items-center mr-4">
                    <Calendar className="h-4 w-4 mr-1" />
                    {new Date(blogPosts[0].date).toLocaleDateString()}
                  </div>
                  <div className="flex items-center">
                    <Clock className="h-4 w-4 mr-1" />
                    {blogPosts[0].readTime}
                  </div>
                </div>
                <button className="inline-flex items-center bg-white text-rhinovate-600 px-6 py-3 rounded-lg font-semibold hover:bg-rhinovate-50 transition-colors">
                  Read Article
                  <ArrowRight className="ml-2 h-4 w-4" />
                </button>
              </div>
              <div className="relative">
                <img
                  src={blogPosts[0].image}
                  alt={blogPosts[0].title}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Categories & Blog Posts */}
      <section className="py-16 bg-rhinovate-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                className={`px-6 py-3 rounded-full font-medium transition-colors ${
                  category === "All"
                    ? "bg-rhinovate-600 text-white"
                    : "bg-white text-gray-700 hover:bg-rhinovate-100"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Blog Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.slice(1).map((post) => (
              <article key={post.id} className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                <div className="aspect-video overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center mb-3">
                    <Tag className="h-4 w-4 text-rhinovate-600 mr-2" />
                    <span className="text-sm font-medium text-rhinovate-600">{post.category}</span>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3 line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                    <span>By {post.author}</span>
                    <div className="flex items-center">
                      <Calendar className="h-4 w-4 mr-1" />
                      {new Date(post.date).toLocaleDateString()}
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-sm text-gray-500">
                      <Clock className="h-4 w-4 mr-1" />
                      {post.readTime}
                    </div>
                    <button className="inline-flex items-center text-rhinovate-600 hover:text-rhinovate-700 font-medium">
                      Read More
                      <ArrowRight className="ml-1 h-4 w-4" />
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* Load More Button */}
          <div className="text-center mt-12">
            <button className="inline-flex items-center bg-rhinovate-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-rhinovate-700 transition-colors">
              Load More Articles
              <ArrowRight className="ml-2 h-5 w-5" />
            </button>
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto text-center px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-display font-bold tracking-tight text-gray-900 mb-6">
            Stay Updated
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Get the latest insights on AI-powered plastic surgery delivered to your inbox.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rhinovate-500 focus:border-transparent"
            />
            <button className="bg-rhinovate-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-rhinovate-700 transition-colors">
              Subscribe
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Blog;
