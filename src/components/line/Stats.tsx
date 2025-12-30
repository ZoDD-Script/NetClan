export default function StatsSection() {
  const stats = [
    {
      number: "7",
      label: "African Countries",
      color: "text-[#E588A4]",
      borderColor: "border-[#E588A4]",
      hoverColor: "hover:bg-[#E588A4]/30",
    },
    {
      number: "50+",
      label: "Women Trained",
      color: "text-[#5880D1]",
      borderColor: "border-[#5880D1]",
      hoverColor: "hover:bg-[#5880D1]/30",
    },
    {
      number: "30+",
      label: "Certificates Sponsored",
      color: "text-[#2A2376]",
      borderColor: "border-[#2A2376]",
      hoverColor: "hover:bg-[#2A2376]/30",
    },
    {
      number: "5",
      label: "Alumnae Employed",
      color: "text-[#BA6DFF]",
      borderColor: "border-[#BA6DFF]",
      hoverColor: "hover:bg-[#BA6DFF]/30",
    },
  ];

  return (
    <div className="min-h-[513px] bg-white py-16 px-4 flex justify-center items-center">
      <div className="w-full">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="font-grotesk text-5xl font-normal text-[#39364F] mb-6">
            Our <span className="text-[#5880D1]">Stats</span>
          </h1>
          <p className="text-[#39374F] text-lg max-w-[867px] mx-auto leading-relaxed">
            Our stats speak volumes about our dedication to the network
            engineering community. We've made significant strides in bridging
            the digital divide and empowering aspiring tech leaders.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 px-20">
          {stats.map((stat, index) => (
            <div
              key={index}
              className={`flex flex-col items-start ${stat.hoverColor} transition-colors duration-300`}
            >
              <div className={`border-l-4 ${stat.borderColor} pl-6 py-4`}>
                <div
                  className={`font-grotesk text-7xl font-light ${stat.color} mb-2`}
                >
                  {stat.number}
                </div>
                <div
                  className={`${stat.color} text-lg font-medium whitespace-nowrap`}
                >
                  {stat.label}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
