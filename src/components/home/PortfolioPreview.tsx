import React from 'react';
import Link from 'next/link';

export default function PortfolioPreview() {
  const projects = [
    {
      title: 'E-commerce Platform',
      category: 'Web Development',
      image: '/portfolio/project1.jpg',
    },
    {
      title: 'Mobile Banking App',
      category: 'Mobile Development',
      image: '/portfolio/project2.jpg',
    },
    {
      title: 'Corporate Website',
      category: 'Web Design',
      image: '/portfolio/project3.jpg',
    },
  ];

  return (
    <div className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Featured Projects
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Take a look at some of our recent work
          </p>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <div
              key={project.title}
              className="group relative bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="aspect-w-16 aspect-h-9 bg-gray-200">
                {/* Replace with actual project images */}
                <div className="w-full h-full flex items-center justify-center">
                  <span className="text-gray-500">{project.title}</span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-600">{project.category}</p>
              </div>
              <Link
                href="/portfolio"
                className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300"
              >
                <span className="sr-only">View project details</span>
              </Link>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link
            href="/portfolio"
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
          >
            View All Projects
          </Link>
        </div>
      </div>
    </div>
  );
} 