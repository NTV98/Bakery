import React, { useState } from 'react';
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaClock } from 'react-icons/fa';
import { useTranslation } from '../i18n';

const ContactPage = () => {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Clear error when user types
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    
    // Validate name
    if (!formData.name.trim()) {
      newErrors.name = t('contactPage.form.name.required');
    }
    
    // Validate email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      newErrors.email = t('contactPage.form.email.required');
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = t('contactPage.form.email.invalid');
    }
    
    // Validate phone (optional but if provided must be valid)
    if (formData.phone.trim() && !/^[0-9]{10,}$/.test(formData.phone.replace(/[^0-9]/g, ''))) {
      newErrors.phone = t('contactPage.form.phone.invalid');
    }
    
    // Validate message
    if (!formData.message.trim()) {
      newErrors.message = t('contactPage.form.message.required');
    } else if (formData.message.trim().length < 10) {
      newErrors.message = t('contactPage.form.message.tooShort');
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (validateForm()) {
      // Here you would typically send the form data to your server or API
      console.log('Form submitted successfully:', formData);
      setIsSubmitted(true);
      
      // Reset form after submission
      setFormData({
        name: '',
        email: '',
        phone: '',
        message: '',
      });
    }
  };

  return (
    <div className="bg-white py-12">
      <div className="container-custom">
        <h1 className="text-4xl font-serif font-bold mb-8 text-center">{t('contactPage.title')}</h1>
        
        {/* Contact Info and Form */}
        <div className="flex flex-col lg:flex-row gap-12 mb-16">
          {/* Contact Information */}
          <div className="lg:w-1/3">
            <h2 className="text-2xl font-serif font-semibold mb-6">{t('contactPage.getInTouch.title')}</h2>
            <p className="text-gray-600 mb-8">
              {t('contactPage.getInTouch.description')}
            </p>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="mt-1 mr-4 bg-primary bg-opacity-20 p-3 rounded-full">
                  <FaMapMarkerAlt className="text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">{t('contactPage.contactInfo.address.title')}</h3>
                  <p className="text-gray-600">
                    {t('contactPage.contactInfo.address.value')}
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="mt-1 mr-4 bg-primary bg-opacity-20 p-3 rounded-full">
                  <FaPhone className="text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">{t('contactPage.contactInfo.phone.title')}</h3>
                  <p className="text-gray-600">{t('contactPage.contactInfo.phone.value')}</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="mt-1 mr-4 bg-primary bg-opacity-20 p-3 rounded-full">
                  <FaEnvelope className="text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">{t('contactPage.contactInfo.email.title')}</h3>
                  <p className="text-gray-600">{t('contactPage.contactInfo.email.value')}</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="mt-1 mr-4 bg-primary bg-opacity-20 p-3 rounded-full">
                  <FaClock className="text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">{t('contactPage.contactInfo.hours.title')}</h3>
                  <p className="text-gray-600 whitespace-pre-line">
                    {t('contactPage.contactInfo.hours.value')}
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Contact Form */}
          <div className="lg:w-2/3">
            <div className="bg-white rounded-lg shadow-md p-8">
              <h2 className="text-2xl font-serif font-semibold mb-6">{t('contactPage.form.title')}</h2>
              
              {isSubmitted ? (
                <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-6">
                  <p>{t('contactPage.form.successMessage')}</p>
                </div>
              ) : null}
              
              <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label htmlFor="name" className="block text-gray-700 mb-2">{t('contactPage.form.name.label')}</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className={`w-full p-3 border ${errors.name ? 'border-red-500' : 'border-gray-300'} rounded-md focus:outline-none focus:ring-2 focus:ring-primary`}
                      placeholder={t('contactPage.form.name.placeholder')}
                    />
                    {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-gray-700 mb-2">{t('contactPage.form.email.label')}</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className={`w-full p-3 border ${errors.email ? 'border-red-500' : 'border-gray-300'} rounded-md focus:outline-none focus:ring-2 focus:ring-primary`}
                      placeholder={t('contactPage.form.email.placeholder')}
                    />
                    {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                  </div>
                </div>
                
                <div className="mb-6">
                  <label htmlFor="phone" className="block text-gray-700 mb-2">{t('contactPage.form.phone.label')}</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className={`w-full p-3 border ${errors.phone ? 'border-red-500' : 'border-gray-300'} rounded-md focus:outline-none focus:ring-2 focus:ring-primary`}
                    placeholder={t('contactPage.form.phone.placeholder')}
                  />
                  {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
                </div>
                
                <div className="mb-6">
                  <label htmlFor="message" className="block text-gray-700 mb-2">{t('contactPage.form.message.label')}</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="5"
                    className={`w-full p-3 border ${errors.message ? 'border-red-500' : 'border-gray-300'} rounded-md focus:outline-none focus:ring-2 focus:ring-primary`}
                    placeholder={t('contactPage.form.message.placeholder')}
                  ></textarea>
                  {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
                </div>
                
                <button 
                  type="submit" 
                  className="btn btn-primary py-3 px-6"
                >
                  {t('contactPage.form.submit')}
                </button>
              </form>
            </div>
          </div>
        </div>
        
        {/* Map Section */} 
        <div className="mb-12">
          <h2 className="text-2xl font-serif font-semibold mb-6 text-center">{t('contactPage.map.title')}</h2>
          <div className="rounded-lg overflow-hidden shadow-lg h-96">
            {/* Replace with actual Google Maps embed code in production */}
            <div className="w-full h-full bg-gray-200 flex items-center justify-center">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d510.3606899469342!2d106.62839492360646!3d10.812916169524652!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752b10d3f0046d%3A0x24d75acf037f843!2zQ8O0bmcgdHkgWWFrdWx0IENoaSBOaMOhbmggQ2jhur8gTGFuIFZpw6pu!5e1!3m2!1svi!2s!4v1743758147779!5m2!1svi!2s"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Sweet Delights Bakery Location"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
