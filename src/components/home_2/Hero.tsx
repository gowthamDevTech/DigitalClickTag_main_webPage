import RobotSpline from '@/components/splineDesigns/robo';
import Image from 'next/image';
import { BackgroundVideo } from '@/components/home_4/commonComponents/background/backgroundVideo';
import BackgroundImage from '@/components/home_4/commonComponents/background/backgroundImage';
import bg from "../../assets/bg/bg-5.jpg";
export default function Hero() {
  return (
    <>
     
        
    <section className="relative text-white min-h-screen overflow-hidden">
      {/* Video Background */}
     

      <div className="absolute inset-0 w-full h-full   ">
<BackgroundImage image={bg.src}/>

      {/* <BackgroundImage image={'images/bg/dots.png'}/> */}
{/* <BackgroundVideo src='videos/animation videos/vibrate dots short.mp4' /> */}
        {/* <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover "
        >
          <source src='videos/animation videos/vibrate dots short.mp4' type="video/mp4" />
        </video> */}
      </div>
      
      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 h-full min-h-screen">
        {/* Left Side - Text Content */}
        <div className="flex flex-col justify-center p-8 lg:p-16">
          <div className="max-w-2xl bg-white/10 backdrop-blur-lg rounded-2xl p-8 shadow-xl border border-white/20">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Digital Marketing That Grows Your Business
            </h1>
            <p className="text-lg mb-8">
              Get tailored strategies that drive traffic, boost sales, and elevate your brand.
            </p>
            <a
              href="/contact"
              className="inline-block bg-white text-indigo-700 font-semibold px-6 py-3 rounded-lg shadow hover:bg-gray-100 transition"
            >
              Get Started
            </a>
          </div>
        </div>

        {/* Right Side - Robot Spline */}
        <div className="relative  my-auto">
          <div className="w-full h-[500px] object-contain">
            <RobotSpline />
          </div>
          {/* <div className='absolute bottom-[-50] right-[20] w-50 h-30 bg-[var(--primary)] '></div> */}
        </div>
      </div>
    </section>
    </>
  );
}


{/* <DotLottieReact
          src="https://lottie.host/57cb75be-bcdf-457a-899d-98c47399b923/JbVbu23HDu.lottie"
          loop
          autoplay
          className="w-full h-full object-cover opacity-20"
        /> */}