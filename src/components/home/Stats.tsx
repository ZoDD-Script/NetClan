const Stats = () => {
  const stats = [
    {
      number: "7",
      label: "African Countries",
      color: "text-[#E588A4]",
      background: "hover:bg-[#E588A4]/30",
      borderColor: "border-pink-400",
    },
    {
      number: "50+",
      label: "Women Trained",
      color: "text-[#5880D1]",
      background: "hover:bg-[#5880D1]/30",
      borderColor: "border-blue-500",
    },
    {
      number: "30+",
      label: "Certificates Sponsored",
      color: "text-[#2A2376]",
      background: "hover:bg-[#2A2376]/30",
      borderColor: "border-indigo-900",
    },
    {
      number: "20+",
      label: "CCNA Certified",
      color: "text-[#BA6DFF]",
      background: "hover:bg-[#BA6DFF]/30",
      borderColor: "border-purple-400",
    },
  ];

  return (
    <div className="flex items-center justify-center py-20">
      <div className="px-20 w-full">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-semibold text-gray-800 mb-6">
            Our <span className="text-[#5880D1]">Stats</span>
          </h2>
          <p className="text-gray-600 text-lg max-w-[867px] mx-auto">
            Our stats speak volumes about our dedication to the network
            engineering community. We've made significant strides in bridging
            the digital divide and empowering aspiring tech leaders.
          </p>
        </div>

        {/* Stats Grid */}
        <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8`}>
          {stats.map((stat, index) => (
            <div
              key={index}
              className={`border-l-2 ${stat.borderColor} mr-6 cursor-pointer flex items-start ${stat.background} p-6`}
            >
              <div className={`border-l-4 ${stat.borderColor} mr-6`}></div>
              <div>
                <div
                  className={`text-[80px] leading-[130%] tracking-[-0.04em] font-['Familjen Grotesk'] ${stat.color} mb-2`}
                >
                  {stat.number}
                </div>

                <div className={`text-base ${stat.color}`}>{stat.label}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Stats;
