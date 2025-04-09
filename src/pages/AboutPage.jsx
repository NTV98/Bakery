import React from 'react';
import { Link } from 'react-router-dom';

const AboutPage = () => {
  return (
    <div className="py-12 bg-white">
      <div className="container-custom">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6">Our Story</h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Sweet Delights is a family-owned bakery dedicated to creating beautiful, 
            delicious cakes for all of life's special moments.
          </p>
        </div>

        {/* Our History */}
        <div className="flex flex-col md:flex-row items-center mb-20 gap-8">
          <div className="md:w-1/2">
            <img 
              src="/Images/bakery-history.jpg" 
              alt="Sweet Delights early days" 
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>
          <div className="md:w-1/2">
            <h2 className="text-3xl font-serif font-bold mb-4">Our Beginning</h2>
            <p className="text-gray-600 mb-4">
              Sweet Delights was established in 2005 by pastry chef Emma Johnson. What began as a 
              small home bakery quickly grew into a beloved local institution, as word spread about 
              our exceptional cakes and pastries.
            </p>
            <p className="text-gray-600 mb-4">
              Over the years, we've expanded our team and offerings, but our commitment to quality 
              has never wavered. We still make everything from scratch, using the finest ingredients 
              and time-honored techniques.
            </p>
            <p className="text-gray-600">
              Today, Sweet Delights is proud to be the bakery of choice for countless celebrations 
              throughout the region, from intimate birthday parties to grand weddings and corporate events.
            </p>
          </div>
        </div>

        {/* Our Values */}
        <div className="mb-20">
          <h2 className="text-3xl font-serif font-bold mb-8 text-center">Our Core Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary bg-opacity-20 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-serif font-semibold mb-3 text-center">Quality First</h3>
              <p className="text-gray-600 text-center">
                We never compromise on ingredients or techniques. Every cake is made with premium 
                ingredients and careful attention to detail.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary bg-opacity-20 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-serif font-semibold mb-3 text-center">Personalized Service</h3>
              <p className="text-gray-600 text-center">
                We believe each celebration is unique. Our team works closely with you to 
                create the perfect cake for your special occasion.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary bg-opacity-20 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
                </svg>
              </div>
              <h3 className="text-xl font-serif font-semibold mb-3 text-center">Exceptional Taste</h3>
              <p className="text-gray-600 text-center">
                A beautiful cake should taste even better than it looks. We pride ourselves on creating 
                cakes that are as delicious as they are beautiful.
              </p>
            </div>
          </div>
        </div>

        {/* Our Team */}
        <div className="mb-20">
          <h2 className="text-3xl font-serif font-bold mb-8 text-center">Meet Our Team</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Team Member 1 */}
            <div className="text-center">
              <div className="mb-4 rounded-full overflow-hidden w-48 h-48 mx-auto">
                <img 
                  src="/Images/team-1.jpg" 
                  alt="Emma Johnson - Founder & Head Baker" 
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-serif font-semibold">Emma Johnson</h3>
              <p className="text-primary mb-2">Founder & Head Baker</p>
              <p className="text-gray-600">
                Trained in Paris, Emma brings 15 years of pastry expertise to every creation.
              </p>
            </div>

            {/* Team Member 2 */}
            <div className="text-center">
              <div className="mb-4 rounded-full overflow-hidden w-48 h-48 mx-auto">
                <img 
                  src="/Images/team-2.jpg" 
                  alt="Michael Chen - Pastry Chef" 
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-serif font-semibold">Michael Chen</h3>
              <p className="text-primary mb-2">Pastry Chef</p>
              <p className="text-gray-600">
                A master of intricate designs, Michael specializes in wedding and celebration cakes.
              </p>
            </div>

            {/* Team Member 3 */}
            <div className="text-center">
              <div className="mb-4 rounded-full overflow-hidden w-48 h-48 mx-auto">
                <img 
                  src="/Images/team-3.jpg" 
                  alt="Sophia Rodriguez - Cake Designer" 
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-serif font-semibold">Sophia Rodriguez</h3>
              <p className="text-primary mb-2">Cake Designer</p>
              <p className="text-gray-600">
                With an art background, Sophia creates our most stunning decorative elements.
              </p>
            </div>

            {/* Team Member 4 */}
            <div className="text-center">
              <div className="mb-4 rounded-full overflow-hidden w-48 h-48 mx-auto">
                <img 
                  src="/Images/team-4.jpg" 
                  alt="James Wilson - Customer Relations" 
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-serif font-semibold">James Wilson</h3>
              <p className="text-primary mb-2">Customer Relations</p>
              <p className="text-gray-600">
                James ensures every client receives personalized attention throughout the ordering process.
              </p>
            </div>
          </div>
        </div>

        {/* Our Bakery */}
        <div className="mb-12">
          <h2 className="text-3xl font-serif font-bold mb-8 text-center">Our Bakery</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <img 
                src="/Images/bakery-interior-1.jpg" 
                alt="Sweet Delights Bakery Interior" 
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </div>
            <div>
              <img 
                src="/Images/bakery-interior-2.jpg" 
                alt="Sweet Delights Cake Display" 
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center py-8">
          <h3 className="text-2xl font-serif font-bold mb-4">Ready to order your custom cake?</h3>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Whether you're planning a wedding, birthday, or special event, we'd love to create 
            the perfect cake for your celebration.
          </p>
          <div className="flex justify-center gap-4 flex-wrap">
            <Link to="/products" className="btn btn-primary">
              View Our Cakes
            </Link>
            <Link to="/contact" className="btn btn-secondary">
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
