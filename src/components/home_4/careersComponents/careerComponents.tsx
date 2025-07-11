import CareerForm1 from '@/components/home_4/forms/careerForm1';
import BackgroundImage from '@/components/home_4/commonComponents/background/backgroundImage';
import bg from '@/assets/bg/bg-12.jpg';

interface Job {
  title: string;
  location: string;
  type: string;
  description: string;
}

const jobs: Job[] = [
  {
    title: "Digital Marketing Executive",
    location: "Remote",
    type: "Full-time",
    description: "Responsible for planning and managing marketing campaigns...",
  },
  {
    title: "Content Writer",
    location: "Chennai",
    type: "Part-time",
    description: "Write SEO-friendly blog posts, ad copies, and social content...",
  },
];

export default function CareerJobList() {
  return (

    <>
       <section className="min-h-screen relative  ">
        <BackgroundImage image={bg.src}/>
      <div className="max-w-4xl mx-auto text-center px-4 py-24 text-white">
        <h1 className="text-4xl font-bold  mb-4">Careers at Our Company</h1>
        <p className="text-white text-lg mb-10">
          Be part of a team that thrives on creativity and impact.
        </p>

        <div className="space-y-8">
          {jobs.map((job, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 shadow-md hover:shadow-xl transition rounded-xl p-6 text-left"
            >
              <h2 className="text-2xl font-semibold text-gray-800">{job.title}</h2>
              <p className="text-sm text-gray-600 mb-2">
                {job.location} • {job.type}
              </p>
              <p className="text-gray-700 mb-4">{job.description}</p>
              <button className="px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700 transition">
                Apply Now
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
    {/* <CareerForm1/> */}
    </>
  );
}

