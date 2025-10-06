'use client';

import React, { useState, KeyboardEvent, useEffect } from 'react';
import { Mail, MapPin, X } from 'lucide-react';
import { AiOutlineCheck } from 'react-icons/ai';
import BackgroundImage from '@/components/home_4/commonComponents/background/backgroundImage';
import bg from '@/assets/bg/bg-15.jpg';

const ContactSection: React.FC = () => {
  const [selectedServices, setSelectedServices] = useState<string[]>([]);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    mobile: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{ success: boolean; message: string } | null>(null);
  const [showStatus, setShowStatus] = useState(false);

  // Auto-hide status after 5 seconds
  useEffect(() => {
    if (submitStatus) {
      setShowStatus(true);
      const timer = setTimeout(() => {
        setShowStatus(false);
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [submitStatus]);

  const services = [
    'SEO',
    'Digital Marketing',
    'Web Development',
    'Mobile Development'
  ];

  const toggleService = (service: string) => {
    setSelectedServices(prev => 
      prev.includes(service)
        ? prev.filter(s => s !== service)
        : [...prev, service]
    );
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLDivElement>, service: string) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      toggleService(service);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      // Format the email content
      const emailContent = `
        <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #4f46e5;">New Contact Form Submission</h2>
          <div style="background-color: #f9fafb; padding: 20px; border-radius: 8px; margin-top: 20px;">
            <p><strong>Name:</strong> ${formData.name}</p>
            <p><strong>Email:</strong> <a href="mailto:${formData.email}" style="color: #4f46e5; text-decoration: none;">${formData.email}</a></p>
            ${formData.mobile ? `<p><strong>Mobile:</strong> <a href="tel:${formData.mobile}" style="color: #4f46e5; text-decoration: none;">${formData.mobile}</a></p>` : ''}
            ${selectedServices.length > 0 ? `
              <p><strong>Interested Services:</strong></p>
              <ul style="margin-top: 5px; padding-left: 20px;">
                ${selectedServices.map(service => `<li>${service}</li>`).join('')}
              </ul>
            ` : ''}
            <p><strong>Message:</strong></p>
            <div style="background-color: white; padding: 15px; border-radius: 6px; border: 1px solid #e5e7eb; margin-top: 5px;">
              ${formData.message.replace(/\n/g, '<br>')}
            </div>
          </div>
          <p style="margin-top: 20px; font-size: 14px; color: #6b7280;">
            This email was sent from the contact form on your website.
          </p>
        </div>
      `;

      const response = await fetch('/api/sendmail', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          to_emails: ['gowthamraajmg@gmail.com', 'digitalclicktag@gmail.com'],
          subject: `New Contact from ${formData.name}`,
          html: emailContent,
        }),
      });

      const data = await response.json();

      if (data.success) {
        setSubmitStatus({ success: true, message: 'Message sent successfully!' });
        // Reset form
        setFormData({ name: '', email: '', mobile: '', message: '' });
        setSelectedServices([]);
      } else {
        throw new Error(data.message || 'Failed to send message');
      }
    } catch (error) {
      console.error('Error sending message:', error);
      setSubmitStatus({ 
        success: false, 
        message: error instanceof Error ? error.message : 'Failed to send message' 
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <section className="relative min-h-screen px-4 py-20 overflow-hidden bg-gradient-to-br from-blue-600 to-purple-700 text-white flex items-center justify-center">
      {/* Background shapes for a modern touch */}
      <div className="absolute -top-1/4 -left-1/4 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob"></div>
      <div className="absolute -bottom-1/4 -right-1/4 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-2000"></div>
      
      <div className="relative z-10 w-full max-w-5xl mx-auto text-center">
        <div className="bg-white rounded-3xl shadow-2xl transform transition-all duration-500 ease-in-out hover:scale-[1.02] overflow-hidden">
          <div className='relative p-8 md:p-12 lg:p-16'>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-6 text-gray-900 tracking-tight leading-tight">
            Let&apos;s Connect and Create
          </h1>
          <p className="text-lg md:text-xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed">
            Don&apos;t see a plan that fits your needs? Let&apos;s create a custom solution for you. If you want to say hello, we&apos;d love to hear from you. Reach out and let&apos;s start the conversation!
          </p>

          {/* Contact Information */}
          <div className="text-left space-y-8 bg-gray-50/10 backdrop-blur-sm p-8 rounded-2xl shadow-inner border border-gray-100 animate-fade-in-left">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Our Details</h2>
            <div className="flex items-start space-x-4">
              <MapPin className="text-indigo-500 flex-shrink-0 mt-1" size={24} />
              <div>
                <h3 className="font-semibold text-gray-700">Address</h3>
                <p className="text-gray-600">Bengaluru, Karnataka, India</p>
                <p className="text-gray-600">Chennai, Tamil Nadu, India </p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <Mail className="text-indigo-500 flex-shrink-0 mt-1" size={24} />
              <div>
                <h3 className="font-semibold text-gray-700">Email</h3>
                <p className="text-indigo-600 hover:text-indigo-800 transition-colors duration-200">
                  Digitalclicktag@gmail.com
                </p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <form onSubmit={handleSubmit} className="bg-white backdrop-blur-sm p-8 rounded-2xl shadow-xl space-y-6 text-left border border-gray-100 animate-fade-in-right">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Send Us a Message</h2>
            
            <div className="relative">
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                placeholder=" "
                className="peer w-full p-4 border-2 border-gray-300 rounded-lg outline-none focus:border-indigo-500 transition-all duration-200 text-gray-800"
                required
              />
              <label
                htmlFor="name"
                className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 bg-white px-1 transition-all duration-200 peer-focus:-top-3.5 peer-focus:text-indigo-600 peer-focus:text-sm peer-focus:-translate-y-0 peer-valid:-top-3.5 peer-valid:text-indigo-600 peer-valid:text-sm peer-valid:-translate-y-0"
              >
                *Your Name
              </label>
            </div>

            <div className="relative">
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder=" "
                className="peer w-full p-4 border-2 border-gray-300 rounded-lg outline-none focus:border-indigo-500 transition-all duration-200 text-gray-800"
              />
              <label
                htmlFor="email"
                className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 bg-white px-1 transition-all duration-200 peer-focus:-top-3.5 peer-focus:text-indigo-600 peer-focus:text-sm peer-focus:-translate-y-0 peer-valid:-top-3.5 peer-valid:text-indigo-600 peer-valid:text-sm peer-valid:-translate-y-0"
              >
                Your Email
              </label>
            </div>

            <div className="relative">
              <input
                type="tel"
                id="mobile"
                name="mobile"
                value={formData.mobile}
                onChange={handleInputChange}
                placeholder=" "
                className="peer w-full p-4 border-2 border-gray-300 rounded-lg outline-none focus:border-indigo-500 transition-all duration-200 text-gray-800"
                pattern="[0-9]{10,14}"
                title="Please enter a valid 10-digit mobile number"
                required
              />
              <label
                htmlFor="mobile"
                className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 bg-white px-1 transition-all duration-200 peer-focus:-top-3.5 peer-focus:text-indigo-600 peer-focus:text-sm peer-focus:-translate-y-0 peer-valid:-top-3.5 peer-valid:text-indigo-600 peer-valid:text-sm peer-valid:-translate-y-0"
              >
                *Mobile Number
              </label>
            </div>

            {/* Service Chips */}
            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Services You&apos;re Interested In
              </label>
              <div className="flex flex-wrap gap-2">
                {services.map((service) => {
                  const isSelected = selectedServices.includes(service);
                  return (
                    <div
                      key={service}
                      role="button"
                      tabIndex={0}
                      onClick={() => toggleService(service)}
                      onKeyDown={(e) => handleKeyDown(e, service)}
                      className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 flex items-center cursor-pointer select-none
                        ${
                          isSelected
                            ? 'bg-gradient-to-r from-cyan-500 to-blue-500 text-white'
                            : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                        }`}
                    >
                      {service}
                      {isSelected && <AiOutlineCheck className="ml-1.5" />}
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="relative">
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                placeholder=" "
                rows={5}
                className="peer w-full p-4 border-2 border-gray-300 rounded-lg outline-none focus:border-indigo-500 transition-all duration-200 text-gray-800 resize-y"
                
              />
              <label
                htmlFor="message"
                className="absolute left-4 top-6 text-gray-500 bg-white px-1 transition-all duration-200 peer-focus:-top-3.5 peer-focus:text-indigo-600 peer-focus:text-sm peer-focus:-translate-y-0 peer-valid:-top-3.5 peer-valid:text-indigo-600 peer-valid:text-sm peer-valid:-translate-y-0"
              >
                Your Message
              </label>
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className={`w-full px-8 py-4 bg-indigo-600 text-white font-bold rounded-full shadow-lg focus:outline-none focus:ring-4 focus:ring-indigo-300 transition-all duration-300 ease-in-out text-lg md:text-xl ${
                isSubmitting 
                  ? 'opacity-70 cursor-not-allowed' 
                  : 'hover:bg-indigo-700 hover:scale-105 transform'
              }`}
            >
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </button>
            {/* Status Modal */}
            {submitStatus && showStatus && (
              <div className="fixed inset-0 bg-transparent bg-opacity-100 flex items-center justify-center z-50 p-4">
                <div className={`relative bg-white rounded-xl shadow-2xl max-w-md w-full p-6 transform transition-all duration-300 ${
                  showStatus ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
                }`}>
                  <button 
                    onClick={() => setShowStatus(false)}
                    className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 focus:outline-none"
                  >
                    <X size={24} />
                  </button>
                  <div className="flex items-start">
                    <div className={`flex-shrink-0 h-10 w-10 rounded-full flex items-center justify-center ${
                      submitStatus.success ? 'bg-green-100' : 'bg-red-100'
                    }`}>
                      {submitStatus.success ? (
                        <AiOutlineCheck className="h-6 w-6 text-green-600" />
                      ) : (
                        <X className="h-6 w-6 text-red-600" />
                      )}
                    </div>
                    <div className="ml-4">
                      <h3 className={`text-lg font-medium ${
                        submitStatus.success ? 'text-green-800' : 'text-red-800'
                      }`}>
                        {submitStatus.success ? 'Success!' : 'Error'}
                      </h3>
                      <p className="mt-1 text-gray-700">{submitStatus.message}</p>
                    </div>
                  </div>
                  <div className="mt-6">
                    <button
                      type="button"
                      onClick={() => setShowStatus(false)}
                      className={`w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white ${
                        submitStatus.success
                          ? 'bg-green-600 hover:bg-green-700'
                          : 'bg-red-600 hover:bg-red-700'
                      } focus:outline-none focus:ring-2 focus:ring-offset-2 ${
                        submitStatus.success ? 'focus:ring-green-500' : 'focus:ring-red-500'
                      }`}
                    >
                      Close
                    </button>
                  </div>
                </div>
              </div>
            )}
          </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;