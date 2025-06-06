import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from '../../i18n';

const Banner = () => {
  const { t } = useTranslation();

  return (
    <div className="relative bg-dark">
      <div className="absolute inset-0">
        <img src={`${process.env.PUBLIC_URL}/Images/bannerv1.png`}
          alt={t('banner.alt')}
          className="w-full h-full object-cover opacity-50"
        />
      </div>
      <div className="container-custom relative z-10 py-32 px-4 sm:px-6 lg:px-8 flex items-center">
        <div className="max-w-lg">
          <h1 className="text-4xl font-bold text-white sm:text-5xl md:text-6xl font-serif">
            {t('banner.title')}
          </h1>
          <p className="mt-6 text-xl text-white max-w-3xl">
            {t('banner.description')}
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4">
            <Link
              to="/products"
              className="btn bg-primary text-white hover:bg-opacity-90 text-center px-8 py-3 rounded"
            >
              {t('banner.shopNow')}
            </Link>
            <Link
              to="/contact"
              className="btn bg-white text-dark text-center px-8 py-3 rounded"
            >
              {t('banner.contactUs')}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
