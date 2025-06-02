import { useLocation, useNavigate } from "react-router-dom";
import { useState, useRef } from "react";

const RegisterSchool = () => {
  const { state } = useLocation();
  const navigate = useNavigate();
  const fileInputRef = useRef(null);
  
  const [form, setForm] = useState({
    schoolName: "",
    slug: "",
    adminEmail: "",
    adminPassword: "",
    confirmPassword: "",
    contactNumber: "",
    address: "",
    city: "",
    state: "",
    country: "",
    pincode: "",
    schoolType: "",
    establishedYear: "",
    principalName: "",
    schoolLogo: null,
    website: "",
    aboutSchool: ""
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
    
    // Clear error when user types
    if (errors[name]) {
      setErrors({ ...errors, [name]: null });
    }
  };

  const handleFileChange = (e) => {
    setForm({ ...form, schoolLogo: e.target.files[0] });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Validation
    const newErrors = {};
    if (form.adminPassword !== form.confirmPassword) {
      newErrors.confirmPassword = "Passwords don't match";
    }
    if (!form.schoolName) newErrors.schoolName = "Required";
    if (!form.slug) newErrors.slug = "Required";
    if (!form.adminEmail) newErrors.adminEmail = "Required";
    if (!form.adminPassword) newErrors.adminPassword = "Required";
    
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      setIsSubmitting(false);
      return;
    }

    // Simulate API call
    setTimeout(() => {
      // Create form data (to handle file upload in real scenario)
      const formData = new FormData();
      Object.keys(form).forEach(key => {
        if (form[key] !== null) formData.append(key, form[key]);
      });
      formData.append("plan", state?.selectedPlan);

      // Mock save to localStorage
      const schoolData = Object.fromEntries(formData);
      localStorage.setItem("registeredSchool", JSON.stringify(schoolData));

      // Redirect to school page
      navigate(`/school/${form.slug}`);
      setIsSubmitting(false);
    }, 1500);
  };

  if (!state?.selectedPlan) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="bg-white p-8 rounded-xl shadow-md text-center max-w-md">
          <div className="text-red-500 mb-4">
            <svg className="w-12 h-12 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
            </svg>
          </div>
          <h2 className="text-2xl font-bold text-gray-800 mb-2">Plan Selection Required</h2>
          <p className="text-gray-600 mb-6">Please select a subscription plan before registering your school.</p>
          <button 
            onClick={() => navigate('/pricing')}
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg transition duration-300"
          >
            View Plans
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-10">
          <h1 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Register Your School
          </h1>
          <p className="mt-3 text-xl text-gray-500">
            Complete the form below to set up your school on our platform
          </p>
          <div className="mt-4 inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-blue-100 text-blue-800">
            Selected Plan: {state.selectedPlan}
          </div>
        </div>

        <div className="bg-white shadow-xl rounded-lg overflow-hidden">
          <form onSubmit={handleSubmit} className="p-6 sm:p-10">
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              {/* School Basic Info */}
              <div className="sm:col-span-2">
                <h3 className="text-lg font-medium text-gray-900 mb-4 pb-2 border-b">School Information</h3>
              </div>
              
              <div>
                <label htmlFor="schoolName" className="block text-sm font-medium text-gray-700 mb-1">
                  School Name *
                </label>
                <input
                  id="schoolName"
                  name="schoolName"
                  required
                  value={form.schoolName}
                  onChange={handleChange}
                  className={`w-full px-4 py-2 border rounded-md focus:ring-blue-500 focus:border-blue-500 ${errors.schoolName ? 'border-red-500' : 'border-gray-300'}`}
                  placeholder="Green Valley International School"
                />
                {errors.schoolName && <p className="mt-1 text-sm text-red-600">{errors.schoolName}</p>}
              </div>

              <div>
                <label htmlFor="slug" className="block text-sm font-medium text-gray-700 mb-1">
                  School URL Identifier *
                  <span className="ml-1 text-xs text-gray-500">(e.g., greenvalley)</span>
                </label>
                <div className="flex rounded-md shadow-sm">
                  <span className="inline-flex items-center px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-gray-500 text-sm">
                    schoolapp.com/
                  </span>
                  <input
                    id="slug"
                    name="slug"
                    required
                    value={form.slug}
                    onChange={handleChange}
                    className={`flex-1 min-w-0 block w-full px-3 py-2 rounded-none rounded-r-md border focus:ring-blue-500 focus:border-blue-500 ${errors.slug ? 'border-red-500' : 'border-gray-300'}`}
                    placeholder="your-school-name"
                  />
                </div>
                {errors.slug && <p className="mt-1 text-sm text-red-600">{errors.slug}</p>}
              </div>

              <div>
                <label htmlFor="schoolType" className="block text-sm font-medium text-gray-700 mb-1">
                  School Type
                </label>
                <select
                  id="schoolType"
                  name="schoolType"
                  value={form.schoolType}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                >
                  <option value="">Select type</option>
                  <option value="public">Public School</option>
                  <option value="private">Private School</option>
                  <option value="international">International School</option>
                  <option value="charter">Charter School</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label htmlFor="establishedYear" className="block text-sm font-medium text-gray-700 mb-1">
                  Established Year
                </label>
                <input
                  id="establishedYear"
                  name="establishedYear"
                  type="number"
                  min="1900"
                  max={new Date().getFullYear()}
                  value={form.establishedYear}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                  placeholder="1995"
                />
              </div>

              <div className="sm:col-span-2">
                <label htmlFor="aboutSchool" className="block text-sm font-medium text-gray-700 mb-1">
                  About Your School
                </label>
                <textarea
                  id="aboutSchool"
                  name="aboutSchool"
                  rows={3}
                  value={form.aboutSchool}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Brief description of your school..."
                />
              </div>

              <div className="sm:col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  School Logo
                </label>
                <div className="mt-1 flex items-center">
                  {form.schoolLogo ? (
                    <div className="flex items-center">
                      <img 
                        src={URL.createObjectURL(form.schoolLogo)} 
                        alt="School logo preview" 
                        className="w-16 h-16 rounded-full object-cover mr-4"
                      />
                      <button
                        type="button"
                        onClick={() => {
                          setForm({...form, schoolLogo: null});
                          fileInputRef.current.value = "";
                        }}
                        className="text-sm text-red-600 hover:text-red-800"
                      >
                        Remove
                      </button>
                    </div>
                  ) : (
                    <div className="flex items-center justify-center w-16 h-16 rounded-full bg-gray-100 text-gray-400">
                      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                    </div>
                  )}
                  <div className="ml-4">
                    <input
                      id="schoolLogo"
                      name="schoolLogo"
                      type="file"
                      ref={fileInputRef}
                      onChange={handleFileChange}
                      accept="image/*"
                      className="hidden"
                    />
                    <label
                      htmlFor="schoolLogo"
                      className="px-3 py-1 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 cursor-pointer"
                    >
                      {form.schoolLogo ? "Change" : "Upload"}
                    </label>
                    <p className="text-xs text-gray-500 mt-1">PNG, JPG up to 2MB</p>
                  </div>
                </div>
              </div>

              {/* Admin Account */}
              <div className="sm:col-span-2 mt-6">
                <h3 className="text-lg font-medium text-gray-900 mb-4 pb-2 border-b">Admin Account</h3>
              </div>

              <div>
                <label htmlFor="adminEmail" className="block text-sm font-medium text-gray-700 mb-1">
                  Admin Email *
                </label>
                <input
                  id="adminEmail"
                  name="adminEmail"
                  type="email"
                  required
                  value={form.adminEmail}
                  onChange={handleChange}
                  className={`w-full px-4 py-2 border rounded-md focus:ring-blue-500 focus:border-blue-500 ${errors.adminEmail ? 'border-red-500' : 'border-gray-300'}`}
                  placeholder="admin@school.edu"
                />
                {errors.adminEmail && <p className="mt-1 text-sm text-red-600">{errors.adminEmail}</p>}
              </div>

              <div>
                <label htmlFor="principalName" className="block text-sm font-medium text-gray-700 mb-1">
                  Principal Name
                </label>
                <input
                  id="principalName"
                  name="principalName"
                  value={form.principalName}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Dr. John Smith"
                />
              </div>

              <div>
                <label htmlFor="adminPassword" className="block text-sm font-medium text-gray-700 mb-1">
                  Password *
                </label>
                <input
                  id="adminPassword"
                  name="adminPassword"
                  type="password"
                  required
                  value={form.adminPassword}
                  onChange={handleChange}
                  className={`w-full px-4 py-2 border rounded-md focus:ring-blue-500 focus:border-blue-500 ${errors.adminPassword ? 'border-red-500' : 'border-gray-300'}`}
                  placeholder="••••••••"
                />
                {errors.adminPassword && <p className="mt-1 text-sm text-red-600">{errors.adminPassword}</p>}
              </div>

              <div>
                <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700 mb-1">
                  Confirm Password *
                </label>
                <input
                  id="confirmPassword"
                  name="confirmPassword"
                  type="password"
                  required
                  value={form.confirmPassword}
                  onChange={handleChange}
                  className={`w-full px-4 py-2 border rounded-md focus:ring-blue-500 focus:border-blue-500 ${errors.confirmPassword ? 'border-red-500' : 'border-gray-300'}`}
                  placeholder="••••••••"
                />
                {errors.confirmPassword && <p className="mt-1 text-sm text-red-600">{errors.confirmPassword}</p>}
              </div>

              {/* Contact Information */}
              <div className="sm:col-span-2 mt-6">
                <h3 className="text-lg font-medium text-gray-900 mb-4 pb-2 border-b">Contact Information</h3>
              </div>

              <div>
                <label htmlFor="contactNumber" className="block text-sm font-medium text-gray-700 mb-1">
                  Contact Number
                </label>
                <input
                  id="contactNumber"
                  name="contactNumber"
                  type="tel"
                  value={form.contactNumber}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                  placeholder="+1 (555) 123-4567"
                />
              </div>

              <div>
                <label htmlFor="website" className="block text-sm font-medium text-gray-700 mb-1">
                  Website
                </label>
                <input
                  id="website"
                  name="website"
                  type="url"
                  value={form.website}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                  placeholder="https://www.school.edu"
                />
              </div>

              <div className="sm:col-span-2">
                <label htmlFor="address" className="block text-sm font-medium text-gray-700 mb-1">
                  Address
                </label>
                <textarea
                  id="address"
                  name="address"
                  rows={2}
                  value={form.address}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                  placeholder="123 Education Street"
                />
              </div>

              <div>
                <label htmlFor="city" className="block text-sm font-medium text-gray-700 mb-1">
                  City
                </label>
                <input
                  id="city"
                  name="city"
                  value={form.city}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Boston"
                />
              </div>

              <div>
                <label htmlFor="state" className="block text-sm font-medium text-gray-700 mb-1">
                  State/Province
                </label>
                <input
                  id="state"
                  name="state"
                  value={form.state}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Massachusetts"
                />
              </div>

              <div>
                <label htmlFor="country" className="block text-sm font-medium text-gray-700 mb-1">
                  Country
                </label>
                <input
                  id="country"
                  name="country"
                  value={form.country}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                  placeholder="United States"
                />
              </div>

              <div>
                <label htmlFor="pincode" className="block text-sm font-medium text-gray-700 mb-1">
                  ZIP/Postal Code
                </label>
                <input
                  id="pincode"
                  name="pincode"
                  value={form.pincode}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                  placeholder="02108"
                />
              </div>
            </div>

            <div className="mt-10">
              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-lg font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition duration-300 ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
              >
                {isSubmitting ? (
                  <>
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Processing...
                  </>
                ) : (
                  'Register School'
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default RegisterSchool;