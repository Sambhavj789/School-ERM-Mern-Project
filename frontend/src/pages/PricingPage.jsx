import { useNavigate } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const PricingPage = () => {
  const navigate=useNavigate();
    const plans = [
    {
      name: "Starter",
      price: "$299",
      period: "per month",
      description: "Perfect for small schools and academies",
      features: [
        "Up to 500 students",
        "Basic academic management",
        "Attendance tracking",
        "Email support (48hr response)",
        "Standard reports",
        "Mobile app access",
        "Basic data security",
      ],
      cta: "Start Free Trial",
      note: "14-day free trial, no credit card required"
    },
    {
      name: "Professional",
      price: "$599",
      period: "per month",
      description: "For growing schools with more complex needs",
      popular: true,
      features: [
        "Up to 2,000 students",
        "Advanced analytics dashboard",
        "Online fee management",
        "Parent portal with messaging",
        "Priority support (24hr response)",
        "Custom report builder",
        "API access (read-only)",
        "Enhanced security features"
      ],
      cta: "Get Started",
      note: "Most popular choice for mid-sized schools"
    },
    {
      name: "Enterprise",
      price: "Custom",
      period: "",
      description: "For large districts and institutions",
      features: [
        "Unlimited students",
        "Dedicated account manager",
        "White-label branding",
        "Full API access",
        "On-premise deployment option",
        "24/7 premium support",
        "Advanced security & compliance",
        "Custom development hours",
        "Bulk data migration"
      ],
      cta: "Contact Sales",
      note: "Tailored solutions for your institution"
    },
  ];

  const features = [
    {
      name: "Student Management",
      starter: true,
      professional: true,
      enterprise: true
    },
    {
      name: "Attendance Tracking",
      starter: true,
      professional: true,
      enterprise: true
    },
    {
      name: "Gradebook",
      starter: true,
      professional: true,
      enterprise: true
    },
    {
      name: "Mobile App",
      starter: true,
      professional: true,
      enterprise: true
    },
    {
      name: "Parent Portal",
      starter: false,
      professional: true,
      enterprise: true
    },
    {
      name: "Fee Management",
      starter: false,
      professional: true,
      enterprise: true
    },
    {
      name: "Custom Reports",
      starter: false,
      professional: true,
      enterprise: true
    },
    {
      name: "API Access",
      starter: false,
      professional: "Limited",
      enterprise: "Full"
    },
    {
      name: "White-labeling",
      starter: false,
      professional: false,
      enterprise: true
    },
    {
      name: "Dedicated Support",
      starter: false,
      professional: false,
      enterprise: true
    }
  ];

  return (
    <>
      <Navbar />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 py-24 text-white">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-5xl font-bold mb-6">Simple, Transparent Pricing</h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-8">
            Choose the perfect plan for your institution. Scale up or down as your needs change.
          </p>
          <div className="inline-flex items-center bg-blue-700 bg-opacity-50 rounded-full px-6 py-2">
            <svg className="w-5 h-5 mr-2 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
            </svg>
            <span>All plans include a 14-day free trial</span>
          </div>
        </div>
      </section>

      {/* Plans Comparison */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr>
                <th className="text-left pb-8 pr-6 w-1/3">Features</th>
                <th className="text-center pb-8 px-4">
                  <div className="font-bold text-lg">Starter</div>
                  <div className="text-blue-600 font-semibold">$299/month</div>
                </th>
                <th className="text-center pb-8 px-4 relative">
                  <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-full">
                    POPULAR
                  </div>
                  <div className="font-bold text-lg">Professional</div>
                  <div className="text-blue-600 font-semibold">$599/month</div>
                </th>
                <th className="text-center pb-8 px-4">
                  <div className="font-bold text-lg">Enterprise</div>
                  <div className="text-blue-600 font-semibold">Custom Pricing</div>
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {features.map((feature, i) => (
                <tr key={i}>
                  <td className="py-4 pr-6 text-gray-700 font-medium">{feature.name}</td>
                  <td className="text-center py-4 px-4">
                    {feature.starter === true ? (
                      <svg className="w-5 h-5 text-green-500 mx-auto" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    ) : feature.starter === false ? (
                      <svg className="w-5 h-5 text-gray-300 mx-auto" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    ) : (
                      <span className="text-sm font-medium">{feature.starter}</span>
                    )}
                  </td>
                  <td className="text-center py-4 px-4">
                    {feature.professional === true ? (
                      <svg className="w-5 h-5 text-green-500 mx-auto" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    ) : feature.professional === false ? (
                      <svg className="w-5 h-5 text-gray-300 mx-auto" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    ) : (
                      <span className="text-sm font-medium">{feature.professional}</span>
                    )}
                  </td>
                  <td className="text-center py-4 px-4">
                    {feature.enterprise === true ? (
                      <svg className="w-5 h-5 text-green-500 mx-auto" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    ) : feature.enterprise === false ? (
                      <svg className="w-5 h-5 text-gray-300 mx-auto" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    ) : (
                      <span className="text-sm font-medium">{feature.enterprise}</span>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

            {/* Plans Section */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid gap-8 md:grid-cols-3">
            {plans.map((plan, index) => (
              <div
                key={index}
                className={`rounded-2xl shadow-md p-8 bg-white border ${
                  plan.popular ? "border-blue-600" : "border-gray-200"
                }`}
              >
                {plan.popular && (
                  <div className="mb-4 inline-block bg-blue-600 text-white text-xs font-semibold px-3 py-1 rounded-full">
                    Most Popular
                  </div>
                )}
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <p className="text-gray-500 mb-6">{plan.description}</p>
                <div className="text-4xl font-extrabold text-blue-700 mb-2">
                  {plan.price}
                </div>
                <div className="text-sm text-gray-500 mb-6">{plan.period}</div>
                <ul className="space-y-2 mb-6">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gray-700">
                      <svg
                        className="w-5 h-5 text-green-500 mr-2"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
                <button onClick={() => navigate("/register-school", { state: { selectedPlan: plan.name } })}

                  className={`w-full py-3 px-4 rounded-lg text-white font-semibold ${
                    plan.popular
                      ? "bg-blue-600 hover:bg-blue-700"
                      : "bg-gray-700 hover:bg-gray-800"
                  }`}
                >
                  {plan.cta}
                </button>
                <p className="text-xs text-gray-500 mt-3">{plan.note}</p>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* Testimonials */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">What Our Customers Say</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                quote: "Switching to SchoolSaaS saved us over 20 hours per week in administrative work. The Professional plan was perfect for our growing academy.",
                name: "Maria Rodriguez",
                title: "Principal, Sunshine Academy",
                avatar: "https://randomuser.me/api/portraits/women/65.jpg",
                stars: 5
              },
              {
                quote: "The pricing is transparent and fair for the value we receive. The customer support alone is worth the subscription cost.",
                name: "James Wilson",
                title: "IT Director, Lincoln School District",
                avatar: "https://randomuser.me/api/portraits/men/32.jpg",
                stars: 4
              },
              {
                quote: "We needed custom solutions for our district. The Enterprise team worked closely with us to deliver exactly what we needed.",
                name: "Sarah Johnson",
                title: "Superintendent, Riverside Schools",
                avatar: "https://randomuser.me/api/portraits/women/44.jpg",
                stars: 5
              }
            ].map((testimonial, index) => (
              <div key={index} className="bg-gray-50 p-8 rounded-lg border border-gray-200">
                <div className="flex mb-4">
                  {[...Array(testimonial.stars)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
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
                    <p className="text-gray-600 text-sm">{testimonial.title}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Frequently Asked Questions</h2>
          <div className="space-y-6">
            {[
              {
                question: "What payment methods do you accept?",
                answer: "We accept all major credit cards (Visa, Mastercard, American Express), PayPal, and bank transfers. For Enterprise plans, we also accept purchase orders and can arrange annual billing."
              },
              {
                question: "Can I cancel my subscription anytime?",
                answer: "Yes, you can cancel your subscription at any time. If you cancel during your billing period, you'll continue to have access until the end of that period. We don't charge cancellation fees."
              },
              {
                question: "How does the free trial work?",
                answer: "Our 14-day free trial gives you full access to all Starter plan features. No credit card is required to start the trial. At the end of 14 days, you can choose to subscribe or your account will be paused."
              },
              {
                question: "Do you offer discounts for annual billing?",
                answer: "Yes! Annual subscriptions receive a 10% discount compared to monthly billing. Contact our sales team for multi-year discount options for Enterprise plans."
              },
              {
                question: "What happens if we exceed our student limit?",
                answer: "If you approach your student limit, we'll notify you in advance. For minor overages (up to 10%), we won't immediately charge you. For larger overages, we'll work with you to upgrade your plan appropriately."
              },
              {
                question: "Is training included with our subscription?",
                answer: "Yes, all plans include onboarding training and documentation. Professional and Enterprise plans include additional training sessions. We also offer premium training packages for large deployments."
              }
            ].map((faq, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                <h4 className="text-xl font-semibold text-blue-700 mb-3">{faq.question}</h4>
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Transform Your School?</h2>
          <p className="text-xl text-blue-100 mb-8">
            Join thousands of schools using SchoolSaaS to streamline their operations and enhance learning experiences.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-700 px-8 py-4 rounded-lg hover:bg-blue-50 transition font-semibold text-lg shadow-lg">
              Start Free Trial
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-blue-700 transition font-semibold text-lg">
              Request Demo
            </button>
          </div>
          <p className="mt-4 text-blue-100 text-sm">
            No credit card required • 14-day free trial • Cancel anytime
          </p>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default PricingPage;