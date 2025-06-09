import { PiDotOutlineDuotone } from "react-icons/pi"; // Sample placeholder icon

export default function ServicesSection() {
  const services = [
    {
      title: "Packaging Design",
      description:
        "I create packaging that tells your brand story, captures attention on the shelf, and elevates the customer experience.",
    },
    {
      title: "Mobile and Web Design",
      description:
        "I design sleek, responsive websites and mobile experiences that blend beauty with usability crafted for performance, accessibility, and engagement across all screens.",
    },
    {
      title: "Framer Development",
      description:
        "Interactive, high-fidelity prototypes built in Framer — perfect for testing, pitching, or launching fast.",
    },
    {
      title: "Branding and Logo Design",
      description:
        "I build bold, cohesive brand systems—from strategy to visuals—that connect with your audience and set you apart. Distinctive, timeless logos designed to reflect your values and make your brand instantly recognizable.",
    },
  ];

  return (
    <div className="p-6 bg-black text-white">
      <h2 className="text-2xl font-semibold mb-8">Services</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {services.map((service, idx) => (
          <div
            key={idx}
            className="bg-[#1D1B1B] p-6 rounded-lg flex flex-col justify-between space-y-4 shadow-md hover:shadow-lg transition-shadow duration-300"
          >
            <div className="flex items-start gap-2">
              <PiDotOutlineDuotone className="text-white text-lg mt-1" />
              <div>
                <h3 className="text-lg font-bold mb-1">{service.title}</h3>
                <p className="text-sm text-gray-300">{service.description}</p>
              </div>
            </div>
            <button className="self-start mt-4 text-sm border border-white px-4 py-1 rounded hover:bg-white hover:text-black transition-colors duration-200">
              Get started now
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
