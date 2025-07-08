// src/components/home/Testimonials.tsx
import BackgroundImage from "../home_4/commonComponents/background/backgroundImage";
import SplineViewer from "@/components/home_4/commonComponents/spline/spline";
import BackgroundHover from "@/components/home_4/commonComponents/background/backgroundhover";
import bg from "@/assets/bg/team5.webp";


const testimonials = [
  { name: 'Sarah W.', feedback: 'Marko helped us double our leads in just 3 months!', company: 'TechVision' },
  { name: 'David K.', feedback: 'Professional, responsive, and effective team!', company: 'StartSmart' },
];

export default function Testimonials() {
  return (
    <section className="relative ">
      {/* <BackgroundImage image={bg.src}/> */}
       {/* <SplineViewer
              url="https://prod.spline.design/frK4NTPO-2DNEiLY/scene.splinecode"
              className=" inset-0 absolute -z-10" 
              
            /> */}

      <div className="max-w-4xl mx-auto px-4 text-center  text-[var(--primary1)] py-20">
        <h2 className="text-3xl font-bold mb-10  backdrop-blur-lg">What Clients Say</h2>
        <div className="space-y-8">
          {testimonials.map((t) => (
            

            <div key={t.name} className="bg-[var(--primary)]/50 backdrop-blur-lg  rounded-xl shadow ">
      <BackgroundHover />

              <p className="text-lg italic pt-6 mb-4">“{t.feedback}”</p>
              <p className="font-semibold">{t.name}</p>
              <p className="text-sm text-gray-200 pb-6">{t.company}</p>
            </div>
            
                ))}
        </div>
      </div>
    </section>
  );
}
