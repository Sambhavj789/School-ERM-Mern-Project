// src/components/Footer.jsx
const Footer = () => {
  return (
    <footer className="bg-gray-100 py-6 mt-20">
      <div className="max-w-6xl mx-auto px-4 text-center text-gray-600 text-sm">
        &copy; {new Date().getFullYear()} SchoolSaaS. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
