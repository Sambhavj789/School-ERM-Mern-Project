import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const AboutUs = () => {
  return (
    <>
      <Navbar />
      <section className="py-24 bg-gradient-to-b from-gray-50 to-white text-gray-800">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          {/* Hero Section */}
          <div className="text-center mb-20">
            <span className="inline-block px-4 py-2 bg-blue-50 text-blue-600 rounded-full text-sm font-medium mb-4">
              About EdTech Solutions
            </span>
            <h1 className="text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Transforming Education <br className="hidden md:block" /> Through Technology
            </h1>
            <p className="text-xl text-gray-600 mt-4 max-w-4xl mx-auto leading-relaxed">
              We're revolutionizing school management with cutting-edge solutions that streamline operations, enhance learning experiences, and connect educational communities.
            </p>
          </div>

          {/* Stats Section */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-24">
            {[
              { number: "500+", label: "Schools Empowered" },
              { number: "1M+", label: "Students Impacted" },
              { number: "98%", label: "Client Satisfaction" },
              { number: "24/7", label: "Support Available" },
            ].map((stat, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 text-center">
                <p className="text-4xl font-bold text-blue-600 mb-2">{stat.number}</p>
                <p className="text-gray-600 font-medium">{stat.label}</p>
              </div>
            ))}
          </div>

          {/* Our Story */}
          <div className="grid md:grid-cols-2 gap-16 items-center mb-24">
            <div className="order-2 md:order-1">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Founded in 2015 by a team of educators and technologists, EdTech Solutions began with a simple mission: to bridge the gap between education and technology. What started as a small project to help local schools manage attendance has grown into a comprehensive platform serving institutions nationwide.
              </p>
              <p className="text-gray-600 mb-8 leading-relaxed">
                Today, we're proud to be at the forefront of educational innovation, constantly evolving to meet the changing needs of modern schools while maintaining our commitment to accessibility and excellence.
              </p>
              <button className="px-8 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition duration-300 shadow-md hover:shadow-lg">
                Meet Our Team
              </button>
            </div>
            <div className="order-1 md:order-2">
              <img
                src="https://img.freepik.com/free-photo/group-diverse-people-having-business-meeting_53876-25060.jpg"
                alt="Our team working together"
                className="rounded-xl shadow-xl w-full h-auto object-cover"
              />
            </div>
          </div>

          {/* Value Proposition */}
          <div className="mb-24">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Schools Choose Us</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Comprehensive solutions designed specifically for educational institutions
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  icon: (
                    <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                    </svg>
                  ),
                  title: "All-in-One Platform",
                  description: "Integrated solutions covering administration, academics, finance, and communication in a single, unified platform."
                },
                {
                  icon: (
                    <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                    </svg>
                  ),
                  title: "Enterprise-Grade Security",
                  description: "Military-grade encryption and compliance with global data protection standards to safeguard your information."
                },
                {
                  icon: (
                    <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
                    </svg>
                  ),
                  title: "Cloud-Based Infrastructure",
                  description: "Access your data anytime, anywhere with our reliable, scalable cloud platform that grows with your institution."
                },
              ].map((feature, index) => (
                <div key={index} className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition duration-300 border border-gray-100">
                  <div className="bg-blue-50 w-14 h-14 rounded-lg flex items-center justify-center mb-6">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Mission and Vision */}
          <div className="grid lg:grid-cols-2 gap-8 mb-24">
            <div className="bg-blue-600 text-white p-10 rounded-2xl shadow-lg">
              <div className="flex items-center mb-6">
                <div className="bg-white text-blue-600 p-3 rounded-lg mr-4">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold">Our Mission</h3>
              </div>
              <p className="text-blue-100 leading-relaxed text-lg">
                To democratize access to advanced education technology, enabling schools of all sizes to operate more efficiently, educators to teach more effectively, and students to learn more successfully in a digitally connected world.
              </p>
            </div>
            
            <div className="bg-gray-900 text-white p-10 rounded-2xl shadow-lg">
              <div className="flex items-center mb-6">
                <div className="bg-white text-gray-900 p-3 rounded-lg mr-4">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold">Our Vision</h3>
              </div>
              <p className="text-gray-300 leading-relaxed text-lg">
                To create a global ecosystem where technology seamlessly enhances every aspect of education, breaking down barriers to knowledge and fostering environments where every student, teacher, and administrator can thrive.
              </p>
            </div>
          </div>

          {/* Leadership/Team Preview */}
          <div className="text-center mb-20">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Meet Our Leadership</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-12">
              A diverse team of educators, technologists, and visionaries driving innovation in education
            </p>
            
            <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { name: "Sarah Johnson", role: "CEO & Founder", img: "https://randomuser.me/api/portraits/women/44.jpg" },
                { name: "Michael Chen", role: "CTO", img: "https://randomuser.me/api/portraits/men/32.jpg" },
                { name: "David Rodriguez", role: "Head of Product", img: "https://randomuser.me/api/portraits/men/75.jpg" },
                { name: "Priya Patel", role: "Director of Education", img: "https://randomuser.me/api/portraits/women/63.jpg" },
              ].map((member, index) => (
                <div key={index} className="group">
                  <div className="relative overflow-hidden rounded-xl mb-4 h-64">
                    <img 
                      src={member.img} 
                      alt={member.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition duration-500 flex items-end p-6">
                      <div>
                        <p className="text-white font-medium text-lg">{member.name}</p>
                        <p className="text-blue-300">{member.role}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            <button className="mt-12 px-8 py-3 border-2 border-blue-600 text-blue-600 rounded-lg font-medium hover:bg-blue-600 hover:text-white transition duration-300">
              View Full Team
            </button>
          </div>

          {/* CTA Section */}
          <div className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-2xl p-12 text-center text-white shadow-xl">
            <h2 className="text-3xl font-bold mb-6">Ready to Transform Your School?</h2>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Join thousands of educational institutions revolutionizing their operations with our platform.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <button className="px-8 py-4 bg-white text-blue-600 rounded-lg font-bold hover:bg-gray-100 transition duration-300 shadow-lg">
                Request a Demo
              </button>
              <button className="px-8 py-4 border-2 border-white text-white rounded-lg font-bold hover:bg-white/10 transition duration-300">
                Contact Sales
              </button>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default AboutUs;