import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from '../i18n';

const AboutPage = () => {
  const { t } = useTranslation();

  return (
    <div className="py-12 bg-white">
      <div className="container-custom">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6">{t('aboutPage.hero.title')}</h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            {t('aboutPage.hero.description')}
          </p>
        </div>

        {/* Our History */}
        <div className="flex flex-col md:flex-row items-center mb-20 gap-8">
          <div className="md:w-1/2">
            <img 
             src={`${process.env.PUBLIC_URL}/Images/bannerv1.png`}
              alt="Sweet Delights early days" 
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>
          <div className="md:w-1/2">
            <h2 className="text-3xl font-serif font-bold mb-4">{t('aboutPage.history.title')}</h2>
            <p className="text-gray-600 mb-4">
              {t('aboutPage.history.paragraph1')}
            </p>
            <p className="text-gray-600 mb-4">
              {t('aboutPage.history.paragraph2')}
            </p>
            <p className="text-gray-600">
              {t('aboutPage.history.paragraph3')}
            </p>
          </div>
        </div>

        {/* Our Values */}
        <div className="mb-20">
          <h2 className="text-3xl font-serif font-bold mb-8 text-center">{t('aboutPage.values.title')}</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary bg-opacity-20 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-serif font-semibold mb-3 text-center">{t('aboutPage.values.quality.title')}</h3>
              <p className="text-gray-600 text-center">
                {t('aboutPage.values.quality.description')}
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary bg-opacity-20 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-serif font-semibold mb-3 text-center">{t('aboutPage.values.service.title')}</h3>
              <p className="text-gray-600 text-center">
                {t('aboutPage.values.service.description')}
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary bg-opacity-20 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
                </svg>
              </div>
              <h3 className="text-xl font-serif font-semibold mb-3 text-center">{t('aboutPage.values.taste.title')}</h3>
              <p className="text-gray-600 text-center">
                {t('aboutPage.values.taste.description')}
              </p>
            </div>
          </div>
        </div>

        {/* Our Team */}
        <div className="mb-20">
          <h2 className="text-3xl font-serif font-bold mb-8 text-center">{t('aboutPage.team.title')}</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Team Member 1 */}
            <div className="text-center">
              <div className="mb-4 rounded-full overflow-hidden w-48 h-48 mx-auto">
                <img 
                  src={`${process.env.PUBLIC_URL}/Images/bannerv1.png`}
                  alt={t('aboutPage.team.members.emma.name')} 
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-serif font-semibold">{t('aboutPage.team.members.emma.name')}</h3>
              <p className="text-primary mb-2">{t('aboutPage.team.members.emma.position')}</p>
              <p className="text-gray-600">
                {t('aboutPage.team.members.emma.description')}
              </p>
            </div>

            {/* Team Member 2 */}
            <div className="text-center">
              <div className="mb-4 rounded-full overflow-hidden w-48 h-48 mx-auto">
                <img 
                  src={`${process.env.PUBLIC_URL}/Images/bannerv1.png`}
                  alt={t('aboutPage.team.members.michael.name')} 
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-serif font-semibold">{t('aboutPage.team.members.michael.name')}</h3>
              <p className="text-primary mb-2">{t('aboutPage.team.members.michael.position')}</p>
              <p className="text-gray-600">
                {t('aboutPage.team.members.michael.description')}
              </p>
            </div>

            {/* Team Member 3 */}
            <div className="text-center">
              <div className="mb-4 rounded-full overflow-hidden w-48 h-48 mx-auto">
                <img 
                  src={`${process.env.PUBLIC_URL}/Images/bannerv1.png`}
                  alt={t('aboutPage.team.members.sophia.name')} 
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-serif font-semibold">{t('aboutPage.team.members.sophia.name')}</h3>
              <p className="text-primary mb-2">{t('aboutPage.team.members.sophia.position')}</p>
              <p className="text-gray-600">
                {t('aboutPage.team.members.sophia.description')}
              </p>
            </div>

            {/* Team Member 4 */}
            <div className="text-center">
              <div className="mb-4 rounded-full overflow-hidden w-48 h-48 mx-auto">
                <img 
                  src={`${process.env.PUBLIC_URL}/Images/bannerv1.png`}
                  alt={t('aboutPage.team.members.james.name')} 
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-serif font-semibold">{t('aboutPage.team.members.james.name')}</h3>
              <p className="text-primary mb-2">{t('aboutPage.team.members.james.position')}</p>
              <p className="text-gray-600">
                {t('aboutPage.team.members.james.description')}
              </p>
            </div>
          </div>
        </div>

        {/* Our Bakery */}
        <div className="mb-12">
          <h2 className="text-3xl font-serif font-bold mb-8 text-center">{t('aboutPage.bakery.title')}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <img 
                src={`${process.env.PUBLIC_URL}/Images/bannerv1.png`}
                alt="Sweet Delights Bakery Interior" 
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </div>
            <div>
              <img 
                src={`${process.env.PUBLIC_URL}/Images/bannerv1.png`}
                alt="Sweet Delights Cake Display" 
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center py-8">
          <h3 className="text-2xl font-serif font-bold mb-4">{t('aboutPage.cta.title')}</h3>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            {t('aboutPage.cta.description')}
          </p>
          <div className="flex justify-center gap-4 flex-wrap">
            <Link to="/products" className="btn btn-primary">
              {t('aboutPage.cta.viewCakes')}
            </Link>
            <Link to="/contact" className="btn btn-secondary">
              {t('aboutPage.cta.contactUs')}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
