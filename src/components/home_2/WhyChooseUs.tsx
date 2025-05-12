// src/components/home/WhyChooseUs.tsx
const features = [
  'Data-driven strategies',
  'Creative design team',
  'Transparent communication',
  'Result-focused solutions',
];

export default function WhyChooseUs() {
  return (
    <section className="py-20 ">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-10">Why Choose Us?</h2>
        <ul className="grid md:grid-cols-2 gap-6 text-left text-gray-700">
          {features.map((feature) => (
            <li key={feature} className="p-4 bg-gray-50 rounded-lg shadow-sm">
              ✅ {feature}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
