import { useState, useRef } from "react";
import testimonial from "../../assets/images/testimonial.png";
import testimonial1 from "../../assets/images/testimonial1.png";
import testimonial2 from "../../assets/images/testimonial2.png";
import testimonial3 from "../../assets/images/testimonial3.png";
import testimonial4 from "../../assets/images/testimonial4.png";
import testimonial5 from "../../assets/images/testimonial5.png";
import testimonial6 from "../../assets/images/testimonial6.png";

interface TestimonialCardProps {
  name: string;
  cohort: string;
  location: string;
  image: string;
  testimonial: string;
  border: string;
}

const TestimonialCard = ({
  name,
  cohort,
  location,
  image,
  testimonial,
  border,
}: TestimonialCardProps) => {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div className="flex flex-col items-center select-none">
      <div
        className="relative w-80 h-96 perspective-1000 mb-4 touch-manipulation"
        onMouseEnter={() => setIsFlipped(true)}
        onMouseLeave={() => setIsFlipped(false)}
        onClick={() => setIsFlipped((prev) => !prev)}
      >
        <div
          className="relative w-full h-full transition-transform duration-700"
          style={{
            transformStyle: "preserve-3d",
            transform: isFlipped ? "rotateY(180deg)" : "rotateY(0deg)",
          }}
        >
          {/* FRONT */}
          <div
            className="absolute w-full h-full rounded-2xl overflow-hidden shadow-lg"
            style={{ backfaceVisibility: "hidden" }}
          >
            <img
              src={image}
              alt={name}
              loading="lazy"
              className="w-full h-full object-cover"
            />
          </div>

          {/* BACK */}
          <div
            className={`absolute w-full h-full rounded-2xl bg-white border-2 ${border} shadow-lg flex items-center justify-center p-8`}
            style={{
              backfaceVisibility: "hidden",
              transform: "rotateY(180deg)",
            }}
          >
            <p className="text-[#2A2376] text-sm leading-relaxed text-center">
              {testimonial}
            </p>
          </div>
        </div>
      </div>

      {/* DETAILS */}
      <div className="text-center">
        <h3 className="text-gray-900 text-xl font-semibold mb-1 font-grotesk">
          {name}
        </h3>
        <p className="text-gray-600 text-sm">{cohort}</p>
        <p className="text-gray-500 text-sm">{location}</p>
      </div>
    </div>
  );
};

const Testimonials = () => {
  const testimonials = [
    {
      name: "Ketcha Leonelta",
      cohort: "LiNE Cohort 1",
      location: "Douala, Cameroon",
      image: testimonial5,
      testimonial:
        "The LiNE community is truly about uplifting one another. Whenever you reach out with a concern, there's always someone ready to help. The strong bond within the community creates a sense of belonging, and for me, it even brought a sister who motivates me every day. Everyone genuinely cares about each other's growth and success.",
      border: "border-[#5880D1]",
    },
    {
      name: "Cindy Ntombela",
      cohort: "LiNE Cohort 2",
      location: "Durban, South Africa",
      image: testimonial6,
      testimonial:
        "Being accepted by The NetClan for their LiNE programme has been exhilarating. Through this journey I have met and been mentored by amazing people who have furthered my knowledge in networking and helped me grow as a network engineer by broadening my horizons. Through this programme I have obtained my CCNA and found a community with like-minded people I hope to flourish with. I will forever be grateful to NetClan as this wouldn't be possible without them.",
      border: "border-[#E588A4]",
    },
    {
      name: "Evalyne Njoroge",
      cohort: "LiNE Cohort 2",
      location: "Nairobi, Kenya",
      image: testimonial1,
      testimonial:
        "I joined the LiNE program with only passion, but after going through their rigorous and hands-on training, I came out as a fully certified Network Engineer. The instructors are absolutely amazing, and they make networking feel so easy to understand and enjoyable to learn. The founders are also incredibly invested in our success, always pushing us to grow and be the best version of ourselves.",
      border: "border-[#DFBBFF4D]",
    },
    {
      name: "Martha Alao",
      cohort: "LiNE Cohort 2",
      location: "Lagos, Nigeria",
      image: testimonial,
      testimonial:
        "The LiNE program transformed my career path completely. The mentorship and hands-on experience I gained were invaluable in helping me secure my dream job in tech.",
      border: "border-[#E588A4]",
    },
    {
      name: "Ifunanya Odoh",
      cohort: "LiNE Cohort 2",
      location: "Lagos, Nigeria",
      image: testimonial2,
      testimonial:
        "Being part of LiNE has been a life-changing experience. The program not only equipped me with technical skills but also built my confidence to pursue opportunities I never thought possible.",
      border: "border-[#DFBBFF4D]",
    },
    {
      name: "Moyinoluwa Adegbolu",
      cohort: "LiNE Cohort 2",
      location: "Lagos, Nigeria",
      image: testimonial3,
      testimonial:
        "The supportive community and expert instructors at LiNE made all the difference in my learning journey. I'm now confidently working in the field I'm passionate about.",
      border: "border-[#2A2376]",
    },
    {
      name: "Agina Sualeze",
      cohort: "LiNE Cohort 1",
      location: "Lagos, Nigeria",
      image: testimonial4,
      testimonial:
        "Passing the CCNA was a huge accomplishment. I was the first one in my cohort to pass, which was so exciting! And of course, landing my dream role as a system engineer in a network security team was a dream come true.",
      border: "border-[#E588A4]",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const cardsPerView = 4;
  const scrollContainerRef = useRef<HTMLDivElement | null>(null);

  const handleScroll = () => {
    if (!scrollContainerRef.current) return;

    const container = scrollContainerRef.current;
    const scrollPosition = container.scrollLeft;
    const cardWidth = container.scrollWidth / testimonials.length;
    setCurrentIndex(Math.round(scrollPosition / cardWidth));
  };

  const goToSlide = (index: number) => {
    if (!scrollContainerRef.current) return;

    const container = scrollContainerRef.current;
    const cardWidth = container.scrollWidth / testimonials.length;

    container.scrollTo({
      left: cardWidth * index,
      behavior: "smooth",
    });

    setCurrentIndex(index);
  };

  const totalDots = Math.max(1, testimonials.length - cardsPerView + 1);

  return (
    <div className="py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* CAROUSEL */}
        <div className="relative mb-12">
          <div
            ref={scrollContainerRef}
            onScroll={handleScroll}
            className="overflow-x-auto scrollbar-hide cursor-grab active:cursor-grabbing"
            style={{ scrollSnapType: "x mandatory" }}
          >
            <div className="flex gap-6 px-4 w-fit">
              {testimonials.map((item, index) => (
                <div key={index} style={{ scrollSnapAlign: "start" }}>
                  <TestimonialCard {...item} />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* DOTS */}
        <div className="flex justify-center gap-3">
          {Array.from({ length: totalDots }).map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`h-3 rounded-full transition-all ${
                currentIndex === index ? "bg-blue-500 w-8" : "bg-gray-400 w-3"
              }`}
            />
          ))}
        </div>
      </div>

      <style>{`
        .perspective-1000 { perspective: 1000px; }
        .scrollbar-hide::-webkit-scrollbar { display: none; }
        .scrollbar-hide { scrollbar-width: none; }
      `}</style>
    </div>
  );
};

export default Testimonials;
