'use client'

import { Button } from '@/components/ui/button'
import { FaCheckCircle } from 'react-icons/fa'
import { motion } from 'framer-motion'

export default function AboutPage() {
  return (
    <div className="text-gray-800">
      {/* Hero Section */}
      <section className="bg-gray-100 py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">About Marko</h1>
          <p className="text-lg text-gray-600">Crafting Data-Driven Digital Marketing Solutions</p>
        </div>
      </section>

      {/* Experience + Overview */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 grid md:grid-cols-2 gap-8 items-center">
          <div>
            <p className="text-indigo-600 font-semibold mb-2">21+ Years of Experience</p>
            <h2 className="text-3xl font-bold mb-4">Who We Are & What Drives Us</h2>
            <p className="text-gray-600 mb-4">
              At Marko, we specialize in crafting innovative digital marketing strategies that drive real business growth. 
              Our expert team ensures your brand thrives in today’s competitive landscape.
            </p>
            <ul className="space-y-2">
              {[
                'PPC & Paid Ads',
                'Conversion Optimization',
                'Social Media Growth',
                'Brand Strategy',
                'Performance Marketing',
                'Content Marketing',
              ].map(item => (
                <li key={item} className="flex items-center gap-2">
                  <FaCheckCircle className="text-green-500" /> {item}
                </li>
              ))}
            </ul>
          </div>
          <img
            src="/images/about-illustration.svg"
            alt="Digital Strategy"
            className="w-full max-w-md mx-auto"
          />
        </div>
      </section>

      {/* Core Values */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-8">Our Core Values</h2>
          <div className="grid md:grid-cols-3 gap-8 text-left">
            {[
              {
                title: 'Innovation & Integrity',
                desc: 'Every decision is backed by real-time analytics for maximum impact.',
              },
              {
                title: 'Collaboration',
                desc: 'Cutting-edge marketing techniques to keep you ahead of the competition.',
              },
              {
                title: 'Results Driven',
                desc: 'Clear insights and performance tracking, so you always know your ROI.',
              },
            ].map((val, i) => (
              <div key={i} className="bg-white shadow-md p-6 rounded-xl hover:shadow-lg">
                <h3 className="font-semibold text-xl mb-2">{val.title}</h3>
                <p className="text-gray-600">{val.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-8">Meet the Team</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { name: 'Jordan Lee', role: 'Head of Creative' },
              { name: 'Chloe Tan', role: 'Senior SEO Specialist' },
              { name: 'Daniel Cruz', role: 'Performance Marketing Lead' },
            ].map((member, i) => (
              <div key={i} className="p-4 border rounded-lg">
                <img
                  src={`/images/team-${i + 1}.jpg`}
                  alt={member.name}
                  className="w-32 h-32 mx-auto rounded-full mb-4 object-cover"
                />
                <h3 className="text-lg font-semibold">{member.name}</h3>
                <p className="text-sm text-gray-600">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="bg-gray-100 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">Simple Steps to Digital Success</h2>
          <div className="grid md:grid-cols-4 gap-6 text-center">
            {['Discovery', 'Strategy', 'Execution', 'Growth'].map((step, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.05 }}
                className="bg-white p-6 rounded-xl shadow-md"
              >
                <h3 className="text-2xl font-bold mb-2">0{i + 1}</h3>
                <p className="text-lg font-semibold">{step}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-8">What Our Clients Say</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                name: 'Sophia Lewis',
                role: 'Founder',
                text: 'From SEO to paid ads, Marko nailed every aspect. Website traffic skyrocketed!',
              },
              {
                name: 'James Peterson',
                role: 'COO, BrightWave',
                text: 'Their branding expertise helped us build a powerful online identity.',
              },
              {
                name: 'Emma Richard',
                role: 'CEO, Nexatech',
                text: 'Marko helped us double our revenue in six months!',
              },
              {
                name: 'David Mont',
                role: 'Marketing Director',
                text: 'Their data-driven strategies gave us a true edge.',
              },
            ].map((review, i) => (
              <div key={i} className="p-4 border rounded-lg text-left shadow-sm">
                <p className="text-gray-600 mb-4">“{review.text}”</p>
                <div>
                  <p className="font-semibold">{review.name}</p>
                  <p className="text-sm text-gray-500">{review.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-indigo-600 text-white py-16 text-center">
        <h2 className="text-3xl font-bold mb-4">Let’s Talk Strategy</h2>
        <p className="mb-6">Partner with Marko and elevate your brand today!</p>
        <Button className="bg-white text-indigo-600 font-semibold hover:bg-gray-200 transition">Get Started</Button>
      </section>
    </div>
  )
}
