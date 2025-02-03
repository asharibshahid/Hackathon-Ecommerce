import { CheckCircle } from "lucide-react";

const services = [
  { name: "Web Development", description: "Building scalable and robust web applications tailored to your needs." },
  { name: "UI/UX Designing", description: "Crafting intuitive and visually stunning user experiences." },
  { name: "I.T Services", description: "Providing reliable tech solutions for your business growth." },
  { name: "Web Designing", description: "Creating modern, responsive, and elegant website designs." },
  { name: "Shopify", description: "Empowering e-commerce businesses with Shopify expertise." },
  { name: "CMS", description: "Customizing and optimizing content management systems." },
  { name: "Prompt Engineering", description: "Delivering advanced AI prompt engineering solutions." },
];

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-black text-white px-6 py-12">
      {/* Hero Section */}
      <div className="text-center mb-16">
        <h1 className="text-4xl font-extrabold text-lime-300 mb-4">Our Premium Services</h1>
        <p className="text-xl text-emerald-300 max-w-3xl mx-auto">
          Explore our range of professional services designed to elevate your business and streamline your workflows.
        </p>
      </div>

      {/* Services Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <div
            key={index}
            className="p-6 bg-gray-900 rounded-lg shadow-lg hover:shadow-emerald-300 transition-shadow"
          >
            <div className="flex items-center mb-4">
              <CheckCircle className="w-8 h-8 text-lime-300 mr-4" />
              <h2 className="text-2xl font-bold text-white">{service.name}</h2>
            </div>
            <p className="text-gray-400 text-sm">{service.description}</p>
          </div>
        ))}
      </div>

      {/* Call to Action */}
      <div className="mt-16 text-center">
        <p className="text-lg text-gray-300 mb-6">
          Ready to transform your business? Let’s create something extraordinary together.
        </p>
        
        <button className="px-6 py-3 bg-gradient-to-r from-lime-300 to-emerald-300 text-black font-semibold rounded-full hover:from-emerald-300 hover:to-lime-300 transition-colors">
          Contact Us On WhatsApp <span className="text-lg ml-2">🚀 </span>
          03212558027        </button>

      </div>
    </div>
  );
}
