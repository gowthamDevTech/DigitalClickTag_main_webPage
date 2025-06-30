// src/components/home/CTASection.tsx
export default function CTASection() {
  return (
    <section className="py-20 bg-[var(--primary)] text-white text-center">
      <div className="max-w-3xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-4">Ready to Grow Your Business?</h2>
        <p className="mb-6">
          Let our team of digital experts help you create a strategy that drives success.
        </p>
        <a href="/contact" className="inline-block bg-white text-indigo-700 px-6 py-3 rounded-md font-semibold hover:bg-gray-100">
          Contact Us
        </a>
      </div>
    </section>
  );
}
