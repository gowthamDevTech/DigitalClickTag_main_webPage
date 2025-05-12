// src/components/home/PricingSection.tsx
const plans = [
  { name: 'Basic', price: '$199/mo', features: ['SEO Audit', '1 Ad Campaign'] },
  { name: 'Pro', price: '$399/mo', features: ['All Basic +', 'Email Marketing', '2 Campaigns'] },
];

export default function PricingSection() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-10">Pricing Plans</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {plans.map((plan) => (
            <div key={plan.name} className="bg-white p-6 rounded-xl shadow hover:shadow-xl transition">
              <h3 className="text-xl font-semibold mb-2">{plan.name}</h3>
              <p className="text-2xl font-bold text-indigo-600 mb-4">{plan.price}</p>
              <ul className="text-gray-600 space-y-2 mb-4">
                {plan.features.map((f) => (
                  <li key={f}>✔ {f}</li>
                ))}
              </ul>
              <button className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700">
                Choose Plan
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
