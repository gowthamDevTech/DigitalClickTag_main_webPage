import React from 'react';

export const metadata = {
  title: 'Blog',
  description: 'Read our latest articles and insights',
};

export default function BlogPage() {
  return (
    <main className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Blog</h1>
        <div className="space-y-8">
          {/* Blog post cards will go here */}
          <article className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-4">Blog Post Title</h2>
            <div className="text-sm text-gray-500 mb-4">
              <span>Published on: </span>
              <time dateTime="2024-03-20">March 20, 2024</time>
            </div>
            <p className="text-gray-600 mb-4">
              Brief excerpt from the blog post...
            </p>
            <a
              href="#"
              className="text-blue-600 hover:text-blue-800 font-medium"
            >
              Read more →
            </a>
          </article>
          {/* Add more blog post cards as needed */}
        </div>
      </div>
    </main>
  );
} 