// src/components/home/ServicesSection.tsx
const services = [
  { title: 'SEO Optimization', description: 'Improve your visibility and reach more customers online.' },
  { title: 'PPC Campaigns', description: 'Drive instant traffic with high-converting paid ads.' },
  { title: 'Content Marketing', description: 'Engage your audience with valuable and targeted content.' },
];

export default function ServicesSection() {
  return (
    <section id="services" className="py-20 ">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-10">Our Services</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service) => (
            <div key={service.title} className="p-6 bg-gray-50 rounded-xl shadow hover:shadow-lg transition">
              <h3 className="text-xl text-gray-800 font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
