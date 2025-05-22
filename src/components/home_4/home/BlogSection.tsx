
// components/BlogSection.jsx
import React from 'react';

const blogPosts = [
  {
    date: '9 April 2025',
    title: 'Ultimate Sales & Marketing Strategy for Food Product',
    image: '/Region-6.jpg',
  },
  {
    date: '4 April 2025',
    title: 'Sales Funnel Strategy for Restaurant',
    image: '/Region-6.jpg',
  },
  {
    date: '4 April 2025',
    title: 'Secret Behind the Sales SEO + Social Media + Google',
    image: '/Region-6.jpg',
  },
  {
    date: '4 April 2025',
    title: 'Increase website visitors and sales for your Shopify',
    image: '/Region-6.jpg',
  },
];

const BlogSection = () => {
  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-blue-800 mb-12">All Posts</h2> {/* Assuming this is the title */}
        <div className="flex flex-wrap justify-center gap-8">
          {blogPosts.map((post, index) => (
            <div key={index} className="w-full sm:w-1/2 lg:w-1/4 p-4">
              <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                <img src={post.image} alt={post.title} className="w-full h-48 object-cover" />
                <div className="p-4">
                  <p className="text-gray-500 text-sm mb-2">{post.date}</p>
                  <h3 className="text-lg font-semibold mb-2">{post.title}</h3>
                  <a href="#" className="text-blue-600 hover:underline text-sm">Continue Reading</a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;