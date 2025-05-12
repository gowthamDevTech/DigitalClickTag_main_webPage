// src/components/home/Testimonials.tsx
const testimonials = [
  { name: 'Sarah W.', feedback: 'Marko helped us double our leads in just 3 months!', company: 'TechVision' },
  { name: 'David K.', feedback: 'Professional, responsive, and effective team!', company: 'StartSmart' },
];

export default function Testimonials() {
  return (
    <section className="py-20 text-gray-600">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-10">What Clients Say</h2>
        <div className="space-y-8">
          {testimonials.map((t) => (
            <div key={t.name} className="bg-gray-50 p-6 rounded-xl shadow">
              <p className="text-lg italic mb-4">“{t.feedback}”</p>
              <p className="font-semibold">{t.name}</p>
              <p className="text-sm text-gray-500">{t.company}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
