interface Feature {
  icon: string;
  title: string;
  description: string;
}

const PurposeSec = () => {
  const features: Feature[] = [
    {
      icon: "🟣", // Replace with your actual icon component or image
      title: "Built for impact",
      description:
        "We identify and nurture a truly diverse team of designers, developers and marketers",
    },
    {
      icon: "🔴", // Replace with your actual icon component or image
      title: "In sync with you",
      description:
        "We work the way you do by adapting to your workflows and rhythm we aim to blend in for a seamless.",
    },
  ];

  return (
    <section id="about" className="w-full bg-gray-50 py-16 px-4 sm:px-6 md:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3">
          {/* heading text  */}
          <div className="">
            <p className="text-purple-600 font-medium">ACHIVE MODE</p>
            <h2 className="text-3xl md:w-4/5 w-full md:text-4xl font-bold text-gray-900 mb-2">
              Purpose of a company is keep your team
            </h2>
          </div>

          {/* bullet points  */}

          <div className="grid col-span-2 md:grid-cols-2 justify-between gap-2">
            {features.map((fea) => {
              return (
                <div className="">
                  <div className="flex w-12 items-start justify-start">{fea.icon}</div>

                  <div className="">
                    <h2 className="text-xl font-bold">{fea.title}</h2>
                    <p className="text-gray-600">{fea.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PurposeSec;
