import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebook, FaInstagram, FaTwitter, FaPinterest, FaMapMarkerAlt, FaPhone, FaEnvelope } from 'react-icons/fa';
import { useTranslation } from '../../i18n';

const Footer = () => {
  const { t } = useTranslation();
  
  return (
    <footer className="bg-dark text-white pt-12 pb-6 dark:bg-gray-900">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* About */}
          <div>
            <h3 className="text-2xl font-serif mb-4">Sweet Delights</h3>
            <p className="text-gray-300 mb-4">
              {t('footer.about.description')}
            </p>
            <div className="flex space-x-4">
              <a href="https://facebook.com" className="text-gray-300 hover:text-primary transition">
                <FaFacebook size={24} />
              </a>
              <a href="https://instagram.com" className="text-gray-300 hover:text-primary transition">
                <FaInstagram size={24} />
              </a>
              <a href="https://twitter.com" className="text-gray-300 hover:text-primary transition">
                <FaTwitter size={24} />
              </a>
              <a href="https://pinterest.com" className="text-gray-300 hover:text-primary transition">
                <FaPinterest size={24} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-serif mb-4">{t('footer.quickLinks.title')}</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-primary transition">{t('footer.quickLinks.home')}</Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-300 hover:text-primary transition">{t('footer.quickLinks.about')}</Link>
              </li>
              <li>
                <Link to="/products" className="text-gray-300 hover:text-primary transition">{t('footer.quickLinks.products')}</Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-primary transition">{t('footer.quickLinks.contact')}</Link>
              </li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h3 className="text-xl font-serif mb-4">{t('footer.categories.title')}</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/products?category=birthday" className="text-gray-300 hover:text-primary transition">{t('footer.categories.birthday')}</Link>
              </li>
              <li>
                <Link to="/products?category=wedding" className="text-gray-300 hover:text-primary transition">{t('footer.categories.wedding')}</Link>
              </li>
              <li>
                <Link to="/products?category=custom" className="text-gray-300 hover:text-primary transition">{t('footer.categories.custom')}</Link>
              </li>
              <li>
                <Link to="/products?category=pastries" className="text-gray-300 hover:text-primary transition">{t('footer.categories.pastries')}</Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xl font-serif mb-4">{t('footer.contact.title')}</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <FaMapMarkerAlt className="mt-1 mr-3 text-primary" />
                <span className="text-gray-300">{t('contactPage.contactInfo.address.value')}</span>
              </li>
              <li className="flex items-center">
                <FaPhone className="mr-3 text-primary" />
                <span className="text-gray-300">{t('contactPage.contactInfo.phone.value')}</span>
              </li>
              <li className="flex items-center">
                <FaEnvelope className="mr-3 text-primary" />
                <span className="text-gray-300">{t('contactPage.contactInfo.email.value')}</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-6 border-t border-gray-700 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Sweet Delights. {t('footer.copyright')}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
