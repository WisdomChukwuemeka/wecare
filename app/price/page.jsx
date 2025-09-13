export default function Pricing() {
  const tiers = [
    {
      id: 1,
      name: "Simple Website",
      price: "$550",
      desc: "Single-page site, perfect for landing pages or portfolios.",
      features: ["Responsive design", "Fast delivery", "Basic SEO"],
    },
    {
      id: 2,
      name: "Standard Website",
      price: "$1,300",
      desc: "3–4 page website suitable for small businesses.",
      features: [
        "Modern UI/UX",
        "Mobile-friendly",
        "Contact form integration",
        "Basic SEO",
      ],
      highlighted: true,
    },
    {
      id: 3,
      name: "Complex Website",
      price: "From $3,500",
      desc: "Websites with 5+ pages, advanced functionality, or custom features.",
      features: [
        "Custom CMS or integrations",
        "Advanced animations",
        "E-commerce or dashboards",
        "Scalable architecture",
      ],
    },
  ];

  return (
    <div className="min-h-screen py-20 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-4">
          Website Development Packages
        </h2>
        <p className="text mb-12">
           Choose the plan that fits your needs.
           </p>
        <div className="grid gap-8 md:grid-cols-2">
          {tiers.map((tier) => (
            <div
              key={tier.id}
              className={`relative rounded-2xl shadow-lg p-8 text-left transition-transform hover:scale-105 bg-white ${
                tier.highlighted ? "border-2 border-orange-500" : ""
              }`}
            >
              <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {tier.name}
              </h3>
              <p className="text-3xl font-bold text-orange-500 mb-4">
                {tier.price}
              </p>
              <p className="text-gray-600 mb-6">{tier.desc}</p>

              <ul className="space-y-2 mb-6">
                {tier.features.map((feature) => (
                  <li key={feature} className="flex items-center text-gray-700">
                    <span className="mr-2 text-indigo-500">✔</span> {feature}
                  </li>
                ))}
              </ul>
              </div>

              <button className="absolute left-0 bottom-0 w-full py-3 rounded-xl bg-orange-800 text-white font-medium hover:bg-orange-600 transition duration-500">
                Get Started
              </button>
            </div>
          ))}
        </div>

        <p className="text text-gray-500 mt-10">
          Bring your idea to life, select any package of your choice to begin.
        </p>
      </div>
    </div>
  );
}
