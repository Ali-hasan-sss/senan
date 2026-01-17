import { Header } from '../components/Header';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { useState } from 'react';
import contactBg from 'figma:asset/bc2826e44ef3d89d9bb7562c7c63870f28770a8d.png';
import React from 'react';
export function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
    alert('Your message has been sent successfully!');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="h-screen bg-black relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img 
          src={contactBg} 
          alt="" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/70" />
      </div>
      
      {/* Content */}
      <div className="relative h-full flex flex-col" style={{ zIndex: 10 }}>
        <Header />
        
        <div className="flex-1 overflow-y-auto px-6 py-6">
          <div className="container mx-auto max-w-6xl">
            {/* Hero - Compact */}
            <div className="mb-6 mt-8">
              <h1 className="text-white text-4xl md:text-5xl mb-2">Contact Us</h1>
              <p className="text-white/70 text-base">
                We are here to answer your inquiries and assist you
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Contact Info - Compact */}
              <div className="lg:col-span-1 space-y-4">
                <div className="bg-zinc-900/40 p-4 rounded-xl border border-white/10 backdrop-blur-sm">
                  <div className="flex items-start gap-3">
                    <div className="bg-white/10 p-2 rounded-lg">
                      <Mail className="text-white" size={20} />
                    </div>
                    <div>
                      <h3 className="text-white text-sm mb-1">Email</h3>
                      <p className="text-white/60 text-xs">info@sinan.com</p>
                      <p className="text-white/60 text-xs">support@sinan.com</p>
                    </div>
                  </div>
                </div>

                <div className="bg-zinc-900/40 p-4 rounded-xl border border-white/10 backdrop-blur-sm">
                  <div className="flex items-start gap-3">
                    <div className="bg-white/10 p-2 rounded-lg">
                      <Phone className="text-white" size={20} />
                    </div>
                    <div>
                      <h3 className="text-white text-sm mb-1">Phone</h3>
                      <p className="text-white/60 text-xs">+966 11 XXX XXXX</p>
                      <p className="text-white/60 text-xs">+966 11 XXX XXXX</p>
                    </div>
                  </div>
                </div>

                <div className="bg-zinc-900/40 p-4 rounded-xl border border-white/10 backdrop-blur-sm">
                  <div className="flex items-start gap-3">
                    <div className="bg-white/10 p-2 rounded-lg">
                      <MapPin className="text-white" size={20} />
                    </div>
                    <div>
                      <h3 className="text-white text-sm mb-1">Address</h3>
                      <p className="text-white/60 text-xs">
                        Riyadh, Saudi Arabia
                      </p>
                    </div>
                  </div>
                </div>

                {/* Office Hours */}
                <div className="bg-zinc-900/40 p-4 rounded-xl border border-white/10 backdrop-blur-sm">
                  <h3 className="text-white text-sm mb-3">Office Hours</h3>
                  <div className="space-y-2 text-xs">
                    <div className="flex justify-between text-white/60">
                      <span>Sunday - Thursday</span>
                      <span>8:00 AM - 5:00 PM</span>
                    </div>
                    <div className="flex justify-between text-white/60">
                      <span>Friday - Saturday</span>
                      <span>Closed</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Contact Form - Compact */}
              <div className="lg:col-span-2">
                <div className="bg-zinc-900/40 p-6 rounded-xl border border-white/10 backdrop-blur-sm">
                  <h2 className="text-white text-xl mb-4">Send us a Message</h2>
                  
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="text-white/80 text-xs mb-1 block">Name</label>
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          className="w-full bg-black/50 border border-white/10 rounded-lg px-3 py-2 text-white text-sm focus:border-white/30 focus:outline-none transition-colors"
                          required
                        />
                      </div>
                      
                      <div>
                        <label className="text-white/80 text-xs mb-1 block">Email</label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          className="w-full bg-black/50 border border-white/10 rounded-lg px-3 py-2 text-white text-sm focus:border-white/30 focus:outline-none transition-colors"
                          required
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="text-white/80 text-xs mb-1 block">Phone</label>
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          className="w-full bg-black/50 border border-white/10 rounded-lg px-3 py-2 text-white text-sm focus:border-white/30 focus:outline-none transition-colors"
                        />
                      </div>
                      
                      <div>
                        <label className="text-white/80 text-xs mb-1 block">Subject</label>
                        <select
                          name="subject"
                          value={formData.subject}
                          onChange={handleChange}
                          className="w-full bg-black/50 border border-white/10 rounded-lg px-3 py-2 text-white text-sm focus:border-white/30 focus:outline-none transition-colors"
                          required
                        >
                          <option value="">Select Subject</option>
                          <option value="general">General Inquiry</option>
                          <option value="partnership">Partnership</option>
                          <option value="support">Technical Support</option>
                          <option value="career">Career Opportunities</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="text-white/80 text-xs mb-1 block">Message</label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows={4}
                        className="w-full bg-black/50 border border-white/10 rounded-lg px-3 py-2 text-white text-sm focus:border-white/30 focus:outline-none transition-colors resize-none"
                        required
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full md:w-auto bg-white text-black px-6 py-2.5 text-sm rounded-lg hover:bg-white/90 transition-colors flex items-center justify-center gap-2"
                    >
                      <span>Send Message</span>
                      <Send size={16} />
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}