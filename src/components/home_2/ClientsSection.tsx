// src/components/home/ClientsSection.tsx
import bg from "@/assets/bg/bg-9.jpg";
import BackgroundImage from "../home_4/commonComponents/background/backgroundImage";
export default function ClientsSection() {
  const clients = ['Google', 'Amazon', 'Spotify', 'Netflix'];

  return (
    <section className="relative">
      <BackgroundImage image={bg.src}/>
      <div className="max-w-6xl mx-auto px-4 text-center py-16">
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
