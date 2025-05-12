import React from 'react';

export default function ClientsSection() {
  const clients = [
    { name: 'Client 1', logo: '/clients/client1.svg' },
    { name: 'Client 2', logo: '/clients/client2.svg' },
    { name: 'Client 3', logo: '/clients/client3.svg' },
    { name: 'Client 4', logo: '/clients/client4.svg' },
    { name: 'Client 5', logo: '/clients/client5.svg' },
  ];

  return (
    <div className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Trusted by Industry Leaders
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            We&apos;re proud to work with some of the most innovative companies in the world
          </p>
        </div>

        <div className="mt-12 grid grid-cols-2 gap-8 md:grid-cols-3 lg:grid-cols-5">
          {clients.map((client) => (
            <div
              key={client.name}
              className="col-span-1 flex justify-center items-center"
            >
              <div className="h-12 w-32 relative">
                {/* Replace with actual client logos */}
                <div className="h-full w-full bg-gray-200 rounded flex items-center justify-center">
                  <span className="text-gray-500">{client.name}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
} 