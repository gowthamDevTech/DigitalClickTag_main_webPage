import React from 'react';
import Link from 'next/link';

export default function BlogPreview() {
  const posts = [
    {
      title: 'The Future of Web Development',
      excerpt:
        'Explore the latest trends and technologies shaping the future of web development.',
      date: 'March 15, 2024',
      author: 'John Doe',
      category: 'Technology',
    },
    {
      title: 'Best Practices for Mobile App Design',
      excerpt:
        'Learn about the essential design principles for creating successful mobile applications.',
      date: 'March 10, 2024',
      author: 'Jane Smith',
      category: 'Design',
    },
    {
      title: 'SEO Strategies for 2024',
      excerpt:
        "Discover the most effective SEO strategies to improve your website's visibility.",
      date: 'March 5, 2024',
      author: 'Mike Johnson',
      category: 'Marketing',
    },
  ];

  return (
    <div className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Latest from Our Blog
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Insights, tips, and industry news
          </p>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <article
              key={post.title}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <div className="p-6">
                <div className="flex items-center text-sm text-gray-500 mb-4">
                  <span>{post.date}</span>
                  <span className="mx-2">•</span>
                  <span>{post.category}</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {post.title}
                </h3>
                <p className="text-gray-600 mb-4">{post.excerpt}</p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <div className="h-8 w-8 rounded-full bg-gray-200 flex items-center justify-center">
                      <span className="text-gray-500">
                        {post.author.charAt(0)}
                      </span>
                    </div>
                    <span className="ml-2 text-sm text-gray-600">
                      {post.author}
                    </span>
                  </div>
                  <Link
                    href="/blog"
                    className="text-blue-600 hover:text-blue-800 font-medium"
                  >
                    Read more →
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link
            href="/blog"
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
          >
            View All Posts
          </Link>
        </div>
      </div>
    </div>
  );
} 