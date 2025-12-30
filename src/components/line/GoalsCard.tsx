export default function GoalsCard() {
  return (
    <div className="w-full flex justify-center px-4 md:px-20 py-10 bg-[#E8DCDC]">
      <div
        className="
          relative w-full max-w-[1500px] rounded-[25px] px-6 md:px-16 py-10 
          text-center overflow-hidden
          bg-linear-to-r from-[#1E3A8A] via-[#4B3D97] to-[#C0639A]
        "
      >
        {/* Floating blurred shapes */}
        <div className="absolute -top-4 left-6 w-40 h-36 bg-white/10 rounded-lg"></div>
        <div className="absolute top-10 left-56 w-12 h-12 bg-white/15 rounded-md"></div>
        <div className="absolute -top-12 right-85 w-32 h-29 bg-white/15 rounded-md"></div>
        <div className="absolute -bottom-6 right-24 w-16 h-16 bg-white/15 rounded-md"></div>

        {/* Title */}
        <h2 className="font-grotesk text-[#FFFFFF] text-5xl font-normal mb-6">
          Our Goal
        </h2>

        {/* Description */}
        <p className="text-[#FFFFFF] text-lg leading-relaxed max-w-5xl mx-auto font-light">
          To empower women in network engineering to become leaders, innovators,
          and change-makers, shaping a future where diversity drives progress
          and security strengthens global connectivity.
        </p>
      </div>
    </div>
  );
}
