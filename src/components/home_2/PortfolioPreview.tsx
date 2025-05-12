import projectImg1 from '@/assets/Project/pro1.jpeg'
import projectImg2 from '@/assets/Project/pro2.jpeg'
import projectImg3 from '@/assets/Project/pro3.jpeg'

// src/components/home/PortfolioPreview.tsx
const projects = [
  { title: 'E-commerce Redesign', image: projectImg1.src },
  { title: 'SEO Boost for SaaS', image: projectImg2.src },
  { title: 'Brand Identity Package', image: projectImg3.src },
];

export default function PortfolioPreview() {
  return (
    <section id="portfolio" className="py-20 ">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-10">Our Work</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {projects.map((project) => (
            <div key={project.title} className="text-gray-600 rounded-xl overflow-hidden shadow hover:shadow-xl transition cursor-pointer">
              <img src={project.image} alt={project.title} className="w-full h-60 object-cover" />
              <div className="p-4 bg-white">
                <h3 className="text-lg font-semibold">{project.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
