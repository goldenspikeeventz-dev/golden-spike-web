import React from "react";

const services = [
  {
    title: "Golden Spike Restaurants & food Courts",
    category: "Restaurants & food Courts",
  },
  {
    title: "Golden Spike bake house",
    category: "Bake house",
  },
  {
    title: "Golden Spike Bakers & Confectionaries",
    category: "Bakers & Confectionaries",
  },
  {
    title: "Golden Spike Catering",
    category: "Catering",
  },
  {
    title: "Corporate Catering",
    category: "Catering",
  },
  {
    title: "Tourism Catering",
    category: "Catering",
  },
];

const Services = () => {
  return (
    <section className="py-20 px-6 bg-gray-50">
      <div className="mx-auto max-w-7xl">
        <h2 className="text-4xl font-semibold text-center mb-14">what we do</h2>
        <p className="text-gray-600 text-center px-0 mx-auto max-w-4xl mb-12">
          We are a team of passionate caterers who are dedicated to providing
          the best catering and event services to our clients in Kerala and
          Tamil Nadu.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow p-4"
            >
              <h3 className="text-lg font-bold text-gray-900 mb-1">
                {service.title}
              </h3>
              <p className="text-sm text-gray-500">{service.category}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
