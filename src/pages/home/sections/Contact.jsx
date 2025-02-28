import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import toast, { Toaster } from 'react-hot-toast';
import { Loader2 } from 'lucide-react';


const ContactForm = () => {
  const [isLoading, setIsLoading] = useState(false);
  const form = useRef();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const result = await emailjs.sendForm(
        'service_tmyu0xc', 
        'template_grzqf0j', 
        form.current,
        'qU5VLx1hr73hWOpX4' 
      );

      if (result.text === 'OK') {
        toast.success('Message sent successfully!');
        form.current.reset();
      }
    } catch (error) {
      console.error('Error:', error);
      toast.error('Failed to send message. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="contact" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-[#2E7D32] mb-12">Get In Touch</h2>
        <div className="flex flex-col md:flex-row gap-8 items-center max-w-6xl mx-auto">
          {/* Image Section */}
          <div className="w-full md:w-1/2 h-[400px]">
            <img
              src="/images/lisa-hobbs-mRaNok_Ld6s-unsplash.webp"
              alt="Spices"
              className="w-full h-full object-cover rounded-lg shadow-lg"
            />
          </div>

          {/* Form Section */}
          <div className="w-full md:w-1/2">
            <form ref={form} onSubmit={handleSubmit}  className="bg-white p-8 rounded-lg shadow-lg">
              <div className="mb-6">
                <label htmlFor="user_name" className="block text-gray-700 text-sm font-medium mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="use_name"
                  name="user_name"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#2E7D32] focus:border-transparent"
                  required
                />
              </div>

              <div className="mb-6">
                <label htmlFor="user_email" className="block text-gray-700 text-sm font-medium mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="user_email"
                  name="user_email"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#2E7D32] focus:border-transparent"
                  required
                />
              </div>

              <div className="mb-6">
                <label htmlFor="message" className="block text-gray-700 text-sm font-medium mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#2E7D32] focus:border-transparent"
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={isLoading}
                className="w-full bg-[#2E7D32] text-white py-3 px-6 rounded-md hover:bg-[#1B5E20] transition-colors duration-300 font-medium"
              >
                 {isLoading ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      </>
                  )}
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
      <Toaster position="bottom-right" />
    </section>
  );
};

export default ContactForm;
