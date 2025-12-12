import React, { useState } from "react";
import testimonial from "../../assets/images/testimonial.png";
import testimonial1 from "../../assets/images/testimonial1.png";
import testimonial2 from "../../assets/images/testimonial2.png";
import testimonial3 from "../../assets/images/testimonial3.png";
import testimonial4 from "../../assets/images/testimonial4.png";
import testimonial5 from "../../assets/images/testimonial5.png";

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
    <div className="flex flex-col items-center">
      <div
        className="relative w-80 h-96 perspective-1000 mb-4"
        onMouseEnter={() => setIsFlipped(true)}
        onMouseLeave={() => setIsFlipped(false)}
      >
        <div
          className={`relative w-full h-full transition-transform duration-700 transform-style-3d ${
            isFlipped ? "rotate-y-180" : ""
          }`}
          style={{
            transformStyle: "preserve-3d",
            transform: isFlipped ? "rotateY(180deg)" : "rotateY(0deg)",
          }}
        >
          {/* Front Side */}
          <div
            className="absolute w-full h-full backface-hidden rounded-2xl overflow-hidden shadow-lg"
            style={{ backfaceVisibility: "hidden" }}
          >
            <img
              src={image}
              alt={name}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Back Side */}
          <div
            className={`absolute w-full h-full backface-hidden rounded-2xl bg-white border-2 ${border} shadow-lg flex items-center justify-center p-8`}
            style={{
              backfaceVisibility: "hidden",
              transform: "rotateY(180deg)",
            }}
          >
            <div className="text-center">
              <p className="text-gray-700 text-base leading-relaxed">
                {testimonial}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Name and details below the card */}
      <div className="text-center">
        <h3 className="text-gray-900 text-xl font-semibold mb-1">{name}</h3>
        <p className="text-gray-600 text-sm">{cohort}</p>
        <p className="text-gray-500 text-sm">{location}</p>
      </div>
    </div>
  );
};

const Testimonials = () => {
  const testimonials = [
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
      name: "Evalyne Njoroge",
      cohort: "LiNE Cohort 2",
      location: "Nairobi, Kenya",
      image: testimonial1,
      testimonial:
        "I joined the LiNE program with only passion, but after going through their rigorous and hands-on training, I came out as a fully certified Network Engineer. The instructors are absolutely amazing, and they make networking feel so easy to understand and enjoyable to learn. The founders are also incredibly invested in our success, always pushing us to grow and be the best version of ourselves.",
      border: "border-[#5880D1]",
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
    {
      name: "Ketcha Leonelta",
      cohort: "LiNE Cohort 1",
      location: "Douala, Cameroon",
      image: testimonial5,
      testimonial:
        "The LiNE community is truly about uplifting one another. Whenever you reach out with a concern, there's always someone ready to help. The strong bond within the community creates a sense of belonging, and for me, it even brought a sister who motivates me every day. Everyone genuinely cares about each other's growth and success.",
      border: "border-[#5880D1]",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const cardsPerView = 4;
  const scrollContainerRef = React.useRef<HTMLDivElement | null>(null);

  const handleScroll = () => {
    if (!scrollContainerRef.current) return;

    const container = scrollContainerRef.current as HTMLDivElement;
    const scrollPosition = container.scrollLeft;
    const cardWidth = container.scrollWidth / testimonials.length;
    const newIndex = Math.round(scrollPosition / cardWidth);

    setCurrentIndex(newIndex);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current as HTMLDivElement;
      const cardWidth = container.scrollWidth / testimonials.length;
      container.scrollTo({
        left: cardWidth * index,
        behavior: "smooth",
      });
    }
  };

  // Calculate number of dots needed
  const totalDots = Math.max(1, testimonials.length - cardsPerView + 1);

  return (
    <div className="py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}

        {/* Carousel Container */}
        <div className="relative mb-12">
          {/* Testimonial Cards */}
          <div
            ref={scrollContainerRef}
            onScroll={handleScroll}
            className="overflow-x-auto overflow-y-hidden scrollbar-hide cursor-grab active:cursor-grabbing"
            style={{
              scrollSnapType: "x mandatory",
              WebkitOverflowScrolling: "touch",
            }}
          >
            <div
              className="flex gap-6 px-4"
              style={{
                width: "fit-content",
              }}
            >
              {testimonials.map((testimonial, index) => (
                <div key={index} style={{ scrollSnapAlign: "start" }}>
                  <TestimonialCard {...testimonial} />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Pagination Dots */}
        <div className="flex justify-center gap-3">
          {Array.from({ length: totalDots }).map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all ${
                currentIndex === index ? "bg-blue-500 w-8" : "bg-gray-400"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>

      <style>{`
        .perspective-1000 {
          perspective: 1000px;
        }
        .transform-style-3d {
          transform-style: preserve-3d;
        }
        .backface-hidden {
          backface-visibility: hidden;
        }
        .rotate-y-180 {
          transform: rotateY(180deg);
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </div>
  );
};

export default Testimonials;
