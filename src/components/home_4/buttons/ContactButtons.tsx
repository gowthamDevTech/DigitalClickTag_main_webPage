'use client';
import { SiWhatsapp } from 'react-icons/si';
import { AiOutlinePhone, AiOutlineMail } from 'react-icons/ai';
import { useState } from 'react';
import  ContactSection  from '@/components/home_4/contactComponents/contactComponents';

const ContactButtons = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const openDialog = () => setIsDialogOpen(true);
  const closeDialog = () => setIsDialogOpen(false);
  const buttonBaseClasses = 'w-[50px] h-[50px] rounded-full flex items-center justify-center shadow-md m-2.5 text-white text-2xl no-underline transition-transform duration-200 hover:scale-110';

  return (
    <div className="fixed bottom-8 right-8 flex flex-col z-[1000]">
      <a
        href="https://wa.me/919380203420?text=Hi! I'm interested in your digital marketing and app development services. Please share more details. Thanks!"
        target="_blank"
        rel="noopener noreferrer"
        className={`${buttonBaseClasses} bg-[#25D366] hover:scale-110`}
      >
        <SiWhatsapp />
      </a>
      <a
        href="tel:+919380203420"
        className={`${buttonBaseClasses} bg-blue-500 hover:scale-110`}
        aria-label="Call us"
      >
        <AiOutlinePhone />
      </a>
      
      <button
        onClick={openDialog}
        className={`${buttonBaseClasses} bg-indigo-600 border-none cursor-pointer hover:scale-110`}
        aria-label="Open Contact Form"
      >
        <AiOutlineMail />
      </button>

      {/* Contact Form Dialog */}
      {isDialogOpen && (
        <div 
          className="fixed top-0 left-0 right-0 bottom-0 bg-transparent bg-blur-sm bg-opacity-50 flex items-center justify-center z-[2000]" 
          onClick={closeDialog}
        >
          <div 
            className="bg-white px-4 pb-8  pt-10 rounded-lg max-w-[95%] max-h-[95%] overflow-auto relative w-full"
            onClick={e => e.stopPropagation()}
          >
            <button 
              onClick={closeDialog}
              className="absolute top-0 right-2 bg-none border-none text-4xl cursor-pointer text-gray-500 hover:text-gray-700"
              aria-label="Close dialog"
            >
              &times;
            </button>
             
              <ContactSection/>
         


          
          </div>
        </div>
      )}
    </div>
  );
};

export default ContactButtons;
