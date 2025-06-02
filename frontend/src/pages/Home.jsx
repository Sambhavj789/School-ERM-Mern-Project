import { useNavigate } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const Home = () => {
    const navigate=useNavigate();
    return (
    <>
      <Navbar />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 to-blue-800 py-24 text-white">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2 mb-12 md:mb-0">
            <h1 className="text-5xl font-bold mb-6 leading-tight">
              Transform Education with <span className="text-blue-200">SchoolSaaS</span>
            </h1>
            <p className="text-xl text-blue-100 mb-8">
              The all-in-one cloud-based school management platform that saves time, reduces costs, 
              and enhances learning experiences for 21st century education.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-white text-blue-700 px-8 py-4 rounded-lg hover:bg-blue-50 transition font-semibold text-lg shadow-lg">
                Get Started - It's Free
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-blue-700 transition font-semibold text-lg">
                Watch Demo
              </button>
            </div>
            <div className="mt-8 flex items-center">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((item) => (
                  <img 
                    key={item}
                    src={`https://randomuser.me/api/portraits/${item % 2 === 0 ? 'women' : 'men'}/${item+20}.jpg`}
                    className="w-10 h-10 rounded-full border-2 border-blue-500"
                    alt="Happy user"
                  />
                ))}
              </div>
              <div className="ml-4">
                <p className="text-blue-100">Trusted by 1,200+ schools worldwide</p>
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                  <span className="ml-2 text-blue-100">4.9/5 (1,024 reviews)</span>
                </div>
              </div>
            </div>
          </div>
          <div className="md:w-1/2 relative">
            <img
              src="https://img.freepik.com/free-vector/school-management-system-abstract-concept-illustration_335657-3125.jpg"
              alt="School SaaS Platform"
              className="rounded-xl shadow-2xl border-8 border-blue-400 transform hover:scale-105 transition duration-500"
            />
            <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-lg shadow-lg hidden lg:block">
              <div className="flex items-center">
                <div className="bg-green-100 p-3 rounded-full mr-3">
                  <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <p className="font-bold text-gray-800">85% Improvement</p>
                  <p className="text-sm text-gray-600">in administrative efficiency</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trusted By Section */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-center text-gray-500 mb-8">TRUSTED BY LEADING EDUCATIONAL INSTITUTIONS</p>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8 items-center justify-center">
            {['harvard', 'mit', 'stanford', 'oxford', 'cambridge'].map((uni) => (
              <img 
                key={uni}
                src={`https://logo.clearbit.com/${uni}.edu`}
                alt={`${uni} logo`}
                className="h-12 object-contain opacity-70 hover:opacity-100 transition grayscale hover:grayscale-0"
              />
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Everything Your School Needs in One Platform</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              SchoolSaaS provides comprehensive tools to manage all aspects of school administration, 
              teaching, and learning in a single, easy-to-use platform.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: (
                  <svg className="w-10 h-10 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                ),
                title: "Academic Management",
                description: "Complete control over curriculum, timetable, lesson plans, and academic progress tracking with analytics.",
                features: ["Gradebook", "Lesson Planning", "Progress Reports", "Custom Rubrics"]
              },
              {
                icon: (
                  <svg className="w-10 h-10 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                ),
                title: "Student Information System",
                description: "Comprehensive student profiles with attendance, behavior, health records, and parent communication.",
                features: ["Digital Attendance", "Behavior Tracking", "Health Records", "Parent Portal"]
              },
              {
                icon: (
                  <svg className="w-10 h-10 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                ),
                title: "Financial Management",
                description: "Automated fee collection, expense tracking, payroll, and financial reporting for complete transparency.",
                features: ["Online Payments", "Invoice Generation", "Expense Tracking", "Financial Reports"]
              },
              {
                icon: (
                  <svg className="w-10 h-10 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                ),
                title: "Event & Scheduling",
                description: "Easily manage school calendar, events, exams, and resource scheduling with conflict detection.",
                features: ["School Calendar", "Exam Scheduling", "Room Booking", "Event Management"]
              },
              {
                icon: (
                  <svg className="w-10 h-10 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
                  </svg>
                ),
                title: "Cloud Hosting",
                description: "Secure, reliable cloud infrastructure with automatic backups and 99.9% uptime guarantee.",
                features: ["Data Encryption", "Automated Backups", "Role-Based Access", "GDPR Compliance"]
              },
              {
                icon: (
                  <svg className="w-10 h-10 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                ),
                title: "Security & Compliance",
                description: "Enterprise-grade security with regular audits, compliance certifications, and data protection.",
                features: ["SOC 2 Certified", "Data Encryption", "Regular Audits", "Access Controls"]
              }
            ].map((feature, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition border border-gray-100">
                <div className="mb-6">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600 mb-4">{feature.description}</p>
                <ul className="space-y-2">
                  {feature.features.map((item, i) => (
                    <li key={i} className="flex items-center text-gray-600">
                      <svg className="w-4 h-4 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-blue-700 text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            {[
              { number: "1,200+", label: "Schools Trust Us" },
              { number: "85%", label: "Admin Time Saved" },
              { number: "4.9★", label: "Average Rating" },
              { number: "24/7", label: "Dedicated Support" }
            ].map((stat, index) => (
              <div key={index} className="p-6">
                <p className="text-5xl font-bold mb-3">{stat.number}</p>
                <p className="text-blue-100">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">What Our Customers Say</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Don't just take our word for it - hear from schools that have transformed their operations with SchoolSaaS.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                quote: "SchoolSaaS reduced our administrative workload by 60% in the first month. Now we can focus on what really matters - education.",
                name: "Sarah Johnson",
                role: "Principal, Greenfield Academy",
                avatar: "https://randomuser.me/api/portraits/women/44.jpg"
              },
              {
                quote: "The parent portal has revolutionized our communication. No more missed messages or lost paperwork - everything is digital and trackable.",
                name: "Michael Chen",
                role: "IT Director, Brighton School District",
                avatar: "https://randomuser.me/api/portraits/men/32.jpg"
              },
              {
                quote: "Implementing SchoolSaaS was the best decision we made. Our teachers love the gradebook and our finance team loves the reporting tools.",
                name: "David Rodriguez",
                role: "Superintendent, Riverside Schools",
                avatar: "https://randomuser.me/api/portraits/men/75.jpg"
              }
            ].map((testimonial, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition">
                <div className="mb-6">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-yellow-400 inline" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <blockquote className="text-lg text-gray-700 mb-6">
                  "{testimonial.quote}"
                </blockquote>
                <div className="flex items-center">
                  <img 
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full mr-4"
                  />
                  <div>
                    <p className="font-semibold text-gray-900">{testimonial.name}</p>
                    <p className="text-gray-600">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Simple, Transparent Pricing</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose the plan that fits your institution's needs. Scale up or down as required.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                name: "Starter",
                price: "$299",
                period: "per month",
                description: "Perfect for small schools and academies",
                features: [
                  "Up to 500 students",
                  "Basic academic management",
                  "Attendance tracking",
                  "Email support",
                  "Standard reports"
                ],
                cta: "Start Free Trial"
              },
              {
                name: "Professional",
                price: "$599",
                period: "per month",
                description: "For growing schools with more complex needs",
                popular: true,
                features: [
                  "Up to 2,000 students",
                  "Advanced analytics",
                  "Fee management",
                  "Parent portal",
                  "Priority support",
                  "Custom reports"
                ],
                cta: "Get Started"
              },
              {
                name: "Enterprise",
                price: "Custom",
                period: "",
                description: "For large districts and institutions",
                features: [
                  "Unlimited students",
                  "Dedicated account manager",
                  "White-label options",
                  "API access",
                  "On-premise deployment",
                  "24/7 premium support"
                ],
                cta: "Contact Sales"
              }
            ].map((plan, index) => (
              <div 
                key={index} 
                className={`relative rounded-xl shadow-sm hover:shadow-md transition border ${
                  plan.popular 
                    ? "border-blue-500 transform scale-105 z-10 bg-blue-50" 
                    : "border-gray-200 bg-white"
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-blue-600 text-white text-sm font-semibold px-4 py-1 rounded-full">
                    Most Popular
                  </div>
                )}
                <div className="p-8">
                  <h3 className={`text-2xl font-bold mb-2 ${plan.popular ? "text-blue-600" : "text-gray-900"}`}>
                    {plan.name}
                  </h3>
                  <p className="text-gray-600 mb-6">{plan.description}</p>
                  
                  <div className="mb-8">
                    <span className="text-4xl font-bold text-gray-900">{plan.price}</span>
                    {plan.period && <span className="text-gray-600"> {plan.period}</span>}
                  </div>
                  
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-center">
                        <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <button onClick={()=>{navigate("/pricing")}}
                    className={`w-full py-3 px-6 rounded-lg font-semibold ${
                      plan.popular
                        ? "bg-blue-600 text-white hover:bg-blue-700"
                        : "bg-gray-100 text-gray-800 hover:bg-gray-200"
                    } transition`}
                  >
                    {plan.cta}
                  </button>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <p className="text-gray-600 mb-4">Need help choosing the right plan?</p>
            <button className="text-blue-600 font-semibold hover:text-blue-700 transition flex items-center justify-center mx-auto">
              Compare all features
              <svg className="w-5 h-5 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </section>

      {/* Demo CTA */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Transform Your School?</h2>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-8">
            See SchoolSaaS in action with a personalized demo. Our experts will walk you through the platform and answer all your questions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-700 px-8 py-4 rounded-lg hover:bg-blue-50 transition font-semibold text-lg shadow-lg">
              Schedule a Demo
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-blue-700 transition font-semibold text-lg">
              Contact Sales
            </button>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-600">
              Everything you need to know about SchoolSaaS. Can't find an answer? Contact our support team.
            </p>
          </div>
          
          <div className="space-y-6">
            {[
              {
                question: "Is my school's data secure with SchoolSaaS?",
                answer: "Absolutely. We use enterprise-grade security measures including encryption at rest and in transit, regular security audits, and compliance with global data protection regulations. Your data is backed up daily and stored in secure, geographically distributed data centers."
              },
              {
                question: "How long does implementation take?",
                answer: "Most schools are up and running within 2-4 weeks. Our implementation team will work closely with you to ensure a smooth transition, including data migration, staff training, and go-live support. We offer templates and best practices to accelerate the process."
              },
              {
                question: "Can we customize the platform for our specific needs?",
                answer: "Yes! SchoolSaaS offers extensive customization options including custom fields, workflows, reports, and even white-labeling for enterprise customers. Our platform is designed to adapt to your school's unique processes, not the other way around."
              },
              {
                question: "What training and support do you provide?",
                answer: "We provide comprehensive onboarding training, detailed documentation, video tutorials, and 24/7 support via email, chat, and phone. For enterprise customers, we offer dedicated account managers and on-site training sessions."
              },
              {
                question: "How often do you release updates?",
                answer: "We release minor updates weekly and major feature updates quarterly. All updates are included in your subscription at no additional cost. We maintain a public product roadmap and welcome customer feedback to guide our development priorities."
              }
            ].map((faq, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                <button className="flex justify-between items-center w-full text-left">
                  <h3 className="text-lg font-semibold text-gray-900">{faq.question}</h3>
                  <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                <div className="mt-4 text-gray-600">
                  <p>{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 bg-white border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Join Thousands of Schools Using SchoolSaaS</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Start your 30-day free trial today. No credit card required. Cancel anytime.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-blue-600 text-white px-8 py-4 rounded-lg hover:bg-blue-700 transition font-semibold text-lg shadow-lg">
              Get Started Now
            </button>
            <button className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-lg hover:bg-gray-50 transition font-semibold text-lg">
              Talk to an Expert
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Home;