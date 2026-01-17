import { Header } from '../components/Header';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { useState } from 'react';
import contactBg from 'figma:asset/bc2826e44ef3d89d9bb7562c7c63870f28770a8d.png';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'motion/react';

export function ContactPage() {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.language === 'ar';

  // Contact information from environment variables with fallback to translations
  const env = (import.meta as any).env as Record<string, string | undefined>;
  const langKey = i18n.language.toUpperCase();
  
  const contactInfo = {
    email: {
      info: env.VITE_CONTACT_EMAIL_INFO || t('contact.email.info'),
      support: env.VITE_CONTACT_EMAIL_SUPPORT || t('contact.email.support'),
    },
    phone: {
      phone1: env.VITE_CONTACT_PHONE_1 || t('contact.phone.phone1'),
      phone2: env.VITE_CONTACT_PHONE_2 || t('contact.phone.phone2'),
    },
    address: env.VITE_CONTACT_ADDRESS || t('contact.address.location'),
    officeHours: {
      weekdays: env[`VITE_CONTACT_OFFICE_HOURS_WEEKDAYS_${langKey}`] || t('contact.officeHours.weekdays'),
      weekdaysTime: env[`VITE_CONTACT_OFFICE_HOURS_WEEKDAYS_TIME_${langKey}`] || t('contact.officeHours.weekdaysTime'),
      weekend: env[`VITE_CONTACT_OFFICE_HOURS_WEEKEND_${langKey}`] || t('contact.officeHours.weekend'),
      closed: env[`VITE_CONTACT_OFFICE_HOURS_CLOSED_${langKey}`] || t('contact.officeHours.closed'),
    },
  };

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
    alert(t('contact.form.successMessage'));
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
        
        <div className="flex-1 overflow-y-auto mt-5 px-6 py-6">
          <div className="container mx-auto max-w-6xl">
            {/* Hero - Compact */}
            <motion.div 
              className={`mb-6 mt-8 ${isRTL ? 'text-right' : 'text-left'}`}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
            >
              <motion.h1 
                className="text-white text-4xl md:text-5xl mb-2"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.1, ease: 'easeOut' }}
              >
                {t('contact.title')}
              </motion.h1>
              <motion.p 
                className="text-white/70 text-base"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2, ease: 'easeOut' }}
              >
                {t('contact.subtitle')}
              </motion.p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Contact Info - Compact */}
              <motion.div 
                className="lg:col-span-1 space-y-4"
                initial={{ opacity: 0, x: isRTL ? 30 : -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.3, ease: 'easeOut' }}
              >
                <motion.div 
                  className="bg-zinc-900/40 p-4 rounded-xl border border-white/10 backdrop-blur-sm"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                >
                  <div className={`flex items-start gap-3 ${isRTL ? 'text-right' : 'text-left'}`}>
                    <div className="bg-white/10 p-2 rounded-lg">
                      <Mail className="text-white" size={20} />
                    </div>
                    <div className={isRTL ? 'text-right' : 'text-left'}>
                      <h3 className="text-white text-sm mb-1">{t('contact.email.title')}</h3>
                      <p className="text-white/60 text-xs">{contactInfo.email.info}</p>
                      <p className="text-white/60 text-xs">{contactInfo.email.support}</p>
                    </div>
                  </div>
                </motion.div>

                <motion.div 
                  className="bg-zinc-900/40 p-4 rounded-xl border border-white/10 backdrop-blur-sm"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                >
                  <div className={`flex items-start gap-3  ${isRTL ? 'text-right' : 'text-left'}`}>
                    <div className="bg-white/10 p-2 rounded-lg">
                      <Phone className="text-white" size={20} />
                    </div>
                    <div className={isRTL ? 'text-right' : 'text-left'}>
                      <h3 className="text-white text-sm mb-1">{t('contact.phone.title')}</h3>
                      <p className="text-white/60 text-xs">{contactInfo.phone.phone1}</p>
                      <p className="text-white/60 text-xs">{contactInfo.phone.phone2}</p>
                    </div>
                  </div>
                </motion.div>

                <motion.div 
                  className="bg-zinc-900/40 p-4 rounded-xl border border-white/10 backdrop-blur-sm"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.6 }}
                >
                  <div className={`flex items-start gap-3 ${isRTL ? 'text-right' : 'text-left'}`}>
                    <div className="bg-white/10 p-2 rounded-lg">
                      <MapPin className="text-white" size={20} />
                    </div>
                    <div className={isRTL ? 'text-right' : 'text-left'}>
                      <h3 className="text-white text-sm mb-1">{t('contact.address.title')}</h3>
                      <p className="text-white/60 text-xs">
                        {contactInfo.address}
                      </p>
                    </div>
                  </div>
                </motion.div>

                {/* Office Hours */}
                <motion.div 
                  className={`bg-zinc-900/40 p-4 rounded-xl border border-white/10 backdrop-blur-sm ${isRTL ? 'text-right' : 'text-left'}`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.7 }}
                >
                  <h3 className="text-white text-sm mb-3">{t('contact.officeHours.title')}</h3>
                  <div className={`space-y-2 text-xs ${isRTL ? 'text-right' : 'text-left'}`}>
                    <div className={`flex justify-between text-white/60 ${isRTL ? 'flex-row-reverse' : ''}`}>
                      <span>{contactInfo.officeHours.weekdays}</span>
                      <span>{contactInfo.officeHours.weekdaysTime}</span>
                    </div>
                    <div className={`flex justify-between text-white/60 ${isRTL ? 'flex-row-reverse' : ''}`}>
                      <span>{contactInfo.officeHours.weekend}</span>
                      <span>{contactInfo.officeHours.closed}</span>
                    </div>
                  </div>
                </motion.div>
              </motion.div>

              {/* Contact Form - Compact */}
              <motion.div 
                className="lg:col-span-2"
                initial={{ opacity: 0, x: isRTL ? -30 : 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.3, ease: 'easeOut' }}
              >
                <motion.div 
                  className={`bg-zinc-900/40 p-6 rounded-xl border border-white/10 backdrop-blur-sm ${isRTL ? 'text-right' : 'text-left'}`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                >
                  <h2 className="text-white text-xl mb-4">{t('contact.form.title')}</h2>
                  
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="text-white/80 text-xs mb-1 block">{t('contact.form.name')}</label>
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
                        <label className="text-white/80 text-xs mb-1 block">{t('contact.form.email')}</label>
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
                        <label className="text-white/80 text-xs mb-1 block">{t('contact.form.phone')}</label>
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          className="w-full bg-black/50 border border-white/10 rounded-lg px-3 py-2 text-white text-sm focus:border-white/30 focus:outline-none transition-colors"
                        />
                      </div>
                      
                      <div>
                        <label className="text-white/80 text-xs mb-1 block">{t('contact.form.subject')}</label>
                        <select
                          name="subject"
                          value={formData.subject}
                          onChange={handleChange}
                          className="w-full bg-black/50 border border-white/10 rounded-lg px-3 py-2 text-white text-sm focus:border-white/30 focus:outline-none transition-colors"
                          required
                        >
                          <option value="">{t('contact.form.subjectPlaceholder')}</option>
                          <option value="general">{t('contact.form.subjectGeneral')}</option>
                          <option value="partnership">{t('contact.form.subjectPartnership')}</option>
                          <option value="support">{t('contact.form.subjectSupport')}</option>
                          <option value="career">{t('contact.form.subjectCareer')}</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="text-white/80 text-xs mb-1 block">{t('contact.form.message')}</label>
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
                      className={`w-full md:w-auto bg-white text-black px-6 py-2.5 text-sm rounded-lg hover:bg-white/90 transition-colors flex items-center justify-center gap-2 ${isRTL ? 'flex-row-reverse' : ''}`}
                    >
                      <span>{t('contact.form.sendButton')}</span>
                      <Send size={16} />
                    </button>
                  </form>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}