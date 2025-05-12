// src/components/home/ClientsSection.tsx
export default function ClientsSection() {
  const clients = ['Google', 'Amazon', 'Spotify', 'Netflix'];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <p className="text-gray-500 uppercase tracking-widest mb-8">Trusted by leading brands</p>
        <div className="flex flex-wrap justify-center gap-8">
          {clients.map((client) => (
            <div key={client} className="text-gray-700 text-lg font-semibold opacity-70 hover:opacity-100 transition">
              {client}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
